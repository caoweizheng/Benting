/**
 * const prefixCls = 'styles-84679571';
 * const images = '/static/images/src/shop/auction/Index';
 * @Author: Jack
 * @Date:   2018-01-24 17:45:37
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\shop\auction\Index\_Item.js
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

const prefixCls = 'styles-84679571';

const _Item = (props, { $ }) => {
    const { className } = props;
    const { nowTime } = $.getState('auctionList');

    let time, left, tag, tagType, desc;
    switch (parseInt(props.showState)) {
        case 1:
            time = props.beginTime;
            left = '倒数：';
            tag = '预告中';
            desc = '起拍价：';
            tagType = 'main';
            break;

        case 2:
            time = props.endTime;
            left = '剩余：';
            tag = '竞拍中';
            desc = '当前价：';
            tagType = 'primary';
            break;

        case 3:
            tag = '已结束';
            tagType = 'default';
            desc = '最终价：';
            break;

        default:
            break;
    }

    let type, elTag;
    if (props.auctionType == 1) {
        type = '金币';
    } else {
        type = '积分';

        if (props.appType == 1) {
            elTag = <Tag>本汀积分</Tag>;
        } else {
            elTag = <Tag type="nidosport">灵动积分</Tag>;
        }
    }

    return (
        <List.Item
            className={classNames(prefixCls, className)}
            thumb={
                <Img
                    className={`${prefixCls}__thumb`}
                    src={Utils.getAppImgUrl(props.goodsImg, 'scale')}
                />
            }
            onClick={() =>
                Utils.router.push(
                    `/shop/auction/detail?id=${props.auctionId}`,
                    `/shop/auction/detail/${props.auctionId}`
                )}
        >
            <Flex>
                <Flex.Item>
                    <p className="text-clamp-1">{props.title}</p>
                </Flex.Item>
                {elTag}
            </Flex>
            {props.showState == 1 && (
                <Flex className={`${prefixCls}__count-down mt-xs`}>
                    <p className={`tag tag-${tagType}`}>{tag}</p>
                    <Flex.Item>
                        开始时间：{Utils.date('m月d日 H:i:s', props.beginTime)}
                    </Flex.Item>
                </Flex>
            )}
            {props.showState == 2 && (
                <Flex className={`${prefixCls}__count-down mt-xs`}>
                    <p className={`tag tag-${tagType}`}>{tag}</p>
                    <Flex.Item>
                        <CountDown left={left} now={nowTime} beginTime={time} />
                    </Flex.Item>
                </Flex>
            )}
            {props.showState == 3 && (
                <span className={`tag tag-${tagType} mt-xs`}>{tag}</span>
            )}
            <Flex className="mt-sm">
                <Flex.Item>
                    <span className="text-sm">{desc}</span>
                    <span className="text-sm text-primary">
                        {parseInt(props.currentPrice)}
                        {type}
                    </span>
                </Flex.Item>
                {props.showState != 1 && (
                    <p>
                        <span className="text-xs text-sub">已参与</span>
                        <span className="text-xs text-primary ml-xs mr-xs">
                            {props.currentNum}
                        </span>
                        <span className="text-xs text-sub">次</span>
                    </p>
                )}
            </Flex>

            <style jsx global>{`
                .styles-84679571 {
                }
                .${prefixCls}__thumb {
                    width: 1.68rem;
                    height: 1.68rem;
                    border: 0.01rem solid ${Styles.color_border};
                }
                .${prefixCls}__count-down {
                    font-size: ${Styles.font_xxs};
                    color: #888;
                    background: #f2f2f2;
                }
                .${prefixCls}__count-down p {
                    font-size: ${Styles.font_xxs};
                }
            `}</style>
            <style jsx>{`
                .styles-84679571 {
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
