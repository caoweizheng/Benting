/**
 * const prefixCls = 'styles-70664150';
 * const images = '/static/images/src/bbs/Post';
 * @Author: Jack
 * @Date:   2017-12-26 15:49:54
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-26 18:32:47
 * @Path btWap \src\bbs\Post\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { RichEditor } from 'components';
import { Layout } from 'src/_';
import Const from 'const';
import Utils from 'utils';
import store from './store';

const prefixCls = 'styles-70664150';

@inject(store)
@observer
export default class Post extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        if (Const.__SERVER__) return null;

        const { $ } = this.context;
        const { id, postId } = $.getParams().params;
        const { qiniuFileKey } = $.getState();
        const bbsBlock = $.getState('bbsBlock');
        const { title, json } = $.getState('postDetail');

        const find = bbsBlock.list.find(item => item.forumId === id) || {};

        if (postId && !json) return null;

        return (
            <Layout title="发帖" hide>
                <RichEditor
                    title={title}
                    data={json ? json : undefined}
                    placeholder={
                        find.forumName
                            ? `将在${find.forumName}板块发布，请在这里输入内容`
                            : undefined
                    }
                    qiniu
                    qiniuFileKey={qiniuFileKey}
                    onQiniuUploadClick={$.fetchQiniuKey}
                    onOk={(title, editorState, html) => {
                        if (!title) {
                            Utils.light('请先输入贴子标题');
                            return false;
                        }

                        if (Utils.getCharLength(html) < 20) {
                            Utils.light('贴子字数不能少于20');
                            return false;
                        }

                        const json = JSON.stringify(editorState);
                        const entities = Utils.getRealDraftEntityMap(
                            editorState,
                            true
                        );

                        if (postId) {
                            $.doUpdate(title, json, html, entities);
                        } else {
                            $.doSubmit(title, json, html, entities);
                        }
                    }}
                />
            </Layout>
        );
    }
}
