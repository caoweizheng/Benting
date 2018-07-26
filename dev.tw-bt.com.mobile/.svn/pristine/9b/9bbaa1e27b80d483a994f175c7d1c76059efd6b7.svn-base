/**
 * const prefixCls = 'styles-65057152';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2017-12-27 16:20:20
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-13 10:42:10
 * @Path btWap \src\bbs\Article\store.js
 */
'use strict';

import React from 'react';
import { observable, computed } from 'mobx';
import { Flex } from 'antd-mobile';
import NativeShare from 'components/NativeShare';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';
import UI from 'stores/ui';
import { competitionTypeDS } from './ds';

class store extends common {
    @observable
    state = this.initState({
        state: {
            show: false,
            showReward: false,
            placeholder: '',
            onSubmit: Function.prototype
        },

        //留言tabs
        _tabs: {
            initialPage: 0
        },

        //彩蛋
        _egg: {
            show: false,
            step: 0,
            type: '',
            value: ''
        },

        //加分
        _score: {
            more: false
        },

        //消费确认框
        _payConfirm: {
            show: false,
            type: '',
            amount: 0,
            player_id: ''
        },

        _CompetitionRecord: {
            me: false
        },

        //用户信息
        userInfo: G.toJS('userInfo'),

        //我的余额
        walletInfo: G.toJS('walletInfo'),

        //我的论坛点赞和收藏列表
        bbsLikeAndFavorList: G.toJS('bbsLikeAndFavorList'),

        //文章详情
        postDetail: {},

        //评论列表
        commentList: Const.__EMPTY__,

        //加分列表
        scoreList: Const.__EMPTY__,

        //打赏礼物列表
        rewardGoodsList: Const.__EMPTY__,

        //打赏列表
        rewardList: Const.__EMPTY__,

        //竞猜记录
        competitionRecordList: Const.__EMPTY__,

        //竞猜记录-瓜分
        competitionAwardRecordList: Const.__EMPTY__,

        //报名
        registration: {}
    });

    initFetch = {
        static: [
            ['fetchUserInfo', 'userInfo'],
            ['fetchWalletInfo', 'walletInfo'],
            ['fetchBBSLikeAndFavorList', 'bbsLikeAndFavorList']
        ],
        one: [['fetchPostDetail', true], 'fetchScoreList', 'fetchRewardList'],
        update: ['fetchCommentList']
    };

    storeInit() {
        this.setFetchCommentListQuery();
    }

    storeDidMount() {
        //[CLIENT]报名信息是个人信息，只在客户端请求
        //因为绑定在fetchPostDetail里面，而又是one，所以需要每次进入store时手动请求
        if (Const.__CLIENT__) {
            const { registrationData } = this.getState('postDetail');

            if (registrationData) {
                this.fetchRegistration();
            }
        }
    }

