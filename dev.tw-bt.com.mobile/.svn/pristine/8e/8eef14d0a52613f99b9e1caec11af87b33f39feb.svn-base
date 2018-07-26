/**
 * const prefixCls = 'styles-02463842';
 * const images = '/static/images/src/shop/Index';
 * @Author: Jack
 * @Date:   2017-12-28 15:00:09
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:55:55
 * @Path btWap \src\shop\Index\_GoodsList.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Button } from 'antd-mobile';
import { ListView } from 'components';
import Styles from 'styles';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-02463842';

const _GoodsList = (props, { $ }) => {
    const { className } = props;
    const goodsList = $.getState('goodsList');
    const { id = 48 } = $.getParams().params;

    return (
        <div className={classNames(prefixCls, className)}>
            {!(id == 48) ? (
                <img className="img-title" src={`${images}/all_products.png`} />
            ) : (
                <img
                    className="img-title_2"
                    src={`${images}/new_arrival.png`}
                />
            )}
            <ListView
                className="mt-d"
                data={goodsList}
                renderRow={item => (
                    <div
                        className="item"
                        onClick={() =>
                            Utils.router.push(
                                `/shop/goods?id=${item.gid}`,
                                `/shop/goods/${item.gid}`
                            )}
                    >
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: `url(${Utils.getAppImgUrl(
                                    item.imgs,
                                    'scale'
                                )})`
                            }}
                        />
                        <div className="p-w text-center">
                            <p className="text-sm text-clamp-1">{item.title}</p>
                            <p className="text-xxs text-bold mt-xs text-clamp-1">
                                {item.minPrice === item.maxPrice
                                    ? `¥ ${item.maxPrice}`
                                    : `¥ ${item.minPrice} - ${item.maxPrice}`}
                            </p>
                        </div>
                    </div>
                )}
                onEndReached={$.fetchGoodsList}
            />

            <style jsx global>{`
                .styles-02463842 {
                }
                .${prefixCls} .am-list-body {
                    background: ${Styles.color_bg};
                }
                .${prefixCls} .am-list-body:before,
                .${prefixCls} .am-list-body:after {
                    display: none !important;
                }
            `}</style>
            <style jsx>{`
                .styles-02463842 {
                    padding: 0 3%;
                }
                .img-title {
                    width: 3rem;
                    height: 0.28rem;
                }
                .img-title_2 {
                    width: 2.78rem;
                    height: 0.28rem;
                }
                .item {
                    display: inline-block;
                    width: 48.5%;
                    padding-bottom: 0.5rem;
                    margin-right: 3%;
                    margin-bottom: 2.4%;
                    background-color: #fff;
                }
                .item:nth-of-type(2n) {
                    margin-right: 0;
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

_GoodsList.contextTypes = {
    $: PropTypes.object
};

export default observer(_GoodsList);
