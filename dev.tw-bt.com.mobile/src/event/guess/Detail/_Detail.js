/**
 * const prefixCls = 'styles-20010388';
 * const images = '/static/images/src/event/guess/Detail';
 * @Author: qizc
 * @Date:   2018-02-03 11:51:59
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\event\guess\Detail\_Detail.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, Button } from 'antd-mobile';
import { Img } from 'components';
import Tag from 'src/_/Tag';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-20010388';

const _Detail = (props, { $ }) => {
    const { className, isEnd } = props;
    const {
        guessType,
        dataType,
        goods,
        goodsImg,
        goodsName,
        totalNum = 0,
        top = 1,
        perPrice = 0,
        partNum = 0,
        endTime,
        cutoffTime
    } = $.getState('guessDetail');

    let typeName, elTag;
    if (guessType == 2) {
        typeName = '金币';
    } else {
        if (dataType == 2) {
            typeName = '本汀积分';
            elTag = <Tag className="ml-sm">本汀积分</Tag>;
        } else {
            typeName = '灵动积分';
            elTag = (
                <Tag className="ml-sm" type="nidosport">
                    灵动积分
                </Tag>
            );
        }
    }

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="content">
                <Flex justify="between" align="start">
                    <Flex.Item>
                        <p className="p-title text-main">{goods}</p>
                    </Flex.Item>
                    {elTag}
                </Flex>
                <Flex className="mt-sm" align="start">
                    <Img src={goodsImg} size="1.28rem" />
                    <Flex.Item>
                        <Flex>
                            <Flex.Item>
                                <p className="text-clamp-1 p-title text-title text-sm">
                                    {goodsName}
                                </p>
                            </Flex.Item>
                            <p className="ml-sm text-sm">数量：{1}</p>
                        </Flex>
                        <p className="text-xs mt-xs">奖励名次：猜中名单前{top}名</p>
                        {!!cutoffTime && (
                            <p className="text-xs mt-sm text-sub">
                                领奖截止时间：{Utils.date('m月d日 H:i:s', cutoffTime)}
                            </p>
                        )}
                    </Flex.Item>
                </Flex>
                <Flex justify="between" className="mt-md text-bold">
                    <p>
                        <span>竞猜消耗：</span>
                        <span className="text-primary ml-xs">
                            {parseFloat(perPrice)}
                            {typeName}
                        </span>
                    </p>
                    <p>
                        <span>每人竞猜次数：</span>
                        <span className="text-primary ml-xs">{partNum}</span>
                    </p>
                </Flex>

                <p className="text-xs text-sub mt-sm">
                    <span>{isEnd ? '共参与' : '已参与'}</span>
                    <span className="text-primary ml-xs mr-xs">
                        {totalNum || 0}
                    </span>
                    <span>人次</span>
                    {!!endTime && (
                        <span className="pull-right">
                            结束时间：{Utils.date('m月d日 H:i:s', endTime)}
                        </span>
                    )}
                </p>
            </div>
            {guessType == 2 && (
                <div className="content">
                    <p className="text-clamp-2 text-sub text-xs">
                        本活动仅支持金币支付，请提前准备好金币，以免错失机会。
                    </p>
                </div>
            )}

            <style jsx>{`
                .styles-20010388 {
                    background: #fff;
                    border-top: 0.01rem solid ${Styles.color_border};
                }
                .content {
                    padding: ${Styles.wind};
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
                .p-title {
                    min-height: 0.39rem;
                }
            `}</style>
        </div>
    );
};

_Detail.contextTypes = {
    $: PropTypes.object
};

export default observer(_Detail);
