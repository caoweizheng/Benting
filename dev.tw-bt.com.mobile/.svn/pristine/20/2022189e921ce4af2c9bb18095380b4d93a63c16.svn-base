/**
 * const prefixCls = 'styles-98380373';
 * const images = '/static/images/src/person/address/Index';
 * @Author: qizc
 * @Date:   2018-01-19 09:22:12
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-19 10:37:12
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

    //删除
    doDelete = async addressId => {
        await Api.P('do_new_delete_address', {
            addressId
        });
        Utils.light('删除成功');
        this.fetchAddressList();
    };

    //修改默认地址
    doUpdate = async (addressId, isdefault) => {
        const { orderId } = this.getParams();
        await Api.P('do_new_set_address', {
            addressId: addressId,
            default: isdefault == '0' ? '1' : '0'
        });
        Utils.light('设置成功');
        this.fetchAddressList();
    };
}

export default store;
