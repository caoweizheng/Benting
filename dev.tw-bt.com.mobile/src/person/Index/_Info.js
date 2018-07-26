/**
 * const prefixCls = 'styles-75890261';
 * const images = '/static/images/src/person/Index';
 * @Author: qizc
 * @Date:   2017-12-26 17:44:15
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:29:31
 * @Path btWap \src\person\Index\_Info.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import Top from 'src/person/_/Top';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-75890261';

const _Info = (props, { $ }) => {
    const { className } = props;
    const {
        faceImg,
        niname = '-',
        assemblyName = '',
        btlevel = 0,
        btscore = 0,
        isFav
    } = $.getState('userInfo');
    const { btAmount = '0.00', sysAmount = 0 } = $.getState('walletInfo');
    const isHongren = isFav == 1;

    return (
        <div className={classNames(prefixCls, className)}>
            <Top
                extra={
                    <Flex className={`${prefixCls}__extra`}>
                        <Flex.Item
                            className={`${prefixCls}__extra-item`}
                            onClick={() => Utils.router.push('/person/score')}
                        >
                            <p>
                                <span className="text-primary text-bold">
                                    {Utils.formatNumber(btscore, 0)}
                                </span>
                            </p>
                            <p className="text-xs text-sub mt-sm">本汀积分</p>
                        </Flex.Item>
                        <Flex.Item
                            className={`${prefixCls}__extra-item`}
                            onClick={() => Utils.router.push('/person/wallet')}
                        >
                            <p>
                                <span className="text-primary text-bold">
                                    {Utils.formatNumber(btAmount)}
                                </span>
                            </p>
                            <p className="text-xs text-sub mt-sm">我的余额</p>
                        </Flex.Item>
                        <Flex.Item
                            className={`${prefixCls}__extra-item`}
                            onClick={() => Utils.router.push('/person/wallet/coin')}
                        >
                            <p>
                                <span className="text-primary text-bold">
                                    {Utils.formatNumber(sysAmount)}
                                </span>
                            </p>
                            <p className="text-xs text-sub mt-sm">我的金币</p>
                        </Flex.Item>
                    </Flex>
                }
            >
                <Flex className="p-sw">
                    <Img
                        className="ml-xs"
                        src={faceImg}
                        size="1rem"
                        circle
                        onClick={() => Utils.router.push('/person/user/info')}
                    />
                    <Flex.Item onClick={() => Utils.router.push('/person/user/info')}>
                        <Flex>
                            <span className="text-title">{niname}</span>
                            {isHongren && (
                                <img
                                    className="t-img img-hongren ml-xs"
                                    src={`${Const.__IMAGES__}/hongren.png`}
                                />
                            )}
                        </Flex>
                        {assemblyName ? (
                            <p className="text-xs text-sub mt-sm">{assemblyName}成员</p>
                        ) : (
                            <p className="text-xs text-sub mt-sm">{Utils.getBTLevel(btlevel)}</p>
                        )}
                    </Flex.Item>
                    <Img
                        className="mb-xs"
                        src={`${Const.__IMAGES__}/grade/${btlevel}.png`}
                        size="1rem"
                        style={{ backgroundColor: 'transparent' }}
                    />
                </Flex>
            </Top>

            <style jsx global>{`
                .styles-75890261 {
                }
                .${prefixCls}__extra {
                    padding: 0.48rem ${Styles.wind} 0;
                }
                .${prefixCls}__extra .am-flexbox-item {
                    margin-left: 0;
                }
                .${prefixCls}__extra-item {
                    text-align: center;
                    border-right: 0.01rem solid ${Styles.color_border};
                }
                .${prefixCls}__extra-item:last-child {
                    border-right: 0;
                }
            `}</style>
            <style jsx>{`
                .styles-75890261 {
                }
                .img-hongren {
                    width: 0.36rem;
                    height: 0.36rem;
                    opacity: 0.8;
                }
            `}</style>
        </div>
    );
};

_Info.contextTypes = {
    $: PropTypes.object
};

export default observer(_Info);
