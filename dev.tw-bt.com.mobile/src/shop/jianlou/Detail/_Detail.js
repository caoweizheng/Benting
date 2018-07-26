/**
 * const prefixCls = 'styles-15727067';
 * const images = '/static/images/src/shop/jianlou/Detail';
 * @Author: qizc
 * @Date:   2018-01-30 12:20:53
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-27 10:59:34
 * @Path btWap \src\shop\jianlou\Detail\_Detail.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-15727067';

const _Detail = (props, { $ }) => {
    const { className } = props;
    const { beginTime, title, property, salePrice = 0, price = 0 } = $.getState(
        'jianlouDetail'
    );

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="content">
                <p className="p-title">{title}</p>
                {!!property && (
                    <p className="text-danger text-xs mt-xs">{property}</p>
                )}
                <p className="mt-md text-bold">
                    <span>捡漏价：</span>
                    <span className="text-primary ml-xs">
                        {parseFloat(salePrice)}金币
                    </span>
                </p>
                <p className="text-xs text-sub mt-sm">
                    <span>原价：</span>
                    <span>{price === '0.00' ? '暂无' : `¥ ${parseFloat(price)}`}</span>
                    {!!beginTime && (
                        <span className="pull-right">
                            {Utils.date('m月d日 H:i:s', beginTime)} 开始
                        </span>
                    )}
                </p>
            </div>
            <div className="content">
                <p className="text-clamp-2 text-sub text-xs">
                    本活动仅支持金币支付，请提前准备好金币，以免错失机会。
                </p>
            </div>

            <style jsx>{`
                .styles-15727067 {
                    background: #fff;
                    border-top: 0.01rem solid ${Styles.color_border};
                }
                .content {
                    padding: ${Styles.wind};
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
                .p-title {
                    min-height: 0.36rem;
                }
            `}</style>
        </div>
    );
};

_Detail.contextTypes = {
    $: PropTypes.object
};

export default observer(_Detail);
