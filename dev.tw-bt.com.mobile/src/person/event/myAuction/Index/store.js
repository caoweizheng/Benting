/**
 * const prefixCls = 'styles-71107227';
 * const images = '/static/images/src/person/event/myAuction/Index';
 * @Author: qizc
 * @Date:   2018-01-25 13:41:07
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-03 11:48:32
 * @Path btWap \src\person\event\myAuction\Index\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';

class store extends common {
    @observable
    state = this.initState({
        //我的竞猜列表
        myAuctionList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchMyAuctionList']
    };

    /*==================== DS ====================*/
    //我的竞猜列表
    fetchMyAuctionList = refresh => {
        const type = Utils.getQuery('type');
        let _ = {};

        // 默认金币竞拍
        switch (type) {
            case 'score':
                _ = {
                    order: {
                        endTime: 'desc'
                    },
                    search: {
                        auctionType: 2
                    }
                };
                break;
            default:
                _ = {
                    order: {
                        endTime: 'desc'
                    },
                    search: {
                        auctionType: 1
                    }
                };
                break;
        }

        return this.fetchListThenSetState(
            'get_my_auction-list',
            'myAuctionList',
            { _ },
            refresh
        );
    };
}

export default store;
