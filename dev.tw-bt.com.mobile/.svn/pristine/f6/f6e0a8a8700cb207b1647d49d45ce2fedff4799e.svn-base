/**
 * const prefixCls = 'styles-10517033';
 * const images = '/static/images/src/person/welfare/Point';
 * @Author: Jack
 * @Date:   2018-01-06 14:21:04
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-06 15:23:30
 * @Path btWap \src\person\welfare\Point\_LuckyDraw.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { LuckDraw } from 'components';
import ListWrap from 'src/person/welfare/_/ListWrap';
import Styles from 'styles';

const prefixCls = 'styles-10517033';

const _LuckyDraw = (props, { $ }) => {
    const { className } = props;

    return (
        <ListWrap className={classNames(prefixCls, className)} title="积分抽奖">
            <LuckDraw />
        </ListWrap>
    );
};

_LuckyDraw.contextTypes = {
    $: PropTypes.object
};

export default observer(_LuckyDraw);
