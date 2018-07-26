/**
 * const prefixCls = 'styles-20035819';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2018-06-01 10:08:02
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-01 14:05:04
 * @Path btWap \src\bbs\Article\_BaiduCambrian.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { observer } from '@';
import Const from 'const';
import Utils from 'utils';

const _BaiduCambrian = (props, { $ }) => {
    const { id } = $.getParams().params;
    const { json, title, createTime } = $.getState('postDetail');
    let cambrianConfig = {};
    let _images;
    const _title = `${title}-本汀`;

    //请在此处添加希望在搜索结果中展示图片的url，可以添加0个、1个或3个url
    _images = json ? Utils.getRealDraftEntityMap(JSON.parse(json)) : [];
    if (_images.length > 3) {
        _images.length = 3;
    } else if (_images.length === 2) {
        _images.length = 1;
    }
    _images = _images.map(item => Utils.getAppImgUrl(item, 'scale'));

    cambrianConfig = {
        '@context': 'https://ziyuan.baidu.com/contexts/cambrian.jsonld',
        '@id': `${Const.__WEB__}/bbs/article/${id}`,
        appid: '1588542739025543',
        title: _title,
        images: _images,
        pubDate: `${Utils.date('Y-m-d', createTime)}T${Utils.date(
            'H:i:s',
            createTime
        )}`
    };

    return (
        <Head>
            <title>{_title}</title>
            <link
                rel="canonical"
                href={`${Const.__WEB__}/bbs/article/${id}`}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(cambrianConfig)
                }}
            />
        </Head>
    );
};

_BaiduCambrian.contextTypes = {
    $: PropTypes.object
};

export default observer(_BaiduCambrian);
