/**
 * const prefixCls = 'styles-81651808';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2017-12-27 16:06:19
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-27 18:10:37
 * @Path btWap \src\bbs\Article\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Reward } from 'components';
import { Layout, AuthorInfo, RewardList } from 'src/_';
import _Content from './_Content';
import _Competition from './_Competition';
import _Comment from './_Comment';
import _CompetitionRecord from './_CompetitionRecord';
import _CompetitionAwardRecord from './_CompetitionAwardRecord';
import _FixedTextarea from './_FixedTextarea';
import _Egg from './_Egg';
import _Registration from './_Registration';
import _BaiduCambrian from './_BaiduCambrian';
import Const from 'const';
import Styles from 'styles';
import G from 'stores/g';
import UI from 'stores/ui';
import store from './store';

const prefixCls = 'styles-81651808';

@inject(store)
@observer
export default class Article extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    state = {
        baiduPushImgSrc: ''
    };

    componentDidMount() {
        if (Const.__CLIENT__) {
            const { $ } = this.context;
            $.setHeader();

            //百度统计主动推送收录
            const { baiduPushImgSrc } = this.state;
            if (baiduPushImgSrc) return;

            let e = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi,
                r = window.location.href,
                t = document.referrer;

            if (!e.test(r)) {
                let o =
                    'https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif';
                t
                    ? ((o += '?r=' + document.referrer), r && (o += '&l=' + r))
                    : r && (o += '?l=' + r);
                //let i = new Image();
                //i.src = o;

                this.setState({
                    baiduPushImgSrc: o
                });
            }
        }
    }

    componentWillUnmount() {
        if (Const.__CLIENT__) {
            const { $ } = this.context;

            $.onTextareaClose();
            UI.resetHeader();
        }
    }

    render() {
        const { $ } = this.context;
        const { baiduPushImgSrc } = this.state;
        const { id } = $.getParams().params;
        const { showReward } = $.getState();
        const postDetail = $.getState('postDetail');
        const rewardList = $.getState('rewardList');
        const { list = [] } = $.getState('rewardGoodsList');
        const mounted = G.getState('mounted');

        return (
            <Layout title={postDetail.title || '帖子详情'}>
                <div className="post">
                    <h4 className="text-title text-bold">
                        {postDetail.registrationData && (
                            <span className="text-danger">活动 · </span>
                        )}
                        <span>{postDetail.title}</span>
                    </h4>
                    <AuthorInfo
                        className="mt-md"
                        userId={postDetail.userId}
                        img={
                            postDetail.faceImg ===
                            'static/uploads/png/20170519/591e5f9e2c2bc.png'
                                ? `${Const.__IMAGES__}/bbs_avatar.png`
                                : postDetail.faceImg
                        }
                        name={postDetail.niname}
                        date={postDetail.createTime}
                        dateExtra="发布"
                    />
                    <div className="content-placeholder">
                        <_Content className="mt-md" />
                    </div>
                    {postDetail.registrationData && (
                        <_Registration className="mt-md" />
                    )}
                </div>
                {!!rewardList.list.length && (
                    <RewardList
                        id={id}
                        className="mt-d"
                        rewardList={rewardList}
                        type={3}
                    />
                )}
                {postDetail.guessingData && <_Competition className="mt-d" />}
                {postDetail.guessingData &&
                    !$.isCompetitionComplete && (
                        <_CompetitionRecord className="mt-d" />
                    )}
                {postDetail.guessingData &&
                    $.isCompetitionComplete && (
                        <_CompetitionAwardRecord className="mt-d" />
                    )}
                <_Comment className="mt-d" />

                {/*内容以外元素*/}
                <Reward
                    show={showReward}
                    list={list}
                    onCancel={() => $.setState({ showReward: false })}
                    onSuccess={value => $.doReward(value)}
                />
                {mounted && <_FixedTextarea />}
                <_Egg />

                {/*SEO*/}
                {baiduPushImgSrc && (
                    <img className="t-hide" src={baiduPushImgSrc} />
                )}
                {Const.__SERVER__ && <_BaiduCambrian />}

                <style jsx>{`
                    .styles-81651808 {
                    }
                    .post {
                        padding: ${Styles.space} ${Styles.wind};
                        background: #fff;
                    }
                    .text-title {
                        min-height: 0.36rem;
                    }
                    .content-placeholder {
                        min-height: 40vw;
                    }
                `}</style>
            </Layout>
        );
    }
}
