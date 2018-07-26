/**
 * const prefixCls = 'styles-52915803';
 * const images = '/static/images/src/bbs/Index';
 * @Author: Jack
 * @Date:   2017-12-25 11:14:03
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-28 11:31:29
 * @Path btWap \src\bbs\Index\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import { Flex } from 'antd-mobile';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';
import UI from 'stores/ui';
import { images, blockDS } from './ds';

const _select = [
    'content',
    'contentImg',
    'createTime',
    'displayState',
    'faceImg',
    'forumName',
    'isDigest',
    'isLike',
    'likeAdd',
    'likeList',
    'niname',
    'postId',
    'replyNum',
    'threadId',
    'title',
    'topicId',
    'userId'
].join();

export default class Store extends common {
    @observable
    state = this.initState({
        state: {
            //tabs
            initialPage: 0,
            tag: null,

            //fixedTextarea
            show: false,
            topicId: '',
            topicTitle: '',
            placeholder: '',
            onSubmit: Function.prototype
        },

        //我的论坛点赞和收藏列表
        bbsLikeAndFavorList: G.toJS('bbsLikeAndFavorList'),

        //板块列表
        bbsBlock: Const.__EMPTY__,

        //产品标签
        labelList: Const.__EMPTY__,

        //全部板块帖子列表
        postList: Const.__EMPTY__,

        //话题列表
        topicToday: {},

        //话题是否已发帖
        topicIsPosted: {
            value: ''
        }
    });

    initParams = {
        query: {
            _: {
                limit: Const.__LIMIT__,
                order: {
                    displayState: 'desc',
                    createTime: 'desc'
                },
                search: {}
            }
            //_select
        }
    };

    initFetch = {
        static: [['fetchBBSLikeAndFavorList', 'bbsLikeAndFavorList']],
        one: ['fetchTopicToday', 'fetchBBSBlock'],
        update: ['fetchPostList']
    };

    /*==================== DS ====================*/
    //我的论坛点赞和收藏列表
    fetchBBSLikeAndFavorList = async () => {
        const res = G.fetchBBSLikeAndFavorList();

        this.setState(await res, 'bbsLikeAndFavorList');

        return res;
    };

    //板块列表
    fetchBBSBlock = () =>
        this.fetchThenSetState('get_bbs_blocks', 'bbsBlock', {
            _: {
                limit: 0
            }
        });

    //产品标签
    /*fetchLabelList = () =>
        this.fetchThenSetState('get_bbs_label', 'labelList', {
            _: {
                search: {
                    labelType: 3
                }
            }
        });*/

    //帖子列表
    fetchPostList = refresh => {
        const { query } = this.getParams();

        return this.fetchListThenSetState(
            'get_bbs_list',
            'postList',
            query,
            refresh
        );
    };
    updateOnePostList = postId => {
        this.updateOneThenSetState('get_bbs_list', 'postList', { postId });
    };

    //话题列表
    fetchTopicToday = async () => {
        const res = Api.P('get_topic_list', {
            _: {
                limit: 1
            }
        });
        const data = await res;
        this.setState(data.list[0], 'topicToday');

        const { topicId } = data.list[0];
        if (topicId) {
            this.fetchTopicIsPosted(topicId);
        }

        return res;
    };

    //话题是否已发帖
    fetchTopicIsPosted = async topicId => {
        const res = Api.P('do_topic_is-posted', { topicId });

        const data = await res;
        this.setState({ value: data }, 'topicIsPosted');

        return res;
    };

    /*==================== Page ====================*/
    //点赞
    doLike = async (postId, threadId) => {
        await G.doLike(postId, threadId);

        const bbsLikeAndFavorList = G.getState('bbsLikeAndFavorList');

        //更新是否点赞
        this.setState(bbsLikeAndFavorList, 'bbsLikeAndFavorList');

        //更新一项
        this.updateOnePostList(postId);
    };

    setHeader = () => {
        const bbsBlock = this.getState('bbsBlock');

        if (!bbsBlock._loaded) {
            return;
        }

        //筛选不允许发帖的板块
        const DS = bbsBlock.list
            .filter(item => blockDS.includes(item.forumName))
            .filter(item => item.isPost == 1)
            .map(item => ({
                icon: (
                    <img
                        className="t-img"
                        src={`${images}/${item.forumName}.jpg`}
                        style={{
                            width: '0.88rem',
                            height: '0.88rem',
                            borderRadius: '50%'
                        }}
                    />
                ),
                title: item.forumName,
                forumId: item.forumId
            }));

        const onClick = () =>
            Utils.shareActionSheet(
                DS,
                index => {
                    if (DS[index]) {
                        Utils.router.push(
                            `/bbs/post?id=${DS[index].forumId}`,
                            `/bbs/post/${DS[index].forumId}?${Utils.getQueryStr(
                                {
                                    title: DS[index].title
                                }
                            )}`
                        );
                    }
                },
                {
                    message: '请选择您要发帖的板块',
                    destructiveButtonIndex: undefined
                }
            );

        UI.header({
            hd: null,
            ft: (
                <Flex>
                    <img
                        className="t-active t-img"
                        src={`${images}/btn_post.png`}
                        onClick={() => Utils.checkLogin(onClick)}
                        style={{
                            width: '1.2rem',
                            height: '0.42rem',
                            borderRadius: '0.04rem'
                        }}
                    />
                </Flex>
            )
        });
    };

    //产品tag点击
    onTagClick = nextTag => {
        const { tag } = this.getState();
        let { query } = this.getParams();
        query = Utils.deepCopy(query);

        if (tag === nextTag) {
            this.setState({
                tag: null
            });

            if (query._.search.tag) {
                delete query._.search.tag;
            }
        } else {
            this.setState({ tag: nextTag });
            query._.search.tag = nextTag;
        }
        this.setParams({ query });

        this.fetchPostList(true);
    };

    //tab切换
    onTabClick = (tab, index) => {
        let query;

        switch (index) {
            case 1:
                query = {
                    _: {
                        limit: Const.__LIMIT__,
                        order: {
                            createTime: 'desc'
                        },
                        search: {}
                    }
                    //_select
                };
                break;

            case 2:
                query = {
                    _: {
                        limit: Const.__LIMIT__,
                        order: {
                            hits: 'desc'
                        },
                        search: {}
                    }
                    //_select
                };
                break;

            case 3:
                query = {
                    _: {
                        limit: Const.__LIMIT__,
                        search: {
                            typeId: 1
                        }
                    }
                    //_select
                };
                break;

            case 4:
                query = {
                    _: {
                        limit: Const.__LIMIT__,
                        search: {
                            isDigest: 1
                        }
                    }
                    //_select
                };
                break;

            default:
                query = {
                    _: {
                        limit: Const.__LIMIT__,
                        order: {
                            displayState: 'desc',
                            createTime: 'desc'
                        },
                        search: {}
                    }
                    //_select
                };
                break;
        }
        this.setParams({ query });
        this.setState({ initialPage: index });
        this.fetchPostList(true);
    };

    //隐藏FixedTextarea
    onTextareaClose = () => this.setState({ show: false });

    //显示FixedTextarea
    onTopicClick = async (topicId, topicTitle) => {
        const data = await this.fetchTopicIsPosted(topicId);

        if (data !== 0) {
            Utils.light('您已参与过次话题');
            return;
        }

        let onSubmit;
        onSubmit = async value => {
            if (Utils.getCharLength(value.value) < 20) {
                Utils.light('贴子的字数不能少于20');
                return false;
            }

            await Api.P('do_topic_posted', {
                forumId: 68, //写死话题板块id
                title: `#${topicTitle}#`,
                content: this.generateHtml(value.value, value.id),
                fileId: value.id.join(','),
                topicId
            });

            Utils.light('话题发帖成功');
            this.onTextareaClose();
            this.hideTopicFixed(true);
            this.fetchPostList(true);
        };

        this.setState({
            show: true,
            topicId,
            topicTitle,
            placeholder: '话题贴子内容',
            onSubmit
        });
    };

    generateHtml = (content = '', fileId = []) => {
        let html = '';

        content.split('\n').forEach(item => {
            html += `<p>${item}</p>`;
        });

        if (fileId.length) {
            fileId.forEach(item => {
                html += `<img data-src="${item}" src="${
                    Const.__API__
                }/file/getimg/${item}/scale" /><br>`;
            });
        }

        return html;
    };

    hideTopicFixed = isPost => {
        const { topicId } = this.getState('topicToday');

        G.hideBBSTopicFixed(topicId, isPost);
    };
}
