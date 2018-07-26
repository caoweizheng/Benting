/**
 * const prefixCls = 'styles-17720392';
 * const images = '/static/images/src/person/Index';
 * @Author: qizc
 * @Date:   2017-12-26 17:44:15
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-17 15:29:46
 * @Path btWap \src\person\Index\index.js
 */
'use strict';

import React from 'react';
import LazyLoad from 'react-lazyload';
import { inject, observer } from '@';
import { Header } from 'components';
import { Layout } from 'src/_';
import _Info from './_Info';
import _Grade from './_Grade';
import _UserCenter from './_UserCenter';
import _Power from './_Power';
import _OtherPower from './_OtherPower';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';
import store from './store';
import { images } from './ds';

@inject(store)
@observer
export default class Index extends React.Component {
    componentDidMount() {
        // 百度登录后回调，处理参数，只处理成功的情况
        let { data } = Utils.getUrlArgObject();
        if (data) {
            data = JSON.parse(data);

            if (data.code == 0) {
                G.updateTk(data.data);
            }
        } else if (!G.getState('tk')) {
            Utils.router.replace('/login');
        }
    }

    render() {
        return (
            <Layout title="个人中心" hide>
                <Header
                    show
                    hideBack
                    ft={
                        <img
                            src={`${images}/nidosport.png`}
                            style={{ width: '0.44rem', height: '0.44rem' }}
                            onClick={() =>
                                (window.location = `${
                                    Const.__WEB_NIDO__
                                }/person`)
                            }
                        />
                    }
                />
                <_Info />
                <_Grade className="mt-d" />
                <_UserCenter className="mt-md" />
                <LazyLoad height="17rem" once>
                    <_Power className="mt-md" />
                </LazyLoad>
                <LazyLoad height="4.6rem" once>
                    <_OtherPower className="mt-md" />
                </LazyLoad>
                <div className="text-center p-sw mt-md">
                    <span className="text-danger" onClick={() => G.doLogout()}>
                        退出登录
                    </span>
                </div>
            </Layout>
        );
    }
}
