/**
 * const prefixCls = 'styles-12028695';
 * const images = '/static/images/src/shop/jianlou/Detail';
 * @Author: qizc
 * @Date:   2018-01-30 12:20:53
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-03 09:16:02
 * @Path btWap \src\shop\jianlou\Detail\_Btn.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Button } from 'antd-mobile';

const _Btn = (props, { $ }) => {
    const { type } = props;
    const { perNum = 0 } = $.getState('jianlouDetail');

    if (type === 1) {
        return (
            <Button className="t-fixed-btn" type="primary">
                未开始
            </Button>
        );
    }

    if (type === 2) {
        return (
            <Button
                className="t-fixed-btn"
                type="primary"
                onClick={() => Utils.checkLogin(() => $.onConfirm())}
            >
                立即捡漏
            </Button>
        );
    }

    return (
        <Button className="t-fixed-btn" type="primary">
            {perNum == 0 ? '已抢光' : '已结束'}
        </Button>
    );
};

_Btn.contextTypes = {
    $: PropTypes.object
};

export default observer(_Btn);
