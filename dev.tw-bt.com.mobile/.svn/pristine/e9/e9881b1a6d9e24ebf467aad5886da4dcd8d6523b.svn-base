/**
 * const prefixCls = 'styles-3639986';
 * const images = '/static/images/src/person/wallet/Coin';
 * @Author: Jack
 * @Date:   2018-01-08 14:19:43
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-04-17 14:18:03
 * @Path btWap \src\person\wallet\Coin\_Info.js
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

const prefixCls = 'styles-3639986';

const _Info = (props, { $ }) => {
    const { sysAmount = '0.00' } = $.getState('walletInfo');

    return (
        <Top>
            <div className="info text-center">
                <p className="text-xs">我的金币</p>
                <p className="p-money">
                    <span className="text-primary text-bold">
                        {Utils.formatNumber(sysAmount)}
                    </span>
                    <span className="text-sm ml-xs">个</span>
                </p>
                <p className="p-desc p-w text-xs text-sub">
                    <span>可用于购买产品、踩楼、竞拍、打赏、竞猜等活动</span>
                    <span
                        className="text-primary ml-xs"
                        style={{ textDecoration: 'underline' }}
                        onClick={() =>
                            Utils.router.push('/person/wallet/coin_desc')}
                    >
                        获取方式
                    </span>
                </p>
            </div>
            <Flex>
                <Flex.Item
                    className={`${prefixCls}__btn`}
                    onClick={() => Utils.router.push('/person/wallet/coin_buy')}
                >
                    兑换金币
                </Flex.Item>
                <Flex.Item
                    className={`${prefixCls}__btn`}
                    onClick={() => Utils.router.push('/bbs')}
                >
                    前往汀吧
                </Flex.Item>
            </Flex>

            <style jsx global>{`
                .styles-3639986 {
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
                .styles-3639986 {
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
