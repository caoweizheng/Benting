/**
 * const prefixCls = 'styles-15943060';
 * const images = '/static/images/src/shop/Goods';
 * @Author: qizc
 * @Date:   2017-12-28 14:42:02
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:54:41
 * @Path btWap \src\shop\Goods\_Info.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import Styles from 'styles';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-15943060';

const _Info = (props, { $ }) => {
    const { className } = props;
    const { title = '', minPrice = 0, maxPrice = 0, stock = 0 } = $.getState(
        'recommendDetails'
    );

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="text-title">{title}</div>
            <div className="text-money text-primary text-bold mt-sm">
                {minPrice === maxPrice
                    ? `¥ ${maxPrice}`
                    : `¥ ${minPrice} - ${maxPrice}`}
            </div>
            <Flex className="text-xs text-desc mt-lg" justify="between">
                <Flex>
                    <img className="img-phone" src={`${images}/phone.png`} />
                    <span className="ml-xs">联系我们：020 - 31001105</span>
                </Flex>
                <span>库存：{stock}</span>
            </Flex>

            <style jsx>{`
                .styles-15943060 {
                    padding: 0.24rem ${Styles.wind} 0.2rem;
                    background: #fff;
                }
                .text-title {
                    min-height: 0.36rem;
                    font-size: 0.3rem;
                    line-height: 0.36rem;
                }
                .text-money {
                    font-size: 0.3rem;
                    line-height: 0.36rem;
                }
                .img-phone {
                    height: 0.4rem;
                    width: 0.4rem;
                }
            `}</style>
        </div>
    );
};

_Info.contextTypes = {
    $: PropTypes.object
};

export default observer(_Info);
