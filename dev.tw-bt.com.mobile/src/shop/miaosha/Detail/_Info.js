/**
 * const prefixCls = 'styles-27748893';
 * const images = '/static/images/src/shop/miaosha/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 13:57:21
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 12:27:42
 * @Path btWap \src\shop\miaosha\Detail\_Info.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import CountDown from 'src/_/CountDown';
import Styles from 'styles';

const prefixCls = 'styles-27748893';

const _Info = (props, { $ }) => {
    const { type, className } = props;
    const { beginTime, perNum = 0 } = $.getState('miaoshaDetail');
    const { time } = $.getState('time');

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
            isEnd = true;
            break;

        default:
            break;
    }

    return (
        <Flex className={classNames(prefixCls, className)}>
            {!isEnd && <p className={`tag tag-${tagType}`}>{tag}</p>}
            {!isEnd && (
                <Flex.Item className={`${prefixCls}__desc`}>
                    <CountDown
                        now={time}
                        beginTime={beginTime}
                        onEnd={() => {
                            setTimeout(() => {
                                $.fetchTime();
                            }, 1000);
                        }}
                    >
                        <p>剩余{perNum}人次</p>
                    </CountDown>
                </Flex.Item>
            )}
            {isEnd && (
                <Flex.Item className={`${prefixCls}__desc`}>
                    <p>秒杀已结束</p>
                </Flex.Item>
            )}

            <style jsx global>{`
                .styles-27748893 {
                    color: #fff;
                    background: rgba(0, 0, 0, 0.5);
                }
                .${prefixCls}__desc {
                    padding: 0.24rem 0.36rem;
                    text-align: center;
                }
            `}</style>
            <style jsx>{`
                .styles-27748893 {
                }
                .tag {
                    padding: 0.24rem 0.36rem;
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
                    background: ${Styles.color_bg};
                }
            `}</style>
        </Flex>
    );
};

_Info.contextTypes = {
    $: PropTypes.object
};

export default observer(_Info);
