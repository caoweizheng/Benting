/**
 * const prefixCls = 'styles-10754211';
 * const images = '/static/images/src/person/goods/Index';
 * @Author: Jack
 * @Date:   2018-01-05 15:04:55
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-01 16:36:44
 * @Path btWap \src\person\goods\Index\store.js
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
        //我的优惠券
        myLotteryList: Const.__EMPTY__,
    });

    initFetch = {
        update: ['fetchMyLotteryList'],
    };

    /*==================== DS ====================*/
    //我的优惠券
    fetchMyLotteryList = refresh => {
        return this.fetchListThenSetState(
            'get_bt-lottery_my-list',
            'myLotteryList', {
                _: {
                    order: {
                        createTime: 'desc'
                    }
                }
            },
            refresh
        );
    };
}
