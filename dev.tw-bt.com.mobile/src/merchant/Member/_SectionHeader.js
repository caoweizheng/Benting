/**
 * const prefixCls = 'styles-10027285';
 * const images = '/static/images/src/merchant/Member';
 * @Author: Jack
 * @Date:   2018-05-09 16:52:21
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-09 16:53:33
 * @Path btWap \src\merchant\Member\_SectionHeader.js
 */
'use strict';

import React from 'react';
import { Flex } from 'antd-mobile';

const __SectionHeader = props => {
    const { sectionData } = props;
    
    return (
        <Flex className="text-sm text-desc" style={{ width: '100%' }}>
            <Flex.Item>
                <span>
                    {sectionData}
                </span>
            </Flex.Item>
        </Flex>
    );
};

export default __SectionHeader;
