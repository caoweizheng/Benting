/**
 * const prefixCls = 'styles-43468506';
 * const images = '/static/images/src/shop/miaosha/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 14:18:55
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 10:04:44
 * @Path btWap \src\shop\miaosha\Detail\_Detail.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-43468506';

const _Detail = (props, { $ }) => {
    const { className } = props;
    const {
        panicType,
        beginTime,
        title,
        property,
        salePrice = 0,
        price = 0
    } = $.getState('miaoshaDetail');
    let typeText = '余额';
    if (panicType == 3) typeText = '金币';

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="content">
                <p className="p-title">{title}</p>
                {!!property && (
                    <p className="text-danger text-xs mt-xs">{property}</p>
                )}
                <p className="mt-md text-bold">
                    <span>秒杀价：</span>
                    {panicType == 3 ? (
                        <span className="text-primary ml-xs">
                            {parseFloat(salePrice * 1000 / 100)} 金币
                        </span>
                    ) : (
                        <span className="text-primary ml-xs">
                            ¥ {parseFloat(salePrice)}
                        </span>
                    )}
                </p>
                <p className="text-xs text-sub mt-sm">
                    <span>原价：</span>
                    <span>¥ {parseFloat(price)}</span>
                    {!!beginTime && (
                        <span className="pull-right">
                            {Utils.date('m月d日 H:i:s', beginTime)} 开抢
                        </span>
                    )}
                </p>
            </div>
            <div className="content">
                <p className="text-clamp-2 text-sub text-xs">
                    本活动只支持{typeText}支付，秒杀价为旗舰店正常售价的一半
                </p>
            </div>

            <style jsx>{`
                .styles-43468506 {
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
