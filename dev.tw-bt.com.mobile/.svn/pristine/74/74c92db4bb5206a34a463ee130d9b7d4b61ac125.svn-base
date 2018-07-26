/**
 * const prefixCls = 'styles-38778986';
 * const images = '/static/images/src/shop/miaosha/Index';
 * @Author: Jack
 * @Date:   2018-01-24 11:43:19
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\shop\miaosha\Index\_Item.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List } from 'antd-mobile';
import { Img } from 'components';
import CountDown from 'src/_/CountDown';
import Tag from 'src/_/Tag';
import Styles from 'styles';

const prefixCls = 'styles-38778986';
const sumType = (start, end, current, now) => {
    //1.预告中 2.秒杀中 3.已结束
    if (current <= start) return 1;

    if (!now || (!!end && current > end)) return 3;

    return 2;
};

const _Item = (props, { $ }) => {
    const { className } = props;
    const {
        salePrice = 0,
        beginTime,
        endTime,
        perNum,
        dataType,
        panicType
    } = props;
    const { time } = $.getState('time');
    const type = sumType(beginTime, endTime, time, perNum);

    let tag,
        tagType,
        isEnd = false;
    switch (type) {
        case 1:
            tag = '预告中';
            tagType = 'main';
            break;

        case 2:
            tag = '进行中';
            tagType = 'primary';
            break;

        case 3:
            tag = '已结束';
            tagType = 'default';
            isEnd = true;
            break;

        default:
            break;
    }

    return (
        <List.Item
            className={classNames(prefixCls, className)}
            thumb={
                <Img
                    className={`${prefixCls}__thumb`}
                    src={Utils.getAppImgUrl(props.imgs)}
                />
            }
            onClick={() => {
                dataType == 1
                    ? (window.location = `https://www.nidosport.com/shop/miaosha_detail/${props.panicId}`)
                    : Utils.router.push(
                          `/shop/miaosha/detail?id=${props.panicId}`,
                          `/shop/miaosha/detail/${props.panicId}`
                      );
            }}
        >
            <Flex justify="between" align="center">
                <Flex.Item className="text-clamp-1">{props.title}</Flex.Item>
                {dataType == 2 ? (
                    panicType == 1 ? (
                        <Tag className="ml-sm">本汀现金</Tag>
                    ) : (
                        <Tag className="ml-sm">本汀金币</Tag>
                    )
                ) : (
                    <Tag className="ml-sm" type="nidosport">
                        灵动
                    </Tag>
                )}
            </Flex>
            {!isEnd && (
                <Flex className={`${prefixCls}__count-down mt-xs`}>
                    <p className={`tag tag-${tagType}`}>{tag}</p>
                    <Flex.Item className={`${prefixCls}__desc`}>
                        <CountDown now={time} beginTime={beginTime}>
                            <p>剩余{perNum}人次</p>
                        </CountDown>
                    </Flex.Item>
                </Flex>
            )}
            {isEnd && <span className={`tag tag-${tagType} mt-xs`}>{tag}</span>}
            <Flex className="mt-sm">
                <Flex.Item>
                    <span className="text-sm">秒杀价：</span>
                    {panicType == 3 ? (
                        <span className="text-sm text-primary">
                            {parseFloat(props.salePrice * 1000 / 100)}金币
                        </span>
                    ) : (
                        <span className="text-sm text-primary">
                            ¥ {parseFloat(props.salePrice)}
                        </span>
                    )}
                </Flex.Item>
                <span className="text-xs text-sub">
                    原价：¥ {parseFloat(props.price)}
                </span>
            </Flex>

            <style jsx global>{`
                .styles-38778986 {
                }
                .${prefixCls}__thumb {
                    width: 1.68rem;
                    height: 1.68rem;
                    border: 0.01rem solid ${Styles.color_border};
                }
                .${prefixCls}__count-down {
                    color: #888;
                    background: #f2f2f2;
                }
                .${prefixCls}__count-down p {
                    font-size: ${Styles.font_xxs};
                }
            `}</style>
            <style jsx>{`
                .styles-38778986 {
                }
                .tag {
                    display: inline-block;
                    padding: 0.12rem 0.24rem;
                    font-size: ${Styles.font_xxs};
                }
                .tag-main {
                    color: #fff;
                    background: ${Styles.color_main};
                }
                .tag-primary {
                    color: #fff;
                    background: ${Styles.color_primary};
                }
                .tag-default {
                    color: #fff;
                    background: #c1c1c1;
                }
            `}</style>
        </List.Item>
    );
};

_Item.contextTypes = {
    $: PropTypes.object
};

export default observer(_Item);
