/**
 * const prefixCls = 'styles-90916764';
 * const images = '/static/images/src/person/score/Index';
 * @Author: qizc
 * @Date:   2018-01-31 10:18:56
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-06-04 09:41:18
 * @Path btWap \src\person\score\Index\__Row.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Flex, Button } from 'antd-mobile';

const __Row = (props, { $ }) => {
    const {
        point,
        pointType,
        con,
        createTime,
        changePoint,
        className,
        ...other
    } = props;

    return (
        <List.Item
            extra={
                <div>
                    <p
                        className={classNames({
                            'text-success': pointType == 1,
                            'text-danger': pointType != 1
                        })}
                    >
                        {pointType == 1 && <span>+</span>}
                        <span>{Utils.formatNumber(changePoint, 0)}</span>
                    </p>
                    <p className="text-xs mt-xs">{Utils.formatNumber(point, 0)}</p>
                </div>
            }
        >
            <Flex direction="column" align="start">
                <p>{con}</p>
                <p className="text-xs text-sub mt-xs">
                    {Utils.date('H:i', createTime)}
                </p>
            </Flex>
        </List.Item>
    );
};

__Row.contextTypes = {
    $: PropTypes.object
};

export default observer(__Row);
