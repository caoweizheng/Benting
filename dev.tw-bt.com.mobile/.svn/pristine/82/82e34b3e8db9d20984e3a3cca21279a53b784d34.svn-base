/**
 * const prefixCls = 'styles-77205972';
 * const images = '/static/images/src/person/welfare/Birthday';
 * @Author: Jack
 * @Date:   2018-01-06 16:52:24
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-10 18:53:28
 * @Path btWap \src\person\welfare\Birthday\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';

export default class Store extends common {
    @observable
    state = this.initState({
        //用户信息
        userInfo: {
            _filter: true
        },

        //现金券
        lotteryMoneyList: Const.__EMPTY__,

        //实物券
        lotteryList: Const.__EMPTY__
    });

    initFetch = {
        static: [['fetchUserInfo', 'userInfo']],
        one: ['fetchLotteryMoneyList', 'fetchLotteryList']
    };

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };

    //现金券
    fetchLotteryMoneyList = () => {
        return this.fetchListThenSetState(
            'get_bt-lottery_list',
            'lotteryMoneyList',
            {
                _: {
                    limit: Const.__LIMIT__,
                    order: {
                        grade: 'asc'
                    },
                    search: {
                        getType: 3,
                        prizeType: 4
                    }
                }
            }
        );
    };

    //现金券
    fetchLotteryList = () => {
        return this.fetchListThenSetState(
            'get_bt-lottery_list',
            'lotteryList',
            {
                _: {
                    limit: Const.__LIMIT__,
                    order: {
                        grade: 'asc'
                    },
                    search: {
                        getType: 3,
                        prizeType: 1
                    }
                }
            }
        );
    };

    /*==================== Action ====================*/
    doGet = async lotteryPrizeId => {
        await Api.P('do_bt-lottery_get-batch', {
            getType: 3,
            lotteryPrizeId
        });

        Utils.light('领取成功');
        Utils.router.push('/person/goods');
    };
}
