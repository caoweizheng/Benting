/**
 * const prefixCls = 'styles-28606027';
 * const images = '/static/images/src/person/welfare/Point';
 * @Author: Jack
 * @Date:   2018-01-06 11:29:46
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-10 18:54:29
 * @Path btWap \src\person\welfare\Point\store.js
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

        //商品列表
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
                        getType: 5,
                        prizeType: 4
                    }
                }
            }
        );
    };

    //实物券
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
                        getType: 5,
                        prizeType: 1
                    }
                }
            }
        );
    };

    /*==================== Action ====================*/
    doGet = async lotteryPrizeId => {
        const { selectedIndex } = this.getState();

        await Api.P('do_bt-lottery_get-batch', {
            getType: 5,
            lotteryPrizeId
        });

        Utils.light('兑换成功');
        Utils.router.push('/person/goods');
    };
}
