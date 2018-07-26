/**
 * const prefixCls = 'style-137481';
 * const images = '/static/images/src/merchant/Join';
 * @Author: czy0729
 * @Date: 2018-07-20 10:28:36
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-20 14:56:25
 * @Path dev.tw-bt.com.mobile /src/merchant/Join/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Carousel } from 'antd-mobile';
import { Layout } from 'src/_';
import store from './store';

const prefixCls = 'style-137481';
const images = '/static/images/src/merchant/Join';

@inject(store)
@observer
export default class Join extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        return (
            <Layout className={prefixCls} hide title="本汀 · 千城共耀">
                <img className="t-img img-1" src={`${images}/1.png`} alt="" />
                <img className="t-img img-2" src={`${images}/2.png`} alt="" />
                <img className="t-img img-3" src={`${images}/3.png`} alt="" />
                <div className="wrap">
                    <img
                        className="t-img img-4"
                        src={`${images}/4.png`}
                        alt=""
                    />
                    <div className="carousel">
                        <Carousel
                            dots={false}
                            frameOverflow="visible"
                            cellSpacing={40}
                            slideWidth={0.58}
                        >
                            <img
                                className="t-img"
                                src={`${images}/a1.png`}
                                alt=""
                            />
                            <img
                                className="t-img"
                                src={`${images}/a2.png`}
                                alt=""
                            />
                            <img
                                className="t-img"
                                src={`${images}/a3.png`}
                                alt=""
                            />
                            <img
                                className="t-img"
                                src={`${images}/a4.png`}
                                alt=""
                            />
                        </Carousel>
                    </div>
                </div>
                <div className="wrap">
                    <img
                        className="t-img img-5"
                        src={`${images}/5.png`}
                        alt=""
                    />
                    <div className="carousel-famous">
                        <Carousel
                            dots={false}
                            frameOverflow="visible"
                            cellSpacing={16}
                            slideWidth={0.36}
                        >
                            <div>
                                <img
                                    className="t-img"
                                    src={`${images}/p1.png`}
                                    alt=""
                                />
                                <img
                                    className="t-img mt-16"
                                    src={`${images}/p6.png`}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="t-img"
                                    src={`${images}/p2.png`}
                                    alt=""
                                />
                                <img
                                    className="t-img mt-16"
                                    src={`${images}/p7.png`}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="t-img"
                                    src={`${images}/p3.png`}
                                    alt=""
                                />
                                <img
                                    className="t-img mt-16"
                                    src={`${images}/p8.png`}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="t-img"
                                    src={`${images}/p4.png`}
                                    alt=""
                                />
                                <img
                                    className="t-img mt-16"
                                    src={`${images}/p9.png`}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="t-img"
                                    src={`${images}/p9.png`}
                                    alt=""
                                />
                                <img
                                    className="t-img mt-16"
                                    src={`${images}/p10.png`}
                                    alt=""
                                />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <img className="t-img img-6" src={`${images}/6.png`} alt="" />
                <img className="t-img img-7" src={`${images}/7.png`} alt="" />
                <img className="t-img img-8" src={`${images}/8.png`} alt="" />

                <style jsx global>{`
                    .style-137481 {
                        padding-bottom: 0 !important;
                    }
                `}</style>
                <style jsx>{`
                    .style-137481 {
                    }
                    .wrap {
                        position: relative;
                    }
                    .carousel {
                        position: absolute;
                        top: 0;
                        left: 0;
                        margin-top: 42%;
                        margin-left: -10%;
                        width: 100%;
                    }
                    .carousel-famous {
                        position: absolute;
                        top: 0;
                        left: 0;
                        margin-top: 34%;
                        margin-left: -20%;
                        width: 100%;
                    }
                    .mt-16 {
                        margin-top: 16px;
                    }
                    img {
                        width: 100%;
                        pointer-events: none;
                    }
                    .img-1 {
                        min-height: 17.92rem;
                    }
                    .img-2 {
                        min-height: 10.33rem;
                    }
                    .img-3 {
                        min-height: 18.96rem;
                    }
                    .img-4 {
                        min-height: 8.28rem;
                    }
                    .img-5 {
                        min-height: 7.7rem;
                    }
                    .img-6 {
                        min-height: 10.33rem;
                    }
                    .img-7 {
                        min-height: 6.13rem;
                    }
                    .img-8 {
                        min-height: 2.03rem;
                    }
                `}</style>
            </Layout>
        );
    }
}
