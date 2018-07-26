/**
 * const prefixCls = 'styles-85819635';
 * const images = '/static/images/src/event/floor/Index';
 * @Author: Jack
 * @Date:   2018-01-13 18:05:23
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 14:42:52
 * @Path btWap \src\event\floor\Index\__Item.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List } from 'antd-mobile';
import { AffixTabs, ListView } from 'components';
import { AuthorInfo, LikeList } from 'src/_';
import __Media from 'src/bbs/_/List/__Media';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';
import { imagesBBS } from './ds';

const prefixCls = 'styles-85819635';

const _Item = props => {
    const {
        content,
        contentImg,
        createTime,
        displayState,
        faceImg,
        forumName,
        hideAvatar,
        hits,
        isDigest,
        isLike,
        isProcessing,
        likeAdd,
        likeList,
        niname,
        postId,
        replyNum,
        threadId,
        title,
        topicId,
        userId,
        onTopicClick,
        onDoLike,
        className
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
                    src={`${imagesBBS}/top.png`}
                />
            )}
            {!!isDigest && (
                <img
                    className={`${prefixCls}__img-special mr-xs`}
                    src={`${imagesBBS}/special.png`}
                />
            )}
            {isHot && (
                <img
                    className={`${prefixCls}__img-hot mr-xs`}
                    src={`${imagesBBS}/hot.png`}
                />
            )}
            <span className="text-md">{title}</span>
        </Flex>
    );

    return (
        <List.Item
            className={classNames(prefixCls, className)}
            onClick={() =>
                Utils.router.push(
                    `/event/floor/detail?id=${threadId}`,
                    `/event/floor/detail/${threadId}`
                )}
        >
            <Flex>
                <Flex.Item>
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
                </Flex.Item>
                {isProcessing && <p className="p-ing">进行中</p>}
            </Flex>
            {titleEl}
            <p className="desc text-sub text-sm text-clamp-2">{content}</p>
            <__Media className={`${prefixCls}__media`} data={contentImg} />
            <LikeList className="mt-md" data={likeList} />
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
                .styles-85819635 {
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
                .styles-85819635 {
                }
                .title {
                    margin-top: 0.24rem;
                }
                .desc {
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
                .p-ing {
                    display: inline-block;
                    padding: ${Styles.xs} ${Styles.sm};
                    color: #fff;
                    font-size: ${Styles.font_xxs};
                    background-image: linear-gradient(
                        to right,
                        #4d6eeb,
                        #9855de
                    );
                    border-radius: 0.04rem;
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
