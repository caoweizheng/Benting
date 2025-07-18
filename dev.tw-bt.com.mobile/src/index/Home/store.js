/**
 * const prefixCls = 'styles-10686304';
 * @Author: qizc
 * @Date:   2017-12-25 10:09:28
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-21 14:56:25
 * @Path btWap \src\index\store.js
 */
'use strict';

import { observable } from 'mobx';
import { goodsDS } from './ds';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import G from 'stores/g';
import Utils from 'utils';
import { preloadHomeImages } from './_ImagePreloader';
import networkOptimizer from './_NetworkOptimizer';

const subDataLimit = 5;

export default class Store extends common {
    @observable
    state = this.initState({
        state: {
            selectedIndex: '36',
            goods: goodsDS,
            // 加载状态管理
            isInitialLoading: true,
            loadingStates: {
                carousel: false,
                lottery: false,
                event: false,
                article: false,
                video: false,
                notice: false
            },
            // 错误状态管理
            errors: {
                carousel: null,
                lottery: null,
                event: null,
                article: null,
                video: null,
                notice: null
            },
            // 重试计数
            retryCount: {
                carousel: 0,
                lottery: 0,
                event: 0,
                article: 0,
                video: 0,
                notice: 0
            }
        },

        //优惠券信息
        lotteryInfo: {},

        //活动信息
        eventInfo: {},

        //资讯置顶列表
        articleTopList: Const.__EMPTY__,

        //置顶视频
        topVideoList: Const.__EMPTY__,

        //[鱼获有礼]特殊单品
        //specialGoods: Const.__EMPTY__
    });

    initFetch = {
        one: [
            'initializeHomePage'
        ]
    };

    // 最大重试次数
    maxRetries = 3;

    /*==================== 初始化方法 ====================*/
    // 初始化首页数据，优化加载策略
    initializeHomePage = async () => {
        this.setState({
            isInitialLoading: true
        });

        try {
            // 获取网络优化策略
            const networkStrategy = networkOptimizer.getOptimizationStrategy();
            const concurrentLimit = networkOptimizer.getConcurrentRequestLimit();

            // 根据网络状况调整加载策略
            if (networkStrategy.imageQuality === 'none') {
                // 离线状态，只加载基本数据
                await this.fetchEventInfo();
            } else if (concurrentLimit <= 1) {
                // 网络较差，串行加载
                await this.fetchHomeCarousel();
                await this.fetchEventInfo();

                // 延迟加载次要内容
                setTimeout(() => {
                    this.fetchLotteryInfo();
                    this.fetchArticleTopList();
                    this.fetchTopVideoList();
                    this.checkRecentNotice();
                }, 2000);
            } else {
                // 网络良好，并行加载
                const criticalPromises = [
                    this.fetchHomeCarousel(),
                    this.fetchEventInfo()
                ];

                const secondaryPromises = [
                    this.fetchLotteryInfo(),
                    this.fetchArticleTopList(),
                    this.fetchTopVideoList(),
                    this.checkRecentNotice()
                ];

                // 并行加载关键内容
                await Promise.allSettled(criticalPromises);

                // 根据网络状况决定是否立即加载次要内容
                if (concurrentLimit >= 3) {
                    await Promise.allSettled(secondaryPromises);
                } else {
                    // 延迟加载次要内容
                    setTimeout(() => {
                        Promise.allSettled(secondaryPromises);
                    }, 1000);
                }

                // 预加载图片（仅在网络良好时）
                if (networkOptimizer.shouldPreload()) {
                    this.preloadImages();
                }
            }

        } catch (error) {
            console.error('首页初始化失败:', error);
        } finally {
            this.setState({
                isInitialLoading: false
            });
        }
    };

