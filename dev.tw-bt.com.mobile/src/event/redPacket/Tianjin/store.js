/**
 * const prefixCls = 'styles-69132875';
 * const images = '/static/images/src/event/redPacket/Tianjin';
 * @Author: Jack
 * @Date:   2018-02-06 11:27:59
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-25 09:58:54
 * @Path btWap \src\event\redPacket\Tianjin\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';

class store extends common {
    @observable
    state = this.initState({
        state: {
            float: false,
            mobile: '',
            code: ''
        },

        userInfo: {}
    });

    initFetch = {
        static: [
            ['fetchUserInfo', 'userInfo'],
        ]
    };

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };

    /*==================== Page ====================*/
    onMobileChange = e => {
        if (e.target.value.length > 11) {
            return;
        }

        this.setState({
            mobile: e.target.value
        });
    };

    onCodeChange = e => {
        if (e.target.value.length > 6) {
            return;
        }

        this.setState({
            code: e.target.value
        });
    };

    doRegister = async () => {
        const { mobileExt } = this.getState('userInfo');

        if (mobileExt) {
            Utils.router.push('/event/red_packet/tianjin_get');

        } else {
            const { mobile } = this.getState();

            if (mobile === '') {
                Utils.light('请输入手机号码');
                return;
            }

            if (!Utils.validate(mobile, 'mobile')) {
                Utils.light('手机号码格式不对');
                return;
            }

            await Api.P('do_sms_send-by-tpl', {
                m: mobile,
                tplName: 'send_tianjin_code'
            });

            this.setState({
                float: true
            });
        }
    };

    doGet = async () => {
        const { mobile, code } = this.getState();

        if (code === '') {
            Utils.light('请输入手机验证码');
            return;
        }

        const tk = await Api.P('do_event-tianjin_register', {
            phone: mobile,
            code
        });
        G.updateTk(tk);

        this.doHide();
        Utils.router.push('/event/red_packet/tianjin_get');
    };

    doHide = () => {
        this.setState({
            float: false
        });
    };
}

export default store;
