/**
 * const prefixCls = 'styles-11079852';
 * const images = '/static/images/src/person/wallet/CoinBuy';
 * @Author: Jack
 * @Date:   2018-05-25 15:38:09
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:41:04
 * @Path btWap \src\person\wallet\CoinBuy\_Block.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Flex } from 'antd-mobile';
import Utils from 'utils';
import Styles from 'styles';
import { images, coinDS } from './ds';

const prefixCls = 'styles-42880315';

const _Block = (props, { $ }) => {
    const { className } = props;
    const { btAmount = '0.00' } = $.getState('walletInfo');

    return (
        <List
            className={classNames(prefixCls, className)}
            renderHeader={() => (
                <Flex>
                    <Flex.Item>
                        <Flex>
                            <img src={`${images}/coin.png`} />
                            <span className="text-md text-title ml-sm">
                                兑换金币
                            </span>
                        </Flex>
                    </Flex.Item>
                    <span className="text-sm text-sub">账户余额：{btAmount}</span>
                    <span
                        className="text-sm text-primary ml-xs"
                        style={{ textDecoration: 'underline' }}
                        onClick={() => Utils.goToPay()}
                    >
                        充值
                    </span>
                </Flex>
            )}
        >
            <div className="wrap">
                {coinDS.map(item => (
                    <div
                        key={item.value}
                        className="item"
                        onClick={() => $.onConfirm(item.label)}
                    >
                        <p className="text-sm text-center">{item.value} 枚</p>
                        <p className="text-xs mt-sm text-center">
                            售价：¥{item.label}
                        </p>
                    </div>
                ))}
            </div>

            <style jsx global>{`
                .styles-42880315 {
                }
                .${prefixCls} .am-list-header {
                    background: transparent;
                }
            `}</style>
            <style jsx>{`
                .styles-42880315 {
                }
                .wrap {
                    padding: ${Styles.wind};
                }
                img {
                    width: 0.44rem;
                    height: 0.44rem;
                }
                .item {
                    display: inline-block;
                    width: 31.33333%;
                    padding: 0.24rem 0;
                    margin-right: 3%;
                    margin-bottom: 3%;
                    border: 0.01rem solid ${Styles.color_main};
                }
                .item p {
                    color: ${Styles.color_main};
                }
                .item:active {
                    background: ${Styles.color_main};
                }
                .item:active p {
                    color: #fff;
                }
                .item:nth-of-type(3n) {
                    margin-right: 0;
                }
                .item:last-child {
                    margin-bottom: 0;
                }
            `}</style>
        </List>
    );
};

_Block.contextTypes = {
    $: PropTypes.object
};

export default observer(_Block);
