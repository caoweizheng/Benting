/**
 * const prefixCls = 'styles-20989697';
 * const images = '/static/images/src/index';
 * @Author: qizc
 * @Date:   2017-12-25 11:30:50
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:34:07
 * @Path btWap \src\index\_Video.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Carousel } from 'components';
import Utils from 'utils';

const prefixCls = 'styles-20989697';
import { images } from './ds';

const Item = props => {
    const { tbId, fileinfo } = props;

    return (
        <div
            className="item t-bg"
            style={{
                backgroundImage: `url(${Utils.getAppImgUrl(fileinfo.surface, 'scale', true)})`
            }}
            onClick={() => Utils.router.push(`/video/detail?id=${tbId}`, `/video/detail/${tbId}`)}
        >
            <style jsx>{`
                .styles-20989697 {
                }
                .item {
                    height: 40vw;
                }
            `}</style>
        </div>
    );
};

const _Video = (props, { $ }) => {
    const { className } = props;
    const topVideoList = $.getState('topVideoList');

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="p-sw">
                <img className="t-img" src={`${images}/video.png`} />
            </div>
            <Carousel.Origin className={`${prefixCls}__carousel`}>
                {topVideoList.list.map((item, index) => <Item key={index} {...item} />)}
            </Carousel.Origin>

            <style jsx>{`
                .styles-20989697 {
                }
                div {
                    background-color: #fff;
                }
                .t-img {
                    height: 0.26rem;
                }
            `}</style>
            <style jsx global>{`
                .styles-20989697 {
                }
                .${prefixCls}__carousel {
                    height: 40vw !important;
                }
            `}</style>
        </div>
    );
};

_Video.contextTypes = {
    $: PropTypes.object
};

export default observer(_Video);
