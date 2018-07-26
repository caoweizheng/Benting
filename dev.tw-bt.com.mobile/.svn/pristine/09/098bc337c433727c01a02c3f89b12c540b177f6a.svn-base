/**
 * const prefixCls = 'styles-60586354';
 * const images = '/static/images/src/login';
 * @Author: Jack
 * @Date:   2017-12-29 10:06:02
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-16 17:08:17
 * @Path btWap \src\login\_formRegister.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer, form } from '@';
import { Button } from 'antd-mobile';
import { Form } from 'components';
import Const from 'const';

const prefixCls = 'styles-60586354';

@observer
@form
export default class _FormLogin extends React.Component {
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
                        option={Const.rules.required}
                        placeholder="短信验证码"
                        updatePlaceholder={false}
                        smsType="register"
                    />
                    <Form.Input
                        label={
                            <img src={`${Const.__IMAGES__}/icon/lock.png`} />
                        }
                        name="pwd"
                        option={Const.rules.required}
                        placeholder="8-16位的密码"
                        type="password"
                        updatePlaceholder={false}
                    />
                </Form>
                <div className="p-sw mt-lg">
                    <Button
                        type="primary"
                        onClick={() => onSubmit(form, $.doRegister)}
                    >
                        注册
                    </Button>
                </div>
            </div>
        );
    }
}
