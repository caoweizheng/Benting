/**
 * const prefixCls = 'styles-25127232';
 * const images = '/static/images/src/_/SectionHeader';
 * @Author: Jack
 * @Date:   2018-03-03 10:59:07
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-10 16:38:37
 * @Path btWap \src\_\SectionHeader\index.js
 */
'use strict';

import React from 'react';
import { Flex } from 'antd-mobile';
import Utils from 'utils';

const SectionHeader = props => {
    const { sectionData, showSum = true } = props;
    const [y, m, d, total] = sectionData.split(',');

    return (
        <Flex className="text-sm text-desc" style={{ width: '100%' }}>
            <Flex.Item>
                <span>
                    {m}月{d}日
                </span>
            </Flex.Item>
            {showSum && total >= 0 && <span>+</span>}
            {showSum && <span>{Utils.formatNumber(total)}</span>}
        </Flex>
    );
};

export default SectionHeader;
