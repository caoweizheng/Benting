/**
 * const prefixCls = 'styles-10270371';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2017-12-27 17:31:00
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-29 11:15:53
 * @Path btWap \src\bbs\Article\_Comment.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { ListView, Empty, AffixTabs } from 'components';
import __CommentRow from './__CommentRow';

const prefixCls = 'styles-10270371';

const _Comment = (props, { $ }) => {
    const { className } = props;
    const { initialPage } = $.getState();
    const userInfo = $.getState('userInfo');
    const { userId } = $.getState('postDetail'); //楼主Id
    const commentList = $.getState('commentList');

    const tabs = userInfo.userId
      ? [{ title: '最新' }, { title: '正序' }, { title: '楼主' }, { title: '我的' }]
      : [{ title: '最新' }, { title: '正序' }, { title: '楼主' }];

    return (
        <div className={classNames(prefixCls, className)}>
            <AffixTabs
                tabs={tabs}
                initialPage={initialPage}
                onTabClick={$.onTabClick}
            >
                <ListView
                    data={commentList}
                    renderRow={data => (
                        <__CommentRow
                            isHost={userId == data.parUserId}
                            {...data}
                        />
                    )}
                    renderEmpty={<Empty>来抢沙发吧...</Empty>}
                    onEndReached={$.fetchCommentList}
                />
            </AffixTabs>
        </div>
    );
};

_Comment.contextTypes = {
    $: PropTypes.object
};

export default observer(_Comment);
