/**
 * const prefixCls = 'styles-19678722';
 * const images = '/static/images/src/shop/auction/Index';
 * @Author: Jack
 * @Date:   2018-01-24 17:46:09
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-01 09:21:01
 * @Path btWap \src\shop\auction\Index\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Const from 'const';
import Utils from 'utils';

class store extends common {
    @observable
    state = this.initState({
        state: {
            selectedIndex: 0,
            initialPage: 0
        },

        //金币竞拍列表
        auctionList: Const.__EMPTY__,

        //积分竞拍列表
        scoreAuctionList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchAuctionList', 'fetchScoreAuctionList']
    };

    storeDidMount(props) {
        if (Const.__CLIENT__) {
            const type = Utils.getQuery('type');

            if (type === 'score') {
                setTimeout(() => {
                    this.setState({
                        selectedIndex: 1,
                        initialPage: 1
                    });
                }, 0);
            }
        }
    }

    /*==================== DS ====================*/
    //金币竞拍列表
    fetchAuctionList = refresh => {
        this.fetchListThenSetState(
            'get_auction_list',
            'auctionList',
            {
                _: {
                    limit: Const.__LIMIT__,
                    order: {
                        endTime: 'desc'
                    },
                    search: {
                        auctionType: 1,
                    }
                }
            },
            refresh
        );
    };

    //积分竞拍列表
    fetchScoreAuctionList = refresh => {
        this.fetchListThenSetState(
            'get_auction_list',
            'scoreAuctionList',
            {
                _: {
                    limit: Const.__LIMIT__,
                    order: {
                        endTime: 'desc'
                    },
                    search: {
                        auctionType: 2,
                    }
                }
            },
            refresh
        );
    };

    //服务器时间
    fetchTime = () => {
        this.fetchThenSetState('get_time', 'time');
    };

    /*==================== Page ====================*/
}

export default store;
