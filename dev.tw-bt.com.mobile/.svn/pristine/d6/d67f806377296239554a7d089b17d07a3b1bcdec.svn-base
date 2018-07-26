/**
 * const prefixCls = 'styles-14769950';
 * const images = '/static/images/src/pay/Result';
 * @Author: Jack
 * @Date:   2018-01-13 10:06:44
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:17:17
 * @Path btWap \src\pay\Result\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, form, observer } from '@';
import { Layout } from 'src/_';
import { List, Result, Button } from 'antd-mobile';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';
import { images, payState, orderType } from './ds';

const prefixCls = 'styles-14769950';

@inject(store)
@observer
export default class _Result extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    renderIcon() {
        const { $ } = this.context;
        const orderInfo = $.getState('orderInfo');

        let img, message;
        const title = Utils.getLabel(payState, orderInfo.payState);
        
        switch (title) {
            case '未支付':
                img = (
                    <img
                        src={`${images}/wait.png`}
                        style={{ width: '1.28rem', height: '1.28rem' }}
                    />
                );
                message = '可刷新获取最新详情';
                break;

            case '已支付':
                img = (
                    <img
                        src={`${images}/success.png`}
                        style={{ width: '1.28rem', height: '1.28rem' }}
                    />
                );
                message = '　';
                break;

            default:
                img = (
                    <img
                        src={`${images}/fail.png`}
                        style={{ width: '1.28rem', height: '1.28rem' }}
                    />
                );
                message = '请您检查核实交易情况，如有疑问请联系客服';
                break;
        }

        return (
            <Result
                img={img}
                title={title}
                message={message}
                style={{ background: 'transparent' }}
            />
        );
    }

    renderDetail() {
        const { $ } = this.context;
        const orderInfo = $.getState('orderInfo');

        return (
            <List className={`${prefixCls}__detail`}>
                <List.Item extra={`¥ ${orderInfo.amount}`}>支付金额</List.Item>
                <List.Item
                    extra={Utils.getLabel(orderType, orderInfo.orderType)}
                >
                    支付方式
                </List.Item>
                <List.Item extra={Utils.date(orderInfo.payTime)}>
                    支付时间
                </List.Item>
                <List.Item extra={orderInfo.orderNo}>订单编号</List.Item>

                <style jsx global>{`
                    .styles-14769950 {
                    }
                    .${prefixCls}__detail
                        .am-list-item
                        .am-list-line
                        .am-list-extra {
                        flex-basis: 64%;
                    }
                `}</style>
            </List>
        );
    }

    renderBtns() {
        return (
            <div className="p-sw mt-lg">
                <Button
                    type="primary"
                    onClick={() => Utils.router.push('/person/wallet')}
                >
                    我的余额
                </Button>
                <Button
                    className="mt-d"
                    onClick={() => Utils.router.push('/person')}
                >
                    个人中心
                </Button>
            </div>
        );
    }

    render() {
        const { $ } = this.context;
        const orderInfo = $.getState('orderInfo');

        if (!orderInfo._loaded) return null;

        return (
            <Layout title="支付结果">
                {this.renderIcon()}
                {this.renderDetail()}
                {this.renderBtns()}
            </Layout>
        );
    }
}
