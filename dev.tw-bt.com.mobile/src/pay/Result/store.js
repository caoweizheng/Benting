/**
 * const prefixCls = 'styles-41615384';
 * const images = '/static/images/src/pay/Result';
 * @Author: Jack
 * @Date:   2018-01-13 10:07:02
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-13 10:31:50
 * @Path btWap \src\pay\Result\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';

export default class Store extends common {
    @observable
    state = {
        //订单详情
        orderInfo: {}
    };

    initFetch = {
        every: ['fetchOrderDetail']
    };

    /*==================== DS ====================*/
    //订单详情
    fetchOrderDetail = () => {
        const { id } = this.getParams().params;

        return this.fetchThenSetState('get_pay_result', 'orderInfo', {
            orderNo: id
        });
    };
}
