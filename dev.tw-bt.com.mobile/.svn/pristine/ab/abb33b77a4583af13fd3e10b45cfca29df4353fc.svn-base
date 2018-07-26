/**
 * const prefixCls = 'styles-20095845';
 * const images = '/static/images/src/event/guess/Detail';
 * @Author: qizc
 * @Date:   2018-02-03 11:51:59
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-30 14:10:16
 * @Path btWap \src\event\guess\Detail\_Info.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import CountDown from 'src/_/CountDown';
import Styles from 'styles';

const prefixCls = 'styles-20095845';

const sumType = (start, end, current) => {
    //1.预告中 2.进行中 3.已结束
    if (current <= start) return 1;

    if (!!end && current > end) return 3;

    return 2;
};

const _Info = (props, { $ }) => {
    const { className } = props;
    const { startTime, endTime } = $.getState('guessDetail');
    const { time } = $.getState('time');
    const type = sumType(startTime, endTime, time);

    let _time, left, tag, tagType;
    switch (type) {
        case 1:
            _time = startTime;
            tag = '预告中';
            tagType = 'main';
            break;

        case 2:
            _time = endTime;
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

    return (
        <div className={classNames(prefixCls, className)}>
            {type == 1 && (
                <Flex>
                    <p className={`tag tag-${tagType}`}>{tag}</p>
                    <Flex.Item className={`${prefixCls}__desc`}>
                        开始时间：{Utils.date('m月d日 H:i:s', startTime)}
                    </Flex.Item>
                </Flex>
            )}

            {type == 2 && (
                <Flex>
                    <p className={`tag tag-${tagType}`}>{tag}</p>
                    <Flex.Item className={`${prefixCls}__desc`}>
                        <CountDown
                            left={left}
                            now={time}
                            beginTime={_time}
                            onEnd={() => {
                                setTimeout(() => {
                                    $.fetchGuessDetail();
                                    $.fetchGuessLogList(true);
                                    $.fetchGuessWinnerList(true);
                                }, 1000);
                            }}
                        />
                    </Flex.Item>
                </Flex>
            )}

            {type == 3 && <p className={`${prefixCls}__desc`}>{tag}</p>}

            <style jsx global>{`
                .styles-20095845 {
                    color: #fff;
                    background: rgba(0, 0, 0, 0.5);
                }
                .${prefixCls}__desc {
                    padding: 0.24rem 0.36rem;
                    text-align: center;
                }
            `}</style>
            <style jsx>{`
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
        </div>
    );
};

_Info.contextTypes = {
    $: PropTypes.object
};

export default observer(_Info);
