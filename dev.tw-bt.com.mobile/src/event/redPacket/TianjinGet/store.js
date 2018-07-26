/**
 * const prefixCls = 'styles-16163252';
 * const images = '/static/images/src/event/redPacket/TianjinGet';
 * @Author: Jack
 * @Date:   2018-02-07 12:20:43
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-08 15:25:26
 * @Path btWap \src\event\redPacket\TianjinGet\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';

class store extends common {
    @observable
    state = this.initState({
        state: {
            float: false
        },

        record: {}
    });

    initFetch = {
        every: ['fetchRecord']
    };

    /*==================== DS ====================*/
    fetchRecord = () => {
        return this.fetchThenSetState('get_event-tianjin_record', 'record');
    };

    /*==================== Action ====================*/
    doGet = async () => {
        await Api.P('do_event-tianjin_get-red-packet');
        await this.fetchRecord();

        Utils.light('领取成功');
        this.hideFloat();
    };
 
    /*==================== Page ====================*/
    showFloat = () => {
        this.setState({
            float: true
        });
    };

    hideFloat = () => {
        this.setState({
            float: false
        });
    };
}

export default store;
