/**
 * const prefixCls = 'styles-43992083';
 * const images = '/static/images/src/person/wallet/Exchange';
 * @Author: Jack
 * @Date:   2018-05-11 15:56:20
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:42:10
 * @Path btWap \src\person\wallet\Exchange\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { List, InputItem, Button } from 'antd-mobile';
import { Layout } from 'src/_';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-43992083';

@inject(store)
@observer
export default class Exchange extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { amount, btAmount } = $.getState('walletInfo');
        const { type, ipt } = $.getState();

        const isNido = type === 1;
        let left, right;
        if (isNido) {
            left = '灵动账户';
            right = '本汀账户';
        } else {
            right = '灵动账户';
            left = '本汀账户';
        }

        return (
            <Layout className={prefixCls} title="余额划转">
                <List>
                    <List.Item
                        className="text-desc text-sm"
                        extra={
                            <img
                                src={`${images}/exchange.png`}
                                style={{ width: '0.32rem', height: '0.32rem' }}
                                onClick={$.changeType}
                            />
                        }
                    >
                        <span className="text-sub">从</span>
                        <span className="ml-sm">{left}</span>
                        <span className="text-sub ml-sm">划转到</span>
                        <span className="ml-sm">{right}</span>
                    </List.Item>
                    <List.Item>
                        <span>{isNido ? '灵动账户' : '本汀账户'}</span>
                        <span className="p-amount">
                            {isNido ? amount : btAmount}
                        </span>
                    </List.Item>
                    <List.Item>
                        <span>{isNido ? '本汀账户' : '灵动账户'}</span>
                        <span className="p-amount">
                            {isNido ? btAmount : amount}
                        </span>
                    </List.Item>
                    <InputItem
                        placeholder="请输入"
                        extra={
                            <span
                                className="text-primary"
                                onClick={$.onAllClick}
                            >
                                全部划转
                            </span>
                        }
                        value={ipt}
                        onChange={$.onIptChange}
                    >
                        划转数量
                    </InputItem>
                </List>
                <div className="p-w mt-lg">
                    <Button type="primary" onClick={$.doExchange}>
                        确认划转
                    </Button>
                </div>

                <style jsx global>{`
                    .styles-43992083
                        .am-list-item
                        .am-list-line
                        .am-list-extra {
                        flex-basis: 20%;
                    }
                `}</style>
                <style jsx>{`
                    .styles-43992083 {
                    }
                    .img-arrow {
                        width: 0.32rem;
                        height: 0.32rem;
                    }
                    .p-amount {
                        margin-left: 0.44rem;
                    }
                `}</style>
            </Layout>
        );
    }
}
