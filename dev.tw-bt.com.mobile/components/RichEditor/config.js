/**
 * const prefixCls = 'styles-75794746';
 * const images = '/static/images/components/RichEditor';
 * @Author: Jack
 * @Date:   2017-12-26 15:08:19
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 16:12:33
 * @Path btWap \components\RichEditor\config.js
 */
'use strict';

import React from 'react';
import { images } from './ds';

export const inlineTypes = [
    {
        label: <img src={`${images}/B.png`} />,
        style: 'BOLD'
    },
    {
        label: <img src={`${images}/I.png`} />,
        style: 'ITALIC'
    }
];

export const blockTypes = [
    {
        label: <img src={`${images}/H.png`} />,
        style: 'header-two'
    },
    /*{
    label: <Icon type={require('svg/editor/blockquote.svg')} />,
    style: 'blockquote',
}, */ {
        label: <img src={`${images}/ul.png`} />,
        style: 'unordered-list-item'
    },
    {
        label: <img src={`${images}/ol.png`} />,
        style: 'ordered-list-item'
    }
];

export const colors = [
    {
        label: '#ED5565',
        style: 'red'
    },
    {
        label: '#FFCE54',
        style: 'yellow'
    },
    {
        label: '#37BC9B',
        style: 'green'
    },
    {
        label: '#5D9CEC',
        style: 'blue'
    },
    {
        label: '#967ADC',
        style: 'purple'
    }
];

export const colorStyleMap = {
    red: {
        color: '#ED5565'
    },
    yellow: {
        color: '#FFCE54 '
    },
    green: {
        color: '#37BC9B'
    },
    blue: {
        color: '#5D9CEC'
    },
    purple: {
        color: '#967ADC'
    },
    gray: {
        color: '#AAB2BD'
    }
};
