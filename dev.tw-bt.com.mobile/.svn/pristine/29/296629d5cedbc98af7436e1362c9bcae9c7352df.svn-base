/**
 * const prefixCls = 'styles-49772059';
 * const images = '/static/images/src/event/floor/Post';
 * @Author: Jack
 * @Date:   2018-01-13 19:23:41
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-23 17:09:32
 * @Path btWap \src\event\floor\Post\store.js
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

        //用户信息
        userInfo: {
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
        static: [['fetchUserInfo', 'userInfo']],
        one: ['fetchBBSBlock'],
        update: ['fetchPostDetail']
    };

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };

    //贴子数据
    fetchPostDetail = () => {
        const { postId } = this.getParams().params;

        if (!postId) return;

        return this.fetchThenSetState('get_bbs_post-detail', 'postDetail', { postId });
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
    doSubmit = async (title, json, html, entities, values) => {
        const { userId } = this.getState('userInfo');

        const _values = { ...values };
        if (_values.beginTime) {
            const d = new Date(_values.beginTime);
            const date = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
            _values.beginTime = new Date(`${date} 21:00:00`).getTime() / 1000;
        }

        await Api.P('do_floor_post', {
            userId,
            title,
            content: html,
            json,
            fileId: entities.join(),
            beginTime: _values.beginTime,
            replayNumLimit: _values.replayNumLimit,
            replayDefContent: _values.replayDefContent || '踩楼欢乐，鱼获多多'
        });

        Utils.light('发布成功');
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
