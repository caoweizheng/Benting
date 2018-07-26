/**
 * const prefixCls = 'styles-69035051';
 * const images = '/static/images/src/shop/Goods';
 * @Author: qizc
 * @Date:   2017-12-28 15:20:09
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:53:27
 * @Path btWap \src\shop\Goods\_Attr.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List, Icon } from 'antd-mobile';
import { Animate } from 'components';
import Styles from 'styles';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-69035051';

const __showAttr = (props, { $ }) => {
    const { property = [], className } = props;
    return (
        <div className={className}>
            <Flex className="p-sw" justify="between">
                <span>产品参数</span>
                <Icon
                    type="cross"
                    onClick={() =>
                        $.setState({
                            showAttr: false
                        })}
                />
            </Flex>
            <div className="list p-sw mb-md text-sm">
                {property.map(function(elem, index) {
                    return (
                        <span key={index} className="item">
                            {elem.attrName}：{elem.attrValue}
                        </span>
                    );
                })}
                {!property[0] && (
                    <div className="text-center text-sub">暂未录入</div>
                )}
            </div>
            <style jsx>{`
                .list {
                    border-top: 0.01rem solid ${Styles.color_border};
                    max-height: 5rem;
                    overflow-y: scroll;
                    overflow-x: hidden;
                }
                .item {
                    display: inline-block;
                    vertical-align: top;
                    width: 50%;
                    padding: 0.1rem;
                }
            `}</style>
        </div>
    );
};
__showAttr.contextTypes = {
    $: PropTypes.object
};

const _Attr = (props, { $ }) => {
    const { className } = props;
    const { showAttr } = $.getState('state');
    const { title, minPrice, maxPrice, stock, size, property } = $.getState(
        'recommendDetails'
    );
    
    return (
        <div className={classNames(prefixCls, className)}>
            <Flex
                justify="between"
                className="p-sw list"
                onClick={() =>
                    $.setState({
                        showAttr: true
                    })}
            >
                <span className="text-sm">产品参数</span>
                <img src={`${images}/more.png`} />
            </Flex>

            <div className="more">
                <Animate type="fade">
                    {showAttr && <div className="am-modal-mask" />}
                </Animate>
                <Animate type="bottom">
                    {showAttr && (
                        <__showAttr className="attr" property={property} />
                    )}
                </Animate>
            </div>
            <style jsx global>{`
                .styles-69035051 {
                }
                .${prefixCls} .list {
                    background: #fff;
                }
                .${prefixCls} .attr {
                    z-index: ${Styles.z_modal_wrap};
                    background: #fff;
                    position: fixed;
                    right: 0;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                }
            `}</style>
        </div>
    );
};

_Attr.contextTypes = {
    $: PropTypes.object
};

export default observer(_Attr);
