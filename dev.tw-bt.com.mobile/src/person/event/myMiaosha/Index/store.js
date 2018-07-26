/**
 * const prefixCls = 'styles-56406358';
 * const images = '/static/images/src/person/event/myMiaosha/Index';
 * @Author: qizc
 * @Date:   2018-01-24 15:29:23
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-26 14:33:49
 * @Path btWap \src\person\event\myMiaosha\Index\store.js
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
        //秒杀列表
        myMiaoshaList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchMyMiaoshaList']
    };

    /*==================== DS ====================*/
    //秒杀列表
    fetchMyMiaoshaList = refresh => {
        return this.fetchListThenSetState(
            'get_shop_miaosha-my-record',
            'myMiaoshaList',
            {
                _: {
                    search: {
                        state: 1,
                        panicType: [1, 3],
                        dataType: 2
                    }
                }
            },
            refresh
        );
    };
}

export default store;
