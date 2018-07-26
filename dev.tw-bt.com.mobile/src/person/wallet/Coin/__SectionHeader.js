/**
 * const prefixCls = 'styles-17747223';
 * const images = '/static/images/src/person/wallet/Coin';
 * @Author: Jack
 * @Date:   2018-01-13 15:08:21
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-04-17 14:18:37
 * @Path btWap \src\person\wallet\Coin\__SectionHeader.js
 */
'use strict';

import React from 'react';
import { Flex } from 'antd-mobile';
import Utils from 'utils';

const __SectionHeader = props => {
    const { sectionData } = props;
    const [y, m, d, total] = sectionData.split(',');

    return (
        <Flex className="text-sm text-desc" style={{ width: '100%' }}>
            <Flex.Item>
                <span>{m}月{d}日</span>
            </Flex.Item>
            {total >= 0 && <span>+</span>}
            <span>{Utils.formatNumber(total)}</span>
        </Flex>
    );
};

export default __SectionHeader;
