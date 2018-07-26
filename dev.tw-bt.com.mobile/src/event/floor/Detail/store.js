/**
 * const prefixCls = 'styles-65057152';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2017-12-27 16:20:20
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-04-12 10:01:05
 * @Path btWap \src\bbs\Article\store.js
 */
'use strict';

import React from 'react';
import { observable, computed } from 'mobx';
import common from 'stores/common';
import G from 'stores/g';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';

class store extends common {
    @observable
    state = this.initState({
        state: {
            show: false,
            placeholder: '',
            onSubmit: Function.prototype,
            _filter: true
        },

        _tabs: {
            initialPage: 0,
            _filter: true
        },

        //用户信息
        userInfo: {
            _filter: true
        },

        //我的论坛点赞和收藏列表
        bbsLikeAndFavorList: G.toJS('bbsLikeAndFavorList'),

        //文章详情
        postDetail: {},

        //评论
        commentList: Const.__EMPTY__
    });

    initFetch = {
        static: [
            ['fetchUserInfo', 'userInfo'],
            ['fetchBBSLikeAndFavorList', 'bbsLikeAndFavorList']
        ],
        update: ['fetchCommentList', 'fetchPostDetail']
    };

    constructor(props) {
        super(props);

        this.setParams({
            query: {
                _: {
                    limit: Const.__LIMIT__,
                    order: {
                        createTime: 'desc'
                    },
                    search: {
                        threadId: props.params.id
                    }
                }
            }
        });
    }

    /*==================== computed ====================*/
    @computed
    get isLike() {
        const { id } = this.getParams().params;
        const bbsLikeAndFavorList = this.getState('bbsLikeAndFavorList');

        if (!bbsLikeAndFavorList.list || !bbsLikeAndFavorList.list.like) {
            return false;
        }

        return (
            bbsLikeAndFavorList.list.like.findIndex(item => item == id) !== -1
        );
    }

    @computed
    get isFavor() {
        const { id } = this.getParams().params;
        const bbsLikeAndFavorList = this.getState('bbsLikeAndFavorList');

        if (!bbsLikeAndFavorList.list || !bbsLikeAndFavorList.list.favorite) {
            return false;
        }

        return (
            bbsLikeAndFavorList.list.favorite.findIndex(item => item == id) !==
            -1
        );
    }

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };

    //我的论坛点赞和收藏列表
    fetchBBSLikeAndFavorList = async () => {
        const res = G.fetchBBSLikeAndFavorList();

        this.setState(await res, 'bbsLikeAndFavorList');

        return res;
    };

    //文章详情
    fetchPostDetail = () => {
        const { id } = this.getParams().params;

        return this.fetchThenSetState('get_floor_detail', 'postDetail', {
            threadId: id
        });
    };

    //评论
    fetchCommentList = refresh => {
        const { query } = this.getParams();

        return this.fetchListThenSetState(
            'get_floor_comment',
            'commentList',
            query,
            refresh
        );
    };

    /*==================== Action ====================*/
    //回复
    doComment = async query => {
        await Api.P('do_floor_comment', query);
        await G.fetchWalletInfo();

        this.onTextareaClose();
        Utils.light('踩楼成功');
        this.fetchCommentList(true);
    };

    //收藏
    doFavor = async () => {
        const { id } = this.getParams().params;

        await Api.P('do_bbs_favorite', {
            dataId: id,
            type: 'tid'
        });

        if (!this.isFavor) {
            Utils.light('收藏成功');
        }

        this.fetchPostDetail();
        this.fetchBBSLikeAndFavorList();
    };

    //点赞
    doLike = async () => {
        const { postId } = this.getState('postDetail');

        await Api.P('do_bbs_like', {
            postId,
            n: 1
        });

        this.fetchPostDetail();
        this.fetchBBSLikeAndFavorList();
    };

    /*==================== Page ====================*/
    //tab切换
    onTabClick = (tab, index) => {
        const { id } = this.getParams().params;
        const { userId } = this.getState('postDetail');
        let query;

        switch (index) {
            case 1:
                query = {
                    _: {
                        limit: Const.__LIMIT__,
                        search: {
                            threadId: id
                        }
                    }
                };
                break;

            case 2:
                query = {
                    _: {
                        limit: Const.__LIMIT__,
                        search: {
                            threadId: id,
                            userId: this.getState('userInfo').userId
                        }
                    }
                };
                break;

            default:
                query = {
                    _: {
                        limit: Const.__LIMIT__,
                        order: {
                            createTime: 'desc'
                        },
                        search: {
                            threadId: id
                        }
                    }
                };
                break;
        }
        this.setParams({ query });
        this.setState({ initialPage: index }, '_tabs');
        this.fetchCommentList(true);
    };

    //隐藏FixedTextarea
    onTextareaClose = () => {
        this.setState({
            show: false
        });
    };

    //显示FixedTextarea
    onCommentClick = item => {
        const { postId, threadId } = this.getState('postDetail');
        let placeholder, onSubmit;

        if (item.parentId) {
            //回复用户
            /*placeholder = `回复需要消耗金币10枚`;
            onSubmit = value => {
                if (Utils.getCharLength(value.value) < 2) {
                    Utils.light('回复的字数不能少于2');
                    return false;
                }

                this.doComment({
                    content: value.value,
                    commentImg: value.id,
                    threadId,
                    parentId: item.parentId
                });
            };*/
        } else {
            //回复评论
            placeholder = '踩楼需要消耗金币';
            onSubmit = value => {
                this.doComment({
                    content: value,
                    threadId,
                    parentId: postId
                });
            };
        }

        this.setState({
            show: true,
            placeholder,
            onSubmit
        });
    };
}

export default store;
