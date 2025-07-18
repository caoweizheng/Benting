/**
 * 首页性能监控组件
 * @Author: AI Assistant
 * @Date: 2025-07-18
 * @Path: src/index/Home/_PerformanceMonitor.js
 */
'use strict';

class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.observers = [];
        this.isMonitoring = false;
    }

    // 开始监控
    startMonitoring() {
        if (this.isMonitoring || typeof window === 'undefined') return;
        
        this.isMonitoring = true;
        this.setupObservers();
        this.recordInitialMetrics();
    }

    // 设置性能观察者
    setupObservers() {
        // 监控 LCP (Largest Contentful Paint)
        if ('PerformanceObserver' in window) {
            try {
                const lcpObserver = new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    this.metrics.lcp = lastEntry.startTime;
                    this.notifyObservers('lcp', lastEntry.startTime);
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
                this.observers.push(lcpObserver);
            } catch (e) {
                console.warn('LCP observer setup failed:', e);
            }

            // 监控 FID (First Input Delay)
            try {
                const fidObserver = new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    entries.forEach(entry => {
                        this.metrics.fid = entry.processingStart - entry.startTime;
                        this.notifyObservers('fid', this.metrics.fid);
                    });
                });
                fidObserver.observe({ entryTypes: ['first-input'] });
                this.observers.push(fidObserver);
            } catch (e) {
                console.warn('FID observer setup failed:', e);
            }

            // 监控 CLS (Cumulative Layout Shift)
            try {
                let clsValue = 0;
                const clsObserver = new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    entries.forEach(entry => {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                        }
                    });
                    this.metrics.cls = clsValue;
                    this.notifyObservers('cls', clsValue);
                });
                clsObserver.observe({ entryTypes: ['layout-shift'] });
                this.observers.push(clsObserver);
            } catch (e) {
                console.warn('CLS observer setup failed:', e);
            }
        }
    }

    // 记录初始指标
    recordInitialMetrics() {
        if (typeof window === 'undefined' || !window.performance) return;

        // 记录导航时间
        const navigation = window.performance.getEntriesByType('navigation')[0];
        if (navigation) {
            this.metrics.navigationStart = navigation.navigationStart || 0;
            this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
            this.metrics.loadComplete = navigation.loadEventEnd - navigation.loadEventStart;
            this.metrics.domInteractive = navigation.domInteractive - navigation.navigationStart;
        }

        // 记录 FCP (First Contentful Paint)
        const fcpEntry = window.performance.getEntriesByName('first-contentful-paint')[0];
        if (fcpEntry) {
            this.metrics.fcp = fcpEntry.startTime;
        }

        // 记录 TTFB (Time to First Byte)
        if (navigation) {
            this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
        }

        // 记录资源加载时间
        this.recordResourceMetrics();
    }

    // 记录资源加载指标
    recordResourceMetrics() {
        const resources = window.performance.getEntriesByType('resource');
        const imageResources = resources.filter(resource => 
            resource.initiatorType === 'img' || 
            resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)
        );

        if (imageResources.length > 0) {
            const imageTimes = imageResources.map(img => img.duration);
            this.metrics.avgImageLoadTime = imageTimes.reduce((a, b) => a + b, 0) / imageTimes.length;
            this.metrics.maxImageLoadTime = Math.max(...imageTimes);
            this.metrics.totalImages = imageResources.length;
        }

        // API 请求时间
        const apiResources = resources.filter(resource => 
            resource.name.includes('/api/') || 
            resource.initiatorType === 'fetch' ||
            resource.initiatorType === 'xmlhttprequest'
        );

        if (apiResources.length > 0) {
            const apiTimes = apiResources.map(api => api.duration);
            this.metrics.avgApiTime = apiTimes.reduce((a, b) => a + b, 0) / apiTimes.length;
            this.metrics.maxApiTime = Math.max(...apiTimes);
            this.metrics.totalApiCalls = apiResources.length;
        }
    }

    // 记录自定义指标
    recordCustomMetric(name, value, unit = 'ms') {
        this.metrics[name] = {
            value,
            unit,
            timestamp: Date.now()
        };
        this.notifyObservers(name, value);
    }

    // 记录用户交互时间
    recordInteractionTime(action, startTime) {
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        if (!this.metrics.interactions) {
            this.metrics.interactions = [];
        }
        
        this.metrics.interactions.push({
            action,
            duration,
            timestamp: Date.now()
        });

        // 计算平均交互时间
        const interactions = this.metrics.interactions;
        this.metrics.avgInteractionTime = interactions.reduce((sum, item) => sum + item.duration, 0) / interactions.length;
    }

    // 获取性能报告
    getPerformanceReport() {
        return {
            ...this.metrics,
            timestamp: Date.now(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            connection: this.getConnectionInfo()
        };
    }

    // 获取网络连接信息
    getConnectionInfo() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection) {
            return {
                effectiveType: connection.effectiveType,
                downlink: connection.downlink,
                rtt: connection.rtt,
                saveData: connection.saveData
            };
        }
        return null;
    }

    // 添加观察者
    addObserver(callback) {
        this.observers.push(callback);
    }

    // 通知观察者
    notifyObservers(metric, value) {
        this.observers.forEach(observer => {
            if (typeof observer === 'function') {
                try {
                    observer(metric, value, this.metrics);
                } catch (e) {
                    console.warn('Performance observer callback failed:', e);
                }
            }
        });
    }

    // 生成性能评分
    getPerformanceScore() {
        const scores = {};
        
        // LCP 评分 (0-100)
        if (this.metrics.lcp) {
            if (this.metrics.lcp <= 2500) scores.lcp = 100;
            else if (this.metrics.lcp <= 4000) scores.lcp = 50;
            else scores.lcp = 0;
        }

        // FID 评分 (0-100)
        if (this.metrics.fid !== undefined) {
            if (this.metrics.fid <= 100) scores.fid = 100;
            else if (this.metrics.fid <= 300) scores.fid = 50;
            else scores.fid = 0;
        }

        // CLS 评分 (0-100)
        if (this.metrics.cls !== undefined) {
            if (this.metrics.cls <= 0.1) scores.cls = 100;
            else if (this.metrics.cls <= 0.25) scores.cls = 50;
            else scores.cls = 0;
        }

        // 计算总分
        const validScores = Object.values(scores).filter(score => score !== undefined);
        const totalScore = validScores.length > 0 
            ? validScores.reduce((sum, score) => sum + score, 0) / validScores.length 
            : 0;

        return {
            ...scores,
            total: Math.round(totalScore)
        };
    }

    // 停止监控
    stopMonitoring() {
        this.observers.forEach(observer => {
            if (observer && typeof observer.disconnect === 'function') {
                observer.disconnect();
            }
        });
        this.observers = [];
        this.isMonitoring = false;
    }

    // 导出性能数据
    exportMetrics() {
        const report = this.getPerformanceReport();
        const scores = this.getPerformanceScore();
        
        return {
            report,
            scores,
            summary: this.generateSummary()
        };
    }

    // 生成性能摘要
    generateSummary() {
        const summary = [];
        
        if (this.metrics.lcp > 4000) {
            summary.push('LCP (最大内容绘制) 时间过长，建议优化图片加载');
        }
        
        if (this.metrics.fid > 300) {
            summary.push('FID (首次输入延迟) 过长，建议优化 JavaScript 执行');
        }
        
        if (this.metrics.cls > 0.25) {
            summary.push('CLS (累积布局偏移) 过大，建议优化布局稳定性');
        }
        
        if (this.metrics.avgApiTime > 1000) {
            summary.push('API 响应时间较慢，建议优化后端性能');
        }

        return summary;
    }
}

// 创建全局实例
const performanceMonitor = new PerformanceMonitor();

export default performanceMonitor;
