/**
 * const prefixCls = 'styles-59223534';
 * const images = '/static/images/src/person/wallet/Exchange';
 * @Author: Jack
 * @Date:   2018-05-11 16:21:50
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-12 18:05:23
 * @Path btWap \src\person\wallet\Exchange\store.js
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
        state: {
            type: 1, //0本汀->灵动 1灵动->本汀
            ipt: ''
        },

        //账号余额
        walletInfo: {}
    });

    initFetch = {
        every: ['fetchWalletInfo']
    };

    /*==================== DS ====================*/
    //账号余额
    fetchWalletInfo = () => {
        return this.fetchThenSetState('get_wallet_info', 'walletInfo', {
            type: 0
        });
    };

    /*==================== Action ====================*/
    doExchange = async () => {
        const { type, ipt = 0 } = this.getState();

        const amount = parseFloat(ipt);
        if (!amount) {
            Utils.light('金额必须大于0');
            return;
        }
        
        await Api.P('do_wallet_exchange', {
            type,
            amount
        });

        Utils.light('划转成功');
        this.fetchWalletInfo();
        this.setState({
            ipt: ''
        });
    };

    /*==================== Page ====================*/
    changeType = () => {
        const { type } = this.getState();

        this.setState({
            type: type === 1 ? 0 : 1,
            ipt: ''
        });
    };

    prev = '';
    moneyNatural = v => {
        if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
            if (v === '.') {
                return '0.';
            }

            if (!v) return '';

            return this.prev;
        }

        this.prev = v;
        return v;
    };

    onIptChange = val => {
        const { amount = 0, btAmount = 0 } = this.getState('walletInfo');
        const { type } = this.getState();

        let max = 0;
        if (type === 0) {
            max = parseFloat(btAmount);
        } else {
            max = parseFloat(amount);
        }

        let _amount = this.moneyNatural(val);
        if (_amount > max) {
            _amount = max;
        }

        this.setState({
            ipt: _amount
        });
    };

    onAllClick = () => {
        const { amount = 0, btAmount = 0 } = this.getState('walletInfo');
        const { type } = this.getState();

        let max = 0;
        if (type === 0) {
            max = parseFloat(btAmount);
        } else {
            max = parseFloat(amount);
        }

        this.setState({
            ipt: max
        });
    };
}
