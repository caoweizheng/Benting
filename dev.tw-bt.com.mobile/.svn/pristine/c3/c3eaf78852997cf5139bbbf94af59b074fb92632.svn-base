/**
 * const prefixCls = 'styles-11060578';
 * const images = '/static/images/components/RichEditor';
 * @Author: Jack
 * @Date:   2017-12-26 15:40:54
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-03 11:36:44
 * @Path btWap \components\RichEditor\_Media.js
 */
'use strict';

import React from 'react';
import LazyLoad from 'react-lazyload';
import Video from '../Video';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-11060578';

const Placeholder = props => (
    <div>
        <style jsx>{`
            .styles-11060578 {
            }
            div {
                height: 8rem;
                background: ${Styles.color_bg};
            }
        `}</style>
    </div>
);

const _Media = props => {
    const { onClick } = props;
    const entity = props.contentState.getEntity(props.block.getEntityAt(0));
    const data = entity.getData();
    const type = entity.getType();

    let media;
    if (type === 'image' || type === 'link-image') {
        media = (
            <LazyLoad height="8rem" once placeholder={<Placeholder />}>
                <_Image {...data} onClick={onClick} />
            </LazyLoad>
        );
    } else if (type === 'video') {
        media = <_Video {...data} />;
    }
    return media;
};

const _Image = props => {
    const { src, onClick } = props;

    return (
        <div>
            <img
                className={`${prefixCls}__image`}
                src={Utils.getAppImgUrl(src, 'scale')}
                onClick={onClick ? () => onClick(src) : undefined}
            />

            <style jsx global>{`
                .styles-11060578 {
                }
                .${prefixCls}__image {
                    display: block;
                    width: 100%;
                    margin: ${Styles.distance} auto;
                    vertical-align: top;
                }
            `}</style>
        </div>
    );
};

const _Video = props => {
    const { src, poster, size, playTime } = props;

    return (
        <div>
            <Video
                className={`${prefixCls}__video`}
                src={src}
                poster={poster}
                fileSize={size}
                playSecond={playTime}
            />

            <style jsx global>{`
                .styles-11060578 {
                }
                .${prefixCls}__video {
                    display: block;
                    width: 100%;
                    margin: ${Styles.distance} auto;
                    vertical-align: top;
                    border: 0.01rem solid #eee;
                }
            `}</style>
        </div>
    );
};

export default _Media;
