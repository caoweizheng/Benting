/**
 * const prefixCls = 'styles-68490944';
 * const images = '/static/images/src/person/event/_';
 * @Author: qizc
 * @Date:   2018-01-24 18:11:46
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-25 12:30:13
 * @Path btWap \src\person\event\_\State.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Header } from 'src/_';
import Const from 'const';

const prefixCls = 'styles-68490944';

const State = props => {
    const { className, state = 0, logisticsNo = '' } = props;
    let stateText;
    switch (parseInt(state)) {
        case 1:
            stateText = '已领取';
            break;
        case 2:
            stateText = '待发货';
            break;
        case 3:
            stateText = '已发货';
            break;
        case 4:
            stateText = '已签收';
            break;
        case 5:
            stateText = '完成交易';
            break;
        case 6:
            stateText = '已取消';
            break;
        default:
            stateText = '待确认';
            break;
    }
    return (
        <Header
            className={classNames(prefixCls, className)}
            extra={state > 2 && logisticsNo && <span className="ml-sm">物流单号:{logisticsNo}</span>}
        >
            订单状态：{stateText}
        </Header>
    );
};

export default observer(State);
