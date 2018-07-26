/**
 * const prefixCls = 'styles-81442335';
 * const images = '/static/images/src/merchant/Detail';
 * @Author: Jack
 * @Date:   2018-01-31 14:05:19
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-19 15:41:43
 * @Path btWap \src\merchant\Detail\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { List, Flex } from 'antd-mobile';
import { Img, ImgView } from 'components';
import { Layout, Header } from 'src/_';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import G from 'stores/g';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-81442335';

@inject(store)
@observer
export default class Detail extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    state = {
        showImgView: false,
        imgViewIndex: 0
    };

    componentDidMount() {
        if (Const.__CLIENT__) {
            const { $ } = this.context;

            Utils.removeHD();

            G.loadAMapJS(() => $.fetchShopDetail());
        }
    }

    componentWillUnmount() {
        if (Const.__CLIENT__) {
            Utils.setHD();
        }
    }

    showImgView = imgViewIndex => {
        this.setState({
            showImgView: true,
            imgViewIndex
        });
    };

    hideImgView = () => {
        this.setState({
            showImgView: false
        });
    };

    render() {
        const { $ } = this.context;
        const shopDetail = $.getState('shopDetail');
        const { showImgView, imgViewIndex } = this.state;

        let photos = [];
        if (shopDetail.shopFace) {
            photos = [
                shopDetail.shopFace,
                ...shopDetail.shopPhoto.split(',')
            ].filter(item => !!item);
        }

        return (
            <Layout title="经销商" hideHeader>
                <div id="amap" className="amap" />
                <img
                    className="img-location"
                    src={`${images}/location.png`}
                    onClick={$.doNavigate}
                />
                <List className={`${prefixCls}__list`}>
                    <List.Item>
                        <p className="text-bold">
                            {shopDetail.shopName || '-'}
                        </p>
                    </List.Item>
                    <List.Item wrap="wrap">
                        <Flex className="text-sm" align="start">
                            地　　址：
                            <Flex.Item>{shopDetail.address || '-'}</Flex.Item>
                        </Flex>
                        <Flex className="text-sm mt-xs" align="start">
                            营业时间：
                            <Flex.Item>
                                {shopDetail.businessTime || '-'}
                            </Flex.Item>
                        </Flex>
                    </List.Item>
                </List>
                <List className="mt-d">
                    <List.Item>
                        <p>简介</p>
                    </List.Item>
                    <List.Item wrap>
                        <p className="text-sm">{shopDetail.intro || '-'}</p>
                    </List.Item>
                </List>
                {!!photos.length && (
                    <List className="mt-d">
                        <List.Item>
                            <p>照片</p>
                        </List.Item>
                        <List.Item wrap>
                            <div className="photo">
                                {photos.map((item, index) => (
                                    <Img
                                        key={item}
                                        className={`${prefixCls}__img`}
                                        src={Utils.getAppImgUrl(item, 'scale')}
                                        onClick={() => this.showImgView(index)}
                                    />
                                ))}
                            </div>
                        </List.Item>
                    </List>
                )}
                {!!photos.length && (
                    <ImgView
                        show={showImgView}
                        current={imgViewIndex}
                        data={photos.map(item =>
                            Utils.getAppImgUrl(item, 'scale')
                        )}
                        onClose={this.hideImgView}
                    />
                )}

                <style jsx global>{`
                    .styles-81442335 {
                    }
                    .${prefixCls}__img {
                        display: inline-block;
                        width: 2.4rem !important;
                        height: 1.8rem !important;
                        margin-right: ${Styles.sm};
                        border: 0.01rem solid ${Styles.color_border};
                    }
                    .${prefixCls}__img:last-child {
                        margin-right: 0;
                    }
                    .${prefixCls}__marker {
                        width: 0.576rem !important;
                        height: 0.576rem !important;
                    }
                    .${prefixCls}__list {
                        border-top: 0.01rem solid ${Styles.color_border};
                    }
                `}</style>
                <style jsx>{`
                    .styles-81442335 {
                    }
                    .amap {
                        position: relative;
                        padding-bottom: 75%;
                        overflow: hidden;
                    }
                    .detail {
                        background: #fff;
                    }
                    .content {
                        background: #fff;
                    }
                    .img-location {
                        position: absolute;
                        z-index: 100;
                        top: 0;
                        margin-top: 78%;
                        right: ${Styles.wind};
                        width: 1.54rem;
                        height: 1.54rem;
                        transform: translateY(-50%);
                    }
                    .photo {
                        background: #fff;
                        overflow-x: scroll;
                        overflow-y: hidden;
                        white-space: nowrap;
                    }
                `}</style>
            </Layout>
        );
    }
}
