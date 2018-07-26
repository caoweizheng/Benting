/**
 * const prefixCls = 'styles-57928318';
 * const images = '/static/images/src/person/_';
 * @Author: Jack
 * @Date:   2018-01-12 17:46:19
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\_\Grade.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, Progress } from 'antd-mobile';
import { Img } from 'components';
import Const from 'const';
import Utils from 'utils';
import { gradeData } from './ds';

const prefixCls = 'styles-57928318';

const Grade = (props, { $ }) => {
    const { className } = props;
    const { btexp = 0, btlevel = 0 } = $.getState('userInfo');

    return (
        <Flex
            className={classNames(prefixCls, className, 'p-sw')}
            align="start"
            justify="between"
        >
            <div className="text-center">
                <Img
                    src={`${Const.__IMAGES__}/grade/${btlevel}.png`}
                    size="1rem"
                    style={{ backgroundColor: 'transparent' }}
                />
                <p className="text-sm mt-sm">{Utils.getBTLevel(btlevel)}</p>
            </div>
            <Flex.Item className="ml-sm mr-sm">
                <Progress
                    className="mt-md"
                    position="normal"
                    percent={parseInt(
                        btexp / gradeData[parseInt(btlevel) + 1].point * 100
                    )}
                />
                <p
                    className="text-xs text-sub mt-sm text-center"
                    style={{ lineHeight: 1.4 }}
                >
                    <span>您已累计消费本汀产品</span>
                    <span className="text-danger ml-xs">{btexp}</span>
                    <span className="ml-xs">元，再消费</span>
                    <span className="text-danger ml-xs">
                        {gradeData[parseInt(btlevel) + 1].point - btexp}
                    </span>
                    <span className="ml-xs">元升级为</span>
                    <span className="text-primary ml-xs">
                        {gradeData[parseInt(btlevel) + 1].title}
                    </span>
                </p>
            </Flex.Item>
            <div className="text-center ml-sm">
                <Img
                    src={`${Const.__IMAGES__}/grade/${parseInt(btlevel) +
                        1}.png`}
                    size="1rem"
                    style={{ backgroundColor: 'transparent' }}
                />
                <p className="text-sm mt-sm">
                    {Utils.getBTLevel(parseInt(btlevel) + 1)}
                </p>
            </div>

            <style jsx global>{`
                .styles-57928318 {
                    background: #fff;
                }
                .${prefixCls} .am-progress-outer {
                    border-radius: 0.08rem;
                }
                .${prefixCls} .am-progress-bar {
                    border: 0.06rem solid #476dd9;
                    border-radius: 0.08rem;
                }
            `}</style>
        </Flex>
    );
};

Grade.contextTypes = {
    $: PropTypes.object
};

export default observer(Grade);
