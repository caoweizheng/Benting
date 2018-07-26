/**
 * const prefixCls = 'styles-17002117';
 * const images = '/static/images/src/person/event/GetPrize';
 * @Author: qizc
 * @Date:   2018-01-25 14:13:17
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-01 11:48:38
 * @Path btWap \src\person\event\GetPrize\store.js
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
        state: {
            show: false,
            _filter: true
        },
        //我的余额
        walletInfo: {},

        //订单详情
        orderInfo: {}
    });

    initFetch = {
        every: ['fetchMyOrderInfo']
    };

    /*==================== DS ====================*/
    // 订单详情
    fetchMyOrderInfo = async refresh => {
        const { id } = this.getParams().params;
        await this.fetchThenSetState('get_bt_order_detail', 'orderInfo', {
            orderId: id
        });
    };

    /*==================== Action ====================*/
    // 设置订单地址并付邮费
    doPay = async value => {
        const { orderinfo = {} } = this.getState('orderInfo');
        const { orderNo, dataType } = orderinfo;

        // 支付邮费 判断本汀和灵动
        if (dataType === 1) {
            await Api.P('do_pay_ld', {
                orderNo,
                payPort: 0
            });
        } else {
            await Api.P('do_pay_bt', {
                orderNo,
                payPort: 0
            });
        }

        await this.fetchMyOrderInfo();
        this.closeModal();
        Utils.light('领取奖品成功');
    };

    /*==================== Page ====================*/
    onConfirm = () => {
        this.setState({ show: true });
    };

    closeModal = () => {
        this.setState({ show: false });
    };
}
