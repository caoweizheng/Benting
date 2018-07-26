/**
 * const prefixCls = 'styles-10248636';
 * const images = '/static/images/src/login';
 * @Author: Jack
 * @Date:   2017-12-28 17:37:56
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-17 14:31:05
 * @Path btWap \src\login\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Utils from 'utils';
import Const from 'const';
import G from 'stores/g';

const lsKey = `${Const.__LS_PREFIX__}LOGIN`;

export default class Store extends common {
    @observable
    state = this.initState({
        state: {
            //0登录 1注册
            type: 0,
            _filter: true
        }
    });

    /*==================== Action ====================*/
    doLogin = async values => {
        await G.doLoginByPwd(values);

        Utils.light('登录成功');
        Utils.lsSet(lsKey, {
            account: values.account,
            pwd: values.pwd
        });

        setTimeout(() => {
            //若回调跳转方法返回false，跳到个人中心
            if (!G.doJump()) {
                Utils.router.push('/person');
            }
        }, 200);
    };

    doAutoLogin = async values => {
        await G.doLoginByPwd({
            account: values.mobile,
            pwd: values.pwd
        });

        Utils.router.push('/person/user/basic');
    };

    doRegister = async values => {
        await Api.P('do_user_register', values);

        Utils.light('注册成功');

        setTimeout(() => {
            this.doAutoLogin(values);
        }, 200);
    };

    doFind = async values => {
        await Api.P('do_find_pwd', values);

        Utils.light('重设密码成功');
        this.setState({ type: 0 });
    };

    doBaiduLogin = async () => {
        const { pathname } = G.getParams('jumpUrl');

        let query = {};
        if (pathname) {
            query.path = `${Const.__WEB__}${pathname}`;
        } else {
            query.path = `${Const.__WEB__}/person`;
        };

        const data = await Api.P('get_baidu_authorize', query);

        window.location = data;
    };

    doBaiduBind = async values => {
        let { data } = Utils.getUrlArgObject();

        if (data) {
            data = JSON.parse(data);

            const tk = await Api.P('do_baidu_bind', {
                ...values,
                openid: data.data.openid
            });

            G.updateTk(tk);
            Utils.light('绑定成功');
            Utils.router.push('/person');
        }
    };

    /*==================== Page ====================*/
    toggleType = newType => {
        const { type } = this.getState();

        if (newType === type) return;

        this.setState({
            type: newType
        });
    };
}
