/**
 * 首页加载骨架屏组件
 * @Author: AI Assistant
 * @Date: 2025-07-18
 * @Path: src/index/Home/_LoadingSkeleton.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import Styles from 'styles';

const prefixCls = 'styles-loading-skeleton';

// 轮播图骨架屏
const CarouselSkeleton = ({ className }) => (
    <div className={classNames(`${prefixCls}__carousel`, className)}>
        <div className="skeleton-item carousel-item" />
        <style jsx>{`
            .${prefixCls}__carousel {
                background: #fff;
            }
            .carousel-item {
                height: 40vw;
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                background-size: 200% 100%;
                animation: loading 1.5s infinite;
            }
        `}</style>
    </div>
);

// 菜单骨架屏
const MenuSkeleton = ({ className }) => (
    <div className={classNames(`${prefixCls}__menu`, className)}>
        <div className="menu-grid">
            {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="skeleton-item menu-item">
                    <div className="menu-icon" />
                    <div className="menu-text" />
                </div>
            ))}
        </div>
        <style jsx>{`
            .${prefixCls}__menu {
                background: #fff;
                padding: ${Styles.wind};
            }
            .menu-grid {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .menu-item {
                width: 23%;
                text-align: center;
                margin-bottom: ${Styles.md};
            }
            .menu-icon {
                width: 0.8rem;
                height: 0.8rem;
                margin: 0 auto ${Styles.xs};
                border-radius: 0.1rem;
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                background-size: 200% 100%;
                animation: loading 1.5s infinite;
            }
            .menu-text {
                height: 0.24rem;
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                background-size: 200% 100%;
                animation: loading 1.5s infinite;
                border-radius: 0.02rem;
            }
        `}</style>
    </div>
);

// 活动区域骨架屏
const EventSkeleton = ({ className }) => (
    <div className={classNames(`${prefixCls}__event`, className)}>
        <div className="event-grid">
            <div className="skeleton-item event-large" />
            <div className="event-small-grid">
                <div className="skeleton-item event-small" />
                <div className="skeleton-item event-small" />
                <div className="skeleton-item event-small" />
                <div className="skeleton-item event-small" />
            </div>
        </div>
        <style jsx>{`
            .${prefixCls}__event {
                background: #fff;
                padding: ${Styles.wind};
            }
            .event-grid {
                display: flex;
                gap: ${Styles.sm};
            }
            .event-large {
                flex: 1;
                height: 3rem;
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                background-size: 200% 100%;
                animation: loading 1.5s infinite;
                border-radius: 0.08rem;
            }
            .event-small-grid {
                flex: 1;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: ${Styles.sm};
            }
            .event-small {
                height: 1.44rem;
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                background-size: 200% 100%;
                animation: loading 1.5s infinite;
                border-radius: 0.08rem;
            }
        `}</style>
    </div>
);

// 内容区域骨架屏
const ContentSkeleton = ({ className, height = '4rem' }) => (
    <div className={classNames(`${prefixCls}__content`, className)}>
        <div className="content-header">
            <div className="skeleton-item header-title" />
            <div className="skeleton-item header-more" />
        </div>
        <div className="content-body" style={{ height }}>
            <div className="skeleton-item content-item" />
        </div>
        <style jsx>{`
            .${prefixCls}__content {
                background: #fff;
                padding: ${Styles.wind};
            }
            .content-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: ${Styles.md};
            }
            .header-title {
                width: 1.5rem;
                height: 0.26rem;
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                background-size: 200% 100%;
                animation: loading 1.5s infinite;
                border-radius: 0.02rem;
            }
            .header-more {
                width: 0.8rem;
                height: 0.24rem;
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                background-size: 200% 100%;
                animation: loading 1.5s infinite;
                border-radius: 0.02rem;
            }
            .content-item {
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                background-size: 200% 100%;
                animation: loading 1.5s infinite;
                border-radius: 0.08rem;
            }
        `}</style>
    </div>
);

// 主骨架屏组件
const _LoadingSkeleton = ({ className }) => (
    <div className={classNames(prefixCls, className)}>
        <CarouselSkeleton />
        <MenuSkeleton className="mt-d" />
        <EventSkeleton className="mt-d" />
        <ContentSkeleton className="mt-d" height="3.68rem" />
        <ContentSkeleton className="mt-d" height="6rem" />
        <ContentSkeleton className="mt-d" height="4rem" />
        <ContentSkeleton className="mt-d" height="8rem" />
        
        <style jsx global>{`
            @keyframes loading {
                0% {
                    background-position: 200% 0;
                }
                100% {
                    background-position: -200% 0;
                }
            }
            .${prefixCls} {
                min-height: 100vh;
            }
        `}</style>
    </div>
);

export default _LoadingSkeleton;
