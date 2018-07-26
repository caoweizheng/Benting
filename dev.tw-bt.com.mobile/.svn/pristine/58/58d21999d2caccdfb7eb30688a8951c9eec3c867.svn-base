/**
 * const prefixCls = 'styles-43793576';
 * const images = '/static/images/src/person/wallet/Withdrawals';
 * @Author: qizc
 * @Date:   2018-01-24 12:19:20
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-24 14:35:21
 * @Path btWap \src\person\wallet\Withdrawals\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';

class store extends common {
    @observable
    state = this.initState({
        //银行卡信息
        bankInfo: {},

        //账号余额
        walletInfo: {},
    });

    initFetch = {
        every: ['fetchBankInfo', 'fetchWalletInfo']
    };
    /*==================== DS ====================*/
    //银行信息
    fetchBankInfo = () => {
        return this.fetchThenSetState('get_user_bank_info', 'bankInfo');
    };

    //钱包信息
    fetchWalletInfo = () => {
        return this.fetchThenSetState('get_wallet_info', 'walletInfo', {
            type: 1
        });
    };

    /*==================== ACTION ====================*/
    // 提现
    doWithdrawals = async values => {
        const { money } = values;

        await Api.P('do_bt_withdraw', {
            price: money
        });

        Utils.light('申请提现成功!');
        Utils.router.back();
    };
}

export default store;
