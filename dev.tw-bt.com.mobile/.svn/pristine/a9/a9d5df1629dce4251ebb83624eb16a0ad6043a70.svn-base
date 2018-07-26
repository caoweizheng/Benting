/**
 * const prefixCls = 'styles-19826605';
 * const images = '/static/images/src/person/score/Index';
 * @Author: qizc
 * @Date:   2018-01-31 10:18:56
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-04-17 14:07:29
 * @Path btWap \src\person\score\Index\_Info.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import Top from 'src/person/_/Top';
import Utils from 'utils';

const prefixCls = 'styles-19826605';

const _Info = (props, { $ }) => {
    const { btscore = 0 } = $.getState('userInfo');

    return (
        <Top>
            <div className="info text-center">
                <p className="text-xs">我的积分</p>
                <p className="p-money text-primary text-bold">
                    {Utils.formatNumber(btscore, 0)}
                </p>
                <p className="p-desc text-xs text-sub">积分可用于参与本汀活动</p>
            </div>
            
            <style jsx>{`
                .styles-19826605 {
                }
                .info {
                    padding: 0.56rem 0;
                }
                .p-money {
                    margin-top: 0.32rem;
                    font-size: 0.64rem;
                }
                .p-desc {
                    margin-top: 0.48rem;
                }
            `}</style>
        </Top>
    );
};

_Info.contextTypes = {
    $: PropTypes.object
};

export default observer(_Info);
