/**
 * const prefixCls = 'styles-87300124';
 * const images = '/static/images/src/auth/Index';
 * @Author: qizc
 * @Date:   2017-12-26 16:08:58
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-04-16 13:48:27
 * @Path btWap \src\auth\Index\store.js
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
            queryCode: false,
            queryList: Const.__EMPTY__,
            _loaded: false,
            _filter: true
        }
    });

    /*==================== Action ====================*/
    //查询
    doCodeQuery = async value => {
        const code = value.code;

        if (!/^\d{12}$/.test(code) && !/^[A-Z]{2}\d{12}$/.test(code)) {
            Utils.light('防伪码为12位数字或2位大写字母加12位数字');
            return false;
        }

        this.setState({
            _loaded: true
        });

        const data = await Api.P('get_code_query', {
            _: {
                search: {
                    codeNo: code
                }
            }
        });

        const qlist = await Api.P('get_code_query_list', {
            _: {
                limit: 0,
                search: {
                    codeNo: code
                }
            }
        });

        this.setState({
            queryList: qlist,
            queryCode: data,
            _loaded: false
        });
    };
}

export default store;
