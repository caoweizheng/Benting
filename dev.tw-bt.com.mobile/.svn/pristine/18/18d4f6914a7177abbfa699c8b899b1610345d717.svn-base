/**
 * const prefixCls = 'styles-10269887';
 * const images = '/static/images/src/index/Home';
 * @Author: Jack
 * @Date:   2018-01-03 16:04:59
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-23 13:35:18
 * @Path btWap \src\index\Home\index.js
 */
'use strict';

import React from 'react';
import LazyLoad from 'react-lazyload';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _Carousel from './_Carousel';
import _Event from './_Event';
import _Fish from './_Fish_v2';
import _Information from './_Information';
import _Menu from './_Menu';
import _Notice from './_Notice';
import _Star from './_Star';
import _Video from './_Video';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';
import UI from 'stores/ui';
import store from './store';

const prefixCls = 'styles-10269887';
import { images } from './ds';

@inject(store)
@observer
export default class Index extends React.Component {
    componentDidMount() {
        UI.header({
            hd: (
                <img
                    className={`${prefixCls}__img-bar t-img ml-sm`}
                    src={`${Const.__IMAGES__}/sign.png`}
                    onClick={() =>
                        (window.location =
                            'https://www.nidosport.com/event/sign')
                    }
                />
            ),
            ft: (
                <div>
                    <img
                        key="server"
                        className={`${prefixCls}__img-bar t-img`}
                        src={`${Const.__IMAGES__}/server.png`}
                        onClick={() => Utils.router.push('/server')}
                    />
                    <img
                        key="contact"
                        className={`${prefixCls}__img-bar t-img ml-md`}
                        src={`${Const.__IMAGES__}/contact.png`}
                        onClick={() => Utils.router.push('/merchant/join')}
                    />
                </div>
            )
        });
    }

    componentWillUnmount() {
        UI.resetHeader();
    }

    render() {
        const mounted = G.getState('mounted');

        return (
            <Layout hideBack title="本汀官网">
                <_Carousel />
                <_Menu />
                {mounted && <_Notice />}
                <_Event className="mt-d" />
                <LazyLoad height="3.68rem" once>
                    <_Fish className="mt-d" />
                </LazyLoad>
                <LazyLoad height="1.2rem" once>
                    <img
                        className="img-star mt-d"
                        src={`${images}/banner_star.png`}
                        onClick={() => Utils.router.push('/star')}
                    />
                </LazyLoad>
                <LazyLoad height="6rem" once>
                    <_Star className="mt-d" />
                </LazyLoad>
                <LazyLoad height="4rem" once>
                    <_Video className="mt-d" />
                </LazyLoad>
                <LazyLoad height="20rem" once>
                    <_Information className="mt-d" />
                </LazyLoad>
                <img
                    className="img-new-version"
                    src={`${images}/new_version.png`}
                    onClick={() =>
                        (window.location = 'http://benting.tw-bt.com')
                    }
                />

                <style jsx global>{`
                    .styles-10269887 {
                    }
                    .${prefixCls}__img-bar {
                        width: 0.31rem;
                        height: 0.57rem;
                    }
                `}</style>
                <style jsx>{`
                    .styles-10269887 {
                    }
                    .img-star {
                        width: 100%;
                        min-height: 1.02rem;
                    }
                    .img-new-version {
                        position: fixed;
                        right: 0;
                        bottom: 1rem;
                        width: 1.6rem;
                    }
                `}</style>
            </Layout>
        );
    }
}
