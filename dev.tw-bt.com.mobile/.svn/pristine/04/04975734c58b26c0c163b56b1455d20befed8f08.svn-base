/**
 * const prefixCls = 'styles-35742783';
 * const images = '/static/images/src/member/Index';
 * @Author: qizc
 * @Date:   2017-12-25 15:43:53
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-26 15:13:14
 * @Path btWap \src\member\Index\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import G from 'stores/g';

export default class Store extends common {
    @observable
    state = this.initState({
        //用户信息
        userInfo: {
            _filter: true
        }
    });

    initFetch = {
        static: [['fetchUserInfo', 'userInfo']]
    };

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };
}
