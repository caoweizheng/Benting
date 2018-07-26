/**
 * const prefixCls = 'styles-19810759';
 * const images = '/static/images/src/information/Index';
 * @Author: qizc
 * @Date:   2017-12-25 14:45:40
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:09:37
 * @Path btWap \src\information\Index\_Carousel.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Carousel } from 'components';
import Styles from 'styles';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-19810759';

const _Item = props => {
    const { tbId, imgId, tit, introCon, ...other } = props;

    return (
        <div
            className="item t-bg"
            style={{
                backgroundImage: `url(${Utils.getAppImgUrl(
                    imgId,
                    'scale',
                    true
                )})`
            }}
            onClick={() =>
                Utils.router.push(
                    `/information/detail?id=${tbId}`,
                    `/information/detail/${tbId}`
                )}
        >
            <div className="title text-void p-sw">{tit}</div>

            <style jsx>{`
                .styles-19810759 {
                }
                .item {
                    position: relative;
                    height: 40vw;
                }
                .title {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    background-color: rgba(0, 0, 0, 0.4);
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

const _Carousel = (props, { $ }) => {
    const { className } = props;
    const { list = [] } = $.getState('articleTopList');

    return (
        <div>
            {list[0] ? (
                <Carousel.Origin className={classNames(prefixCls, className)}>
                    {list.map(function(item, index) {
                        return <_Item key={index} {...item} />;
                    })}
                </Carousel.Origin>
            ) : (
                <div className="banner" />
            )}
            <style jsx global>{`
                .styles-19810759 {
                    height: 40vw !important;
                }
                .${prefixCls} .slider-decorator-0 {
                    display: none !important;
                }
            `}</style>
            <style jsx>{`
                .styles-19810759 {
                }
                .banner {
                    padding-bottom: 40%;
                    ${Styles._bg};
                    background-image: url(${images}/banner.jpg);
                }
            `}</style>
        </div>
    );
};

_Carousel.contextTypes = {
    $: PropTypes.object
};

export default observer(_Carousel);
