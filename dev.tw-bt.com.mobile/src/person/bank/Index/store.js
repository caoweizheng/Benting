/**
 * const prefixCls = 'styles-64312997';
 * const images = '/static/images/src/person/bank/Index';
 * @Author: qizc
 * @Date:   2018-01-24 11:20:24
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-24 11:39:43
 * @Path btWap \src\person\bank\Index\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Const from 'const';

class store extends common {
    @observable
    state = this.initState({
        //银行信息
        bankInfo: Const.__EMPTY__
    });

    initFetch = {
        one: ['fetchBankInfo']
    };

    /*==================== DS ====================*/
    //银行信息
    fetchBankInfo = () => {
        return this.fetchThenSetState('get_user_bank_info', 'bankInfo');
    };
}

export default store;
