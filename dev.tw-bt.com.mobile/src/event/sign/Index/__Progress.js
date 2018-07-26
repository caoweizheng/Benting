/**
 * const prefixCls = 'styles-45207115';
 * const images = '/static/images/src/event/sign/Index';
 * @Author: Jack
 * @Date:   2018-05-26 14:59:06
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-26 14:59:42
 * @Path btWap \src\event\sign\Index\__Progress.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import Styles from 'styles';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-63089904';

//获取当前星期一的日期对象
const getMonDate = () => {
    const d = new Date(),
        day = d.getDay(),
        date = d.getDate();

    if (day === 1) return d;
    if (day === 0) {
        d.setDate(date - 6);
        return d;
    }

    d.setDate(date - day + 1);
    return d;
};

//获取整个星期的日期
const getDays = () => {
    const d = getMonDate();
    const arr = [];

    for (let i = 0; i < 7; i++) {
        const y = d.getFullYear(),
            m =
                d.getMonth() + 1 >= 10
                    ? d.getMonth() + 1
                    : `0${d.getMonth() + 1}`,
            _d = d.getDate() >= 10 ? d.getDate() : `0${d.getDate()}`;

        arr.push({ y, m, d: _d });
        d.setDate(d.getDate() + 1);
    }

    return arr;
};

const __Progress = (props, { $ }) => {
    const { className } = props;
    const { list = [], day } = $.getState('weekSign');

    //SSR
    const arr = getDays();
    const map = {};
    list.forEach(item => {
        const dayNumber =
            item.dayNumber < 10 ? `0${item.dayNumber}` : item.dayNumber;
        map[`${item.dateYm}-${dayNumber}`] = true;
    });

    return (
        <Flex className={classNames(prefixCls, className)} justify="between">
            {arr.map((item, index) => {
                const date = `${item.y}-${item.m}-${item.d}`;

                return (
                    <div className="step" key={index}>
                        <div
                            className={classNames('node', {
                                'node-active': !!map[date],
                                'node-today':
                                    Utils.date(
                                        'Y-m-d',
                                        new Date().valueOf() / 1000
                                    ) === date
                            })}
                        />
                        <span className="text text-sub">
                            {`${item.m}.${item.d}`}
                        </span>
                    </div>
                );
            })}

            <style jsx global>{`
                .styles-63089904 {
                    position: relative;
                    width: 90%;
                    padding: 0 4%;
                    margin-top: -5%;
                    margin-left: 5%;
                    height: 1.44rem;
                    overflow: hidden;
                }
                .styles-63089904:before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 100%;
                    border: 0.02rem solid #ccc;
                    transform: translateY(-50%);
                }
            `}</style>
            <style jsx>{`
                .step {
                    position: relative;
                }
                .node {
                    width: 0.52rem;
                    height: 0.52rem;
                    background-color: #ccc;
                    border-radius: 50%;
                }
                .node-active {
                    background-image: url('${images}/node-active.png');
                    ${Styles._bg};
                }
                .node-today {
                    transform: scale(1.4);
                }
                .text {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    margin-bottom: -0.44rem;
                    font-size: 0.24rem;
                    transform: translateX(-50%);
                }
            `}</style>
        </Flex>
    );
};

__Progress.contextTypes = {
    $: PropTypes.object
};

export default observer(__Progress);
