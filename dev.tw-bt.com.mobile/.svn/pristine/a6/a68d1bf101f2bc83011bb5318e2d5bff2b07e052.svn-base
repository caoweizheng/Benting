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

const subDataLimit = 5;

export default class Store extends common {
    @observable
    state = this.initState({
        state: {
            selectedIndex: '36',
            goods: goodsDS,
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
            'fetchLotteryInfo',
            'fetchHomeCarousel',
            'fetchEventInfo',
            'fetchArticleTopList',
            'fetchTopVideoList',
            'checkRecentNotice'
        ]
    };

    /*==================== DS ====================*/
    //优惠券信息
    fetchLotteryInfo = () => {
        return this.fetchThenSetState('get_event_processing', 'lotteryInfo');
    };

    //活动信息
    fetchEventInfo = () => {
        return this.fetchThenSetState('get_event_home-info', 'eventInfo');
    };

    //首页轮播图
    fetchHomeCarousel = () => {
        return this.fetchThenSetState('get_carousel_list', 'homeCarousel', {
            imgType: 41
        });
    };

    //资讯置顶列表
    fetchArticleTopList = refresh => {
        return this.fetchListThenSetState(
            'get_article_list',
            'articleTopList',
            {
                _: {
                    limit: 8
                }
            },
            refresh
        );
    };

    //置顶到视频列表
    fetchTopVideoList = () => {
        return this.fetchThenSetState('get_video_list-list', 'topVideoList', {
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
