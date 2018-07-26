/**
 * const prefixCls = 'styles-24988049';
 * const images = '/static/images/src/event/floor/Index';
 * @Author: Jack
 * @Date:   2018-01-13 17:30:50
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-04-12 10:20:02
 * @Path btWap \src\event\floor\Index\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';

export default class Store extends common {
    @observable
    state = this.initState({
        //我的论坛点赞和收藏列表
        bbsLikeAndFavorList: G.toJS('bbsLikeAndFavorList'),

        //服务器时间
        time: {},

        //板块统计信息
        blockStatistic: {},

        //踩楼列表
        floorList: Const.__EMPTY__
    });

    initFetch = {
        static: [['fetchBBSLikeAndFavorList', 'bbsLikeAndFavorList']],
        one: ['fetchBlockStatistic'],
        update: ['fetchTime', 'fetchFloorList']
    };

    /*==================== DS ====================*/
    //我的论坛点赞和收藏列表
    fetchBBSLikeAndFavorList = async () => {
        const res = G.fetchBBSLikeAndFavorList();

        this.setState(await res, 'bbsLikeAndFavorList');

        return res;
    };

    //服务器时间
    fetchTime = () => this.fetchThenSetState('get_time', 'time');

    //板块统计信息
    fetchBlockStatistic = () =>
        this.fetchThenSetState('get_bbs_block-statistic', 'blockStatistic', {
            forumId: 93
        });

    //踩楼列表
    fetchFloorList = () => {
        const { id } = this.getParams().params;

        return this.fetchListThenSetState('get_floor_list', 'floorList');
    };
    updateOneFloorList = postId => {
        this.updateOneThenSetState('get_floor_list', 'floorList', { postId });
    };

    /*==================== Page ====================*/
    //点赞
    doLike = async (postId, threadId) => {
        await G.doLike(postId, threadId);

        const bbsLikeAndFavorList = G.getState('bbsLikeAndFavorList');

        //更新是否点赞
        this.setState(bbsLikeAndFavorList, 'bbsLikeAndFavorList');

        //更新一项
        this.updateOneFloorList(postId);
    };
}
