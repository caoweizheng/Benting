/**
 * const prefixCls = 'styles-54787061';
 * const images = '/static/images/src/login';
 * @Author: Jack
 * @Date:   2017-12-28 17:35:37
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-17 12:21:11
 * @Path btWap \src\login\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _FormLogin from './_FormLogin';
import _FormRegister from './_FormRegister';
import _FormForgot from './_FormForgot';
import _FormBaiduLogin from './_FormBaiduLogin';
import Styles from 'styles';
import Utils from 'utils';
import G from 'stores/g';
import store from './store';
import { images } from './ds';

@inject(store)
@observer
export default class Login extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentDidMount() {
        // 百度登录后回调，处理参数，只处理未绑定的情况。
        let { data } = Utils.getUrlArgObject();
        if (data) {
            const { $ } = this.context;
            data = JSON.parse(data);

            // 未绑定账号,请进行绑定操作
            if (data.code == 100003) {
                $.setState({
                    type: 3
                });
            }
        }
    }

    render() {
        const { $ } = this.context;
        const { type } = $.getState();

        let ElForm;
        switch (type) {
            case 1:
                ElForm = <_FormRegister />;
                break;

            case 2:
                ElForm = <_FormForgot />;
                break;

            case 3:
                ElForm = <_FormBaiduLogin />;
                break;

            default:
                ElForm = <_FormLogin />;
                break;
        }

        return (
            <Layout title="本汀官网" hideHeader>
                <div className="top">
                    <div
                        className="img-logo"
                        onClick={() => Utils.router.push('/')}
                    />
                    <div
                        className={classNames('btn btn-login', {
                            'btn-active': type === 0
                        })}
                        onClick={() => $.toggleType(0)}
                    >
                        登录
                    </div>
                    <div
                        className={classNames('btn btn-register', {
                            'btn-active': type === 1
                        })}
                        onClick={() => $.toggleType(1)}
                    >
                        注册
                    </div>
                </div>
                {ElForm}

                <style jsx>{`
                    .top {
                        position: relative;
                        padding-bottom: 52%;
                        ${Styles._bg};
                        background-image: url(${images}/bg.jpg);
                    }
                    .img-logo {
                        position: absolute;
                        top: 0;
                        left: 50%;
                        margin-top: 8%;
                        width: 1.6rem;
                        height: 1.6rem;
                        transform: translateX(-50%);
                    }
                    .btn {
                        position: absolute;
                        width: 50%;
                        padding: 0.36rem 0;
                        text-align: center;
                        color: #fff;
                        bottom: 0;
                    }
                    .btn-login {
                        left: 0;
                    }
                    .btn-register {
                        left: 50%;
                    }
                    .btn-active:before {
                        content: '';
                        position: absolute;
                        left: 50%;
                        bottom: -0.01rem;
                        border-left: 0.12rem solid transparent;
                        border-right: 0.12rem solid transparent;
                        border-bottom: 0.16rem solid ${Styles.color_bg};
                        transform: translateX(-50%);
                    }
                `}</style>
            </Layout>
        );
    }
}
