/**
 * const prefixCls = 'styles-11438628';
 * const images = '/static/images/src/video/Detail';
 * @Author: qizc
 * @Date:   2017-12-26 11:24:50
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\video\Detail\__CommentItem.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { observer } from '@';
import { List, Flex, Icon } from 'antd-mobile';
import { Content } from 'components';
import { AuthorInfo, Comment } from 'src/_';

const __CommentItem = (props, { $ }) => {
    const {
        faceImg,
        niname,
        createTime,
        userId,
        grade,
        fanAuth,
        role,
        vip,
        tbId,
        con,
        replyData,
        className
    } = props;

    return (
        <List.Item
            className={className}
            wrap={true}
            onClick={() =>
                Utils.checkLogin(() =>
                    $.onCommentClick({
                        rootId: tbId,
                        tbId,
                        userId,
                        niname
                    })
                )}
        >
            <Flex>
                <Flex.Item>
                    <AuthorInfo
                        userId={userId}
                        img={faceImg}
                        name={niname}
                        date={createTime}
                        grade={grade}
                        auth={fanAuth}
                        role={role}
                        vip={vip}
                    />
                </Flex.Item>
                <Icon className="text-sub" type={require('svg/comment.svg')} />
            </Flex>
            <div style={{ marginLeft: '1rem' }}>
                <Content className="text-md text-desc mt-sm user-select">
                    {con}
                </Content>
                <Comment
                    className="mt-sm"
                    id={tbId}
                    max="50"
                    data={
                        replyData.list &&
                        replyData.list.map(item => ({
                            tbId: item.tbId,
                            parId: item.parId,
                            name: item.niname,
                            text: item.con,
                            userId: item.userId,
                            parNiname: item.parNiname,
                            parUserId: item.parUserId,
                            vip: item.vip,
                            parVip: item.parVip
                        }))
                    }
                    total={replyData.total ? replyData.total : 0}
                    onMaxClick={() =>
                        Utils.router.push(`/videos/comment/${tbId}`)}
                    onCommentClick={item =>
                        Utils.checkLogin(() =>
                            $.onCommentClick({
                                rootId: tbId, //顶楼id
                                tbId: item.tbId, //当前评论id
                                niname: item.name, //当前回复者名字
                                userId: item.userId //当前回复者id
                            })
                        )}
                />
            </div>
        </List.Item>
    );
};

__CommentItem.contextTypes = {
    $: PropTypes.object
};

export default observer(__CommentItem);
