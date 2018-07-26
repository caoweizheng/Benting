/**
 * @Version: v1.1 180508 地址跳转规则优化，根据next.js区分出href和asPath
 * const prefixCls = 'styles-76975572';
 * const images = '/static/images/components/Carousel';
 * @Author: Jack
 * @Date:   2018-01-03 16:04:58
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-08 15:17:03
 * @Path btWap \components\Carousel\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Carousel } from 'antd-mobile';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'c-carousel';
const urlLocation = (e, href) => {
    if (!href) return;

    e.stopPropagation();

    if (href.toString().indexOf(Const.__WEB__) !== -1) {
        //暂时只能对本域名而且结尾为数字的地址，做处理，并且都为?id=
        //#todo /id/postId 这类路由会误解释，需要处理
        const path = href.replace(Const.__WEB__, '');
        const reg = /\/\d+$/;
        const match = path.match(reg);

        if (match) {
            Utils.router.push(
                `${path.replace(reg, '')}?id=${match[0].replace('/', '')}`,
                path
            );
        } else {
            Utils.router.push(path);
        }
    } else {
        window.location = href;
    }
};

const _Carousel = props => {
    const {
        data,
        height,
        style,
        onImgClick = Function.prototype,
        className,
        ...other
    } = props;

    if (data.length === 1) {
        return (
            <div
                className={classNames(prefixCls, className)}
                onClick={() => onImgClick(0)}
            >
                <div
                    className="t-bg"
                    style={{
                        height,
                        backgroundImage: `url(${Utils.getAppImgUrl(
                            data[0].src,
                            'scale',
                            true
                        )})`,
                        ...style
                    }}
                    onClick={e => urlLocation(e, data[0].href)}
                />
            </div>
        );
    }

    return (
        <div>
            <Carousel
                className={classNames(prefixCls, className)}
                infinite
                autoplay={true}
                autoplayInterval={6000}
                style={{
                    minHeight: height
                }}
                {...other}
            >
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="t-bg"
                        style={{
                            height,
                            backgroundImage: `url(${Utils.getAppImgUrl(
                                item.src,
                                'scale',
                                true
                            )})`,
                            ...style
                        }}
                        onClick={e => {
                            onImgClick(index);
                            urlLocation(e, item.href);
                        }}
                    />
                ))}
            </Carousel>

            <style jsx global>{`
                .c-carousel {
                }
                .${prefixCls} .slider-list {
                    height: ${height} !important;
                }
                .${prefixCls} .slider-slide {
                    ${Styles._bg};
                    background-image: url(${Const.__IMG_DEFAULT__});
                    background-size: contain;
                }
                .${prefixCls} .am-carousel-wrap {
                    margin-bottom: 0.08rem;
                }
                .${prefixCls} .am-carousel-wrap-dot > span {
                    width: 0.24rem;
                    height: 0.12rem;
                    margin: 0 0.06rem;
                    background: #ccc;
                    border-radius: 0;
                }
                .${prefixCls} .am-carousel-wrap-dot-active > span {
                    background: #999;
                }
                .${prefixCls} .slider-decorator-0 {
                    width: 90%;
                }
            `}</style>
        </div>
    );
};

const _CarouselOrigin = props => {
    const { height, className, children, ...other } = props;

    return (
        <div>
            <Carousel
                className={classNames(prefixCls, className)}
                infinite
                autoplay={true}
                autoplayInterval={6000}
                style={{
                    minHeight: height
                }}
                {...other}
            >
                {children}
            </Carousel>

            <style jsx global>{`
                .c-carousel {
                }
                .${prefixCls} .slider-list {
                    height: ${height} !important;
                }
                .${prefixCls} .slider-slide {
                    ${Styles._bg};
                    background-image: url(${Const.__IMG_DEFAULT__});
                    background-size: contain;
                }
                .${prefixCls} .am-carousel-wrap {
                    margin-bottom: 0.08rem;
                }
                .${prefixCls} .am-carousel-wrap-dot > span {
                    width: 0.24rem;
                    height: 0.12rem;
                    margin: 0 0.06rem;
                    background: #ccc;
                    border-radius: 0;
                }
                .${prefixCls} .am-carousel-wrap-dot-active > span {
                    background: #999;
                }
                .${prefixCls} .slider-decorator-0 {
                    width: 90%;
                }
            `}</style>
        </div>
    );
};

_Carousel.propTypes = {
    height: PropTypes.any
};
_Carousel.defaultProps = {
    height: '46vw'
};
_Carousel.Origin = _CarouselOrigin;

export default _Carousel;
