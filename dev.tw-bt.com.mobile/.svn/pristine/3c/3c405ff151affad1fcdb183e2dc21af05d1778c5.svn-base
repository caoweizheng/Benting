/**
 * const prefixCls = 'styles-28193588';
 * const images = '/static/images/src/person/event/myJianlou/Index';
 * @Author: qizc
 * @Date:   2018-01-30 14:31:39
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-27 12:25:40
 * @Path btWap \src\person\event\myJianlou\Index\store.js
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
        //捡漏列表
        myJianlouList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchMyJianlouList']
    };

    /*==================== DS ====================*/
    //捡漏列表
    fetchMyJianlouList = refresh => {
        return this.fetchListThenSetState(
            'get_shop_miaosha-my-record',
            'myJianlouList',
            {
                _: {
                    search: {
                        state: 1,
                        dataType: 2,
                        panicType: 2
                    }
                }
            },
            refresh
        );
    };
}

export default store;
