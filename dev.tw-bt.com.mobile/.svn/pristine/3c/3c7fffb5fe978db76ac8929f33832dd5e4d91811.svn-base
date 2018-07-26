/**
 * const prefixCls = 'styles-73560489';
 * const images = '/static/images/src/person/wallet/Coin';
 * @Author: Jack
 * @Date:   2018-01-13 15:00:54
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-04 09:41:27
 * @Path btWap \src\person\wallet\Coin\__Row.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Flex, Button } from 'antd-mobile';

const __Row = (props, { $ }) => {
    const { className } = props;

    return (
        <List.Item
            extra={
                <div>
                    <p
                        className={classNames({
                            'text-success': parseFloat(props.changeAmount) > 0,
                            'text-danger': parseFloat(props.changeAmount) < 0
                        })}
                    >
                        {props.changeAmount}
                    </p>
                    <p className="text-xs mt-xs">{props.amount}</p>
                </div>
            }
        >
            <Flex direction="column" align="start">
                <p>{props.title}</p>
                <p className="text-xs text-sub mt-xs">
                    {Utils.date(props.createTime)}
                </p>
            </Flex>
        </List.Item>
    );
};

__Row.contextTypes = {
    $: PropTypes.object
};

export default observer(__Row);
