/**
 * const prefixCls = 'styles-04221402';
 * const images = '/static/images/src/event/redPacket/Tianjin';
 * @Author: Jack
 * @Date:   2018-02-06 10:57:09
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 14:58:45
 * @Path btWap \src\event\redPacket\Tianjin\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Animate } from 'components';
import { Layout } from 'src/_';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-04221402';

@inject(store)
@observer
export default class Tianjin extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentDidMount() {
        Utils.wxHideMenuItems();
    }

    renderFloat() {
        const { $ } = this.context;
        const { code } = $.getState();

        return (
            <div className="mask">
                <div className="content">
                    <img className="img-4" src={`${images}/4.png`} />
                    <img
                        className="img-5 t-active"
                        src={`${images}/5.png`}
                        onClick={$.doGet}
                    />
                    <img className="img-7" src={`${images}/7.png`} />
                    <input
                        className="ipt-code"
                        type="text"
                        placeholder="输入验证码领取红包"
                        value={code}
                        onChange={$.onCodeChange}
                    />
                    <div className="btn-close" onClick={$.doHide} />
                </div>
                <img className="img-6" src={`${images}/6.png`} />

                <style jsx>{`
                    .styles-04221402 {
                    }
                    .mask {
                        position: absolute;
                        z-index: 99;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        background: rgba(0, 0, 0, 0.48);
                    }
                    .content {
                        position: absolute;
                        z-index: 1;
                        bottom: 0;
                        left: 0;
                        right: 0;
                    }
                    img {
                        vertical-align: top;
                        width: 100%;
                    }
                    .img-6 {
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        margin-bottom: 6%;
                        margin-left: -50%;
                        animation: scale 2s ease-in-out infinite;
                        animation-fill-mode: both;
                        animation-direction: alternate;
                    }
                    .img-7 {
                        margin-top: 20%;
                    }
                    .ipt-code {
                        position: absolute;
                        z-index: 2;
                        bottom: 0;
                        left: 48%;
                        width: 50%;
                        padding: 0.24rem;
                        margin-bottom: 61%;
                        margin-left: -25%;
                        text-align: center;
                        line-height: 1.5;
                        color: #333;
                        background: #e4dabf;
                        border: 0;
                        border-radius: 0.12rem;
                    }
                    .btn-close {
                        position: absolute;
                        z-index: 99;
                        top: 0;
                        right: 0;
                        margin-top: 10%;
                        margin-right: 8%;
                        width: 1.2rem;
                        height: 1.2rem;
                    }
                    @media screen and (device-width: 320px) {
                        .ipt-code {
                            font-size: 0.24rem;
                        }
                    }
                    @keyframes scale {
                        0% {
                            opacity: 1;
                            transform: scale(0.9);
                        }
                        100% {
                            opacity: 0.64;
                            transform: scale(1);
                        }
                    }
                `}</style>
            </div>
        );
    }

    render() {
        const { $ } = this.context;
        const { float } = $.getState();
        const { mobile } = $.getState();
        const { mobileExt } = $.getState('userInfo');

        return (
            <Layout className={prefixCls} title="苏州展会红包" hide>
                <div className="wrap">
                    <img className="img-1" src={`${images}/1.png`} />
                    <div
                        className="btn-home"
                        onClick={() => Utils.router.push('/')}
                    />
                    <div className="wrap-bottom">
                        <img className="img-2" src={`${images}/2.png`} />
                        <div className="form">
                            {!!mobileExt ? (
                                <p className="p-ext">您当前的手机尾号为{mobileExt}</p>
                            ) : (
                                <input
                                    className="ipt-mobile"
                                    type="text"
                                    placeholder="输入您的手机号码领取红包"
                                    value={mobile}
                                    onChange={$.onMobileChange}
                                />
                            )}
                            <img
                                className="img-btn t-active mt-d"
                                src={`${images}/3.jpg`}
                                onClick={$.doRegister}
                            />
                        </div>
                    </div>
                </div>
                <Animate type="fade">{float && this.renderFloat()}</Animate>

                <style jsx global>{`
                    .styles-04221402 {
                        position: relative;
                        padding-bottom: 0 !important;
                        background: #eadfb2;
                    }
                `}</style>
                <style jsx>{`
                    .styles-04221402 {
                    }
                    .wrap {
                        position: relative;
                        height: 12rem;
                        min-height: 100vh !important;
                    }
                    @media screen and (device-width: 320px) {
                        .wrap {
                            height: 10.4rem;
                        }
                    }
                    .img-1 {
                        position: absolute;
                        z-index: 1;
                        top: 0;
                        left: 0;
                        width: 100%;
                        min-height: 3.74rem;
                    }
                    .btn-home {
                        position: absolute;
                        z-index: 2;
                        top: 0;
                        left: 50%;
                        width: 30%;
                        padding-bottom: 16%;
                        margin-top: 10%;
                        margin-left: -15%;
                    }
                    .wrap-bottom {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        left: 0;
                    }
                    .img-2 {
                        width: 100%;
                        vertical-align: top;
                    }
                    .form {
                        padding: ${Styles.wind};
                        background: #e40038;
                    }
                    .p-ext {
                        height: 0.96rem;
                        line-height: 0.96rem;
                        color: #ffb41c;
                        text-align: center;
                        background: rgba(0, 0, 0, 0.16);
                        border-radius: 0.12rem;
                    }
                    .ipt-mobile {
                        width: 100%;
                        padding: 0.24rem;
                        line-height: 1.5;
                        color: #ffb41c;
                        text-align: center;
                        background: rgba(0, 0, 0, 0.16);
                        border: 0;
                        border-radius: 0.12rem;
                    }
                    .ipt-mobile::-webkit-input-placeholder {
                        color: #ffb41c;
                    }
                    .img-btn {
                        width: 100%;
                        min-height: 0.96rem;
                    }
                `}</style>
            </Layout>
        );
    }
}
