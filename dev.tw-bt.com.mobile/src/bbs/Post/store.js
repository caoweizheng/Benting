/**
 * const prefixCls = 'styles-79119036';
 * const images = '/static/images/src/bbs/Post';
 * @Author: Jack
 * @Date:   2017-12-26 15:50:56
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-23 00:13:40
 * @Path btWap \src\bbs\Post\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import G from 'stores/g';

class store extends common {
    @observable
    state = this.initState({
        state: {
            //七牛文件key
            qiniuFileKey: '',
            _filter: true
        },

        //板块列表
        bbsBlock: Const.__EMPTY__,

        //贴子数据
        postDetail: {
            _filter: true
        }
    });

    initFetch = {
        one: ['fetchBBSBlock'],
        update: ['fetchPostDetail']
    };

    /*==================== DS ====================*/
    //贴子数据
    fetchPostDetail = () => {
        const { postId } = this.getParams().params;

        if (!postId) return;

        return this.fetchThenSetState('get_bbs_post-detail', 'postDetail', {
            postId
        });
    };

    //板块列表
    fetchBBSBlock = () => {
        return this.fetchThenSetState('get_bbs_blocks', 'bbsBlock');
    };

    //七牛文件key
    fetchQiniuKey = async () => {
        const res = Api.P('get_qiniu_key');

        const data = await res;

        this.setState({
            qiniuFileKey: data
        });

        return res;
    };

    /*==================== Action ====================*/
    //发布
    doSubmit = async (title, json, html, entities) => {
        const { id } = this.getParams().params;

        await Api.P('do_bbs_posted', {
            forumId: id,
            title,
            content: html,
            json,
            type: 1,
            fileId: entities.join()
        });

        if (Stores['/bbs']) Stores['/bbs'].setRefresh();
        if (Stores[`/bbs/block/${id}`]) Stores[`/bbs/block/${id}`].setRefresh();

        Utils.light('发帖成功');
        Utils.router.back();
    };

    //编辑帖子
    doUpdate = async (title, json, html, entities) => {
        const { id, postId } = this.getParams().params;

        await Api.P('do_bbs_post-update', {
            postId,
            title,
            content: html,
            json,
            fileId: entities.join()
        });

        if (Stores[`/bbs/block/${id}`]) Stores[`/bbs/block/${id}`].setRefresh();

        Utils.light('编辑成功');
        Utils.router.back();
    };
}

export default store;
