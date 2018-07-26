/**
 * const prefixCls = 'styles-13806581';
 * const images = '/static/images/src/person/event/myFloor/Index';
 * @Author: qizc
 * @Date:   2018-01-18 16:25:03
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-18 16:33:26
 * @Path btWap \src\person\event\myFloor\Index\store.js
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
        //踩楼列表
        myFloorList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchMyFloorList']
    };

    /*==================== DS ====================*/
    //踩楼列表
    fetchMyFloorList = refresh => {
        return this.fetchListThenSetState(
            'get_my_floor_list',
            'myFloorList',
            {},
            refresh
        );
    };
}

export default store;
