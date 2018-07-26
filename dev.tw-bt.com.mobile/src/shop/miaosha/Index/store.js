/**
 * const prefixCls = 'styles-12846646';
 * const images = '/static/images/src/shop/miaosha/Index';
 * @Author: Jack
 * @Date:   2018-01-24 11:45:38
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-03 15:29:21
 * @Path btWap \src\shop\miaosha\Index\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Const from 'const';

class store extends common {
    @observable
    state = this.initState({
        //秒杀列表
        miaoshaList: Const.__EMPTY__,

        //服务器时间
        time: {}
    });

    initFetch = {
        update: ['fetchMiaoshaList'],
        every: ['fetchTime']
    };

    /*==================== DS ====================*/
    //秒杀列表
    fetchMiaoshaList = refresh => {
        this.fetchListThenSetState(
            'get_shop_miaosha-list',
            'miaoshaList',
            {
                _: {
                    limit: Const.__LIMIT__,
                    order: {
                        beginTime: 'desc'
                    },
                    search: {
                        dataType: [1, 2],
                        panicType: [1, 3]
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
