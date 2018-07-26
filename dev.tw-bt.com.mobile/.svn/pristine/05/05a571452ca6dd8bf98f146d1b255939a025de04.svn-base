/**
 * const prefixCls = 'styles-24556573';
 * const images = '/static/images/src/person/merchant';
 * @Author: Jack
 * @Date:   2018-05-09 13:54:08
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:31:43
 * @Path btWap \src\person\merchant\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import UI from 'stores/ui';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-24556573';

@inject(store)
@observer
export default class Merchant extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentDidMount() {
        UI.header({
            ft: (
                <img
                    className="t-img"
                    src={`${Const.__IMAGES__}/icon/qrcode.png`}
                    style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        opacity: '0.8'
                    }}
                    onClick={() => Utils.router.push('/merchant/qrcode')}
                />
            )
        });
    }

    componentWillUnmount() {
        UI.resetHeader();
    }

    render() {
        return (
            <Layout title="商家中心">
                <div
                    className="item"
                    style={{ backgroundImage: `url(${images}/2.png)` }}
                    onClick={() => Utils.router.push('/merchant/lottery')}
                />
                <div
                    className="item"
                    style={{ backgroundImage: `url(${images}/1.png)` }}
                    onClick={() => Utils.router.push('/merchant/member')}
                />

                <style jsx>{`
                    .styles-24556573 {
                    }
                    .item {
                        margin: 4%;
                        padding-bottom: 32%;
                        ${Styles._bg};
                        border-radius: 0.16rem;
                    }
                `}</style>
            </Layout>
        );
    }
}
