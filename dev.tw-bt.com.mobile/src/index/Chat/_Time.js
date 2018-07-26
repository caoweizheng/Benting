/**
 * const prefixCls = 'styles-11371581';
 * const images = '/static/images/src/index/Chat';
 * @Author: Jack
 * @Date:   2018-05-03 11:54:36
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-03 11:55:22
 * @Path btWap \src\index\Chat\_Time.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import Utils from 'utils';
import Styles from 'styles';

const _Time = (props, { $ }) => {
    const { ctime } = props;

    return (
        <div
            className="text-center text-xs text-sub"
            style={{ paddingTop: Styles.lg }}
        >
            {Utils.date('m-d H:i', ctime)}
        </div>
    );
};

_Time.contextTypes = {
    $: PropTypes.object
};

export default observer(_Time);
