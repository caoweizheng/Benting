/**
 * const prefixCls = 'styles-28149807';
 * const images = '/static/images/src/video/Detail';
 * @Author: qizc
 * @Date:   2017-12-26 11:24:50
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\video\Detail\_Comment.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { ListView, Empty } from 'components';
import { Header } from 'src/_';
import __CommentItem from './__CommentItem';


const _Comment = (props, { $ }) => {
    const { className } = props;
    const videosCommentList = $.getState('videosCommentList');

    return (
        <div className={className}>
            <Header>最新评论</Header>
            <ListView
                className="tool-list-md"
                data={videosCommentList}
                renderRow={data => <__CommentItem {...data} />}
                renderEmpty={<Empty>评论处空空如也...</Empty>}
                onEndReached={$.fetchVideosCommentList}
            />
        </div>
    );
};

_Comment.contextTypes = {
    $: PropTypes.object
};

export default observer(_Comment);
