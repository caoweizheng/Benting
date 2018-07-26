/**
 * const prefixCls = 'styles-16783823';
 * const images = '/static/images/src/index/Home';
 * @Author: Jack
 * @Date:   2018-01-22 13:51:21
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:07:29
 * @Path btWap \src\index\Home\_Event.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import { Img, CountDown } from 'components';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-16783823';
import { images } from './ds';

const _Event = (props, { $ }) => {
    const { className } = props;
    const {
        floor = {}, //金币踩楼
        guess = {}, //猜鱼
        panic = {}, //极速秒杀
        panicGold = {}, //金币捡漏
        pointOncebuy = {}, //积分挖宝
        pointAuction = {}, //积分竞拍
        goldAuction = {} //金币竞拍
    } = $.getState('eventInfo');

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="wrap">
                <div className="block" onClick={() => Utils.router.push('/shop/miaosha')}>
                    <div className="content">
                        <p className="text-primary text-bold">极速秒杀</p>
                        <CountDown
                            className="mt-xs"
                            beginTime={panic.beginTime}
                            left={<span className="text-xxs mr-xs">倒计时</span>}
                        >
                            <span className="p-ing mt-xs">进行中</span>
                        </CountDown>
                        <Img
                            className={`${prefixCls}__img-lg`}
                            src={Utils.getAppImgUrl(panic.imgId)}
                            style={{
                                backgroundColor: 'transparent',
                                backgroundSize: 'contain'
                            }}
                        />
                    </div>
                </div>
                <div className="block">
                    <div className="square" onClick={() => Utils.router.push('/event/floor')}>
                        <div className="content">
                            <p className="text-bold">金币踩楼</p>
                            <span className="p-ing mt-xs">进行中</span>
                            <Img
                                className={`${prefixCls}__img-sm`}
                                src={Utils.getAppImgUrl(floor.imgId, 'scale')}
                            />
                        </div>
                    </div>
                    <div className="square" onClick={() => Utils.router.push('/shop/auction')}>
                        <div className="content">
                            <p className="text-bold">金币竞拍</p>
                            {goldAuction.state === 2 ? (
                                <span className="p-ing mt-xs">进行中</span>
                            ) : (
                                <span className="p-wait mt-xs">暂无活动</span>
                            )}
                            <Img
                                className={`${prefixCls}__img-sm`}
                                src={Utils.getAppImgUrl(goldAuction.imgId, 'scale')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="t-img img-zhibo mt-d"
                src={`${images}/zhibo.jpg`}
                onClick={() => Utils.router.push('/bbs/block?id=95', '/bbs/block/95')}
            />
            <div className="wrap mt-d">
                <div className="block">
                    <div className="square" onClick={() => Utils.router.push('/shop/jianlou')}>
                        <div className="content">
                            <p className="text-bold">金币捡漏</p>
                            {panicGold.state === 1 && (
                                <CountDown className="mt-xs" beginTime={panicGold.beginTime} />
                            )}
                            {panicGold.state === 2 && <span className="p-ing mt-xs">进行中</span>}
                            {panicGold.state === 3 && <span className="p-wait mt-xs">暂无活动</span>}
                            <Img
                                className={`${prefixCls}__img-sm`}
                                src={Utils.getAppImgUrl(panicGold.imgId, 'scale')}
                            />
                        </div>
                    </div>
                    <div
                        className="square"
                        onClick={() => {
                            window.location = 'https://www.nidosport.com/event/integral_indiana';
                        }}
                    >
                        <div className="content">
                            <p className="text-bold">积分挖宝</p>
                            {pointOncebuy.state === 2 ? (
                                <span className="p-ing mt-xs">进行中</span>
                            ) : (
                                <span className="p-wait mt-xs">暂无活动</span>
                            )}
                            <Img
                                className={`${prefixCls}__img-sm`}
                                src={Utils.getAppImgUrl(pointOncebuy.imgId, 'scale')}
                            />
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="square" onClick={() => Utils.router.push('/event/guess')}>
                        <div className="content">
                            <p className="text-bold">欢乐猜鱼</p>
                            {guess.state === 2 ? (
                                <span className="p-ing mt-xs">进行中</span>
                            ) : (
                                <span className="p-wait mt-xs">暂无活动</span>
                            )}
                            <Img
                                className={`${prefixCls}__img-sm`}
                                src={Utils.getAppImgUrl(guess.imgId, 'scale')}
                            />
                        </div>
                    </div>
                    <div
                        className="square"
                        onClick={() => Utils.router.push('/shop/auction?type=score')}
                    >
                        <div className="content">
                            <p className="text-bold">积分竞拍</p>
                            {pointAuction.state === 2 ? (
                                <span className="p-ing mt-xs">进行中</span>
                            ) : (
                                <span className="p-wait mt-xs">暂无活动</span>
                            )}
                            <Img
                                className={`${prefixCls}__img-sm`}
                                src={Utils.getAppImgUrl(pointAuction.imgId, 'scale')}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .styles-16783823 {
                }
                .${prefixCls}__img-lg {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 60%;
                    padding-bottom: 46%;
                    margin-right: 4%;
                    margin-bottom: 8%;
                }
                .${prefixCls}__img-sm {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 34%;
                    padding-bottom: 34%;
                    margin-top: 8%;
                    margin-right: 4%;
                    background-color: #fff;
                }
            `}</style>
            <style jsx>{`
                .styles-16783823 {
                }
                .img-zhibo {
                    width: 100%;
                    min-height: 1.02rem;
                }
                .wrap {
                    background: #fff;
                }
                .block {
                    display: inline-block;
                    position: relative;
                    vertical-align: top;
                    width: 50%;
                    padding-bottom: 50%;
                }
                .block:first-child {
                    border-right: 0.01rem solid ${Styles.color_border};
                }
                .square {
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding-bottom: 50%;
                }
                .square:last-child {
                    top: 50%;
                    border-top: 0.01rem solid ${Styles.color_border};
                }
                .content {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    padding: 8%;
                }
                .p-ing,
                .p-wait {
                    display: inline-block;
                    padding: ${Styles.xs} ${Styles.sm};
                    color: #fff;
                    font-size: ${Styles.font_xxs};
                    border-radius: 0.04rem;
                }
                .p-ing {
                    background-image: linear-gradient(to right, #4d6eeb, #9855de);
                }
                .p-wait {
                    background-color: #c7c7c7;
                }
            `}</style>
        </div>
    );
};

_Event.contextTypes = {
    $: PropTypes.object
};

export default observer(_Event);
