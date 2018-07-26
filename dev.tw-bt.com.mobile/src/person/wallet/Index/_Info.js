/**
 * const prefixCls = 'styles-17548351';
 * const images = '/static/images/src/person/wallet/Index';
 * @Author: Jack
 * @Date:   2018-01-08 11:40:31
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:42:23
 * @Path btWap \src\person\wallet\Index\_Info.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import Top from 'src/person/_/Top';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-17548351';

const _Info = (props, { $ }) => {
    const { btAmount = '0.00' } = $.getState('walletInfo');

    return (
        <Top>
            <div className="info text-center">
                <p className="text-xs">我的余额</p>
                <p className="p-money text-primary text-bold">¥ {Utils.formatNumber(btAmount)}</p>
                <p className="p-desc text-xs text-sub">余额可用于充值金币和购买商品</p>
            </div>
            <Flex>
                <Flex.Item
                    className={`${prefixCls}__btn`}
                    onClick={() => Utils.router.push('/person/bank')}
                >
                    银行卡
                </Flex.Item>
                <Flex.Item
                    className={`${prefixCls}__btn`}
                    onClick={() => Utils.goToPay()}
                >
                    充值
                </Flex.Item>
                <Flex.Item
                    className={`${prefixCls}__btn`}
                    onClick={() =>
                        Utils.router.push('/person/wallet/withdrawals')}
                >
                    提现
                </Flex.Item>
            </Flex>

            <style jsx global>{`
                .styles-17548351 {
                }
                .${prefixCls}__btn {
                    padding: 0.28rem 0;
                    margin-left: 0 !important;
                    text-align: center;
                    font-size: ${Styles.font_sm};
                    border-top: 0.01rem solid ${Styles.color_border};
                    border-right: 0.01rem solid ${Styles.color_border};
                }
            `}</style>
            <style jsx>{`
                .styles-17548351 {
                }
                .info {
                    padding: 0.56rem 0;
                }
                .p-money {
                    margin-top: 0.32rem;
                    font-size: 0.64rem;
                }
                .p-desc {
                    margin-top: 0.48rem;
                }
            `}</style>
        </Top>
    );
};

_Info.contextTypes = {
    $: PropTypes.object
};

export default observer(_Info);
