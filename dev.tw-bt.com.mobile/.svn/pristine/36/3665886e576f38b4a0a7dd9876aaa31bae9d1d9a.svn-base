/**
 * const prefixCls = 'styles-12357748';
 * const images = '/static/images/src/person/wallet/Index';
 * @Author: Jack
 * @Date:   2018-01-13 12:17:52
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-04-17 14:13:48
 * @Path btWap \src\person\wallet\Index\__Row.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Flex } from 'antd-mobile';
import Utils from 'utils';

const __Row = (props, { $ }) => (
    <List.Item
        extra={
            <div>
                <p
                    className={classNames({
                        'text-success': parseFloat(props.changeAmount) > 0,
                        'text-danger': parseFloat(props.changeAmount) < 0
                    })}
                >
                    {Utils.formatNumber(props.changeAmount)}
                </p>
                <p className="text-xs mt-xs">{Utils.formatNumber(props.amount)}</p>
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

__Row.contextTypes = {
    $: PropTypes.object
};

export default observer(__Row);
