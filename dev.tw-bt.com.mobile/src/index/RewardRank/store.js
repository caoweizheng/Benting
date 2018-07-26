/**
 * const prefixCls = 'styles-13957949';
 * const images = '/static/images/src/index/RewardRank';
 * @Author: qizc
 * @Date:   2018-02-25 16:52:56
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:03:41
 * @Path btWap \src\index\RewardRank\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Const from 'const';

class store extends common {
    @observable
    state = this.initState({
        //打赏列表
        rewardList: Const.__EMPTY__,

        //打赏排行列表
        rewardRankList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchRewardRankList', 'fetchRewardList']
    };

    /*==================== DS ====================*/
    //打赏排行列表
    fetchRewardRankList = refresh => {
        const { id, type = 1 } = this.getParams().params;
        return this.fetchListThenSetState(
            'get_reward-rank',
            'rewardRankList',
            {
                _: {
                    search: {
                        dataId: id,
                        typeId: type
                    }
                }
            },
            refresh
        );
    };

    //打赏列表
    fetchRewardList = refresh => {
        const { id, type = 1 } = this.getParams().params;
        return this.fetchListThenSetState(
            'get_new_reward-list',
            'rewardList',
            {
                _: {
                    search: {
                        dataId: id,
                        typeId: type
                    }
                }
            },
            refresh
        );
    };
}

export default store;
