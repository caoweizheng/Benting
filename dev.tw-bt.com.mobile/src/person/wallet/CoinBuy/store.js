/**
 * const prefixCls = 'styles-70487312';
 * const images = '/static/images/src/person/wallet/CoinBuy';
 * @Author: Jack
 * @Date:   2018-01-08 14:43:14
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-24 15:57:03
 * @Path btWap \src\person\wallet\CoinBuy\store.js
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
    state = {
        state: {
            show: false,
            amount: '0.00',
            _filter: true
        },

        //我的余额
        walletInfo: {}
    };

    initFetch = {
        static: [['fetchWalletInfo', 'walletInfo']]
    };

    /*==================== DS ====================*/
    //我的余额
    fetchWalletInfo = async () => {
        const res = G.fetchWalletInfo();

        this.setState(await res, 'walletInfo');

        return res;
    };

    /*==================== Action ====================*/
    doBuyCoin = async () => {
        const { amount } = this.getState();

        await Api.P('do_wallet_buy-coin', {
            amount
        });

        this.setState({
            show: false
        });

        await this.fetchWalletInfo();

        Utils.light('兑换金币成功');
    };

    /*==================== Page ====================*/
    onConfirm = amount => {
        this.setState({ show: true, amount });
    };

    closeModal = () => {
        this.setState({ show: false });
    };
}
