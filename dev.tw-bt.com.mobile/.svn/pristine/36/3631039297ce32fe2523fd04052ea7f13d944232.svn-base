/**
 * const prefixCls = 'styles-60066980';
 * const images = '/static/images/src/person/welfare/RankUp';
 * @Author: Jack
 * @Date:   2018-01-09 16:28:12
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 10:04:44
 * @Path btWap \src\person\welfare\RankUp\_Fixed.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, Button } from 'antd-mobile';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-60066980';

const _Fixed = (props, { $ }) => {
    const { className } = props;
    const { selectedIndex } = $.getState();
    const { getNum = 0 } = $.getState('lotteryList');

    return (
        <Flex className={classNames(prefixCls, className)}>
            <p className="text-sm">
                <span>共可领取</span>
                <span className="ml-xs mr-xs">{getNum}</span>
                <span>件</span>
            </p>
            <Flex.Item>
                <p className="text-sm text-right">
                    <span>已选</span>
                    <span className="text-primary ml-xs mr-xs">
                        {selectedIndex.length}
                    </span>
                    <span>件</span>
                </p>
            </Flex.Item>
            <Button
                className={`${prefixCls}__btn text-sm ml-sm`}
                type="primary"
                disabled={selectedIndex.length < getNum || getNum === 0}
                onClick={() =>
                    Utils.onConfirm(
                        '确定兑换',
                        $.doGetBatch
                    )}
            >
                立即领取
            </Button>

            <style jsx global>{`
                .styles-60066980 {
                }
                .${prefixCls} {
                    position: fixed;
                    z-index: 100;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin-bottom: -0.01rem;
                    padding-left: ${Styles.sm};
                    background: #fff;
                    border-top: 0.01rem solid ${Styles.color_border};
                }
                .${prefixCls}__btn {
                    width: 2rem;
                }
            `}</style>
        </Flex>
    );
};

_Fixed.contextTypes = {
    $: PropTypes.object
};

export default observer(_Fixed);
