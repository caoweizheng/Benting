/**
 * const prefixCls = 'styles-15151896';
 * const images = '/static/images/src/bbs/_/List';
 * @Author: Jack
 * @Date:   2017-12-26 09:35:40
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-27 18:07:32
 * @Path btWap \src\bbs\_\List\_Item.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List } from 'antd-mobile';
import { AuthorInfo, LikeList } from 'src/_';
import __Media from './__Media';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-15151896';
const images = Utils.cdn('/static/images/src/bbs');

const _Item = props => {
    const {
        content,
        contentImg,
        createTime,
        displayState,
        faceImg,
        forumName,
        isDigest,
        isLike,
        isRegistration,
        likeAdd,
        likeList,
        niname,
        postId,
        replyNum,
        threadId,
        title,
        topicId,
        userId,

        //自定义
        className,
        hideAvatar,
        isHideDetail,
        onDoLike,
        onTopicClick
    } = props;
    const isTop = !!displayState;
    const isHot = replyNum >= 30;

    const titleEl = (
        <Flex
            className={classNames('text-clamp-1', {
                //暂时回复数大于30标红
                'text-danger': isHot,
                'text-primary': !!topicId
            })}
            align="start"
        >
            {isTop && (
                <img
                    className={`${prefixCls}__img-top mr-xs`}
                    src={`${images}/top.png`}
                />
            )}
            {!!isDigest && (
                <img
                    className={`${prefixCls}__img-special mr-xs`}
                    src={`${images}/special.png`}
                />
            )}
            {isHot && (
                <img
                    className={`${prefixCls}__img-hot mr-xs`}
                    src={`${images}/hot.png`}
                />
            )}
            {isRegistration == '1' && (
                <span className="text-danger text-md">活动 · </span>
            )}
            <span className="text-md">{title}</span>
        </Flex>
    );

    return (
        <List.Item
            className={classNames(prefixCls, className)}
            onClick={() =>
                Utils.router.push(
                    `/bbs/article?id=${threadId}`,
                    `/bbs/article/${threadId}`
                )
            }
        >
            {!hideAvatar && (
                <AuthorInfo
                    userId={userId}
                    img={
                        faceImg ===
                        'static/uploads/png/20170519/591e5f9e2c2bc.png'
                            ? `${Const.__IMAGES__}/bbs_avatar.png`
                            : faceImg
                    }
                    name={niname}
                    date={createTime}
                    dateExtra="发布"
                    style={{
                        marginBottom: '0.24rem'
                    }}
                />
            )}
            {/*话题点击*/}
            {!!topicId && onTopicClick ? (
                <Flex>
                    <Flex.Item className="mr-sm">{titleEl}</Flex.Item>
                    <span
                        className="p-topic text-xs text-primary"
                        onClick={e => {
                            e.stopPropagation();
                            Utils.checkLogin(() =>
                                onTopicClick(topicId, title.replace(/#/g, ''))
                            );
                        }}
                    >
                        参加话题
                    </span>
                </Flex>
            ) : (
                <span>{titleEl}</span>
            )}
            {!isHideDetail && (
                <p className="p-desc text-sub text-sm text-clamp-2">
                    {content}
                </p>
            )}
            {!isHideDetail && (
                <__Media className={`${prefixCls}__media`} data={contentImg} />
            )}
            {!isHideDetail && <LikeList className="mt-md" data={likeList} />}
            <Flex className={`${prefixCls}__sub text-sm`}>
                <Flex.Item>
                    <span className="text-main text-sm">{forumName}</span>
                </Flex.Item>
                {/*列表中点赞*/}
                <img
                    className="img-praise t-img"
                    src={
                        isLike
                            ? `${Const.__IMAGES__}/praise_a.png`
                            : `${Const.__IMAGES__}/praise.png`
                    }
                    onClick={
                        onDoLike
                            ? e =>
                                  Utils.checkLogin(() => {
                                      e.stopPropagation();
                                      onDoLike(postId, threadId);
                                  })
                            : undefined
                    }
                />
                <span className="text-sub ml-sm">{likeAdd}</span>
                <img
                    className="img-interactive t-img"
                    src={`${Const.__IMAGES__}/interactive.png`}
                />
                <span className="text-sub ml-sm">{replyNum}</span>
            </Flex>

            <style jsx global>{`
                .styles-15151896 {
                }
                .${prefixCls}__media {
                    margin-top: 0.32rem;
                }
                .${prefixCls}__sub {
                    margin-top: 0.48rem;
                }
                .${prefixCls}__img-top {
                    display: inline-block;
                    width: 0.6rem !important;
                    height: 0.32rem !important;
                    border-radius: 0.04rem;
                }
                .${prefixCls}__img-special {
                    display: inline-block;
                    width: 0.36rem !important;
                    height: 0.32rem !important;
                    border-radius: 0.04rem;
                }
                .${prefixCls}__img-hot {
                    display: inline-block;
                    width: 0.32rem !important;
                    height: 0.32rem !important;
                    border-radius: 0.04rem;
                }
            `}</style>
            <style jsx>{`
                .styles-15151896 {
                }
                .p-desc {
                    margin-top: 0.16rem;
                    line-height: 1.4;
                    white-space: initial;
                }
                .img-praise {
                    width: 0.4rem;
                    height: 0.4rem;
                }
                .img-interactive {
                    width: 0.4rem;
                    height: 0.4rem;
                    margin-left: 0.44rem;
                }
                .p-topic {
                    display: inline-block;
                    padding: 0.02rem 0.12rem;
                    border-radius: 0.04rem;
                    border: 0.01rem solid ${Styles.color_primary};
                }
            `}</style>
        </List.Item>
    );
};

export default observer(_Item);
