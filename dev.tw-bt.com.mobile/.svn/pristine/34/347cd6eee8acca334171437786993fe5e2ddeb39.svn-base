/**
 * const prefixCls = 'styles-87036429';
 * const images = '/static/images/src/shop/jianlou/Index';
 * @Author: qizc
 * @Date:   2018-01-30 12:20:53
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-03-03 15:30:23
 * @Path btWap \src\shop\jianlou\Index\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Const from 'const';

class store extends common {
    @observable
    state = this.initState({
        //捡漏列表
        jianlouList: Const.__EMPTY__,

        //服务器时间
        time: {}
    });

    initFetch = {
        update: ['fetchJianlouList'],
        every: ['fetchTime']
    };

    /*==================== DS ====================*/
    //捡漏列表
    fetchJianlouList = refresh => {
        this.fetchListThenSetState(
            'get_shop_miaosha-list',
            'jianlouList',
            {
                _: {
                    limit: Const.__LIMIT__,
                    order: {
                        beginTime: 'desc'
                    },
                    search: {
                        dataType: 2,
                        panicType: 2
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
}

export default store;
