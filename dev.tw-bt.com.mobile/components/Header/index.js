/**
 * const prefixCls = 'styles-10788921';
 * const images = '/static/images/components/Header';
 * @Author: Jack
 * @Date:   2017-10-24 09:59:44
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 16:09:54
 * @Path nidosport@next \components\Header\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { Flex } from 'antd-mobile';
import Const from 'const';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'c-header';

export default class Header extends React.Component {
    state = {
        freeze: false,
        open: true
    };
    currentPathname;
    onScroll;

    componentDidMount() {
        if (!Const.__SERVER__) {
            const scroll = (fn = Function.prototype) => {
                let beforeScrollTop =
                    document.body.scrollTop ||
                    document.documentElement.scrollTop;

                this.onScroll = debounce(() => {
                    const afterScrollTop =
                        document.body.scrollTop ||
                        document.documentElement.scrollTop;
                    const delta = afterScrollTop - beforeScrollTop;

                    if (delta === 0) return false;

                    const direction = delta > 0 ? 'down' : 'up';

                    //向下要超过160px才触发
                    if (direction === 'down' && afterScrollTop < 160)
                        return false;

                    //向上滚动距离要超过320px才触发，到顶必定触发
                    if (
                        direction === 'up' &&
                        Math.abs(delta) < 320 &&
                        afterScrollTop !== 0
                    )
                        return false;

                    fn(direction);
                    beforeScrollTop = afterScrollTop;
                }, 50);

                //window.addEventListener('scroll', this.onScroll, false);
                window.addEventListener('scroll', this.onScroll, { passive: true });
            };

            scroll(direction => {
                const { pathname } = this.props;
                const { freeze, open } = this.state;

                if (this.currentPathname === undefined) {
                    this.currentPathname = pathname;
                }

                if (this.currentPathname !== pathname) {
                    this.currentPathname = pathname;
                    this.setState({
                        freeze: true
                    });
                } else if (direction === 'down' && (open || freeze)) {
                    this.setState({
                        freeze: false,
                        open: false
                    });
                } else if (direction === 'up' && (!open || freeze)) {
                    this.setState({
                        freeze: false,
                        open: true
                    });
                }
            });
        }
    }

    componentWillUnmount() {
        if (!Const.__SERVER__) {
            window.removeEventListener('scroll', this.onScroll);
        }
    }

    render() {
        const {
            show,
            title,
            hd,
            bd,
            ft,
            hideBack,
            hideLogo,
            className
        } = this.props;
        const { freeze, open } = this.state;

        if (!show) return null;

        //中间
        let center = bd;
        center = (
            <img
                src={`${Const.__IMAGES__}/logo.png`}
                style={{
                    height: '.7rem'
                }}
                onClick={() => Utils.router.push('/')}
            />
        );

        let cls;
        if (Const.__SERVER__) {
            cls = classNames(`${prefixCls}__wrap`, `${prefixCls}__wrap_open`);
        } else {
            cls = classNames({
                [`${prefixCls}__wrap`]: true,
                [`${prefixCls}__wrap_freeze`]: freeze,
                [`${prefixCls}__wrap_open`]: freeze
                    ? document.body.scrollTop === 0
                    : open
            });
        }

        return (
            <div className={classNames(prefixCls, className)}>
                <Flex className={cls} justify="center">
                    <Flex
                        className={`${prefixCls}__hd text-void text-sm`}
                        onClick={
                            !hideBack ? () => Utils.router.back() : undefined
                        }
                    >
                        {hd !== null &&
                            !hideBack && (
                                <img
                                    className="img-back ml-xs"
                                    src={`${images}/back.png`}
                                />
                            )}
                        {hd !== null && hd}
                    </Flex>
                    <Flex.Item style={{ marginLeft: 0 }}>
                        {!hideLogo && (
                            <Flex
                                className={`${prefixCls}__bd`}
                                justify="center"
                            >
                                {center}
                            </Flex>
                        )}
                    </Flex.Item>
                    <Flex className={`${prefixCls}__ft`} justify="end">
                        {ft}
                    </Flex>
                </Flex>

                <style jsx>{`
                    .c-header {
                    }
                    .img-back {
                        height: 0.26rem;
                    }
                `}</style>
                <style jsx global>{`
                    .c-header {
                    }
                    .${prefixCls} {
                        height: 0.96rem;
                        background-color: ${Styles.color_header};
                    }
                    .${prefixCls} .am-flexbox {
                        overflow: initial;
                    }
                    .${prefixCls}__wrap {
                        position: fixed;
                        z-index: ${Styles.z_header};
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 0.95rem;
                        background-color: ${Styles.color_header};
                        color: #fff;
                        transform: translate3d(0, -100%, 0);
                        margin-top: -0.01rem;
                        transition: transform 0.3s ease-in-out;
                    }
                    .${prefixCls}__wrap_freeze {
                        transition: initial !important;
                    }
                    .${prefixCls}__wrap_open {
                        transform: translate3d(0, 0, 0);
                    }
                    .${prefixCls}__hd {
                        padding-left: 0.08rem;
                        width: 2rem;
                    }
                    .${prefixCls}__bd {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        text-align: center;
                        transform: translate(-50%, -50%);
                    }
                    .${prefixCls}__ft {
                        width: 2rem;
                        padding-right: ${Styles.wind};
                    }
                    .${prefixCls}__btn-back {
                        width: 0.48rem;
                    }
                `}</style>
            </div>
        );
    }
}
