/**
 * const prefixCls = 'styles-35516503';
 * const images = '/static/images/src/person/bank/Bind';
 * @Author: qizc
 * @Date:   2018-01-24 11:20:26
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-24 12:13:28
 * @Path btWap \src\person\bank\Bind\store.js
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
        state: {
            _filter: true
        }
    });

    /*==================== ACTION ====================*/
    //提交银行卡信息
    doSubmit = async value => {
        await Api.P('do_user_bind_bank', value);
        Utils.light('提交信息成功');
        Utils.router.back();
    };
}

export default store;
