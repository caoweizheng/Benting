/**
 * const prefixCls = 'styles-76297758';
 * const images = '/static/images/src/event/sign/Index';
 * @Author: Jack
 * @Date:   2018-05-26 14:54:34
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-26 14:57:30
 * @Path btWap \src\event\sign\Index\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import _Modal from './_Modal';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';
import UI from 'stores/ui';

class store extends common {
    @observable
    state = this.initState({
        //用户信息
        userInfo: {},

        //我的每周签到信息
        weekSign: {},

        //今天签到列表
        today: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchUserInfo', 'fetchWeekSign', 'fetchTodayList']
    };

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };

    //我的每周签到信息
    fetchWeekSign = () => {
        return this.fetchThenSetState('get_sign_week-list', 'weekSign');
    };

    //今天签到列表
    fetchTodayList = () => {
        return this.fetchThenSetState('get_sign_today-top-list', 'today');
    };

    /*==================== Action ====================*/
    //签到
    doSign = async () => {
        const data = await Api.P('do_sign');

        Utils.light(`签到成功，+${data}积分`);
        this.fetchUserInfo();
        this.fetchWeekSign();
        this.fetchTodayList();
    };

    //领取一周满签积分
    doGetPoint = async () => {
        await Api.P('get_sign_week-point');

        UI.showMask({
            children: <_Modal />
        });
    };
}

export default store;
