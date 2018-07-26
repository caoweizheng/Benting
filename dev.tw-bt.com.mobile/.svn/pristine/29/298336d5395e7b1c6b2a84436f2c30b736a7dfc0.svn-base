/**
 * const prefixCls = 'styles-51795469';
 * const images = '/static/images/src/index';
 * @Author: qizc
 * @Date:   2017-12-25 10:22:45
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:29:11
 * @Path btWap \src\index\_Carousel.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Carousel } from 'components';
import Utils from 'utils';
import G from 'stores/g';

const _Carousel = (props, { $ }) => {
    const { className } = props;
    const { list = [] } = $.getState('homeCarousel');
    //const networkType = G.getState('networkType');

    /*let data = [];
    if (networkType) {
        data = list.map(item => ({
            src:
                networkType === 'wifi'
                    ? Utils.getImgUrl(item.imgPath)
                    : Utils.getAppImgUrl(item.imgPath, 'scale'),
            href: item.url
        }));
    }*/

    return (
        <Carousel
            className={className}
            data={list.map(item => ({
                src: Utils.getAppImgUrl(item.imgPath, 'scale'),
                href: item.url
            }))}
            height="40vw"
        />
    );
};

_Carousel.contextTypes = {
    $: PropTypes.object
};

export default observer(_Carousel);
