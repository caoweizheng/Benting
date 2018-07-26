/**
 * const prefixCls = 'styles-23272965';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2017-12-27 16:31:07
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 14:06:37
 * @Path btWap \src\bbs\Article\_Content.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { DiscuzContent, RichEditor } from 'components';
import Const from 'const';
import Utils from 'utils';

const prefixCls = 'styles-23272965';

const _Content = (props, { $ }) => {
    const { className } = props;
    const postDetail = $.getState('postDetail');

    if (Const.__CLIENT__ && !postDetail._loaded) {
        return (
            <Flex
                direction="column"
                justify="center"
                style={{ height: '40vh' }}
            >
                <img src={`${Const.__IMAGES__}/logo_line.png`} />
                <p className="text-sub text-sm mt-sm">内容加载中...</p>
            </Flex>
        );
    }

    if (postDetail.json) {
        //自定义分享内容
        if (Const.__WX__) {
            let imgUrl, draftData = [];

            try {
                if (postDetail.json) {
                    draftData = Utils.getRealDraftEntityMap(
                        JSON.parse(postDetail.json),
                        true
                    );
                }
            } catch (ex) {
                console.error(
                    `[JSON.parse Draft data error.][threadId: ${threadId}]`
                );
            }

            imgUrl = draftData[0] || Const.__SHARE_IMG__;
            setTimeout(() => {
                Utils.wxShareUpdate({
                    title: postDetail.title,
                    desc: Utils.getCharFilterEmoji(
                        Utils.removeHTMLTag(postDetail.content)
                    ),
                    imgUrl: Utils.getAppImgUrl(imgUrl)
                });
            }, 2000);
        }

        return (
            <div className={classNames(prefixCls, className, 'user-select')}>
                <RichEditor data={postDetail.json} readOnly imgView />
            </div>
        );
    }

    return (
        <div className={classNames(prefixCls, className)}>
            <DiscuzContent
                className="text-lg text-title user-select"
                html={{ __html: postDetail.content }}
            />
        </div>
    );
};

_Content.contextTypes = {
    $: PropTypes.object
};

export default observer(_Content);
