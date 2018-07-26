/**
 * const prefixCls = 'styles-71308195';
 * @Author: Jack
 * @Date:   2017-12-04 14:59:03
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-29 10:27:34
 * @Path nidosport@next \components\Form\Captcha\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'antd-mobile';
import Input from '../Input';
import Api from 'api';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-71308195';

export default class Captcha extends React.Component {
    static propsTypes = {
        smsType: PropTypes.oneOf[('normal', 'register', 'login')],
        mobileName: PropTypes.string
    };

    static defaultProps = {
        smsType: 'normal',
        mobileName: 'mobile'
    };

    state = {
        timeout: 0
    };
    timeoutId;

    componentWillUnmount() {
        if (this.timeoutId) clearInterval(this.timeoutId);
    }

    doSend = async values => {
        const { form, mobileName, smsType } = this.props;

        let api;
        switch (smsType) {
            case 'normal':
                api = 'do_send_captcha';
                break;

            case 'normal-DB':
                api = 'do_send_captcha-DB';
                break;

            case 'register':
                api = 'do_send_register_captcha';
                break;

            case 'login':
                api = 'do_send_login_captcha';
                break;

            case 'pwd':
                api = 'do_send_pwd_captcha';
                break;
        }

        await Api.P(api, {
            m: form.getFieldValue(mobileName).replace(/\s/g, '')
        });

        Utils.light();
        this.setSendTimeout();
    };

    setSendTimeout = async () => {
        await this.setState({
            timeout: 60
        });

        this.timeoutId = setInterval(() => {
            if (this.state.timeout) {
                const next = this.state.timeout - 1;

                this.setState({
                    timeout: next
                });

                if (next === 0) {
                    clearInterval(this.timeoutId);
                    this.timeoutId = undefined;
                }
            }
        }, 1000);
    };

    renderButton() {
        const { form, mobileName } = this.props;
        const { timeout } = this.state;

        const value = form.getFieldValue(mobileName);
        const error = form.getFieldError(mobileName);
        const disabled = !value || !!error || !!timeout;

        return (
            <Button
                type="primary"
                inline
                size="small"
                disabled={disabled}
                onClick={this.doSend}
            >
                {timeout ? `${timeout}秒` : '获取验证码'}
            </Button>
        );
    }

    render() {
        const {
            extra,
            option,
            mobileName,
            smsType,
            className,
            ...other
        } = this.props;

        return (
            <div className={prefixCls}>
                <Input
                    className={className}
                    option={Const.rules.gen('number')}
                    type="number"
                    maxLength={6}
                    extra={this.renderButton()}
                    updatePlaceholder={false}
                    {...other}
                />

                <style jsx global>{`
                    .styles-71308195 {};
                    .${prefixCls} .am-list-line {
                        overflow: initial;
                    }
                    .${prefixCls} .am-input-extra {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: initial;
                    }
                    .${prefixCls} .am-button {
                        font-size: 0.2rem;
                    }
                `}</style>
            </div>
        );
    }
}
