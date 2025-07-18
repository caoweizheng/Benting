/**
 * 图片预加载工具
 * @Author: AI Assistant
 * @Date: 2025-07-18
 * @Path: src/index/Home/_ImagePreloader.js
 */
'use strict';

class ImagePreloader {
    constructor() {
        this.cache = new Map();
        this.loading = new Set();
        this.observers = new Map();
    }

    // 预加载单张图片
    preloadImage(src, priority = 'low') {
        return new Promise((resolve, reject) => {
            // 如果已经缓存，直接返回
            if (this.cache.has(src)) {
                resolve(this.cache.get(src));
                return;
            }

            // 如果正在加载，等待加载完成
            if (this.loading.has(src)) {
                const observers = this.observers.get(src) || [];
                observers.push({ resolve, reject });
                this.observers.set(src, observers);
                return;
            }

            // 开始加载
            this.loading.add(src);
            const observers = [{ resolve, reject }];
            this.observers.set(src, observers);

            const img = new Image();
            
            // 设置优先级
            if (priority === 'high') {
                img.fetchPriority = 'high';
            } else if (priority === 'low') {
                img.fetchPriority = 'low';
            }

            img.onload = () => {
                this.cache.set(src, img);
                this.loading.delete(src);
                
                // 通知所有等待的观察者
                const currentObservers = this.observers.get(src) || [];
                currentObservers.forEach(observer => observer.resolve(img));
                this.observers.delete(src);
            };

            img.onerror = (error) => {
                this.loading.delete(src);
                
                // 通知所有等待的观察者
                const currentObservers = this.observers.get(src) || [];
                currentObservers.forEach(observer => observer.reject(error));
                this.observers.delete(src);
            };

            img.src = src;
        });
    }

    // 批量预加载图片
    preloadImages(srcList, priority = 'low') {
        return Promise.allSettled(
            srcList.map(src => this.preloadImage(src, priority))
        );
    }

    // 预加载关键图片（高优先级）
    preloadCriticalImages(srcList) {
        return this.preloadImages(srcList, 'high');
    }

    // 智能预加载：根据网络状况调整策略
    smartPreload(srcList, options = {}) {
        const {
            maxConcurrent = 3,
            priority = 'low',
            networkAware = true
        } = options;

        // 检查网络状况
        if (networkAware && typeof navigator !== 'undefined') {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            
            if (connection) {
                // 如果是慢速网络，减少并发数
                if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                    return this.preloadImages(srcList.slice(0, 2), priority);
                }
                
                // 如果是快速网络，可以预加载更多
                if (connection.effectiveType === '4g') {
                    return this.preloadImages(srcList, priority);
                }
            }
        }

        // 分批加载
        const batches = [];
        for (let i = 0; i < srcList.length; i += maxConcurrent) {
            batches.push(srcList.slice(i, i + maxConcurrent));
        }

        return batches.reduce((promise, batch) => {
            return promise.then(() => this.preloadImages(batch, priority));
        }, Promise.resolve());
    }

    // 获取缓存的图片
    getCachedImage(src) {
        return this.cache.get(src);
    }

    // 检查图片是否已缓存
    isCached(src) {
        return this.cache.has(src);
    }

    // 清理缓存
    clearCache() {
        this.cache.clear();
        this.loading.clear();
        this.observers.clear();
    }

    // 获取缓存统计
    getCacheStats() {
        return {
            cached: this.cache.size,
            loading: this.loading.size,
            waiting: Array.from(this.observers.values()).reduce((sum, observers) => sum + observers.length, 0)
        };
    }
}

// 创建全局实例
const imagePreloader = new ImagePreloader();

// 首页图片预加载策略
export const preloadHomeImages = (homeData, Utils) => {
    const criticalImages = [];
    const secondaryImages = [];

    // 轮播图（关键图片）
    if (homeData.homeCarousel && homeData.homeCarousel.list) {
        homeData.homeCarousel.list.forEach(item => {
            if (item.imgPath) {
                criticalImages.push(Utils.getAppImgUrl(item.imgPath, 'scale'));
            }
        });
    }

    // 活动图片（次要图片）
    if (homeData.eventInfo) {
        Object.values(homeData.eventInfo).forEach(event => {
            if (event && event.imgId) {
                secondaryImages.push(Utils.getAppImgUrl(event.imgId, 'scale'));
            }
        });
    }

    // 视频封面（次要图片）
    if (homeData.topVideoList && homeData.topVideoList.list) {
        homeData.topVideoList.list.forEach(video => {
            if (video.fileinfo && video.fileinfo.surface) {
                secondaryImages.push(Utils.getAppImgUrl(video.fileinfo.surface, 'scale'));
            }
        });
    }

    // 先加载关键图片，再加载次要图片
    return imagePreloader.preloadCriticalImages(criticalImages)
        .then(() => imagePreloader.smartPreload(secondaryImages));
};

export default imagePreloader;
