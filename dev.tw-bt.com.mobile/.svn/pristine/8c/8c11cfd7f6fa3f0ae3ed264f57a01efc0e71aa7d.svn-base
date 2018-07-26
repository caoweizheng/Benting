/**
 * const prefixCls = 'styles-71968461';
 * const images = '/static/images/src/shop/Goods';
 * @Author: qizc
 * @Date:   2017-12-28 15:34:41
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-20 12:27:42
 * @Path btWap \src\shop\Goods\__Row.js
 */
'use strict';

import React from 'react';
import { observer } from '@';
import classNames from 'classnames';
import Styles from 'styles';
import { Flex, Button } from 'antd-mobile';
import Utils from 'utils';

const prefixCls = 'styles-71968461';

const __Row = props => {
    const { gid, imgs, title, minPrice, maxPrice, className, ...other } = props;

    return (
        <div
            className={classNames(prefixCls, className)}
            onClick={() =>
                Utils.router.push(
                    `/shop/goods?id=${gid}`,
                    `/shop/goods/${gid}`
                )}
        >
            <div
                className="thumb"
                style={{
                    backgroundImage: `url(${Utils.getAppImgUrl(imgs, 'scale')})`
                }}
            />
            <div className="p-w text-center">
                <p className="text-sm text-clamp-1">{title}</p>
                <p className="text-xxs text-bold mt-xs text-clamp-1">
                    {minPrice === maxPrice
                        ? `¥ ${maxPrice}`
                        : `¥ ${minPrice} - ${maxPrice}`}
                </p>
            </div>

            <style jsx>{`
                .styles-71968461 {
                }
                .${prefixCls} {
                    display: inline-block;
                    width: 48.5%;
                    padding-bottom: 0.5rem;
                    margin-right: 3%;
                    margin-bottom: 2.4%;
                    background-color: ${Styles.color_bg};
                }
                .${prefixCls}:nth-of-type(2n) {
                    margin-right: 0;
                }
                .${prefixCls}:nth-last-child(1),
                .${prefixCls}:nth-last-child(2) {
                    margin-bottom: 0;
                }
                .thumb {
                    width: 100%;
                    padding-bottom: 100%;
                    ${Styles._bg};
                    background-size: 64%;
                    background-position: center;
                }
            `}</style>
        </div>
    );
};

export default observer(__Row);
