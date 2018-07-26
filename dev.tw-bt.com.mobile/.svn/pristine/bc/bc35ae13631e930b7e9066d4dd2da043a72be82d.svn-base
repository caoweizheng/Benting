/**
 * const prefixCls = 'styles-10943794';
 * const images = '/static/images/src/merchant/Lottery';
 * @Author: Jack
 * @Date:   2018-04-26 13:39:21
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-04 09:41:00
 * @Path btWap \src\merchant\Lottery\_Row.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Flex, Button } from 'antd-mobile';
import Utils from 'utils';

const _Row = (props, { $ }) => {
    return (
        <List.Item wrap>
            <Flex direction="column" align="start">
                <p>{props.prizeName}</p>
                <Flex
                    className="text-xs text-sub mt-xs"
                    style={{ width: '100%' }}
                >
                    <Flex.Item>
                        {/*<span>{props.phone}</span>
                        <span className="ml-xs">/</span>*/}
                        <span>{Utils.date('H:i', props.receivedTime)}</span>
                    </Flex.Item>
                    <span
                        className="text-sub ml-xs"
                        onClick={() =>
                            Utils.router.push(
                                `/person/zone?id=${props.userId}`,
                                `/person/zone/${props.userId}`
                            )}
                    >
                        {props.niname}
                    </span>
                </Flex>
            </Flex>
        </List.Item>
    );
};

_Row.contextTypes = {
    $: PropTypes.object
};

export default observer(_Row);
