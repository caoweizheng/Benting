/**
 * const prefixCls = 'styles-76759430';
 * const images = '/static/images/src/event/redPacket/TianjinGet';
 * @Author: Jack
 * @Date:   2018-02-07 12:20:04
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 14:59:17
 * @Path btWap \src\event\redPacket\TianjinGet\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Animate } from 'components';
import { Layout } from 'src/_';
import Styles from 'styles';
import Utils from 'utils';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-76759430';

@inject(store)
@observer
export default class TianjinGet extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentDidMount() {
        Utils.wxHideMenuItems();
    }

    render() {
        const { $ } = this.context;
        const { float } = $.getState();
        const record = $.getState('record');
        const isGet = record.isGet === 1;

        return (
            <Layout className={prefixCls} title="苏州展会红包" hide>
                <div className="wrap">
                    <img className="img-1" src={`${images}/1.png`} />
                    <img className="img-2" src={`${images}/2.png`} />
                    {isGet && <img className="img-4" src={`${images}/4.png`} />}
                    <div
                        className="btn-home"
                        onClick={() => Utils.router.push('/')}
                    />
                    <div
                        className="btn-admin"
                        onClick={() => {
                            if (isGet) {
                                Utils.light('已领取');
                            } else {
                                $.showFloat();
                            }
                        }}
                    />
                </div>
                <Animate type="fade">
                    {float && (
                        <div className="mask">
                            <img className="img-3" src={`${images}/3.png`} />
                            <div
                                className="btn-modal btn-get"
                                onClick={$.doGet}
                            />
                            <div
                                className="btn-modal btn-close"
                                onClick={$.hideFloat}
                            />
                        </div>
                    )}
                </Animate>

                <style jsx global>{`
                    .styles-76759430 {
                        position: relative;
                        padding-bottom: 0 !important;
                    }
                `}</style>
                <style jsx>{`
                    .styles-76759430 {
                    }
                    .wrap {
                        position: relative;
                        min-height: 100vh !important;
                        ${Styles._bg};
                        background-image: url(${images}/bg.jpg);
                        background-color: #d92d2d;
                    }
                    .img-1 {
                        position: absolute;
                        z-index: 1;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        min-height: 4.61rem;
                    }
                    .img-2 {
                        width: 100%;
                        vertical-align: top;
                        min-height: 6.23rem;
                    }
                    .img-4 {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 30%;
                        margin-bottom: 27%;
                    }
                    .btn-home {
                        position: absolute;
                        z-index: 1;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        padding-bottom: 19%;
                    }
                    .btn-admin {
                        position: absolute;
                        z-index: 1;
                        bottom: 0;
                        right: 0;
                        width: 32%;
                        padding-bottom: 45%;
                        margin-bottom: 28%;
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
                    .img-3 {
                        width: 100%;
                        margin-top: 26%;
                    }
                    .btn-modal {
                        position: absolute;
                        z-index: 100;
                        top: 0;
                        width: 34%;
                        padding-bottom: 10%;
                        margin-top: 86%;
                    }
                    .btn-get {
                        left: 0;
                        margin-left: 14%;
                    }
                    .btn-close {
                        right: 0;
                        margin-right: 14%;
                    }
                `}</style>
            </Layout>
        );
    }
}
