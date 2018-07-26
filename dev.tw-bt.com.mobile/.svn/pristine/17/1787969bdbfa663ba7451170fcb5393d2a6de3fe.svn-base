/**
 * const prefixCls = 'styles-14524396';
 * const images = '/static/images/src/person/welfare/RankUp';
 * @Author: Jack
 * @Date:   2018-01-06 16:42:10
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\welfare\RankUp\_ExchangeList.js
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
    const { id } = $.getParams().params;
    const { selectedIndex } = $.getState();
    const { btlevel } = $.getState('userInfo');
    const lotteryList = $.getState('lotteryList');

    return (
        <ListWrap
            className={classNames(prefixCls, className)}
            title={`升级礼品（${Utils.getBTLevel(id)}）`}
        >
            <p className="text-sm">当前等级：{Utils.getBTLevel(btlevel)}</p>
            <ListView
                className="mt-md"
                data={lotteryList}
                renderRow={data => <__Row {...data} />}
                onEndReached={$.fetchGoodsList}
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
