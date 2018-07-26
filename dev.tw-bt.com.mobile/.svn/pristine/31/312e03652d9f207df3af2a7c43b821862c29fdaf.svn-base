/**
 * const prefixCls = 'styles-76336073';
 * const images = '/static/images/src/person/event/myMiaosha/Index';
 * @Author: qizc
 * @Date:   2018-01-24 15:29:23
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:24:56
 * @Path btWap \src\person\event\myMiaosha\Index\_Item.js
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
import { images } from './ds';

const prefixCls = 'styles-76336073';

const _Item = props => {
    const {
        panicId,
        panicType,
        orderId,
        orderNo,
        orderState,
        isAddress,
        orderAmount,
        goodsNum,
        imgs,
        goodsTitle
    } = props;

    return (
        <List.Item className={prefixCls} wrap={true}>
            <Flex>
                <Img src={imgs} size="2rem" />
                <Flex.Item className="ml-sm">
                    <Flex align="start" justify="between">
                        <Flex.Item>
                            <p className="text-title title text-md text-clamp-2">
                                {goodsTitle}
                            </p>
                        </Flex.Item>
                        {panicType == 1 ? (
                            <Tag className="ml-sm">本汀现金</Tag>
                        ) : (
                            <Tag className="ml-sm">本汀金币</Tag>
                        )}
                    </Flex>
                    <img className="icon" src={`${images}/miaosha.png`} />
                </Flex.Item>
            </Flex>
            <Flex
                className={`mt-sm ${prefixCls}_bottom`}
                justify="between"
                align="center"
            >
                <Flex>
                    <span className="text-sm">共{goodsNum}件商品</span>
                    <Flex.Item className="text-sm ml-md">
                        合计：{panicType == 1 ? (
                            <span className="text-md">
                                ￥{parseFloat(orderAmount)}
                            </span>
                        ) : (
                            <span className="text-md">
                                {parseFloat(orderAmount)}金币
                            </span>
                        )}
                    </Flex.Item>
                </Flex>
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
                    {isAddress == 0 ? '确认地址' : '已确认'}
                </Button>
            </Flex>
            <style jsx global>{`
                .${prefixCls}_bottom {
                    padding-top: ${Styles.sm};
                    border-top: 0.01rem solid ${Styles.color_border};
                }
            `}</style>
            <style jsx>{`
                .title {
                    height: 1.58rem;
                }
                .icon {
                    height: 0.42rem;
                    width: auto;
                }
            `}</style>
        </List.Item>
    );
};

export default observer(_Item);
