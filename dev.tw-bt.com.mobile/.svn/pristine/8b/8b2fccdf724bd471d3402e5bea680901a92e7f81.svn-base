/**
 * const prefixCls = 'styles-14731613';
 * const images = '/static/images/src/person/welfare/Point';
 * @Author: Jack
 * @Date:   2018-01-06 15:38:55
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\welfare\Point\_ExchangeList.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, Button } from 'antd-mobile';
import { ListView, Tag } from 'components';
import ListWrap from 'src/person/welfare/_/ListWrap';
import __Row from './__Row';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-14524396';

const _ExchangeList = (props, { $ }) => {
    const { className } = props;
    const { btscore } = $.getState('userInfo');
    const lotteryList = $.getState('lotteryList');

    return (
        <ListWrap className={classNames(prefixCls, className)} title="兑换礼品">
            <p className="text-sm">
                <span>您当前拥有</span>
                <span className="text-primary ml-xs mr-xs">{btscore}</span>
                <span>积分</span>
            </p>
            <ListView
                className="mt-md"
                data={lotteryList}
                renderRow={data => <__Row {...data} />}
                onEndReached={$.fetchLotteryList}
            />

            <style jsx global>{`
                .styles-14524396 {
                }
                .${prefixCls} .am-list-footer {
                    background: #fff;
                }
            `}</style>
        </ListWrap>
    );
};

_ExchangeList.contextTypes = {
    $: PropTypes.object
};

export default observer(_ExchangeList);
