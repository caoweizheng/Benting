/**
 * const prefixCls = 'styles-80641455';
 * const images = '/static/images/src/index/Contact';
 * @Author: Jack
 * @Date:   2018-02-26 14:04:47
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:03:02
 * @Path btWap \src\index\Contact\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer } from '@';
import { StickyContainer, Sticky } from 'react-sticky';
import LazyLoad from 'react-lazyload';
import { Flex } from 'antd-mobile';
import { Layout } from 'src/_';
import Const from 'const';
import Styles from 'styles';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-80641455';
const heightDS = [412, 511, 871, 854, 1171, 1182, 1791, 2573, 2539, 2586];

@inject(store)
@observer
export default class Contact extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentDidMount() {
        const { $ } = this.context;

        $.addListenScroll();

        setTimeout(() => {
            Utils.wxShareUpdate({
                title: '本汀千城共耀星零售-耀您发财！'
            });
        }, 2000);
    }

    componentWillUnmount() {
        const { $ } = this.context;

        $.removeListenScroll();
    }

    render() {
        const { $ } = this.context;
        const { index } = $.getState();

        return (
            <Layout className={prefixCls} hide title="本汀 · 千城共耀">
                <StickyContainer>
                    <Sticky>
                        {({ style }) => (
                            <div style={{ ...style, zIndex: 1 }}>
                                <Flex
                                    className={`${prefixCls}__sticky text-center`}
                                >
                                    <Flex.Item className={`${prefixCls}__item`}>
                                        <img
                                            className="img-logo"
                                            src={`${Const.__IMAGES__}/logo_horizon.png`}
                                            onClick={() =>
                                                Utils.router.push('/')}
                                        />
                                    </Flex.Item>
                                    <Flex.Item
                                        className={classNames({
                                            [`${prefixCls}__item`]: true,
                                            [`${prefixCls}__item-active`]:
                                                index === 0
                                        })}
                                        onClick={() => $.onTabClick(0)}
                                    >
                                        财路广开
                                    </Flex.Item>
                                    <Flex.Item
                                        className={classNames({
                                            [`${prefixCls}__item`]: true,
                                            [`${prefixCls}__item-active`]:
                                                index === 1
                                        })}
                                        onClick={() => $.onTabClick(1)}
                                    >
                                        业绩大增
                                    </Flex.Item>
                                    <Flex.Item
                                        className={classNames({
                                            [`${prefixCls}__item`]: true,
                                            [`${prefixCls}__item-active`]:
                                                index === 2
                                        })}
                                        onClick={() => $.onTabClick(2)}
                                    >
                                        喜迎财神
                                    </Flex.Item>
                                </Flex>
                            </div>
                        )}
                    </Sticky>
                    {heightDS.map((item, index) => (
                        <div
                            key={index}
                            className={`${prefixCls}__img-thumb-${index}`}
                        >
                            <LazyLoad height={`${item / 100}rem`} once>
                                <img
                                    className="img-thumb t-img"
                                    src={`${images}/${index + 1}.jpg`}
                                />
                            </LazyLoad>
                        </div>
                    ))}
                </StickyContainer>

                <style jsx global>{`
                    .styles-80641455 {
                        padding-bottom: 0 !important;
                    }
                    .${prefixCls}__sticky {
                        background: #eef1f9;
                    }
                    .${prefixCls}__item {
                        height: 0.94rem;
                        line-height: 0.94rem;
                        margin-left: 0 !important;
                    }
                    .${prefixCls}__item-active {
                        color: #fff;
                        background: ${Styles.color_primary};
                    }
                `}</style>
                <style jsx>{`
                    .styles-80641455 {
                    }
                    .img-logo {
                        height: 0.64rem;
                        margin-top: 0.15rem;
                    }
                    .img-thumb {
                        width: 100%;
                    }
                `}</style>
            </Layout>
        );
    }
}
