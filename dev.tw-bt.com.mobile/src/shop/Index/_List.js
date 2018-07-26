/**
 * const prefixCls = 'styles-15162033';
 * const images = '/static/images/src/shop/Index';
 * @Author: Jack
 * @Date:   2017-12-28 14:32:10
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:56:04
 * @Path btWap \src\shop\Index\_List.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-15162033';

const Item = props => (
    <div
        className={prefixCls}
        onClick={() => {
            if (props.dataType == 2) {
                Utils.router.push(
                    `/shop?id=${props.dataId}`,
                    `/shop/${props.dataId}`
                );
            } else {
                Utils.router.push(
                    `/shop/goods?id=${props.dataId}`,
                    `/shop/goods/${props.dataId}`
                );
            }
        }}
    >
        <div
            className={classNames(
                `${prefixCls}__item`,
                `${prefixCls}__item_${props.tag}`
            )}
            style={{
                backgroundImage: `url(${Utils.getImgUrl(props.recommendImgs)})`
            }}
        />

        <style jsx global>{`
            .styles-15162033 {
            }
            .${prefixCls} {
                margin-bottom: 3%;
            }
            .${prefixCls}:last-child {
                margin-bottom: 0;
            }
            .${prefixCls}__item {
                ${Styles._bg};
                background-color: ${Styles.color_bg};
            }
            .${prefixCls}__item_XXL {
                padding-bottom: 50%;
            }
            .${prefixCls}__item_XL {
                padding-bottom: 140%;
            }
            .${prefixCls}__item_L {
                width: 94%;
                padding-bottom: 55%;
                margin-left: 3%;
            }
        `}</style>
    </div>
);

const _List = (props, { $ }) => {
    const { className } = props;
    const recommendList = $.getState('recommendList');

    return (
        <div className={classNames(prefixCls, className)}>
            {recommendList.list.map(item => (
                <Item key={item.recommendId} {...item} />
            ))}

            <style jsx>{`
                .styles-15162033 {
                }
            `}</style>
        </div>
    );
};

_List.contextTypes = {
    $: PropTypes.object
};

export default observer(_List);
