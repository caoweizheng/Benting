/**
 * const prefixCls = 'styles-29254079';
 * const images = '/static/images/src/person/address/Add';
 * @Author: qizc
 * @Date:   2018-01-19 10:04:55
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:19:36
 * @Path btWap \src\person\address\Add\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Utils from 'utils';

export default class Store extends common {
    /*==================== Action ====================*/
    doAdd = async values => {
        [values.province, values.city, values.district] = values.city.split(
            ','
        );
        
        await Api.P('do_new_set_address', values);

        Utils.light('添加成功');
        Utils.router.back();
    };
}
