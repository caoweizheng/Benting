/**
 * const prefixCls = 'styles-23272965';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2017-12-27 16:31:07
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-27 18:12:12
 * @Path btWap \src\bbs\Article\_Content.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { DiscuzContent, RichEditor } from 'components';
import __Score from './__Score';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-23272965';

const _Content = (props, { $ }) => {
    const { className } = props;
    const postDetail = $.getState('postDetail');

    if (!postDetail._loaded) {
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

    let elDraft;
    if (postDetail.json) {
        //自定义分享内容
        if (Const.__WX__) {
            let imgUrl,
                draftData = [];

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

            imgUrl = draftData.length ? draftData[0] : Const.__SHARE_IMG__;
            setTimeout(() => {
                Utils.wxShareUpdate({
                    title: postDetail.title,
                    desc: Utils.getCharFilterEmoji(
                        Utils.removeHTMLTag(postDetail.content)
                    ),
                    imgUrl: Utils.getAppImgUrl(imgUrl)
                });
            }, 1000);
        }

        elDraft = <RichEditor data={postDetail.json} readOnly imgView />;
    }

    return (
        <div className={classNames(prefixCls, className, 'user-select')}>
            <div className="content">
                {elDraft ? (
                    elDraft
                ) : (
                    <DiscuzContent
                        className="text-lg text-title"
                        html={{ __html: postDetail.content }}
                        imgView
                    />
                )}
            </div>
            <__Score className="mt-lg" />
            <br />
            <p className="p-view text-sm text-sub">阅读 {postDetail.viewNum}</p>

            <style jsx>{`
                .styles-23272965 {
                    position: relative;
                    padding-bottom: ${Styles.lg};
                }
                .content {
                    min-height: 32vw;
                }
                .p-view {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }
            `}</style>
        </div>
    );
};

_Content.contextTypes = {
    $: PropTypes.object
};

export default observer(_Content);