    /*==================== params ====================*/
    //设置竞猜记录query
    setFetchCommentListQuery = index => {
        const { id } = this.getParams().params;

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
                            userId: this.getState('postDetail').userId
                        }
                    }
                };
                break;

            case 3:
                const _userId = this.getState('userInfo').userId;

                query = {
                    _: {
                        limit: Const.__LIMIT__,
                        search: {
                            AND: {
                                threadId: id,
                                OR: {
                                    parUserId: _userId,
                                    userId: _userId
                                }
                            }
                        }
                    }
                };
                break;

            default:
                query = {
                    _: {
                        limit: Const.__LIMIT__,
                        order: {
                            top: 'desc',
                            createTime: 'desc'
                        },
                        search: {
                            threadId: id
                        }
                    }
                };
                break;
        }

        this.setParams({
            queryCommentList: query
        });
    };

    //设置竞猜记录query
    setFetchCompetitionRecordListQuery = me => {
        const { id } = this.getParams().params;
        const query = {
            _: {
                limit: Const.__LIMIT__,
                order: {
                    created_at: 'desc'
                },
                search: {
                    thread_id: id
                }
            }
        };

        if (me) {
            const { userId } = this.getState('userInfo');
            query._.search.user_id = userId;
        }

        this.setParams({
            queryCompetitionRecordList: query
        });
    };

    //设置竞猜记录-瓜分query
    setFetchCompetitionAwardRecordListQuery = me => {
        const { id } = this.getParams().params;
        const query = {
            _: {
                limit: Const.__LIMIT__,
                order: {
                    bonus: 'desc'
                },
                search: {
                    thread_id: id,
                    'bonus[>]': 0
                }
            }
        };

        if (me) {
            const { userId } = this.getState('userInfo');
            query._.search.user_id = userId;
        }

        this.setParams({
            queryCompetitionAwardRecordList: query
        });
    };

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

    @computed
    get isCompetitionComplete() {
        const { guessingData = {} } = this.getState('postDetail');
        const { competitionWinner } = guessingData;

        return competitionWinner != 0;
    }

    @computed
    get competitionTypeLabel() {
        const { guessingData = {} } = this.getState('postDetail');
        const { competitionType } = guessingData;

        if (!competitionType) return '';

        return Utils.getLabel(competitionTypeDS, competitionType);
    }

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };

    //我的余额
    fetchWalletInfo = async () => {
        const res = G.fetchWalletInfo();

        this.setState(await res, 'walletInfo');

        return res;
    };

    //我的论坛点赞和收藏列表
    fetchBBSLikeAndFavorList = async () => {
        const res = G.fetchBBSLikeAndFavorList();

        this.setState(await res, 'bbsLikeAndFavorList');

        return res;
    };

    //文章详情
    fetchPostDetail = async () => {
        const { id } = this.getParams().params;
        const res = this.fetchThenSetState(
            'get_bbs_post-detail',
            'postDetail',
            {
                threadId: id
            }
        );
        const data = await res;

        //竞猜贴子
        const { guessingData } = data;
        if (guessingData) {
            //竞猜未结束只查询记录，结束后只查询获胜者
            if (this.isCompetitionComplete) {
                this.setFetchCompetitionAwardRecordListQuery();
                await this.fetchCompetitionAwardRecordList(true);
            } else {
                this.setFetchCompetitionRecordListQuery();
                await this.fetchCompetitionRecordList(true);
            }
        }

        //[CLIENT]报名信息是个人信息，只在客户端请求
        if (Const.__CLIENT__) {
            const { registrationData } = data;

            if (registrationData) {
                await this.fetchRegistration();
            }
        }

        this.setHeader();

        return res;
    };

    //竞猜记录
    fetchCompetitionRecordList = refresh => {
        const { guessingData } = this.getState('postDetail');
        if (!guessingData) return;

        const { queryCompetitionRecordList } = this.getParams();
        return this.fetchListThenSetState(
            'get_competition_record-list',
            'competitionRecordList',
            queryCompetitionRecordList,
            refresh
        );
    };

    //竞猜瓜分记录
    fetchCompetitionAwardRecordList = refresh => {
        const { guessingData } = this.getState('postDetail');
        if (!guessingData) return;

        const { queryCompetitionAwardRecordList } = this.getParams();
        return this.fetchListThenSetState(
            'get_competition_record-list',
            'competitionAwardRecordList',
            queryCompetitionAwardRecordList,
            refresh
        );
    };

    //报名信息
    fetchRegistration = async () => {
        const { id } = this.getParams().params;

        const res = Api.PP('get_registration_detail', {
            thread_id: id
        });
        const data = await res;

        if (data.code === '0') {
            this.setState(data.data, 'registration');
        }

        return res;
    };

    //评论
    fetchCommentList = refresh => {
        const { queryCommentList } = this.getParams();

        return this.fetchListThenSetState(
            'get_bbs_post-comment-list',
            'commentList',
            queryCommentList,
            refresh
        );
    };

    //加分列表
    fetchScoreList = () => {
        const { id } = this.getParams().params;

        return this.fetchThenSetState('get_bbs_scoretips-list', 'scoreList', {
            _: {
                limit: 48,
                order: {
                    point: 'desc'
                },
                search: {
                    relevType: 10016,
                    relevId: id
                }
            }
        });
    };

    //打赏礼物列表
    fetchRewardGoodsList = async () => {
        const res = this.fetchListThenSetState(
            'get_shop_goods-list',
            'rewardGoodsList',
            {
                goodsType: 35
            }
        );

        const data = await res;
        this.setState({ showReward: true });

        return res;
    };

    //打赏列表
    fetchRewardList = refresh => {
        const { id } = this.getParams().params;

        return this.fetchListThenSetState(
            'get_new_reward-list',
            'rewardList',
            {
                _: {
                    limit: 10,
                    search: {
                        dataId: id,
                        typeId: 3
                    }
                }
            },
            refresh
        );
    };

    /*==================== Action ====================*/
    //180417 回复
    doComment = async query => {
        const { point, cake } = await Api.P('do_bbs_posted', {
            ...query,
            type: 2
        });

        this.fetchCommentList(true);
        this.onTextareaClose();
        Utils.light(point ? `回复成功，积分+${point}` : '回复成功');

        //中彩蛋
        if (typeof cake === 'object') {
            this.showEggMask(cake.type, cake.value);
        }
    };

    //收藏
    doFavor = async () => {
        const { threadId } = this.getState('postDetail');

        await G.doFavor(threadId);

        const bbsLikeAndFavorList = G.getState('bbsLikeAndFavorList');

        //更新是否点赞
        this.setState(bbsLikeAndFavorList, 'bbsLikeAndFavorList');

        this.fetchPostDetail();
    };

    //点赞
    doLike = async () => {
        const { postId, threadId } = this.getState('postDetail');

        await G.doLike(postId, threadId);

        const bbsLikeAndFavorList = G.getState('bbsLikeAndFavorList');

        //更新是否点赞
        this.setState(bbsLikeAndFavorList, 'bbsLikeAndFavorList');

        this.fetchPostDetail();
    };

    //加积分
    doRewardScore = async () => {
        const { id } = this.getParams().params;

        const data = await Api.P('do_bbs_scoretips-post', {
            threadId: id,
            changeScore: 1
        });

        this.fetchScoreList();
        Utils.light(`已成功为他加 ${data.point} 积分`);
    };

    //打赏
    doReward = async value => {
        const { id } = this.getParams().params;

        await Api.P('do_new_reward', {
            dataId: id,
            typeId: 3,
            goodsId: value
        });
        this.setState({ showReward: false });
        this.fetchRewardList(true);
        this.fetchCommentList(true);
        Utils.light('打赏成功');
    };

    //红人加积分
    doRewardHongrenScore = async value => {
        const { id } = this.getParams().params;

        value = parseInt(value);
        if (isNaN(value) || value < 1 || value > 10) {
            Utils.light('请输入1-10');
            return;
        }

        const data = await Api.P('do_hong-ren_score', {
            threadId: id,
            changeScore: value
        });

        this.fetchScoreList();
        Utils.light(`已成功为他加 ${value} 积分`);
    };

    //支持参赛者
    doBetting = async () => {
        const { threadId } = this.getState('postDetail');
        const { player_id, amount } = this.getState('_payConfirm');

        await Api.P('do_competition_betting', {
            thread_id: threadId,
            player_id,
            amount
        });

        this.closePayConfirm();
        Utils.success();

        this.fetchCompetitionRecordList(true);
        this.fetchPostDetail();
        if (this.competitionTypeLabel === '金币') {
            this.fetchWalletInfo();
        } else {
            this.fetchUserInfo();
        }
    };

    /*==================== Page ====================*/
    //头部设置分享按钮（微信不显示）
    setHeader = () => {
        if (Const.__WX__) return;

        const postDetail = this.getState('postDetail');
        if (!postDetail._loaded) {
            return;
        }

        let icon = Const.__SHARE_IMG__;
        if (postDetail.json) {
            const entities = Utils.getRealDraftEntityMap(postDetail.json);
            icon = entities.length ? entities[0] : Const.__SHARE_IMG__;
        }

        UI.header({
            ft: (
                <NativeShare
                    config={{
                        icon,
                        link: `${Const.__WEB__}/bbs/article/${
                            postDetail.threadId
                        }`,
                        title: postDetail.title,
                        desc: Utils.removeHTMLTag(postDetail.content)
                    }}
                    actionSheetConfig={{
                        message: '分享邀请链接到'
                    }}
                >
                    <Flex>
                        <img
                            key={1}
                            src={`${Const.__IMAGES__}/icon/share.png`}
                            style={{ width: '0.4rem', height: '0.4rem' }}
                        />
                        <span key={2} className="text-sm ml-xs">
                            分享
                        </span>
                    </Flex>
                </NativeShare>
            )
        });
    };

    //180417 tab切换
    onTabClick = (tab, index) => {
        this.setFetchCommentListQuery(index);
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
        const { threadId } = this.getState('postDetail');
        let placeholder, onSubmit;

        if (item.parentId) {
            //回复用户
            placeholder = `回复${item.niname}：`;
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
            };
        } else {
            //回复评论
            placeholder = '回复：';
            onSubmit = value => {
                if (Utils.getCharLength(value.value) < 2) {
                    Utils.light('回复的字数不能少于2');
                    return false;
                }

                this.doComment({
                    content: value.value,
                    commentImg: value.id,
                    threadId
                });
            };
        }

        this.setState({
            show: true,
            placeholder,
            onSubmit
        });
    };

    //180417 回复彩蛋
    showEggMask = (type, value) => {
        this.setState(
            {
                show: true,
                type,
                value
            },
            '_egg'
        );
    };
    hideEggMask = () => {
        this.setState(
            {
                show: false
            },
            '_egg'
        );
    };

    //180417 敲彩蛋
    animated = false;
    onEggKnock = async () => {
        if (this.animated) {
            return false;
        }
        this.animated = true;

        await Utils.sleep(200);
        this.setState({ step: 1 }, '_egg');

        await Utils.sleep(1400);
        this.setState({ step: 2 }, '_egg');
    };

    //180426 显示更多加分人
    scoreShowMore = () => {
        this.setState(
            {
                more: true
            },
            '_score'
        );
    };

    //180528 显示支持金额输入框
    showBettingModal = playerItem => {
        let amount, payType;
        if (this.competitionTypeLabel === '金币') {
            amount = this.getState('walletInfo').sysAmount;
            payType = 'coin';
        } else {
            amount = this.getState('userInfo').point;
            payType = 'nido';
        }

        Utils.onPrompt(
            '我要支持',
            value => {
                value = parseInt(value);

                if (isNaN(value) || value < 1) {
                    Utils.light('数量不能少于1');
                    return;
                }

                this.showPayConfirm({
                    player_id: playerItem.id,
                    amount: value,
                    type: payType
                });
            },
            undefined,
            <div>
                <p className="text-sub text-sm">
                    <span>支持选手：</span>
                    <span className="text-primary">{playerItem.name}</span>
                </p>
                <p className="text-sub text-sm">
                    <span>{this.competitionTypeLabel}余额：</span>
                    <span className="text-primary">
                        {Utils.formatNumber(amount)}
                    </span>
                </p>
            </div>,
            ['输入数量']
        );
    };

    //180528 显示消费确认框
    showPayConfirm = values => {
        this.setState(
            {
                ...values,
                show: true
            },
            '_payConfirm'
        );
    };

    //180528 隐藏消费确认框
    closePayConfirm = () => {
        this.setState(
            {
                player_id: '',
                amount: 0,
                type: '',
                show: false
            },
            '_payConfirm'
        );
    };

    //180529 切换支持记录 - 全部/我的
    toggleCompetitionRecordList = () => {
        const { me } = this.getState('_CompetitionRecord');

        this.setState(
            {
                me: !me
            },
            '_CompetitionRecord'
        );
        this.setFetchCompetitionRecordListQuery(!me);
        this.fetchCompetitionRecordList(true);
    };

    //180530 切换中奖记录 - 全部/我的
    toggleCompetitionAwardRecordList = () => {
        const { me } = this.getState('_CompetitionRecord');

        this.setState(
            {
                me: !me
            },
            '_CompetitionRecord'
        );
        this.setFetchCompetitionAwardRecordListQuery(!me);
        this.fetchCompetitionAwardRecordList(true);
    };
}

export default store;
