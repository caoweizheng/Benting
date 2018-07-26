/**
 * const prefixCls = 'styles-29454728';
 * const images = '/static/images/src/shop/miaosha/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 15:01:49
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-03 09:17:25
 * @Path btWap \src\shop\miaosha\Detail\_Btn.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Button } from 'antd-mobile';

const _Btn = (props, { $ }) => {
    const { type } = props;
    const { perNum = 0 } = $.getState('miaoshaDetail');

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
                立即秒杀
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
