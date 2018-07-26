/**
 * const prefixCls = 'styles-18468495';
 * const images = '/static/images/src/_/DiscoveryRow';
 * @Author: Jack
 * @Date:   2018-03-03 11:21:02
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-03 11:53:56
 * @Path btWap \src\_\DiscoveryRow\__Imgs.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-18468495';

const Imgs = props => {
    const { data = [], max = 9, onClick, className } = props;

    if (data.length === 1) {
        return (
            <div
                className={classNames(prefixCls, className)}
                style={{
                    backgroundImage: `url(${Utils.getAppImgUrl(
                        data[0].src,
                        'scale'
                    )})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'top left',
                    backgroundRepeat: 'no-repeat'
                }}
                onClick={onClick}
            >
                <img
                    className="img-scale"
                    src={Utils.getAppImgUrl(data[0].src, 'scale')}
                />
                {data[0].src.toString().indexOf('.gif') !== -1 && (
                    <span className="p-gif">GIF</span>
                )}

                <style jsx>{`
                    .styles-18468495 {
                        position: relative;
                    }
                    .img-scale {
                        width: 100% !important;
                        height: initial !important;
                        max-width: 57.5vw;
                        max-height: 100vw;
                        visibility: hidden;
                    }
                    .p-gif {
                        position: absolute;
                        left: ${Styles.sm};
                        bottom: ${Styles.sm};
                        padding: 0 ${Styles.xs};
                        font-size: 0.2rem;
                        color: rgba(50, 50, 50, 0.8);
                        background-color: rgba(255, 255, 255, 0.64);
                        box-shadow: 0.02rem 0.02rem 0.04rem rgba(0, 0, 0, 0.4);
                    }
                `}</style>
            </div>
        );
    }

    //4张显示为2*2
    let _data = data;
    if (_data.length === 4) {
        _data =
            data.length >= max
                ? data
                : [
                      data[0],
                      data[1],
                      { src: `${Const.__IMAGES__}/placeholder.png` },
                      data[2],
                      data[3]
                  ];
    }

    return (
        <Flex
            className={classNames(prefixCls, className)}
            wrap="wrap"
            onClick={onClick}
        >
            {_data.filter((item, index) => index < max).map((item, index) => (
                <Img
                    key={index}
                    className={`${prefixCls}__item`}
                    src={item.src}
                    style={{ backgroundColor: 'transparent' }}
                >
                    {item.src.toString().indexOf('.gif') !== -1 && (
                        <span className="p-gif">GIF</span>
                    )}
                    {Utils.isPoster(item.src) && (
                        <img
                            className="img-play"
                            src={`${Const.__IMAGES__}/play.png`}
                        />
                    )}
                </Img>
            ))}

            <style jsx global>{`
                .styles-18468495 {
                    position: relative;
                }
                .${prefixCls}__item {
                    width: 32%;
                    height: auto;
                    padding-bottom: 32%;
                    margin-top: 2%;
                    margin-right: 2%;
                }
                .${prefixCls}__item:nth-of-type(3n) {
                    margin-right: 0 !important;
                }
                .${prefixCls}:nth-of-type(1),
                .${prefixCls}:nth-of-type(2),
                .${prefixCls}:nth-of-type(3) {
                    margin-top: 0 !important;
                }
            `}</style>
            <style jsx>{`
                .styles-18468495 {
                }
                .p-gif {
                    position: absolute;
                    left: ${Styles.sm};
                    bottom: ${Styles.sm};
                    padding: 0 ${Styles.xs};
                    font-size: 0.2rem;
                    color: rgba(50, 50, 50, 0.8);
                    background-color: rgba(255, 255, 255, 0.64);
                    box-shadow: 0.02rem 0.02rem 0.04rem rgba(0, 0, 0, 0.4);
                }
                .img-play {
                    position: absolute;
                    top: 48%;
                    left: 50%;
                    width: 0.96rem !important;
                    height: 0.96rem !important;
                    transform: translate(-50%, -50%);
                    opacity: 0.8;
                }
            `}</style>
        </Flex>
    );
};

export default Imgs;
