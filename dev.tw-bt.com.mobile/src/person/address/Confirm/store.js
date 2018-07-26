/**
 * const prefixCls = 'styles-98380373';
 * const images = '/static/images/src/person/address/Index';
 * @Author: qizc
 * @Date:   2018-01-19 09:22:12
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-19 11:02:31
 * @Path btWap \src\person\address\Index\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';

class store extends common {
    @observable
    state = this.initState({
        //收货地址列表
        addressList: Const.__EMPTY__
    });

    initFetch = {
        every: ['fetchAddressList']
    };

    /*==================== DS ====================*/
    //收货地址列表
    fetchAddressList = () => {
        return this.fetchThenSetState('get_new_address_list', 'addressList');
    };

    // 设置地址
    onChange = async value => {
        const { id } = this.getParams().params;

        await Api.P('do_set_order_address', {
            orderId: id,
            addressId: value
        });
        Utils.light('设置地址成功');
        Utils.router.back();
    };
}

export default store;
