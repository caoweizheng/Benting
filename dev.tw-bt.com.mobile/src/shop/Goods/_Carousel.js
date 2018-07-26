/**
 * const prefixCls = 'styles-14129241';
 * const images = '/static/images/src/shop/Goods';
 * @Author: qizc
 * @Date:   2017-12-28 14:25:41
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:54:01
 * @Path btWap \src\shop\Goods\_Carousel.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Video, Carousel, ImgView } from 'components';
import Styles from 'styles';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-14129241';

const _Carousel = (props, { $ }) => {
    const { className } = props;
    const { showVideo, showImgView, imgViewIndex } = $.getState();
    const { imglist = '', video } = $.getState('recommendDetails');

    const data = imglist
        .split(',')
        .filter(item => !!item)
        .map(item => Utils.getAppImgUrl(item, 'scale'));

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="box">
                {video && (
                    <div
                        className="change"
                        onClick={e => {
                            e.stopPropagation();
                            $.setState({
                                showVideo: !showVideo
                            });
                        }}
                    >
                        {showVideo ? (
                            <img
                                className="change_img"
                                src={`${images}/photo.png`}
                            />
                        ) : (
                            <img
                                className="change_img"
                                src={`${images}/video.png`}
                            />
                        )}
                    </div>
                )}
                {showVideo && (
                    <Video
                        className={`${prefixCls}_video`}
                        src={video[0].filePath}
                        poster={Utils.getAppImgUrl(video[0].sfPath, 'scale')}
                        fileSize={video[0].fileSize}
                        playSecond={video[0].playSeconds}
                        height="100vw"
                    />
                )}
                {!showVideo && (
                    <Carousel
                        className={`${prefixCls}_carousel`}
                        data={data.map(item => ({
                            src: item
                        }))}
                        height="100vw"
                        onImgClick={current =>
                            $.setState({
                                showImgView: true,
                                imgViewIndex: current
                            })}
                    />
                )}
            </div>
            {!!data.length && (
                <ImgView
                    show={showImgView}
                    current={imgViewIndex}
                    data={data}
                    onClose={() =>
                        $.setState({
                            showImgView: false
                        })}
                />
            )}

            <style jsx>{`
                .styles-14129241 {
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
                .box {
                    position: relative;
                    height: 100vw;
                }
                .change {
                    position: absolute;
                    top: .32rem;
                    right: 1rem;
                    z-index: 2;
                }
                .change_img {
                    height: 0.64rem;
                    width: 0.64rem;
                }
            `}</style>
            <style jsx global>{`
                .styles-14129241 {
                }
                .${prefixCls}_video {
                    border-radius: 0;
                }
            `}</style>
        </div>
    );
};

_Carousel.contextTypes = {
    $: PropTypes.object
};

export default observer(_Carousel);
