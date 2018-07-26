/**
 * const prefixCls = 'styles-10538691';
 * const images = '/static/images/src/event/guess/Index';
 * @Author: qizc
 * @Date:   2018-02-03 11:51:59
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-24 11:56:51
 * @Path btWap \src\event\guess\Index\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Const from 'const';
import Utils from 'utils';

class store extends common {
    @observable
    state = this.initState({
        state: {
            initialPage: 0
        },

        //金币猜鱼列表
        guessList: Const.__EMPTY__,

        //积分猜鱼列表
        scoreGuessList: Const.__EMPTY__,

        time: {}
    });

    initFetch = {
        every: ['fetchTime', 'fetchGuessList', 'fetchScoreGuessList']
    };

    storeDidMount(props) {
        if (Const.__CLIENT__) {
            const type = Utils.getQuery('type');

            if (type === 'score') {
                setTimeout(() => {
                    this.setState({
                        selectedIndex: 1,
                        initialPage: 1
                    });
                }, 0);
            }
        }
    }

    /*==================== DS ====================*/
    //金币猜鱼列表
    fetchGuessList = refresh => {
        this.fetchListThenSetState(
            'get_new_guess-everday_list',
            'guessList',
            {
                _: {
                    limit: Const.__LIMIT__,
                    order: {
                        createTime: 'desc'
                    },
                    search: {
                        guessType: 2
                    }
                }
            },
            refresh
        );
    };

    //积分猜鱼列表
    fetchScoreGuessList = refresh => {
        this.fetchListThenSetState(
            'get_new_guess-everday_list',
            'scoreGuessList',
            {
                _: {
                    limit: Const.__LIMIT__,
                    order: {
                        createTime: 'desc'
                    },
                    search: {
                        guessType: 1
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
