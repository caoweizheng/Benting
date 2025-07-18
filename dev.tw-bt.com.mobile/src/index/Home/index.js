/**
 * const prefixCls = 'styles-10269887';
 * const images = '/static/images/src/index/Home';
 * @Author: Jack
 * @Date:   2018-01-03 16:04:59
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-23 13:35:18
 * @Path btWap \src\index\Home\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _Carousel from './_Carousel';
import _Event from './_Event';
import _Fish from './_Fish_v2';
import _Information from './_Information';
import _Menu from './_Menu';
import _Notice from './_Notice';
import _Star from './_Star';
import _Video from './_Video';
import _LoadingSkeleton from './_LoadingSkeleton';
import _ErrorBoundary from './_ErrorBoundary';
import performanceMonitor from './_PerformanceMonitor';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';
import UI from 'stores/ui';
import store from './store';

const prefixCls = 'styles-10269887';
import { images } from './ds';

@inject(store)
@observer
export default class Index extends React.Component {
    componentDidMount() {
        // 启动性能监控
        performanceMonitor.startMonitoring();

        // 记录首页开始渲染时间
        const renderStartTime = performance.now();
        performanceMonitor.recordCustomMetric('homePageRenderStart', renderStartTime);

        UI.header({
            hd: (
                <img
                    className={`${prefixCls}__img-bar t-img ml-sm`}
                    src={`${Const.__IMAGES__}/sign.png`}
                    onClick={() =>
                        (window.location =
                            'https://www.nidosport.com/event/sign')
                    }
                />
            ),
            ft: (
                <div>
                    <img
                        key="server"
                        className={`${prefixCls}__img-bar t-img`}
                        src={`${Const.__IMAGES__}/server.png`}
                        onClick={() => Utils.router.push('/server')}
                    />
                    <img
                        key="contact"
                        className={`${prefixCls}__img-bar t-img ml-md`}
                        src={`${Const.__IMAGES__}/contact.png`}
                        onClick={() => Utils.router.push('/merchant/join')}
                    />
                </div>
            )
        });

        // 记录性能指标和生成报告
        setTimeout(() => {
            this.context.$.recordLoadingPerformance();

            // 记录首页渲染完成时间
            const renderEndTime = performance.now();
            performanceMonitor.recordCustomMetric('homePageRenderEnd', renderEndTime);
            performanceMonitor.recordCustomMetric('homePageRenderDuration', renderEndTime - renderStartTime);

            // 在开发环境下输出性能报告
            if (process.env.NODE_ENV === 'development') {
                const report = performanceMonitor.exportMetrics();
                console.group('🚀 首页性能报告');
                console.log('性能指标:', report.report);
                console.log('性能评分:', report.scores);
                if (report.summary.length > 0) {
                    console.warn('优化建议:', report.summary);
                }
                console.groupEnd();
            }
        }, 1000);
    }

    componentWillUnmount() {
        UI.resetHeader();

        // 停止性能监控
        performanceMonitor.stopMonitoring();
    }

    // 渲染错误重试按钮
    renderRetryButton = (moduleKey, error) => {
        if (!error) return null;

        return (
            <div className="error-retry-container">
                <p className="error-message">加载失败</p>
                <button
                    className="retry-button"
                    onClick={() => this.context.$.retryModule(moduleKey)}
                >
                    重试
                </button>
            </div>
        );
    };

    render() {
        const mounted = G.getState('mounted');
        const { $ } = this.context;
        const {
            isInitialLoading,
            loadingStates,
            errors
        } = $.getState();

        // 如果初始加载中，显示骨架屏
        if (isInitialLoading) {
            return (
                <Layout hideBack title="本汀官网">
                    <_LoadingSkeleton />
                </Layout>
            );
        }

        return (
            <Layout hideBack title="本汀官网">
                <_ErrorBoundary>
                    {/* 轮播图区域 */}
                    <_ErrorBoundary fallback={this.renderRetryButton('carousel', errors.carousel)}>
                        <_Carousel />
                    </_ErrorBoundary>

                    {/* 菜单区域 */}
                    <_Menu />

                    {/* 通知区域 */}
                    {mounted && (
                        <_ErrorBoundary fallback={this.renderRetryButton('notice', errors.notice)}>
                            <_Notice />
                        </_ErrorBoundary>
                    )}

                    {/* 活动区域 */}
                    <_ErrorBoundary fallback={this.renderRetryButton('event', errors.event)}>
                        <_Event className="mt-d" />
                    </_ErrorBoundary>

                    {/* 鱼类区域 - 懒加载 */}
                    <LazyLoad
                        height="3.68rem"
                        once
                        placeholder={<div className="lazy-placeholder" style={{height: '3.68rem'}} />}
                    >
                        <_ErrorBoundary>
                            <_Fish className="mt-d" />
                        </_ErrorBoundary>
                    </LazyLoad>

                    {/* 明星横幅 - 懒加载 */}
                    <LazyLoad
                        height="1.2rem"
                        once
                        placeholder={<div className="lazy-placeholder" style={{height: '1.2rem'}} />}
                    >
                        <img
                            className="img-star mt-d"
                            src={`${images}/banner_star.png`}
                            onClick={() => Utils.router.push('/star')}
                            loading="lazy"
                        />
                    </LazyLoad>

                    {/* 明星区域 - 懒加载 */}
                    <LazyLoad
                        height="6rem"
                        once
                        placeholder={<div className="lazy-placeholder" style={{height: '6rem'}} />}
                    >
                        <_ErrorBoundary>
                            <_Star className="mt-d" />
                        </_ErrorBoundary>
                    </LazyLoad>

                    {/* 视频区域 - 懒加载 */}
                    <LazyLoad
                        height="4rem"
                        once
                        placeholder={<div className="lazy-placeholder" style={{height: '4rem'}} />}
                    >
                        <_ErrorBoundary fallback={this.renderRetryButton('video', errors.video)}>
                            <_Video className="mt-d" />
                        </_ErrorBoundary>
                    </LazyLoad>

                    {/* 资讯区域 - 懒加载 */}
                    <LazyLoad
                        height="20rem"
                        once
                        placeholder={<div className="lazy-placeholder" style={{height: '20rem'}} />}
                    >
                        <_ErrorBoundary fallback={this.renderRetryButton('article', errors.article)}>
                            <_Information className="mt-d" />
                        </_ErrorBoundary>
                    </LazyLoad>

                    {/* 新版本按钮 */}
                    <img
                        className="img-new-version"
                        src={`${images}/new_version.png`}
                        onClick={() =>
                            (window.location = 'http://benting.tw-bt.com')
                        }
                        loading="lazy"
                    />
                </_ErrorBoundary>

                <style jsx global>{`
                    .styles-10269887 {
                    }
                    .${prefixCls}__img-bar {
                        width: 0.31rem;
                        height: 0.57rem;
                    }
                `}</style>
                <style jsx>{`
                    .styles-10269887 {
                    }
                    .img-star {
                        width: 100%;
                        min-height: 1.02rem;
                    }
                    .img-new-version {
                        position: fixed;
                        right: 0;
                        bottom: 1rem;
                        width: 1.6rem;
                        z-index: 100;
                    }
                    .lazy-placeholder {
                        background: #f5f5f5;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #999;
                        font-size: 0.24rem;
                    }
                    .lazy-placeholder::before {
                        content: '加载中...';
                    }
                    .error-retry-container {
                        padding: 1rem;
                        text-align: center;
                        background: #fff;
                        border: 1px solid #f0f0f0;
                        margin: 0.16rem 0;
                    }
                    .error-message {
                        color: #999;
                        margin-bottom: 0.16rem;
                        font-size: 0.24rem;
                    }
                    .retry-button {
                        background: #567af7;
                        color: white;
                        border: none;
                        padding: 0.12rem 0.24rem;
                        border-radius: 0.04rem;
                        font-size: 0.24rem;
                        cursor: pointer;
                    }
                    .retry-button:hover {
                        background: #4a6ce8;
                    }
                `}</style>
            </Layout>
        );
    }

    static contextTypes = {
        $: PropTypes.object
    };
}
