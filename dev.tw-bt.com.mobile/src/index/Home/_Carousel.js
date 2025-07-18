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
    const { list = [], _loaded = false } = $.getState('homeCarousel');
    const { loadingStates, errors } = $.getState();
    const isLoading = loadingStates.carousel;
    const hasError = errors.carousel;

    // 如果正在加载，显示占位符
    if (isLoading && !_loaded) {
        return (
            <div className={className} style={{ height: '40vw', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#999', fontSize: '0.24rem' }}>轮播图加载中...</span>
            </div>
        );
    }

    // 如果有错误，显示错误状态
    if (hasError && !_loaded) {
        return (
            <div className={className} style={{ height: '40vw', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <span style={{ color: '#999', fontSize: '0.24rem', marginBottom: '0.16rem' }}>轮播图加载失败</span>
                <button
                    style={{
                        background: '#567af7',
                        color: 'white',
                        border: 'none',
                        padding: '0.12rem 0.24rem',
                        borderRadius: '0.04rem',
                        fontSize: '0.24rem'
                    }}
                    onClick={() => $.retryModule('carousel')}
                >
                    重试
                </button>
            </div>
        );
    }

    // 如果没有数据，显示默认状态
    if (!list.length) {
        return (
            <div className={className} style={{ height: '40vw', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#999', fontSize: '0.24rem' }}>暂无轮播内容</span>
            </div>
        );
    }

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
