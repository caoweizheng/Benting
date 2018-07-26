/**
 * const prefixCls = 'styles-10473997';
 * const images = '/static/images/src/person/event/myGuess/Index';
 * @Author: qizc
 * @Date:   2018-02-05 09:32:44
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-05 10:46:11
 * @Path btWap \src\person\event\myGuess\Index\store.js
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
        //我的竞猜列表
        myGuessList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchMyGuessList']
    };

    /*==================== DS ====================*/
    //我的竞猜列表
    fetchMyGuessList = refresh => {
        const type = Utils.getQuery('type');

        if (type === 'score') {
            //积分竞猜
            return this.fetchListThenSetState(
                'get_my_point_guess-list',
                'myGuessList',
                {
                    _: {
                        order: {
                            endTime: 'desc'
                        }
                    }
                },
                refresh
            );
        } else {
            return this.fetchListThenSetState(
                'get_my_gold_guess-list',
                'myGuessList',
                {
                    _: {
                        order: {
                            endTime: 'desc'
                        }
                    }
                },
                refresh
            );
        }
    };
}

export default store;
