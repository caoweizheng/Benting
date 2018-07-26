/**
 * const prefixCls = 'styles-17210497';
 * const images = '/static/images/src/event/floor/Detail';
 * @Author: Jack
 * @Date:   2018-01-13 19:49:24
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 14:41:02
 * @Path btWap \src\event\floor\Detail\_FloorInfo.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'styles-17210497';

const _FloorInfo = (props, { $ }) => {
    const { className } = props;
    const { lotteryUser = {} } = $.getState('postDetail');

    if (!lotteryUser.userId) return null;

    return (
        <div className={classNames(prefixCls, className)}>
            <Flex className="p-sw" align="start">
                <Img
                    src={lotteryUser.faceImg}
                    size="0.88rem"
                    circle
                    onClick={() =>
                        Utils.router.push(
                            `/person/zone?id=${lotteryUser.userId}`,
                            `/person/zone/${lotteryUser.userId}`
                        )}
                />
                <Flex.Item style={{ position: 'relative' }}>
                    <p className="text-sm">
                        <span>本期达人：</span>
                        <span className="text-primary">
                            {lotteryUser.niname}
                        </span>
                    </p>
                    <p className="text-sm mt-xs">
                        <span>踩楼次数：</span>
                        <span className="text-primary mr-xs">
                            {lotteryUser.userFloors.length}
                        </span>
                        <span>次</span>
                    </p>
                    <p className="text-sm mt-xs">
                        <span>幸运楼层：</span>
                        <span className="text-primary">
                            #{lotteryUser.floor}
                        </span>
                    </p>
                    <img className="img-master" src={`${images}/master.png`} />
                </Flex.Item>
            </Flex>
            <div className="calculate p-sw">
                <p className="text-sm">计算公式：</p>
                <Flex className="text-xs mt-sm">
                    <Flex.Item className="text-primary">
                        {lotteryUser.lotteryNumber}
                    </Flex.Item>
                    <Flex.Item>%</Flex.Item>
                    <Flex.Item className="text-primary">
                        {lotteryUser.floorCount}
                    </Flex.Item>
                    <Flex.Item>+ 1</Flex.Item>
                    <Flex.Item>=</Flex.Item>
                    <Flex.Item className="text-primary">
                        {lotteryUser.floor}
                    </Flex.Item>
                </Flex>
                <Flex className="text-xs text-sub mt-xs">
                    <Flex.Item>排列五</Flex.Item>
                    <Flex.Item>取余</Flex.Item>
                    <Flex.Item>总楼层</Flex.Item>
                    <Flex.Item>+ 1</Flex.Item>
                    <Flex.Item>=</Flex.Item>
                    <Flex.Item>幸运楼层</Flex.Item>
                </Flex>
            </div>

            <style jsx>{`
                .styles-17210497 {
                    background: #fff;
                }
                .calculate {
                    border-top: 0.01rem solid ${Styles.color_border};
                }
                .calculate :global(.am-flexbox-item) {
                    margin-left: 0;
                }
                .calculate :global(.am-flexbox-item:not(:first-child)) {
                    text-align: center;
                }
                .img-master {
                    position: absolute;
                    top: 50%;
                    right: ${Styles.wind};
                    transform: translateY(-50%);
                }
            `}</style>
        </div>
    );
};

_FloorInfo.contextTypes = {
    $: PropTypes.object
};

export default observer(_FloorInfo);
