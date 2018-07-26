/**
 * const prefixCls = 'styles-7929513';
 * const images = '/static/images/src/person/address/Update';
 * @Author: qizc
 * @Date:   2018-01-19 10:24:31
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-19 10:34:40
 * @Path btWap \src\person\address\Update\store.js
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
        addressInfo: {}
    });

    initFetch = {
        update: ['fetchAddressInfo']
    };

    /*==================== DS ====================*/
    //地址详情
    fetchAddressInfo = () => {
        const { id } = this.getParams().params;
        return this.fetchThenSetState('get_new_address_list', 'addressInfo', {
            _: {
                search: {
                    addressId: id
                }
            }
        });
    };

    /*==================== Action ====================*/
    doUpdate = async values => {
        const { id } = this.getParams().params;
        [values.province, values.city, values.district] = values.city.split(
            ','
        );
        await Api.P('do_new_set_address', { addressId: id, ...values });
        Utils.light('修改成功');
        Utils.router.back();
    };
}
