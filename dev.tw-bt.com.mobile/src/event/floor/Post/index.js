/**
 * const prefixCls = 'styles-19823363';
 * const images = '/static/images/src/event/floor/Post';
 * @Author: Jack
 * @Date:   2018-01-13 19:23:11
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-15 16:43:21
 * @Path btWap \src\event\floor\Post\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, form, observer } from '@';
import { RichEditor, Form } from 'components';
import { Layout } from 'src/_';
import Const from 'const';
import Utils from 'utils';
import store from './store';

@inject(store)
@form
@observer
export default class Post extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        if (Const.__SERVER__) return null;
        
        const { $ } = this.context;
        const { form, onSubmit } = this.props;
        const { id, postId } = $.getParams().params;
        const { qiniuFileKey } = $.getState();
        const bbsBlock = $.getState('bbsBlock');
        const { title, json } = $.getState('postDetail');

        const find = bbsBlock.list.find(item => item.forumId === id) || {};
        const minDate = new Date(Date.now());
        minDate.setDate(minDate.getDate() - 1);

        return (
            <Layout title="发帖" hideHeader>
                <RichEditor
                    title={title}
                    data={json ? json : undefined}
                    placeholder={
                        find.forumName ? `将在${find.forumName}板块发布，请在这里输入内容` : undefined
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

                        onSubmit(form, values => $.doSubmit(title, json, html, entities, values));
                    }}
                />
                <Form form={form}>
                    <Form.DatePicker
                        label="开始时间"
                        name="beginTime"
                        option={Const.rules.required}
                        minDate={minDate}
                        maxDate={null}
                    />
                    <Form.Input
                        label="回复限制"
                        name="replayNumLimit"
                        initialValue={3}
                        option={Const.rules.gen('number')}
                    />
                    <Form.Input
                        label="回复内容"
                        name="replayDefContent"
                    />
                </Form>
            </Layout>
        );
    }
}
