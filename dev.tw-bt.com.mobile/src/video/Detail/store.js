/**
 * 
 * @Author: qizc
 * @Date:   2017-09-22 09:58:08
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-03-03 14:38:00
 */
'use strict';

import { useStrict, observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import G from 'stores/g';

useStrict(true);

export default class Store extends common {
    @observable
    state = this.initState({
        state: {
            show: false,
            showReward: false,
            placeholder: '',
            onSubmit: Function.prototype,
            _filter: true
        },

        // 同类视频列表
        videoList: Const.__EMPTY__,

        // 感兴趣列表
        randomVideoList: Const.__EMPTY__,

        // 视频详情
        videosDetail: {},

        // 回复列表
        videosCommentList: Const.__EMPTY__,

        // 热门视频
        hotVideoList: Const.__EMPTY__,

        // 打赏礼物列表
        rewardGoodsList: Const.__EMPTY__,

        // 打赏列表
        rewardList: Const.__EMPTY__,
    });
    initFetch = {
        one: ['fetchVideosDetail'],
        update: [
            'fetchRandomVideoList',
            'fetchHotVideoList',
            'fetchVideosCommentList',
            'fetchRewardList'
        ]
    };

    /*==================== DS ====================*/
    //视频详情
    fetchVideosDetail = async () => {
        const { id } = this.getParams().params;

        const res = this.fetchThenSetState('get_video_detail', 'videosDetail', {
            tbId: id
        });
        const data = await res;

        return this.fetchVideoList(data);
    };

    //视频列表
    fetchVideoList = data => {
        const { videoType } = data;

        return this.fetchThenSetState('get_video_list-list', 'videoList', {
            _: {
                limit: 18,
                search: {
                    typeId: videoType
                }
            }
        });
    };

    //感兴趣视频列表
    fetchRandomVideoList = () => {
        return this.fetchThenSetState(
            'get_random_video_list-list',
            'randomVideoList',
            {
                limit: 8
            }
        );
    };

    //热门视频列表
    fetchHotVideoList = () => {
        return this.fetchThenSetState('get_video_list-list', 'hotVideoList', {
            _: {
                limit: 4,
                order: {
                    viewCount: 'desc'
                }
            }
        });
    };

    //评论列表
    fetchVideosCommentList = refresh => {
        const { id } = this.getParams().params;

        return this.fetchListThenSetState(
            'get_video-v2_comment-list',
            'videosCommentList',
            {
                _: {
                    limit: 10,
                    order: {
                        createTime: 'desc'
                    },
                    search: {
                        videoId: id
                    }
                }
            },
            refresh
        );
    };
    updateOneVideosCommentList = tbId => {
        const { id } = this.getParams().params;

        this.updateOneThenSetState(
            'get_video-v2_comment-list',
            'videosCommentList',
            {
                videoId: id,
                tbId
            },
            'tbId'
        );
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
        this.setState({
            showReward: true
        });
        return data;
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
                        typeId: 1
                    }
                }
            },
            refresh
        );
    };

    /*==================== Action ====================*/
    // 打赏
    doReward = async value => {
        const { id } = this.getParams().params;
        await Api.P('do_new_reward', {
            dataId: id,
            typeId: 1,
            goodsId: value
        });
        this.setState({
            showReward: false
        });
        Utils.light('打赏成功');
        this.fetchRewardList(true);
    };

    doComment = async query => {
        if (Utils.getCharLength(query.con) < 2) {
            Utils.light('回复字数太少');
            return false;
        }

        const { id } = this.getParams().params;
        await Api.P('do_video-v2_comment', query);

        this.onTextareaClose();
        Utils.light('回复成功');
        this.fetchVideosCommentList();
    };

    //回复评论
    doReplayComment = async query => {
        const { id } = this.getParams().params;
        const { rootId } = query; //楼层id

        if (Utils.getCharLength(query.con) < 2) {
            Utils.error('回复字数太少');
            return false;
        }
        delete query.rootId;
        await Api.P('do_video-v2_comment', query);

        this.onTextareaClose();
        Utils.light('回复成功');

        //更新楼层数据
        this.updateOneVideosCommentList(rootId);
    };

    //点赞
    toggleLike = async () => {
        const { id } = this.getParams().params;

        //点赞
        await Api.P('do_video-v2_like', {
            tbId: id,
            likeType: 1
        });

        Utils.light('点赞成功');
        this.fetchVideosDetail();
    };

    //关注
    doFollow = async () => {
        const { userId } = this.getState('videosDetail');

        await Api.P('do_add_follow', {
            concernId: userId
        });

        Utils.light('关注成功');
        this.fetchVideosDetail();
    };

    /*==================== Page ====================*/
    //显示FixedTextarea
    onCommentClick = item => {
        const { id } = this.getParams().params;
        let placeholder, onSubmit, onChange;

        //回复评论
        if (item.userId) {
            placeholder = `回复${item.niname}：`;
            onSubmit = value =>
                this.doReplayComment({
                    rootId: item.rootId,
                    parId: item.tbId,
                    con: value
                });
            //回复发现
        } else {
            placeholder = '回复：';
            onSubmit = value =>
                this.doComment({
                    tbId: id,
                    con: value
                });
        }

        this.setState({
            show: true,
            placeholder,
            onSubmit
        });
    };

    //隐藏FixedTextarea
    onTextareaClose = () => {
        this.setState({
            show: false
        });
    };
}
