/**
 * const prefixCls = 'styles-3692297';
 * const images = '/static/images/src/person/user/Info';
 * @Author: Jack
 * @Date:   2018-01-10 12:35:10
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-04-20 17:27:17
 * @Path btWap \src\person\user\Info\store.js
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
    state = this.initState({
        //用户信息
        userInfo: {}
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

    /*==================== Action ====================*/
    doUpdate = async values => {
        const { niname } = G.getState('userInfo');
        const _values = { ...values };

        if (_values.niname === niname) {
            delete _values.niname;
        }

        if (_values.birDay) {
            const d = new Date(_values.birDay);
            _values.birDay = `${d.getFullYear()}-${d.getMonth() +
                1}-${d.getDate()}`;
        }

        await Api.P('do_user_info_update', _values);
        await G.fetchUserInfo();

        Utils.light();
    };
}
