/**
 * const prefixCls = 'styles-3449594';
 * const images = '/static/images/src/person/grade/Index';
 * @Author: Jack
 * @Date:   2018-01-12 17:56:11
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-15 14:27:39
 * @Path btWap \src\person\grade\Index\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import G from 'stores/g';

export default class Store extends common {
    @observable
    state = this.initState({
        //用户信息
        userInfo: {}
    });

    initFetch = {
        every: ['fetchUserInfo']
    };

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };
}
