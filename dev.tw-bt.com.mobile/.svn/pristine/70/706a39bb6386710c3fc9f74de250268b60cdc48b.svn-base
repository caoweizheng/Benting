/**
 * const prefixCls = 'styles-77161194';
 * const images = '/static/images/src/person/event/myFloor/GetPrize';
 * @Author: qizc
 * @Date:   2018-01-18 17:22:47
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-19 15:57:03
 * @Path btWap \src\person\event\myFloor\GetPrize\store.js
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
        //我的踩楼领奖
        floorAward: {}
    });

    initFetch = {
        every: ['fetchFloorAward']
    };

    /*==================== DS ====================*/
    //我的踩楼领奖
    fetchFloorAward = () => {
        const { id } = this.getParams().params;
        return this.fetchThenSetState('get_floor_award', 'floorAward', {
            postId: id
        });
    };

    /*==================== Action ====================*/
    // 设置订单地址并付邮费
    doPay = async value => {
        const { orderinfo = {} } = this.getState('floorAward');
        const { orderNo } = orderinfo;

        // 支付邮费
        await Api.P('do_pay_bt', {
            orderNo,
            payPort: 0
        });
        await this.fetchFloorAward();
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