    // 预加载图片
    preloadImages = () => {
        try {
            const homeData = {
                homeCarousel: this.getState('homeCarousel'),
                eventInfo: this.getState('eventInfo'),
                topVideoList: this.getState('topVideoList')
            };

            preloadHomeImages(homeData, Utils).catch(error => {
                console.warn('图片预加载失败:', error);
            });
        } catch (error) {
            console.warn('图片预加载初始化失败:', error);
        }
    };

    /*==================== 工具方法 ====================*/
    // 设置加载状态
    setLoadingState = (key, loading) => {
        this.setState({
            loadingStates: {
                ...this.getState('loadingStates'),
                [key]: loading
            }
        });
    };

    // 设置错误状态
    setErrorState = (key, error) => {
        this.setState({
            errors: {
                ...this.getState('errors'),
                [key]: error
            }
        });
    };

    // 增强的fetch方法，带重试和错误处理
    enhancedFetch = async (key, api, stateKey, query, config = {}) => {
        const { maxRetries = this.maxRetries } = config;
        const retryCount = this.getState('retryCount')[key] || 0;

        this.setLoadingState(key, true);
        this.setErrorState(key, null);

        try {
            const result = await this.fetchThenSetState(api, stateKey, query, {
                show: false, // 不显示默认loading
                ...config
            });

            // 重置重试计数
            this.setState({
                retryCount: {
                    ...this.getState('retryCount'),
                    [key]: 0
                }
            });

            return result;
        } catch (error) {
            this.setErrorState(key, error);

            // 如果还有重试机会，自动重试
            if (retryCount < maxRetries) {
                this.setState({
                    retryCount: {
                        ...this.getState('retryCount'),
                        [key]: retryCount + 1
                    }
                });

                // 延迟重试
                setTimeout(() => {
                    this.enhancedFetch(key, api, stateKey, query, config);
                }, 1000 * (retryCount + 1)); // 递增延迟
            }

            throw error;
        } finally {
            this.setLoadingState(key, false);
        }
    };

    /*==================== DS ====================*/
    //优惠券信息
    fetchLotteryInfo = () => {
        return this.enhancedFetch('lottery', 'get_event_processing', 'lotteryInfo');
    };

    //活动信息
    fetchEventInfo = () => {
        return this.enhancedFetch('event', 'get_event_home-info', 'eventInfo');
    };

    //首页轮播图
    fetchHomeCarousel = () => {
        return this.enhancedFetch('carousel', 'get_carousel_list', 'homeCarousel', {
            imgType: 41
        });
    };

    //资讯置顶列表
    fetchArticleTopList = refresh => {
        this.setLoadingState('article', true);
        this.setErrorState('article', null);

        return this.fetchListThenSetState(
            'get_article_list',
            'articleTopList',
            {
                _: {
                    limit: 8
                }
            },
            refresh
        ).then(result => {
            this.setLoadingState('article', false);
            return result;
        }).catch(error => {
            this.setErrorState('article', error);
            this.setLoadingState('article', false);
            throw error;
        });
    };

    //置顶到视频列表
    fetchTopVideoList = () => {
        return this.enhancedFetch('video', 'get_video_list-list', 'topVideoList', {
            _: {
                limit: 6,
                search: {
                    recomNo: [1, 50]
                }
            }
        });
    };

    //[鱼获有礼]特殊单品
    /*fetchSpecialGoods = () => {
        return this.fetchThenSetState('get_shop_special-goods', 'specialGoods');
    };*/

    /*==================== 用户操作方法 ====================*/
    // 手动重试特定模块
    retryModule = (moduleKey) => {
        const moduleMap = {
            carousel: this.fetchHomeCarousel,
            lottery: this.fetchLotteryInfo,
            event: this.fetchEventInfo,
            article: this.fetchArticleTopList,
            video: this.fetchTopVideoList,
            notice: this.checkRecentNotice
        };

        const fetchMethod = moduleMap[moduleKey];
        if (fetchMethod) {
            // 重置错误状态
            this.setErrorState(moduleKey, null);
            return fetchMethod();
        }
    };

