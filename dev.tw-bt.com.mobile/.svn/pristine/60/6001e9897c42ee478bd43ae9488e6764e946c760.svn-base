/**
 * const prefixCls = 'styles-17217113';
 * const images = '/static/images/src/shop/Coupon';
 * @Author: Jack
 * @Date:   2018-01-04 15:30:37
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-06 09:10:43
 * @Path btWap \src\shop\Coupon\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';

export default class Store extends common {
    @observable
    state = this.initState({
        //优惠券
        lotteryList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchLotteryList']
    };

    /*==================== DS ====================*/
    //优惠券
    fetchLotteryList = () => {
        return this.fetchThenSetState('get_bt-lottery_list', 'lotteryList');
    };

    /*==================== Action ====================*/
    doGetCoupon = async lotteryPrizeId => {
        await Api.P('do_bt-lottery_get', { lotteryPrizeId });

        Utils.light('领取成功');

        this.fetchLotteryList();
    };
}
