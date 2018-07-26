/**
 * const prefixCls = 'styles-17733197';
 * const images = '/static/images/src/person/welfare/Birthday';
 * @Author: Jack
 * @Date:   2018-01-06 16:52:46
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\welfare\Birthday\_ExchangeList.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { ListView } from 'components';
import ListWrap from 'src/person/welfare/_/ListWrap';
import __Row from './__Row';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-17733197';

const _ExchangeList = (props, { $ }) => {
    const { className } = props;
    const { btlevel } = $.getState('userInfo');
    const lotteryList = $.getState('lotteryList');

    return (
        <ListWrap className={classNames(prefixCls, className)} title="生日礼品">
            <p className="text-sm">当前等级：{Utils.getBTLevel(btlevel)}</p>
            <ListView
                className="mt-md"
                data={lotteryList}
                renderRow={data => <__Row {...data} />}
                onEndReached={$.fetchLotteryList}
            />

            <style jsx global>{`
                .styles-17733197 {
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
