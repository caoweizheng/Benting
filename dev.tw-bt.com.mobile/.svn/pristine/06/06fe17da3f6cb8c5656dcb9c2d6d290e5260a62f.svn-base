/**
 * const prefixCls = 'styles-44605834';
 * const images = '/static/images/src/person/event/myJianlou/Index';
 * @Author: qizc
 * @Date:   2018-01-30 14:31:39
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:24:16
 * @Path btWap \src\person\event\myJianlou\Index\_Item.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List, Button } from 'antd-mobile';
import { Img } from 'components';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-44605834';

const _Item = props => {
    const {
        panicId,
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
            <Flex align="start">
                <Img src={imgs} size="2rem" />
                <Flex.Item className="ml-sm">
                    <p className="text-title title text-md text-clamp-2">
                        {goodsTitle}
                    </p>
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
                        合计：<span className="text-md">￥{orderAmount}</span>
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
