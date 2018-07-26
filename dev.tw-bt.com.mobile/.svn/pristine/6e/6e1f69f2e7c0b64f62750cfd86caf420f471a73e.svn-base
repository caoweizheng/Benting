/**
 * const prefixCls = 'styles-66186990';
 * const images = '/static/images/src/bbs/Block';
 * @Author: Jack
 * @Date:   2017-12-27 14:31:25
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-04-10 10:46:14
 * @Path btWap \src\bbs\Block\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';

export default class Store extends common {
    @observable
    state = this.initState({
        state: {
            initialPage: 0,
            tag: null,
            _filter: true
        },

        //我的论坛点赞和收藏列表
        bbsLikeAndFavorList: G.toJS('bbsLikeAndFavorList'),

        //板块统计信息
        blockStatistic: {},

        //产品标签
        labelList: Const.__EMPTY__,

        //全部板块帖子列表
        postList: Const.__EMPTY__
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
        }
    };

    initFetch = {
        static: [['fetchBBSLikeAndFavorList', 'bbsLikeAndFavorList']],
        one: ['fetchBlockStatistic', 'fetchLabelList'],
        update: ['fetchPostList']
    };

    /*==================== DS ====================*/
    //我的论坛点赞和收藏列表
    fetchBBSLikeAndFavorList = async () => {
        const res = G.fetchBBSLikeAndFavorList();

        this.setState(await res, 'bbsLikeAndFavorList');

        return res;
    };

    //板块统计信息
    fetchBlockStatistic = () => {
        const { id } = this.getParams().params;

        return this.fetchThenSetState(
            'get_bbs_block-statistic',
            'blockStatistic',
            {
                forumId: id
            }
        );
    };

    //产品标签
    fetchLabelList = () => {
        return this.fetchThenSetState('get_bbs_label', 'labelList', {
            _: {
                search: {
                    labelType: 3
                }
            }
        });
    };

    //帖子列表
    fetchPostList = refresh => {
        const { query } = this.getParams();
        const { id } = this.getParams().params;

        query._.search.forumId = id;

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
                };
                break;

            case 3:
                query = {
                    _: {
                        limit: Const.__LIMIT__,
                        search: {
                            isDigest: 1
                        }
                    }
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
                };
                break;
        }
        this.setParams({ query });
        this.setState({ initialPage: index });
        this.fetchPostList(true);
    };
}
