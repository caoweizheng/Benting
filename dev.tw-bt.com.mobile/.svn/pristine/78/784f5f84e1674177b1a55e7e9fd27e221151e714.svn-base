/**
 * const prefixCls = 'styles-12611745';
 * const images = '/static/images/src/person/publish/Index';
 * @Author: Jack
 * @Date:   2018-03-03 17:16:47
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-03 17:20:00
 * @Path btWap \src\person\publish\Index\_Row.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Icon } from 'antd-mobile';
import PostItem from 'src/bbs/_/List/_Item';
import Utils from 'utils';

const _Row = (props, { $ }) => {
    return (
        <PostItem
            hideAvatar
            titleExtra={
                <Icon
                    className="text-sub ml-md"
                    type="down"
                    onClick={e => {
                        e.stopPropagation();

                        Utils.actionSheet(['编辑', '删除'], index => {
                            if (index === 0) {
                                Utils.router.push(
                                    `/bbs/post?id=${props.forumId}&postId=${props.postId}`,
                                    `/bbs/post/${props.forumId}/${props.postId}`
                                );
                            } else if (index === 1) {
                                Utils.onConfirm('确定删除?', () =>
                                    $.doDeletePost(props.postId)
                                );
                            }
                        });
                    }}
                />
            }
            {...props}
        />
    );
};

_Row.contextTypes = {
    $: PropTypes.object
};
export default observer(_Row);
