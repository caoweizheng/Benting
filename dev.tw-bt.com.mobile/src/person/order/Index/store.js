/**
 * const prefixCls = 'styles-34836523';
 * const images = '/static/images/src/person/order/Index';
 * @Author: Jack
 * @Date:   2018-01-02 16:32:30
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-03 11:10:14
 * @Path btWap \src\person\order\Index\store.js
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
        //订单记录
        consumerList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchConsumerList']
    };

    /*==================== DS ====================*/
    //订单记录
    fetchConsumerList = refresh => {
        return this.fetchListThenSetState(
            'get_consumer_list',
            'consumerList',
            {},
            refresh
        );
    };
}

export default store;
