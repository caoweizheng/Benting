/**
 * const prefixCls = 'styles-17760685';
 * const images = '/static/images/src/video/Index';
 * @Author: qizc
 * @Date:   2017-12-25 16:30:05
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:07:29
 * @Path btWap \src\video\Index\_Carousel.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import classNames from 'classnames';
import { Carousel } from 'components';
import Utils from 'utils';

const prefixCls = 'styles-17760685';

const _Item = props => {
    const { tbId, fileinfo, ...other } = props;
    return (
        <div
            className="item t-bg"
            style={{
                backgroundImage: `url(${Utils.getImgUrl(fileinfo.surface)})`
            }}
            onClick={() =>
                Utils.router.push(
                    `/video/detail?id=${tbId}`,
                    `/video/detail/${tbId}`
                )}
        >
            <style jsx>{`
                .item {
                    height: 40vw;
                }
            `}</style>
        </div>
    );
};

const _Carousel = (props, { $ }) => {
    const { className } = props;
    const topVideoList = $.getState('topVideoList');
    return (
        <div>
            <Carousel.Origin
                className={classNames(prefixCls, className)}
                height="40vw"
            >
                {topVideoList.list.map(function(item, index) {
                    return <_Item key={index} {...item} />;
                })}
            </Carousel.Origin>
            <style jsx global>{`
                .${prefixCls} {
                    height: 40vw !important;
                }
            `}</style>
        </div>
    );
};

_Carousel.contextTypes = {
    $: PropTypes.object
};

export default observer(_Carousel);
