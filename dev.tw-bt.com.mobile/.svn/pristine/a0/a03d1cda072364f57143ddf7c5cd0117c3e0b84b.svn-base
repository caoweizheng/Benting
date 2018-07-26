/**
 * const prefixCls = 'styles-76635545';
 * const images = '/static/images/src/person/Index';
 * @Author: qizc
 * @Date:   2017-12-26 17:44:15
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-28 12:26:38
 * @Path btWap \src\person\Index\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import G from 'stores/g';

export default class Store extends common {
    @observable
    state = this.initState({
        state: {
            messageIsRead: false
        },

        //用户信息
        userInfo: {},

        //消息提示数，用于发布标记红点
        messageCount: {},

        //账号余额
        walletInfo: {},

        //商家信息
        merchantInfo: {}
    });

    initFetch = {
        static: [
            ['fetchMessageCount', 'messageCount']
        ],
        one: ['fetchMerchantInfo'],
        update: ['fetchUserInfo', 'fetchWalletInfo'],
    };

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };

    //消息提示数
    fetchMessageCount = async () => {
        const res = G.fetchMessageCount();

        this.setState(await res, 'messageCount');

        return res;
    };

    //账号余额
    fetchWalletInfo = () => {
        return this.fetchThenSetState('get_wallet_info', 'walletInfo', {
            type: 0
        });
    };

    //商家信息
    fetchMerchantInfo = async () => {
        const res = Api.PP('get_merchant_is-merchant');
        const data = await res;

        if (data.code == 0) {
            this.setState(data.data, 'merchantInfo');
        }

        return res;
    };
}
