/**
 * const prefixCls = 'styles-14697061';
 * const images = '/static/images/src/pay/Do';
 * @Author: Jack
 * @Date:   2018-01-12 14:50:14
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\pay\Do\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, form, observer } from '@';
import { Flex, List, Radio } from 'antd-mobile';
import { Form } from 'components';
import { Layout } from 'src/_';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-14697061';

@inject(store)
@form
@observer
export default class Do extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    state = {
        focused: true
    };

    componentDidMount() {
        const { $ } = this.context;

        if (Const.__WX__) {
            $.setState({
                payType: 'wx'
            });
        } else {
            $.setState({
                payType: 'alipay'
            });
        }
    }

    render() {
        const { $ } = this.context;
        const { form, onSubmit } = this.props;
        const { focused } = this.state;
        const { payType } = $.getState();

        return (
            <Layout className={prefixCls} title="充值余额" hideLogo>
                <div className="top text-center">
                    <img
                        className="img-logo"
                        src={`${Const.__IMAGES__}/logo_bottom.png`}
                        onClick={() => Utils.router.push('/')}
                    />
                </div>
                <Form className="mt-d" form={form}>
                    <Form.MoneyInput
                        name="price"
                        label="充值金额"
                        option={Const.rules.required}
                        focused={focused}
                        placeholder="请输入"
                        extra={<span className="text-desc">元</span>}
                        onBlur={() => this.setState({ focused: false })}
                        onFocus={() => {
                            this.setState({ focused: true });
                            Utils.scrollTo(1000);
                        }}
                    />
                </Form>
                <List
                    className="mt-d"
                    renderHeader={() => '选择支付方式'}
                    renderFooter={() => (
                        <Flex>
                            <img
                                src={`${Const.__IMAGES__}/prompt.png`}
                                style={{ width: '0.44rem', height: '0.44rem' }}
                            />
                            <span className="ml-xs">本汀官网内余额提现手续费为</span>
                            <span className="text-primary ml-xs">1%</span>
                            <span className="ml-xs">。</span>
                        </Flex>
                    )}
                >
                    <Radio.RadioItem
                        thumb={<img src={`${Const.__IMAGES__}/wx.png`} />}
                        checked={payType === 'wx'}
                        onChange={() => $.setState({
                            payType: 'wx'
                        })}
                    >
                        微信
                    </Radio.RadioItem>
                    <Radio.RadioItem
                        thumb={<img src={`${Const.__IMAGES__}/alipay.png`} />}
                        checked={payType === 'alipay'}
                        onChange={() => {
                            if (Const.__WX__) {
                                Utils.light('若需支付宝支付请使用浏览器打开官网');

                            } else {
                                $.setState({
                                    payType: 'alipay'
                                });
                            }
                        }}
                    >
                        支付宝
                    </Radio.RadioItem>
                </List>
                <Form.Button onClick={() => onSubmit(form, $.doCharge)}>
                    确认充值
                </Form.Button>

                <style jsx>{`
                    .styles-14697061 {
                    }
                    .top {
                        height: 2.33rem;
                        background: ${Styles.color_header};
                    }
                    .img-logo {
                        width: 2.08rem;
                        height: 1.58rem;
                    }
                `}</style>
            </Layout>
        );
    }
}
