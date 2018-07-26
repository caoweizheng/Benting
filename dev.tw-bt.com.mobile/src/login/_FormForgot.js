/**
 * const prefixCls = 'styles-10052414';
 * const images = '/static/images/src/login';
 * @Author: Jack
 * @Date:   2017-12-29 10:31:19
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-29 10:37:03
 * @Path btWap \src\login\_FormForgot.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer, form } from '@';
import { Button } from 'antd-mobile';
import { Form } from 'components';
import Const from 'const';
import Styles from 'styles';

const prefixCls = 'styles-10052414';

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
                        name="m"
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
                        mobileName="m"
                        option={Const.rules.required}
                        placeholder="短信验证码"
                        updatePlaceholder={false}
                        smsType="pwd"
                    />
                    <Form.Input
                        label={
                            <img src={`${Const.__IMAGES__}/icon/lock.png`} />
                        }
                        name="newPwd"
                        option={Const.rules.required}
                        placeholder="8-16位的新密码"
                        type="password"
                        updatePlaceholder={false}
                    />
                </Form>
                <div className="p-sw mt-lg">
                    <Button
                        type="primary"
                        onClick={e => onSubmit(form, $.doFind)}
                    >
                        找回密码
                    </Button>
                </div>
            </div>
        );
    }
}