    // 刷新所有数据
    refreshAllData = () => {
        return this.initializeHomePage();
    };

    /*==================== 性能监控 ====================*/
    // 记录加载性能
    recordLoadingPerformance = () => {
        if (typeof window !== 'undefined' && window.performance) {
            const navigation = window.performance.getEntriesByType('navigation')[0];
            const loadTime = navigation.loadEventEnd - navigation.loadEventStart;

            // 可以发送到监控系统
            console.log('首页加载时间:', loadTime + 'ms');

            // 记录关键指标
            const metrics = {
                loadTime,
                domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                firstPaint: window.performance.getEntriesByName('first-paint')[0]?.startTime || 0,
                firstContentfulPaint: window.performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
            };

            return metrics;
        }
        return null;
    };

    //[鱼获有礼]分类商品列表
    /*fetchSubData = async id => {
        if (typeof id !== 'string') id = '36';

        const res = Api.P('get_shop_only-goods-list', {
            _: {
                limit: subDataLimit,
                search: {
                    goodsType: id
                }
            }
        });
        const data = await res;

        let { goods } = this.getState();
        goods = JSON.parse(JSON.stringify(goods));
        const index = goods.findIndex(item => item.value === id);

        if (index !== -1) {
            goods[index].page = 1;
            goods[index].hasMore = true;
            goods[index].children = data.goodsList.map(item => ({
                label: item.title,
                value: item.gid,
                parId: id,
                imgs: item.imgs
            }));
        }
        this.setState({ goods });

        return res;
    };

    fetching = false;
    fetchSubDataNextPage = async () => {
        if (this.fetching) return;

        this.fetching = true;

        let { selectedIndex, goods } = this.getState();
        const index = goods.findIndex(item => item.value === selectedIndex);
        if (!goods[index].hasMore) return;
        
        const res = Api.P('get_shop_only-goods-list', {
            _: {
                limit: subDataLimit,
                page: goods[index].page + 1,
                search: {
                    goodsType: selectedIndex
                }
            }
        });
        const { goodsList = [] } = await res;
        
        goods = JSON.parse(JSON.stringify(goods));
        if (goodsList.length === 0) {
            goods[index].hasMore = false;
        } else {
            const nextData = goodsList.map(item => ({
                label: item.title,
                value: item.gid,
                parId: selectedIndex,
                imgs: item.imgs
            }));

            //if (goodsList.length < subDataLimit) {
            //   goods[index].hasMore = false;
            //}
            goods[index].page = goods[index].page + 1;
            goods[index].children = [...goods[index].children, ...nextData];
        }

        this.setState({ goods });

        this.fetching = false;
    };*/

    /*==================== Action ====================*/
    //最近公告，3天内
    checkRecentNotice = async () => {
        const indexNotice = G.getState('indexNotice');

        const data = await Api.P('get_bbs_list', {
            _: {
                limit: 1,
                order: {
                    createTime: 'desc'
                },
                search: {
                    forumId: 75,
                    'createTime[>]':
                        indexNotice.time ||
                        Utils.getTimestamp() - 3 * 24 * 60 * 60
                }
            }
        });

        if (data.list && data.list[0]) {
            const { time } = G.getState('indexNotice');
            const { createTime } = data.list[0];

            if (createTime > time) {
                G.indexNoticeSetNew(createTime, data.pageinfo.recordtotal);
            }
        }
    };

    /*==================== Page ====================*/
    //最近公告点击
    onNoticeClick = () => {
        Utils.router.push('/bbs/block?id=75', '/bbs/block/75');
        G.indexNoticeSetReaded();
    };

    //鱼获有礼分类点击
    onFishTabClick = selectedIndex => {
        const { goods } = this.getState();

        const index = goods.findIndex(item => item.value == selectedIndex);
        if (!goods[index].children) {
            this.fetchSubData(selectedIndex);
        }
        this.setState({ selectedIndex });
    };
}
