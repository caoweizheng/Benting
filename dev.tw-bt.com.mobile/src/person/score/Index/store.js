/**
 * const prefixCls = 'styles-18613072';
 * const images = '/static/images/src/person/score/Index';
 * @Author: qizc
 * @Date:   2018-01-31 10:18:56
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-31 10:32:26
 * @Path btWap \src\person\score\Index\store.js
 */
'use strict';

import { observable, computed } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';

export default class Store extends common {
    @observable
    state = this.initState({
        //用户信息
        userInfo: {
            _filter: true
        },

        //积分明细
        scoreLogs: Const.__EMPTY__
    });

    @computed
    get section() {
        const scoreLogs = this.getState('scoreLogs');

        const dateMap = {};
        scoreLogs.list.forEach(item => {
            const date = Utils.date('y,m,d', item.createTime);

            if (date in dateMap) {
                if (item.relevType == 701) {
                } else {
                    dateMap[date] = dateMap[date] + parseInt(item.changePoint);
                }
            } else {
                dateMap[date] = parseInt(item.changePoint);
            }
        });

        return Object.keys(dateMap).map(item => ({
            title: `${item},${dateMap[item]}`,
            filter: i => Utils.date('y,m,d', i.createTime) === item
        }));
    }

    initFetch = {
        static: [['fetchUserInfo', 'userInfo']],
        every: ['fetchScoreLogs']
    };

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };

    //积分明细
    fetchScoreLogs = () => {
        return this.fetchListThenSetState(
            'get_integral_record_list',
            'scoreLogs',
            {
                _: {
                    search: {
                        isBT: 1
                    }
                }
            }
        );
    };
}
