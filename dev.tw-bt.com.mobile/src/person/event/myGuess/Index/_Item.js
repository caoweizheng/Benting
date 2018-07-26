/**
 * const prefixCls = 'styles-08411066';
 * const images = '/static/images/src/person/event/myGuess/Index';
 * @Author: qizc
 * @Date:   2018-02-05 09:32:44
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:23:59
 * @Path btWap \src\person\event\myGuess\Index\_Item.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List, Button } from 'antd-mobile';
import { Img } from 'components';
import Tag from 'src/_/Tag';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-08411066';

const _Item = props => {
    const {
        guessId,
        dataType,
        guessType,
        title,
        imgId,
        orderId,
        orderState,
        guessState,
        isWin,
        information,
        weight,
        top = 0,
        number = 1,
        endTime,
        cutOff
    } = props;

    const nowTime = Utils.getTimestamp();
    const isExpire = nowTime > cutOff;
    const isEnd = nowTime > endTime;
    const isGet = parseInt(top) <= parseInt(number); //是否可以领奖

    let type, elTag;
    if (guessType == 2) {
        type = '金币';
    } else {
        type = '积分';
        if (dataType == 2) {
            elTag = <Tag className="ml-sm">本汀积分</Tag>;
        } else {
            elTag = (
                <Tag className="ml-sm" type="nidosport">
                    灵动积分
                </Tag>
            );
        }
    }

    return (
        <List.Item className={prefixCls} wrap={true}>
            <Flex>
                <Img src={imgId} size="2rem" />
                <Flex.Item className="ml-sm">
                    <Flex align="start">
                        <Flex.Item>
                            <p className="text-title title text-md text-clamp-2">
                                {title}
                            </p>
                        </Flex.Item>
                        {elTag}
                    </Flex>
                    <Flex align="end" className={`${prefixCls}_con`}>
                        <div>
                            <p className="text-sm text-clamp-1">
                                我的猜数：
                                <span className="text-danger">
                                    {information}斤
                                </span>
                            </p>
                            <p className="text-sm text-clamp-1">
                                奖励名次：
                                <span className="text-danger">前{number}名</span>
                            </p>
                        </div>
                    </Flex>
                </Flex.Item>
            </Flex>
            <div className={`mt-sm text-sm ${prefixCls}_bottom`}>
                {/*未结束*/}
                {!isEnd && (
                    <Flex justify="between" align="center">
                        <Flex.Item className="text-sm text-desc">
                            开奖时间：{Utils.date(endTime)}
                        </Flex.Item>
                        <Flex>
                            <div className="text-sm text-desc">等待开奖</div>
                            <Button
                                type="primary"
                                size="small"
                                className="ml-sm"
                                onClick={() =>
                                    Utils.router.push(
                                        `/event/guess/detail?id=${guessId}`,
                                        `/event/guess/detail/${guessId}`
                                    )}
                            >
                                再猜
                            </Button>
                        </Flex>
                    </Flex>
                )}
                {/*已结束*/}
                {isEnd && (
                    <Flex className="mt-xs" justify="between" align="center">
                        <Flex.Item>
                            <span>实际重量：{weight}斤</span>
                            {isWin == 2 && (
                                <span className="ml-xs">(第{top}名)</span>
                            )}
                        </Flex.Item>
                        {isWin == 2 && isGet && orderId > 0 ? (
                            <div>
                                {isExpire && orderState == 0 ? (
                                    <Button
                                        className="ml-sm"
                                        disabled
                                        type="primary"
                                        size="small"
                                    >
                                        已过期
                                    </Button>
                                ) : (
                                    <Button
                                        className="ml-sm"
                                        type="primary"
                                        size="small"
                                        onClick={() =>
                                            Utils.router.push(
                                                `/person/event/get_prize?id=${orderId}`,
                                                `/person/event/get_prize/${orderId}`
                                            )}
                                    >
                                        {orderState >= 1 ? '已确认' : '确认地址'}
                                    </Button>
                                )}
                            </div>
                        ) : (
                            <span>已结束</span>
                        )}
                    </Flex>
                )}
            </div>
            {isWin == 2 && <img className="win_img" src={`${Const.__IMAGES__}/win.png`} />}
            <style jsx global>{`
                .styles-08411066 {
                    position: relative;
                }
                .${prefixCls}_con {
                    height: 1.1rem;
                }
                .${prefixCls}_bottom {
                    padding-top: ${Styles.sm};
                    border-top: 0.01rem solid ${Styles.color_border};
                }
            `}</style>
            <style jsx>{`
                .styles-08411066 {
                }
                .title {
                    height: 0.9rem;
                }
                .win_img {
                    position: absolute;
                    right: 1rem;
                    top: 30%;
                    height: 1.5rem;
                    width: auto;
                }
            `}</style>
        </List.Item>
    );
};

export default observer(_Item);
