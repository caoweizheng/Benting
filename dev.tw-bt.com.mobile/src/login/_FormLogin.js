/**
 * const prefixCls = 'styles-33331673';
 * const images = '/static/images/src/login';
 * @Author: Jack
 * @Date:   2017-12-29 10:05:56
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-16 18:45:17
 * @Path btWap \src\login\_FormLogin.js
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

const prefixCls = 'styles-33331673';
const lsKey = `${Const.__LS_PREFIX__}LOGIN`;

@observer
@form
export default class _FormLogin extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentDidMount() {
        const { form } = this.props;
        const lsData = Utils.lsGet(lsKey);

        form.setFieldsValue({
            account: lsData.account || '',
            pwd: lsData.pwd || ''
        });
    }

    render() {
        const { $ } = this.context;
        const { form, onSubmit, className } = this.props;

        return (
            <div className={classNames(prefixCls, className)}>
                <Form form={form}>
                    <Form.Input
                        label={
                            <img src={`${Const.__IMAGES__}/icon/user.png`} />
                        }
                        name="account"
                        option={Const.rules.required}
                        placeholder="手机号/灵动账户"
                        updatePlaceholder={false}
                    />
                    <Form.Input
                        label={
                            <img src={`${Const.__IMAGES__}/icon/lock.png`} />
                        }
                        name="pwd"
                        option={Const.rules.required}
                        placeholder="密码"
                        type="password"
                        updatePlaceholder={false}
                    />
                </Form>
                <div className="p-sw text-right">
                    <span
                        className="text-sub"
                        onClick={() => $.setState({ type: 2 })}
                    >
                        忘记密码?
                    </span>
                </div>
                <div className="p-w mt-sm">
                    <Button
                        type="primary"
                        onClick={() => onSubmit(form, $.doLogin)}
                    >
                        登录
                    </Button>
                </div>
                <img
                    className="img-baidu"
                    src={`${Const.__IMAGES__}/icon/baidu.png`}
                    onClick={$.doBaiduLogin}
                />

                <style jsx>{`
                    .styles-33331673 {
                        position: relative;
                        min-height: 6.4rem;
                    }
                    .img-baidu {
                        position: absolute;
                        left: 50%;
                        bottom: 0.32rem;
                        width: 0.64rem;
                        height: 0.64rem;
                        transform: translateX(-50%);
                    }
                `}</style>
            </div>
        );
    }
}
