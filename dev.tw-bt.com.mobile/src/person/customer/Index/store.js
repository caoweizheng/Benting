/**
 * const prefixCls = 'styles-66185999';
 * const images = '/static/images/src/person/customer/Index';
 * @Author: Jack
 * @Date:   2018-01-03 15:03:54
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-03 15:58:08
 * @Path btWap \src\person\customer\Index\store.js
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
        //售后卡记录
        consumerCardList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchConsumerCardList']
    };

    /*==================== DS ====================*/
    //订单记录
    fetchConsumerCardList = refresh => {
        return this.fetchListThenSetState(
            'get_consumer_card-list',
            'consumerCardList',
            {
                _: {
                    order: Const.__LIMIT__,
                    search: {
                        grantState: 1
                    }
                }
            },
            refresh
        );
    };
}

export default store;
