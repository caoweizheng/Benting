/**
 * 网络状态检测和优化工具
 * @Author: AI Assistant
 * @Date: 2025-07-18
 * @Path: src/index/Home/_NetworkOptimizer.js
 */
'use strict';

class NetworkOptimizer {
    constructor() {
        this.connectionInfo = null;
        this.isOnline = navigator.onLine;
        this.observers = [];
        this.setupEventListeners();
        this.updateConnectionInfo();
    }

    // 设置事件监听器
    setupEventListeners() {
        // 监听在线/离线状态
        window.addEventListener('online', () => {
            this.isOnline = true;
            this.notifyObservers('online', true);
        });

        window.addEventListener('offline', () => {
            this.isOnline = false;
            this.notifyObservers('offline', false);
        });

        // 监听网络连接变化
        if ('connection' in navigator) {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (connection) {
                connection.addEventListener('change', () => {
                    this.updateConnectionInfo();
                    this.notifyObservers('connectionChange', this.connectionInfo);
                });
            }
        }
    }

    // 更新连接信息
    updateConnectionInfo() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection) {
            this.connectionInfo = {
                effectiveType: connection.effectiveType,
                downlink: connection.downlink,
                rtt: connection.rtt,
                saveData: connection.saveData,
                type: connection.type
            };
        }
    }

    // 获取网络质量等级
    getNetworkQuality() {
        if (!this.isOnline) return 'offline';
        if (!this.connectionInfo) return 'unknown';

        const { effectiveType, downlink, rtt } = this.connectionInfo;

        // 基于有效连接类型判断
        switch (effectiveType) {
            case 'slow-2g':
                return 'poor';
            case '2g':
                return 'poor';
            case '3g':
                return 'good';
            case '4g':
                return 'excellent';
            default:
                // 基于下行速度和延迟判断
                if (downlink >= 10 && rtt <= 100) return 'excellent';
                if (downlink >= 1.5 && rtt <= 300) return 'good';
                return 'poor';
        }
    }

    // 获取优化建议
    getOptimizationStrategy() {
        const quality = this.getNetworkQuality();
        
        const strategies = {
            offline: {
                imageQuality: 'none',
                concurrentRequests: 0,
                enableLazyLoad: true,
                enablePreload: false,
                cacheStrategy: 'aggressive'
            },
            poor: {
                imageQuality: 'low',
                concurrentRequests: 1,
                enableLazyLoad: true,
                enablePreload: false,
                cacheStrategy: 'aggressive'
            },
            good: {
                imageQuality: 'medium',
                concurrentRequests: 3,
                enableLazyLoad: true,
                enablePreload: true,
                cacheStrategy: 'normal'
            },
            excellent: {
                imageQuality: 'high',
                concurrentRequests: 6,
                enableLazyLoad: false,
                enablePreload: true,
                cacheStrategy: 'minimal'
            },
            unknown: {
                imageQuality: 'medium',
                concurrentRequests: 2,
                enableLazyLoad: true,
                enablePreload: false,
                cacheStrategy: 'normal'
            }
        };

        return strategies[quality] || strategies.unknown;
    }

    // 获取图片质量参数
    getImageQualityParams() {
        const strategy = this.getOptimizationStrategy();
        
        const qualityMap = {
            none: { quality: 0, format: 'webp', size: 'thumbnail' },
            low: { quality: 60, format: 'webp', size: 'small' },
            medium: { quality: 80, format: 'webp', size: 'medium' },
            high: { quality: 95, format: 'webp', size: 'large' }
        };

        return qualityMap[strategy.imageQuality] || qualityMap.medium;
    }

    // 检查是否应该延迟加载
    shouldLazyLoad() {
        const strategy = this.getOptimizationStrategy();
        return strategy.enableLazyLoad;
    }

    // 检查是否应该预加载
    shouldPreload() {
        const strategy = this.getOptimizationStrategy();
        return strategy.enablePreload;
    }

    // 获取并发请求数限制
    getConcurrentRequestLimit() {
        const strategy = this.getOptimizationStrategy();
        return strategy.concurrentRequests;
    }

    // 检查是否启用数据节省模式
    isDataSaverEnabled() {
        return this.connectionInfo?.saveData || false;
    }

    // 获取缓存策略
    getCacheStrategy() {
        const strategy = this.getOptimizationStrategy();
        return strategy.cacheStrategy;
    }

    // 优化图片URL
    optimizeImageUrl(originalUrl, options = {}) {
        if (!this.isOnline) return null;

        const { 
            width, 
            height, 
            quality: customQuality,
            format: customFormat 
        } = options;

        const imageParams = this.getImageQualityParams();
        const quality = customQuality || imageParams.quality;
        const format = customFormat || imageParams.format;

        // 如果启用了数据节省模式，进一步降低质量
        const finalQuality = this.isDataSaverEnabled() ? Math.min(quality, 50) : quality;

        // 构建优化后的URL（这里需要根据实际的图片服务调整）
        let optimizedUrl = originalUrl;
        
        // 添加质量参数
        if (optimizedUrl.includes('?')) {
            optimizedUrl += `&quality=${finalQuality}&format=${format}`;
        } else {
            optimizedUrl += `?quality=${finalQuality}&format=${format}`;
        }

        // 添加尺寸参数
        if (width) optimizedUrl += `&w=${width}`;
        if (height) optimizedUrl += `&h=${height}`;

        return optimizedUrl;
    }

    // 网络状态检测
    async checkNetworkSpeed() {
        if (!this.isOnline) return { speed: 0, latency: Infinity };

        const startTime = performance.now();
        
        try {
            // 使用一个小的测试资源来检测网络速度
            const testUrl = '/static/images/common/logo_default.png?' + Date.now();
            const response = await fetch(testUrl, { 
                cache: 'no-cache',
                method: 'HEAD' // 只获取头部信息，减少数据传输
            });
            
            const endTime = performance.now();
            const latency = endTime - startTime;
            
            // 估算速度（这是一个简化的计算）
            const speed = response.ok ? Math.max(1000 / latency, 0.1) : 0;
            
            return { speed, latency };
        } catch (error) {
            return { speed: 0, latency: Infinity };
        }
    }

    // 添加观察者
    addObserver(callback) {
        this.observers.push(callback);
    }

    // 移除观察者
    removeObserver(callback) {
        const index = this.observers.indexOf(callback);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    // 通知观察者
    notifyObservers(event, data) {
        this.observers.forEach(callback => {
            try {
                callback(event, data);
            } catch (error) {
                console.warn('Network observer callback failed:', error);
            }
        });
    }

    // 获取网络状态报告
    getNetworkReport() {
        return {
            isOnline: this.isOnline,
            connectionInfo: this.connectionInfo,
            quality: this.getNetworkQuality(),
            strategy: this.getOptimizationStrategy(),
            dataSaver: this.isDataSaverEnabled(),
            timestamp: Date.now()
        };
    }

    // 根据网络状况调整请求策略
    async adaptiveRequest(requestFn, options = {}) {
        const { maxRetries = 3, retryDelay = 1000 } = options;
        const strategy = this.getOptimizationStrategy();
        
        let retries = 0;
        
        while (retries < maxRetries) {
            try {
                // 如果网络质量差，增加超时时间
                const timeout = this.getNetworkQuality() === 'poor' ? 10000 : 5000;
                
                const result = await Promise.race([
                    requestFn(),
                    new Promise((_, reject) => 
                        setTimeout(() => reject(new Error('Request timeout')), timeout)
                    )
                ]);
                
                return result;
            } catch (error) {
                retries++;
                
                if (retries >= maxRetries) {
                    throw error;
                }
                
                // 根据网络质量调整重试延迟
                const delay = retryDelay * Math.pow(2, retries - 1);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
}

// 创建全局实例
const networkOptimizer = new NetworkOptimizer();

export default networkOptimizer;
