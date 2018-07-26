/**
 * const prefixCls = 'styles-67572740';
 * const images = '/static/images/src/person/event/myAuction/Index';
 * @Author: qizc
 * @Date:   2018-01-25 13:41:07
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:23:27
 * @Path btWap \src\person\event\myAuction\Index\_Item.js
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

const prefixCls = 'styles-67572740';

const _Item = props => {
    const {
        appType,
        title,
        orderId,
        addressId,
        isOwn,
        goodsImg,
        goodsPrice,
        isAddress,
        beginPrice,
        currentPrice,
        currentNum,
        auctionType,
        auctionState,
        strPrice = '',
        endTime
    } = props;

    const isEnd = Utils.getTimestamp() > endTime;

    let type, elTag;
    if (auctionType == 1) {
        type = '金币';
    } else {
        type = '积分';
        if (appType == 1) {
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
                <Img src={goodsImg} size="2rem" />
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
                            <p className="text-sm">
                                起拍价：{' '}
                                <span className="text-primary">
                                    {beginPrice}
                                </span>
                                {type}
                            </p>
                            <p className="text-sm">
                                参与人次：{' '}
                                <span className="text-primary">
                                    {currentNum}
                                </span>
                            </p>
                        </div>
                    </Flex>
                </Flex.Item>
            </Flex>
            <div className={`mt-sm text-sm ${prefixCls}_bottom`}>
                <div>
                    出价记录：{strPrice
                        .split(',')
                        .reverse()
                        .join(' → ')}
                </div>
                <Flex className="mt-xs" justify="between" align="center">
                    <span>
                        {isEnd ? '成交价' : '竞拍当前价格'}：{currentPrice}
                        {isEnd && <span>(已结束)</span>}
                        {!isEnd && <span className="text-primary">(未结束)</span>}
                    </span>
                    {isOwn == 1 &&
                        orderId > 0 && (
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
                                {addressId == 0 ? '确认地址' : '已确认'}
                            </Button>
                        )}
                </Flex>
            </div>
            <style jsx global>{`
                .${prefixCls}_con {
                    height: 1.1rem;
                }
                .${prefixCls}_bottom {
                    padding-top: ${Styles.sm};
                    border-top: 0.01rem solid ${Styles.color_border};
                }
            `}</style>
            <style jsx>{`
                .title {
                    height: 0.9rem;
                }
            `}</style>
        </List.Item>
    );
};

export default observer(_Item);
