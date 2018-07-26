/**
 * const prefixCls = 'styles-42403165';
 * const images = '/static/images/src/person/score/Index';
 * @Author: qizc
 * @Date:   2018-01-31 10:18:56
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-04-17 14:14:24
 * @Path btWap \src\person\score\Index\__SectionHeader.js
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
                <span>
                    {m}月{d}日
                </span>
            </Flex.Item>
            {total >= 0 && <span>+</span>}
            <span>{Utils.formatNumber(total, 0)}</span>
        </Flex>
    );
};

export default __SectionHeader;
