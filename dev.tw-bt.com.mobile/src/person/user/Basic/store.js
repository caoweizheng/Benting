/**
 * const prefixCls = 'styles-58644182';
 * const images = '/static/images/src/person/user/basic';
 * @Author: qizc
 * @Date:   2018-02-24 13:49:33
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-25 09:28:04
 * @Path btWap \src\person\user\basic\store.js
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
        Utils.router.push('/person');
    };
}
