/**
 * const prefixCls = 'styles-16194448';
 * const images = '/static/images/src/event/sign/Index';
 * @Author: Jack
 * @Date:   2018-05-26 14:58:33
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-26 14:58:58
 * @Path btWap \src\event\sign\Index\_Top.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import __Progress from './__Progress';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'styles-35322355';

const _Top = (props, { $ }) => {
    const { className } = props;
    const { sign } = $.getState('userInfo');
    const { list = [], day } = $.getState('weekSign');

    const isActive = list.length >= 7;

    return (
        <div className={classNames(prefixCls, className)}>
            {/*背景*/}
            <img className="bg" src={`${images}/calendar.png`} />

            {/*日历顶部*/}
            <Flex className={`${prefixCls}__header`}>
                <Flex
                    className={`${prefixCls}__header_btn`}
                    justify="center"
                    onClick={() => Utils.router.push('/event/sign_history')}
                >
                    <span>历史签到</span>
                </Flex>
                <Flex.Item className="text-center">
                    <span className={`${prefixCls}__header_title`}>每周签到</span>
                </Flex.Item>
                <img
                    className="btn-rank"
                    src={`${images}/btn_rank.png`}
                    onClick={() => Utils.router.push('/event/sign_ranking')}
                />
            </Flex>

            <div className="content">
                {/*第几天*/}
                <div className="text-center" style={{ position: 'relative' }}>
                    <span className="content-text-sm text-sub">已签</span>
                    <span className="content-text-lg">{list.length || 0}</span>
                    <span className="content-text-sm text-sub">天</span>

                    {/*领取积分按钮*/}
                    <div
                        className={classNames('btn-get text-sub', {
                            'btn-get-active': isActive
                        })}
                        onClick={
                            isActive
                                ? $.doGetPoint
                                : () => Utils.light('一周满签可领取88积分')
                        }
                    >
                        领取奖励
                    </div>
                </div>

                {/*进度*/}
                <__Progress />

                {/*按钮*/}
                <img
                    className={classNames('btn-sign', {
                        'tool-active': !sign
                    })}
                    src={
                        sign
                            ? `${images}/btn_signed.png`
                            : `${images}/btn_sign.png`
                    }
                    onClick={
                        sign ? undefined : () => Utils.checkLogin($.doSign)
                    }
                />

                {/*活动规则*/}
                <div className="rule">
                    <span
                        className="text-desc"
                        onClick={() => Utils.router.push('/event/sign_rule')}
                    >
                        活动规则
                    </span>
                </div>

                <div className="sub text-xs">签到先锋所得积分于每晚凌晨2:00发放</div>
            </div>

            <style jsx global>{`
                .styles-35322355 {
                    position: relative;
                }
                .styles-35322355__header {
                    position: absolute;
                    z-index: 3;
                    top: 30%;
                    left: 0;
                    width: 88%;
                    height: 11%;
                    margin-left: 6%;
                    color: #fff;
                }
                .styles-35322355__header_title {
                    font-size: 0.44rem;
                    text-shadow: 0.02rem 0.02rem 0.02rem rgba(0, 0, 0, 0.16);
                }
                .styles-35322355__header_btn {
                    position: absolute;
                    left: 0.1rem;
                    top: 52%;
                    width: 1.29rem;
                    height: 0.51rem;
                    background-image: url('${images}/btn.png');
                    ${Styles._bg};
                    transform: translateY(-50%);
                }
                .styles-35322355__header_btn span {
                    font-size: 0.24rem;
                    color: #000;
                }
            `}</style>
            <style jsx>{`
                .bg {
                    width: 96%;
                    min-height: 7.6rem;
                    margin-left: 2%;
                    margin-top: 8%;
                }
                .btn-rank {
                    position: absolute;
                    right: 0.1rem;
                    top: 52%;
                    width: 1.33rem;
                    height: 0.54rem;
                    transform: translateY(-50%);
                }
                .content {
                    position: absolute;
                    top: 68%;
                    left: 0;
                    width: 100%;
                    transform: translateY(-50%);
                }
                .content-text-sm {
                    margin: 0 0.02rem;
                    font-size: 0.48rem;
                }
                .content-text-lg {
                    font-size: 0.88rem;
                    color: #ff8c8c;
                }
                .btn-sign {
                    display: block;
                    width: 56%;
                    margin: 5% auto 0;
                }
                .rule {
                    text-align: center;
                    margin-top: 3.4%;
                }
                .sub {
                    text-align: center;
                    margin-top: 3%;
                    color: #ff8c8c;
                }
                .btn-get {
                    position: absolute;
                    right: 6%;
                    bottom: 0.1rem;
                    padding: 0.12rem 0.2rem;
                    font-size: ${Styles.font_sm};
                    letter-spacing: 0.02rem;
                    background-color: ${Styles.color_bg};
                    border-radius: ${Styles.radius_xs};
                    transition: all 0.3s;
                }
                .btn-get-active {
                    color: #fff;
                    background-color: #ff6a6a;
                    box-shadow: 0.02rem 0.02rem 0.08rem rgba(255, 106, 106, 0.8);
                }
            `}</style>
        </div>
    );
};

_Top.contextTypes = {
    $: PropTypes.object
};

export default observer(_Top);
