/**
 * const prefixCls = 'styles-34182093';
 * const images = '/static/images/src/person/order/Add';
 * @Author: Jack
 * @Date:   2018-01-03 09:53:59
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:33:03
 * @Path btWap \src\person\order\Add\store.js
 */
'use strict';

import { observable } from 'mobx';
import Const from 'const';
import common from 'stores/common';
import Api from 'api';
import Utils from 'utils';
import G from 'stores/g';
import { images } from './ds';

export default class Store extends common {
    doLoginThenBack = async values => {
        G.setJump();
        Utils.router.push('/login');
    };

    //注册自动登录后提交消费订单
    doRegisterThenSubmit = async values => {
        const { mobile, code, pwd } = values;

        await Api.P('do_user_register', {
            mobile,
            code,
            pwd
        });

        await G.doLoginByPwd({
            account: mobile,
            pwd
        });

        this.doSubmit(values);
    };

    //提交消费订单
    doSubmit = async values => {
        const { shopName, orderNo, cardImg } = values;

        await Api.P('do_consumer_add', {
            shopName,
            orderNo,
            cardImg
        });

        Utils.onConfirm(
            '提交成功，享受售后保障！还可获取现金券、积分兑换、金币、抽奖礼品、晋升等级、会员特权、生日礼物等权益，确定前往个人中心?',
            () => {
                Utils.router.push('/person');
            },
            <img
                className="t-img"
                src={`${images}/check.png`}
                style={{ width: '0.72rem', height: '0.72rem' }}
            />
        );
    };
}
