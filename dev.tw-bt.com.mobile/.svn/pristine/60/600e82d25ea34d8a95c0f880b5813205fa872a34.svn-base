/**
 * const prefixCls = 'styles-94752507';
 * const images = '/static/images/src/merchant/Index';
 * @Author: Jack
 * @Date:   2018-02-01 17:02:26
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:14:30
 * @Path btWap \src\merchant\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer } from '@';
import { List, Flex } from 'antd-mobile';
import { Img } from 'components';
import { Layout, Header } from 'src/_';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import G from 'stores/g';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-94752507';

@inject(store)
@observer
export default class Index extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentWillUnmount() {
        if (Const.__CLIENT__) {
            Utils.setHD();
        }
    }

    componentDidMount() {
        if (Const.__CLIENT__) {
            const { $ } = this.context;

            Utils.removeHD();

            G.loadAMapJS(() => $.initMap());
        }
    }

    render() {
        const { $ } = this.context;
        const { selectMarkerIndex } = $.getState();
        const shopList = $.getState('shopList');

        return (
            <Layout className={prefixCls} title="附近经销商" hide>
                <div className="wrap-map">
                    <img
                        className="img-back"
                        src={`${Const.__IMAGES__}/back.png`}
                        onClick={() => Utils.router.back()}
                    />
                    <img
                        className="img-home"
                        src={`${Const.__IMAGES__}/home.png`}
                        onClick={() => Utils.router.push('/')}
                    />
                    <div id="amap" className="amap" />
                </div>
                <List className={`${prefixCls}__list`}>
                    {shopList.list.map((item, index) => (
                        <List.Item
                            key={item.allianceId}
                            className={`${prefixCls}__item-${index}`}
                            thumb={
                                <div
                                    className={classNames({
                                        'amap-simple-marker': true,
                                        'amap-simple-marker-numv1-style': true,
                                        [`${prefixCls}__marker`]: true,
                                        [`amap-simple-marker-style-red-${index + 1}`]:
                                            selectMarkerIndex !== index,
                                        [`amap-simple-marker-style-blue-${index + 1}`]:
                                            selectMarkerIndex === index
                                    })}
                                    onClick={() => $.selectMarker(index)}
                                >
                                    <div className="amap-simple-marker-icon" />
                                </div>
                            }
                        >
                            <Flex wrap="wrap">
                                <Flex.Item
                                    onClick={() =>
                                        Utils.router.push(
                                            `/merchant/detail?id=${item.allianceId}`,
                                            `/merchant/detail/${item.allianceId}`
                                        )}
                                >
                                    <p>
                                        <span>{item.shopName}</span>
                                        <span className="text-xs ml-xs mr-xs">|</span>
                                        <span className="text-xs text-sub">
                                            {(item.distance / 1000).toFixed(2)}km
                                        </span>
                                    </p>
                                    <p className="p-address text-xs text-sub">
                                        地址：{item.address || '-'}
                                    </p>
                                </Flex.Item>
                                <Img
                                    className={`${prefixCls}__thumb ml-sm`}
                                    src={item.shopFace}
                                    style={{
                                        width: '1.2rem',
                                        height: '0.9rem'
                                    }}
                                    onClick={() => $.selectMarker(index)}
                                />
                            </Flex>
                        </List.Item>
                    ))}
                </List>

                <style jsx global>{`
                    .styles-94752507 {
                        padding-bottom: 0 !important;
                    }
                    .${prefixCls}__marker {
                        width: 0.576rem !important;
                        height: 0.576rem !important;
                    }
                    .${prefixCls}__list {
                        margin-top: 75%;
                    }
                    .${prefixCls}__thumb {
                        border: 0.01rem solid ${Styles.color_border};
                    }
                `}</style>
                <style jsx>{`
                    .styles-94752507 {
                    }
                    .wrap-map {
                        position: fixed;
                        z-index: 100;
                        top: 0;
                        left: 0;
                        right: 0;
                    }
                    .amap {
                        position: relative;
                        padding-bottom: 75%;
                        border-bottom: 0.01rem solid ${Styles.color_border};
                        overflow: hidden;
                    }
                    img {
                        width: 0.64rem;
                        height: 0.64rem;
                        position: absolute;
                        z-index: 1000;
                        top: ${Styles.space};
                        opacity: 0.8;
                    }
                    .img-back {
                        left: ${Styles.wind};
                    }
                    .img-home {
                        right: ${Styles.wind};
                    }
                    .p-address {
                        white-space: initial;
                        line-height: 1.4;
                    }
                `}</style>
            </Layout>
        );
    }
}
