/**
 * const prefixCls = 'styles-11408216';
 * const images = '/static/images/src/person/wallet/Index';
 * @Author: Jack
 * @Date:   2018-01-08 10:51:42
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-13 16:50:13
 * @Path btWap \src\person\wallet\Index\store.js
 */
'use strict';

import { observable, computed } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';

export default class Store extends common {
    @observable
    state = this.initState({
        //账号余额
        walletInfo: {},

        //账号余额明细
        walletLogs: Const.__EMPTY__
    });

    @computed
    get section() {
        const walletLogs = this.getState('walletLogs');

        if (!walletLogs._loaded) return [];

        const dateMap = {};
        walletLogs.list.forEach(item => {
            const date = Utils.date('y,m,d', item.createTime);
            const changeAmount = item.changeAmount || 0;

            if (date in dateMap) {
                dateMap[date] = (parseFloat(dateMap[date]) +
                    parseFloat(changeAmount)
                ).toFixed(2);
            } else {
                dateMap[date] = parseFloat(changeAmount);
            }
        });

        return Object.keys(dateMap).map(item => ({
            title: `${item},${dateMap[item]}`,
            filter: i => Utils.date('y,m,d', i.createTime) === item
        }));
    }

    initFetch = {
        every: ['fetchWalletInfo', 'fetchWalletLogs']
    };

    /*==================== DS ====================*/
    //账号余额
    fetchWalletInfo = () => {
        return this.fetchThenSetState('get_wallet_info', 'walletInfo', {
            type: 1
        });
    };

    //账号余额明细
    fetchWalletLogs = () => {
        return this.fetchListThenSetState('get_wallet_logs', 'walletLogs', {
            _: {
                search: {
                    dataType: 3
                }
            }
        });
    };
}
