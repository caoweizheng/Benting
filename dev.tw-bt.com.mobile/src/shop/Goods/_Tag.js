/**
 * const prefixCls = 'styles-88426454';
 * const images = '/static/images/src/shop/Goods';
 * @Author: qizc
 * @Date:   2017-12-28 15:19:47
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:54:54
 * @Path btWap \src\shop\Goods\_Tag.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, Icon, Button, Stepper } from 'antd-mobile';
import { Animate, Img } from 'components';
import Styles from 'styles';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-88426454';

const __showTag = (props, { $ }) => {
    const { className } = props;
    const { tagIndex = 0, num = 1 } = $.getState('state');
    const {
        minPrice = 0,
        maxPrice = 0,
        stock = 0,
        size = [],
        imgs = 0
    } = $.getState('recommendDetails');
    const _price =
        tagIndex === null
            ? minPrice == maxPrice ? `${minPrice}` : `${minPrice} - ${maxPrice}`
            : (size[tagIndex].price * num).toFixed(2);

    return (
        <div className={`${prefixCls}_tag`}>
            <Flex align="start" justify="between" className="p-sw top hidden">
                <div className="_img">
                    <Img
                        src={imgs}
                        size="1.7rem"
                        style={{
                            backgroundSize: '80%',
                            border: `0.01rem solid ${Styles.color_border}`
                        }}
                    />
                </div>
                <div className="l">
                    <p className="money text-bold">¥ {_price}</p>
                    <p className="text-sm mt-xs">库存：{stock}</p>
                </div>
                <Icon
                    className="btn-close"
                    type="cross"
                    onClick={() =>
                        $.setState({
                            showTag: false
                        })}
                />
            </Flex>
            <p className="cc text-desc p-sw">尺寸</p>
            <div
                className="list text-sm"
                onTouchMove={e => {
                    e.stopPropagation();
                }}
            >
                {size.map((item, index) => (
                    <span
                        key={index}
                        className={classNames('item text-sm', {
                            active: index === tagIndex
                        })}
                        onClick={() => $.onTagClick(index)}
                    >
                        {item.sizeName}
                    </span>
                ))}
                {!size[0] && <div className="text-center text-sub">暂未录入</div>}
            </div>
            <div className="add">
                <Flex justify="between" align="center">
                    <p>数量</p>
                    <Stepper
                        showNumber
                        max={100}
                        min={1}
                        defaultValue={num}
                        style={{ minWidth: '1rem' }}
                        onChange={v =>
                            $.setState({
                                num: v
                            })}
                    />
                </Flex>
            </div>
            <Button
                className={`${prefixCls}_btn`}
                type="primary"
                onClick={() => Utils.light('即将开放')}
            >
                确定
            </Button>

            <style jsx global>{`
                .${prefixCls}_tag {
                    z-index: ${Styles.z_modal_wrap};
                    background: #fff;
                    position: fixed;
                    right: 0;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                }
                .${prefixCls} .top {
                    position: relative;
                }
                .${prefixCls} .hidden {
                    overflow: initial !important;
                }
                .${prefixCls} .btn-close {
                    margin-top: -0.06rem;
                }
                .${prefixCls} .am-stepper-handler {
                    border-radius: 0 !important;
                }
                .${prefixCls}_btn {
                    border-radius: 0 !important;
                }
            `}</style>
            <style jsx>{`
                .list {
                    padding: 3% ${Styles.wind} 0;
                    min-height: 0.8rem;
                    max-height: 4.38rem;
                    border-top: 0.01rem solid ${Styles.color_border};
                    border-bottom: 0.01rem solid ${Styles.color_border};
                    overflow-y: scroll;
                    overflow-x: hidden;
                }
                .cc {
                    border-top: 0.01rem solid ${Styles.color_border};
                }
                .add {
                    padding: ${Styles.wind};
                }
                .l {
                    margin-left: 2rem;
                }
                .money {
                    color: #4a68dd;
                }
                ._img {
                    position: absolute;
                    top: -30%;
                    left: ${Styles.wind};
                    padding: 0.06rem;
                    background: #fff;
                    border: 0.01rem solid ${Styles.color_border};
                    borderradius: ${Styles.radius_sm};
                }
                .item {
                    display: inline-block;
                    vertical-align: top;
                    width: 48.5%;
                    padding: ${Styles.wind};
                    margin-right: 3%;
                    margin-bottom: 3%;
                    text-align: center;
                    border: 0.01rem solid ${Styles.color_border};
                    overflow: hidden;
                    transition: all 0.3s;
                }
                .item:nth-of-type(2n) {
                    margin-right: 0;
                }
                .active {
                    color: #fff;
                    background: ${Styles.color_main};
                    border: 0.01rem solid ${Styles.color_main};
                }
            `}</style>
        </div>
    );
};
__showTag.contextTypes = {
    $: PropTypes.object
};

const _Tag = (props, { $ }) => {
    const { className } = props;
    const { showTag } = $.getState('state');
    return (
        <div className={classNames(prefixCls, className)}>
            <Flex
                justify="between"
                className="p-sw list"
                onClick={() =>
                    $.setState({
                        showTag: true
                    })}
            >
                <span className="text-sm">物品信息</span>
                <img src={`${images}/more.png`} />
            </Flex>
            <div>
                <Animate type="fade">
                    {showTag && <div className="am-modal-mask" />}
                </Animate>
                <Animate type="bottom">
                    {showTag && <__showTag className="tag" />}
                </Animate>
            </div>
            <style jsx global>{`
                .styles-88426454 {
                }
                .${prefixCls} .list {
                    background: #fff;
                }
            `}</style>
        </div>
    );
};

_Tag.contextTypes = {
    $: PropTypes.object
};

export default observer(_Tag);
