/**
 * const prefixCls = 'styles-45554377';
 * const images = '/static/images/src/person/message/Group';
 * @Author: Jack
 * @Date:   2018-06-04 12:01:37
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-04 12:02:00
 * @Path btWap \src\person\message\Group\ds.js
 */
'use strict';

import Utils from 'utils';

export const staticDS = [
    {
        icon: 'eit',
        iconStyle: {
            background: '#34aee1'
        },
        text: '@我的',
        extraKey: 'commentNum',
        onClick: () =>
            Utils.router.push('/person/message?id=at', '/person/message/at')
    },
    {
        icon: 'message',
        iconStyle: {
            background: '#3ed5d0'
        },
        text: '评论',
        extraKey: 'replyNum',
        onClick: () =>
            Utils.router.push(
                '/person/message?id=comment',
                '/person/message/comment'
            )
    },
    {
        icon: 'praise',
        iconStyle: {
            background: '#EB4C76'
        },
        text: '点赞',
        extraKey: 'likeNum',
        onClick: () =>
            Utils.router.push('/person/message?id=like', '/person/message/like')
    },
    {
        icon: 'financial_fill',
        iconStyle: {
            background: '#FFBE33'
        },
        text: '打赏',
        extraKey: 'rewardNum',
        onClick: () =>
            Utils.router.push(
                '/person/message?id=reward',
                '/person/message/reward'
            )
    },
    {
        icon: 'setup',
        iconStyle: {
            background: '#C1C1C1'
        },
        text: '系统',
        extraKey: 'systemNum',
        onClick: () =>
            Utils.router.push(
                '/person/message?id=system',
                '/person/message/system'
            )
    }
];
