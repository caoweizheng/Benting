/**
 * const prefixCls = 'styles-13393407';
 * const images = '/static/images/src/event/guess/Index';
 * @Author: qizc
 * @Date:   2018-02-03 11:51:59
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\event\guess\Index\_Item.js
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

const prefixCls = 'styles-13393407';

const sumType = (start, end, current) => {
    //1.预告中 2.进行中 3.已结束
    if (current <= start) return 1;

    if (!!end && current > end) return 3;

    return 2;
};

const _Item = (props, { $ }) => {
    const { className, startTime, endTime } = props;
    const { time } = $.getState('time');
    const type = sumType(startTime, endTime, time);

    let _time, left, tag, tagType;
    switch (type) {
        case 1:
            _time = props.startTime;
            tag = '预告中';
            tagType = 'main';
            break;

        case 2:
            _time = props.endTime;
            tag = '进行中';
            left = '倒计时：';
            tagType = 'primary';
            break;

        case 3:
            tag = '已结束';
            tagType = 'default';
            break;

        default:
            break;
    }

    let typeName, elTag;
    if (props.guessType == 2) {
        typeName = '金币';
    } else {
        typeName = '积分';

        if (props.dataType == 2) {
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
        <List.Item
            className={classNames(prefixCls, className)}
            thumb={
                <Img
                    className={`${prefixCls}__thumb`}
                    src={Utils.getAppImgUrl(props.image, 'scale')}
                />
            }
            onClick={() =>
                Utils.router.push(
                    `/event/guess/detail?id=${props.guessId}`,
                    `/event/guess/detail/${props.guessId}`
                )}
        >
            <Flex>
                <Flex.Item>
                    <p className="text-clamp-1">{props.goods}</p>
                </Flex.Item>
                {elTag}
            </Flex>

            {type == 1 && (
                <Flex className={`${prefixCls}__count-down mt-xs`}>
                    <p className={`tag tag-${tagType}`}>{tag}</p>
                    <Flex.Item>
                        开始时间：{Utils.date('m月d日 H:i:s', props.startTime)}
                    </Flex.Item>
                </Flex>
            )}

            {type == 2 && (
                <Flex className={`${prefixCls}__count-down mt-xs`}>
                    <p className={`tag tag-${tagType}`}>{tag}</p>
                    <Flex.Item>
                        <CountDown left={left} now={time} beginTime={_time} />
                    </Flex.Item>
                </Flex>
            )}

            {type == 3 && (
                <span className={`tag tag-${tagType} mt-xs`}>{tag}</span>
            )}

            <Flex className="mt-sm">
                {/*<Flex.Item>
                    <span className="text-sm">{props.goods}</span>
                </Flex.Item>*/}
                {type != 1 && (
                    <p>
                        <span className="text-xs text-sub">已参与</span>
                        <span className="text-xs text-primary ml-xs mr-xs">
                            {props.totalNum || 0}
                        </span>
                        <span className="text-xs text-sub">人次</span>
                    </p>
                )}
            </Flex>

            <style jsx global>{`
                .styles-13393407 {
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
                .styles-13393407 {
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
