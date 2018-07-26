/**
 * const prefixCls = 'styles-12674990';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2017-12-27 17:55:08
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-03 12:39:00
 * @Path btWap \src\bbs\Article\__CommentRow.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Flex } from 'antd-mobile';
import { Content, DiscuzContent, Tag } from 'components';
import { AuthorInfo } from 'src/_';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-12674990';

const __CommentRow = (props, { $ }) => {
    const { className } = props;

    let floorCn = `#${parseInt(props.floor)}`;
    if (floorCn === '#2') floorCn = '沙发';
    if (floorCn === '#3') floorCn = '板凳';
    if (floorCn === '#4') floorCn = '地板';

    return (
        <List.Item
            key={props.postId}
            className={classNames(prefixCls, className)}
            wrap={true}
        >
            <span className="p-floor text-sm text-sub">{floorCn}</span>
            <Flex align="start" wrap="wrap">
                <AuthorInfo
                    userId={props.userId}
                    img={
                        props.faceImg ===
                        'static/uploads/png/20170519/591e5f9e2c2bc.png'
                            ? `${Const.__IMAGES__}/bbs_avatar.png`
                            : props.faceImg
                    }
                    name={props.niname}
                    date={props.createTime}
                    dateExtra="发布"
                />
                {props.isHost && (
                    <Tag
                        className="ml-sm"
                        style={{
                            marginTop: '.06rem'
                        }}
                    >
                        楼主
                    </Tag>
                )}
            </Flex>
            <div className="content mt-sm">
                {!!props.parCreateTime && (
                    <div className="quote text-sm text-desc mb-sm">
                        <Content
                            className="text-sm text-sub user-select"
                            left={
                                <span
                                    className="text-main"
                                    onClick={() =>
                                        Utils.router.push(
                                            `/person/zone?id=${props.parUserId}`,
                                            `/person/zone/${props.parUserId}`
                                        )}
                                >
                                    {props.parNiname}
                                    {props.isHost && (
                                        <Tag
                                            className="ml-xs"
                                            style={{
                                                width: '.72rem',
                                                verticalAlign: 'middle'
                                            }}
                                        >
                                            楼主
                                        </Tag>
                                    )}
                                    ：
                                </span>
                            }
                            style={{ display: 'inline-block' }}
                        >
                            {props.parMessage}
                        </Content>
                    </div>
                )}
                <DiscuzContent
                    className="text-md text-title user-select"
                    html={{ __html: props.content }}
                />
                {props.commentImg && (
                    <img
                        className="img-reply mt-sm"
                        src={Utils.getAppImgUrl(props.commentImg, 'scale')}
                    />
                )}
            </div>

            <style jsx>{`
                .styles-12674990 {
                }
                .p-floor {
                    position: absolute;
                    top: 0.32rem;
                    right: ${Styles.wind};
                }
                .content {
                    padding-left: 0.08rem;
                    margin-left: 0.9rem;
                }
                .quote {
                    padding: ${Styles.xs};
                    background-color: ${Styles.color_bg};
                    border-radius: ${Styles.radius_xs};
                }
                .img-reply {
                    width: 100% !important;
                    height: auto !important;
                }
            `}</style>
        </List.Item>
    );
};

__CommentRow.contextTypes = {
    $: PropTypes.object
};

export default observer(__CommentRow);
