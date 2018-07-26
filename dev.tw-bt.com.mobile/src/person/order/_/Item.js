/**
 * const prefixCls = 'styles-37177637';
 * const images = '/static/images/src/person/order/_';
 * @Author: Jack
 * @Date:   2018-01-02 17:42:52
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\order\_\Item.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List } from 'antd-mobile';
import { Img } from 'components';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';
import { orderType, grantState } from './ds';

const prefixCls = 'styles-37177637';

const _Item = props => {
    const { item = {} } = props;

    return (
        <List.Item className={prefixCls} wrap={true}>
            <Flex className={`${prefixCls}__header text-sm`}>
                <span>订单编号：{props.orderNo}</span>
            </Flex>
            <div className="wrap">
                {props.orderType === Utils.getValue(orderType, '第三方') && (
                    <Flex className={`${prefixCls}__item`}>
                        <Img
                            className={`${prefixCls}__img`}
                            src={`${Const.__IMAGES__}/logo_default.png`}
                            size="2rem"
                        />
                        <Flex.Item>
                            <p>
                                <span>来源于</span>
                                <span className="text-primary ml-sm">
                                    {item.tit}
                                </span>
                            </p>
                            <p className="text-xs mt-xs">
                                <span className="text-sub">已获售后：</span>
                                <span className="text-primary ml-xs">0</span>
                                <span className="ml-xs">次</span>
                            </p>
                            <p className="text-xs mt-xxs">
                                <span className="text-sub">获得积分：</span>
                                <span className="text-primary ml-xs">0</span>
                            </p>
                            <p className="text-xs mt-xxs">
                                <span className="text-sub">状态：</span>
                                {Utils.getLabel(
                                    grantState,
                                    props.grantState
                                ) === '审核失败' ||
                                Utils.getLabel(grantState, props.grantState) ===
                                    '已退货' ? (
                                    <span className="text-danger ml-xs">
                                        {Utils.getLabel(
                                            grantState,
                                            props.grantState
                                        )}
                                        （{props.explain}）
                                    </span>
                                ) : (
                                    <span className="text-primary ml-xs">
                                        {Utils.getLabel(
                                            grantState,
                                            props.grantState
                                        )}
                                    </span>
                                )}
                            </p>
                            <p className="text-xs text-sub mt-xxs">
                                积分将会在确认收货七天后发出
                            </p>
                        </Flex.Item>
                    </Flex>
                )}
            </div>
            <p className="text-xs text-sub text-right">
                添加时间：{Utils.date(props.createTime)}
            </p>
            {/*<p className="text-sm text-right mt-sm">
                <span>共</span>
                <span className="text-primary ml-xs">{props.count}</span>
                <span className="ml-xs">件商品</span>
            </p>*/}
            <p className="text-right mt-xs">
                <span className="text-sm">实付金额（含邮费）：</span>
                <span className="text-primary text-bold">¥ {props.amount}</span>
            </p>

            <style jsx global>{`
                .styles-37177637 {
                }
                .${prefixCls}__header {
                    padding-bottom: 0.24rem;
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
                .${prefixCls}__item {
                    padding: ${Styles.sm};
                    margin-bottom: ${Styles.sm};
                    background: ${Styles.color_bg};
                }
                .${prefixCls}__item:last-child {
                    margin-bottom: 0;
                }
                .${prefixCls}__img {
                    background-color: #fff;
                }
                .${prefixCls}__img_tmall {
                    background-color: #e70012;
                    background-size: 100%;
                }
            `}</style>
            <style jsx>{`
                .styles-37177637 {
                }
                .wrap {
                    padding: ${Styles.wind} 0;
                }
            `}</style>
        </List.Item>
    );
};

export default observer(_Item);

/*{props.type == 2 &&
                props.goods.map((item, index) => (
                    <Flex key={index} className={`${prefixCls}__item`}>
                        <Img
                            className={`${prefixCls}__img`}
                            src={item.imgs}
                            size="2rem"
                        />
                        <Flex.Item>
                            <p>{item.title}</p>
                            <p className="text-xs mt-sm">
                                <span className="text-sub">尺寸：</span>
                                <span className="ml-xs">{item.sizeName}</span>
                            </p>
                            <p className="text-xs mt-xs">
                                <span className="text-sub">单价：</span>
                                <span className="text-primary text-bold ml-xs">
                                    ¥ {item.price}
                                </span>
                            </p>
                            <p className="text-xs mt-xs">
                                <span className="text-sub">数量：</span>
                                <span className="ml-xs">{item.count}件</span>
                            </p>
                        </Flex.Item>
                    </Flex>
                ))}*/
