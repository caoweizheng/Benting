/**
 * const prefixCls = 'styles-01187993';
 * const images = '/static/images/src/index/Home';
 * @Author: Jack
 * @Date:   2018-03-14 15:27:25
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:31:04
 * @Path btWap \src\index\Home\_Fish.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-01187993';
import { images, categoryDS } from './ds';

@observer
export default class _Header extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    $wrap;

    componentDidMount() {
        if (Const.__CLIENT__) {
            this.$wrap = document.getElementById(`${prefixCls}__wrap-goods`);
            this.$wrap.addEventListener('scroll', this.onScroll);
        }
    }

    componentWillUnmount() {
        if (Const.__CLIENT__ && this.$wrap) {
            this.$wrap.removeEventListener('scroll', this.onScroll);
            this.$wrap = null;
        }
    }

    onScroll = debounce(() => {
        if (this.$wrap.scrollWidth - this.$wrap.offsetWidth - this.$wrap.scrollLeft < 10) {
            const { $ } = this.context;

            $.fetchSubDataNextPage();
        }
    }, 50);

    scrollImg = index => {
        let scrollLeft;

        if (index <= 2) {
            scrollLeft = 0;
        } else {
            const imgWidth = document.getElementById(`${prefixCls}__img-category`).offsetWidth;

            scrollLeft = imgWidth * (index - 2);
        }

        document.getElementById(`${prefixCls}__wrap-category`).scrollLeft = scrollLeft;
    };

    render() {
        const { $ } = this.context;
        const { className } = this.props;
        const { selectedIndex, goods } = $.getState();
        const dev = Const.__API__ === 'https://dev.nidosport.com';
        const url = dev ? 'https://wap.nidosport.com' : 'https://www.nidosport.com';

        const index = goods.findIndex(item => item.value === selectedIndex);

        return (
            <div className={classNames(prefixCls, className)}>
                <img
                    className="img-thumb"
                    src={`${images}/thumb.png`}
                    onClick={() => (window.location = `${url}/discovery/fish`)}
                />
                <Flex>
                    <Flex.Item>
                        <div id={`${prefixCls}__wrap-category`} className="wrap-category">
                            <img
                                id={`${prefixCls}__img-category`}
                                className="img-category"
                                src={
                                    selectedIndex === categoryDS['鱼竿']
                                        ? `${images}/1_a.png`
                                        : `${images}/1.png`
                                }
                                onClick={() => {
                                    this.scrollImg(1);
                                    $.onFishTabClick(categoryDS['鱼竿']);
                                }}
                            />
                            <img
                                className="img-category"
                                src={
                                    selectedIndex === categoryDS['鱼饵']
                                        ? `${images}/2_a.png`
                                        : `${images}/2.png`
                                }
                                onClick={() => {
                                    this.scrollImg(2);
                                    $.onFishTabClick(categoryDS['鱼饵']);
                                }}
                            />
                            <img
                                className="img-category"
                                src={
                                    selectedIndex === categoryDS['鱼线']
                                        ? `${images}/3_a.png`
                                        : `${images}/3.png`
                                }
                                onClick={() => {
                                    this.scrollImg(3);
                                    $.onFishTabClick(categoryDS['鱼线']);
                                }}
                            />
                            <img
                                className="img-category"
                                src={
                                    selectedIndex === categoryDS['鱼漂']
                                        ? `${images}/4_a.png`
                                        : `${images}/4.png`
                                }
                                onClick={() => {
                                    this.scrollImg(4);
                                    $.onFishTabClick(categoryDS['鱼漂']);
                                }}
                            />
                            <img
                                className="img-category"
                                src={
                                    selectedIndex === categoryDS['装备']
                                        ? `${images}/5_a.png`
                                        : `${images}/5.png`
                                }
                                onClick={() => {
                                    this.scrollImg(5);
                                    $.onFishTabClick(categoryDS['装备']);
                                }}
                            />
                            <img
                                className="img-category"
                                src={
                                    selectedIndex === categoryDS['服饰']
                                        ? `${images}/6_a.png`
                                        : `${images}/6.png`
                                }
                                onClick={() => {
                                    this.scrollImg(6);
                                    $.onFishTabClick(categoryDS['服饰']);
                                }}
                            />
                            <img
                                className="img-category"
                                src={
                                    selectedIndex === categoryDS['配件']
                                        ? `${images}/7_a.png`
                                        : `${images}/7.png`
                                }
                                onClick={() => {
                                    this.scrollImg(7);
                                    $.onFishTabClick(categoryDS['配件']);
                                }}
                            />
                        </div>
                    </Flex.Item>
                </Flex>
                <div id={`${prefixCls}__wrap-goods`} className="wrap-goods">
                    {goods[index].children &&
                        goods[index].children.map((item, index) => (
                            <div
                                key={index}
                                className="item-goods"
                                onClick={() =>
                                    (window.location = `${url}/discovery/fish/${selectedIndex}/${item.value}`)}
                            >
                                <Img src={Utils.getAppImgUrl(item.imgs, 'scale')} size="2rem" />
                                <p className="p-title text-xs text-center text-clamp-1 mt-sm">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                </div>

                <style jsx>{`
                    .styles-01187993 {
                        position: relative;
                    }
                    .img-thumb {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 0.54rem;
                        border-bottom: 0.01rem solid ${Styles.color_border};
                    }
                    .wrap-category {
                        padding-left: 1.62rem;
                        overflow-x: scroll;
                        overflow-y: hidden;
                        white-space: nowrap;
                    }
                    .img-category {
                        display: inline-block;
                        vertical-align: top;
                        height: 0.54rem;
                    }
                    .wrap-goods {
                        min-height: 3.14rem;
                        padding: ${Styles.space} ${Styles.wind} ${Styles.wind};
                        background: #fff;
                        border-top: 0.01rem solid ${Styles.color_border};
                        overflow-x: scroll;
                        overflow-y: hidden;
                        white-space: nowrap;
                    }
                    .item-goods {
                        display: inline-block;
                        width: 2rem;
                        margin-right: ${Styles.sm};
                    }
                    .item-goods:last-child {
                        margin-right: 0;
                    }
                    .p-title {
                        padding: 0 ${Styles.xs};
                    }
                `}</style>
            </div>
        );
    }
}
