/**
 * const prefixCls = 'styles-14665535';
 * const images = '/static/images/src/pay/Result';
 * @Author: Jack
 * @Date:   2018-01-13 10:32:41
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:17:34
 * @Path btWap \src\pay\Result\ds.js
 */
'use strict';

import Utils from 'utils';

export const images = Utils.cdn('/static/images/src/pay/Result');

//支付状态
export const payState = [
    {
        label: '未支付',
        value: '0'
    },
    {
        label: '已支付',
        value: '1'
    },
    {
        label: '支付失败',
        value: '2'
    }
];

//订单类型
export const orderType = [
    {
        label: '常规订单',
        value: '0'
    },
    {
        label: '一元夺宝',
        value: '1'
    },
    {
        label: '快递',
        value: '2'
    },
    {
        label: '秒杀',
        value: '3'
    },
    {
        label: '购买VIP',
        value: '4'
    },
    {
        label: '微信充值',
        value: '50'
    },
    {
        label: '支付宝充值',
        value: '51'
    },
    {
        label: '提现',
        value: '100'
    }
];

//
export const payType = [
    {
        label: '在线支付',
        value: '0'
    },
    {
        label: '余额支付',
        value: '1'
    },
    {
        label: '支付宝支付',
        value: '2'
    }
];
