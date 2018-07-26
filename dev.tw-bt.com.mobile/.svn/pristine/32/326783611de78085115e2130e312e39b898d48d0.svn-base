/**
 * const prefixCls = 'styles-20684516';
 * const images = '/static/images/src/index';
 * @Author: qizc
 * @Date:   2017-12-25 11:17:12
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:33:46
 * @Path btWap \src\index\_Menu.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import __MenuItem from './__MenuItem';
import Utils from 'utils';

const prefixCls = 'styles-20684516';
import { menuDS } from './ds';

const _Menu = (props, { $ }) => {
    const { className } = props;
    const { activitieNum, lotteryNum } = $.getState('lotteryInfo');
    const activeState = {
        fans: !!parseInt(activitieNum),
        nidosport: !!parseInt(lotteryNum)
    };

    return (
        <div className={classNames(prefixCls, className)}>
            <Flex wrap="wrap">
                {menuDS.map((item, index) => (
                    <__MenuItem
                        key={item.title}
                        className={classNames({
                            'mt-d': index > 4
                        })}
                        img={item.img}
                        text={item.title}
                        active={item.activeKey ? activeState[item.activeKey] : false}
                        onClick={() => {
                            if (!item.href) {
                                Utils.light('敬请期待');
                            } else if (item.href.indexOf('https://') !== -1) {
                                window.location = item.href;
                            } else {
                                Utils.router.push(item.href);
                            }
                        }}
                    />
                ))}
            </Flex>

            <style jsx>{`
                .styles-20684516 {
                }
                div {
                    padding: 0.24rem;
                    background-color: #fff;
                }
            `}</style>
        </div>
    );
};

_Menu.contextTypes = {
    $: PropTypes.object
};

export default observer(_Menu);
