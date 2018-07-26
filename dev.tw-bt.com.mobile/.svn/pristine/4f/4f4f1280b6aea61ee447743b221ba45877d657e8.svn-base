/**
 * const prefixCls = 'styles-10052414';
 * const images = '/static/images/src/login';
 * @Author: Jack
 * @Date:   2017-12-29 10:31:19
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-16 18:22:21
 * @Path btWap \src\login\_FormBaiduLogin.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer, form } from '@';
import { Button } from 'antd-mobile';
import { Form } from 'components';
import Const from 'const';

const prefixCls = 'styles-10053414';

@observer
@form
export default class _FormForgot extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { form, onSubmit, className } = this.props;

        return (
            <div className={classNames(prefixCls, className)}>
                <Form form={form}>
                    <Form.Input
                        label={
                            <img src={`${Const.__IMAGES__}/icon/mobile.png`} />
                        }
                        name="mobile"
                        option={Const.rules.gen('mobile')}
                        type="phone"
                        placeholder="手机号"
                        updatePlaceholder={false}
                    />
                    <Form.Captcha
                        label={
                            <img src={`${Const.__IMAGES__}/icon/code.png`} />
                        }
                        name="code"
                        mobileName="mobile"
                        option={Const.rules.required}
                        placeholder="短信验证码"
                        updatePlaceholder={false}
                        smsType="login"
                    />
                </Form>
                <div className="p-sw mt-lg">
                    <Button
                        type="primary"
                        onClick={() => onSubmit(form, $.doBaiduBind)}
                    >
                        百度授权登录绑定手机
                    </Button>
                </div>
            </div>
        );
    }
}
