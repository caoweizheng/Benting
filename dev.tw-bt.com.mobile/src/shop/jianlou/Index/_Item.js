/**
 * const prefixCls = 'styles-10414091';
 * const images = '/static/images/src/shop/jianlou/Index';
 * @Author: qizc
 * @Date:   2018-01-30 12:20:53
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\shop\jianlou\Index\_Item.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List } from 'antd-mobile';
import { Img } from 'components';
import CountDown from 'src/_/CountDown';
import Styles from 'styles';

const prefixCls = 'styles-10414091';
const sumType = (start, end, current, now) => {
    //1.预告中 2.捡漏中 3.已结束
    if (current <= start) return 1;

    if (!now || (!!end && current > end)) return 3;

    return 2;
};

const _Item = (props, { $ }) => {
    const { className } = props;
    const { salePrice = 0, beginTime, endTime, perNum, dataType } = props;
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
            onClick={() =>
                Utils.router.push(
                    `/shop/jianlou/detail?id=${props.panicId}`,
                    `/shop/jianlou/detail/${props.panicId}`
                )}
        >
            <p className="text-clamp-1">{props.title}</p>
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
                    <span className="text-sm">捡漏价：</span>
                    <span className="text-sm text-primary">
                        {parseFloat(props.salePrice)}金币
                    </span>
                </Flex.Item>
                {props.price !== '0.00' && (
                    <span className="text-xs text-sub">
                        原价：¥ {parseFloat(props.price)}
                    </span>
                )}
            </Flex>

            <style jsx global>{`
                .styles-10414091 {
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
                .styles-10414091 {
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
