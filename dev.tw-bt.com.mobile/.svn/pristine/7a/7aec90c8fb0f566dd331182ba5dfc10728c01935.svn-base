/**
 * const prefixCls = 'styles-61759101';
 * const images = '/static/images/src/merchant/QRCode';
 * @Author: Jack
 * @Date:   2018-05-09 18:18:53
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:16:17
 * @Path btWap \src\merchant\QRCode\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-61759101';

@inject(store)
@observer
export default class QRCode extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const merchantInfo = $.getState('merchantInfo');
        const qrcode = $.getState('qrcode');

        return (
            <Layout className={prefixCls} title="加入汀友会" hide>
                <div className="qrcode-placeholder">
                    {!!qrcode && (
                        <img
                            className="img-qrcode"
                            src={`data:image/png;base64,${qrcode}`}
                        />
                    )}
                </div>
                <p className="p-info">
                    <span>{merchantInfo.shopName}</span>
                    <span>邀请您加入</span>
                    <br />
                    <span>{merchantInfo.assemblyName}</span>
                </p>

                <style jsx global>{`
                    .styles-61759101 {
                        height: 100vh !important;
                        ${Styles._bg};
                        background-image: url(${images}/bg.jpg);
                    }
                `}</style>
                <style jsx>{`
                    .styles-61759101 {
                    }
                    .qrcode-placeholder {
                        display: inline-block;
                        width: 50vw;
                        height: 50vw;
                        padding: ${Styles.sm};
                        margin-left: 25vw;
                        margin-top: 25vw;
                        background: rgba(255, 255, 255, 0.64);
                    }
                    .img-qrcode {
                        width: 100%;
                        height: 100%;
                        box-shadow: 0 0 0.16rem rgba(0, 0, 0, 0.16);
                    }
                    .p-info {
                        padding: 0 10vw;
                        margin-top: 10vw;
                        font-size: 0.48rem;
                        line-height: 1.5;
                        color: #fff;
                        text-align: center;
                    }
                `}</style>
            </Layout>
        );
    }
}
