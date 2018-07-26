/**
 * const prefixCls = 'styles-12618546';
 * const images = '/static/images/src/bbs/Index';
 * @Author: Jack
 * @Date:   2018-03-23 12:08:50
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 14:38:14
 * @Path nidosport E:\code\btWap\src\bbs\Index\_TopicFixed.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import Const from 'const';
import Styles from 'styles';
import G from 'stores/g';

const prefixCls = 'styles-12618546';
import { images } from './ds';

const _TopicFixed = (props, { $ }) => {
    const topicToday = $.getState('topicToday');
    const topicIsPosted = $.getState('topicIsPosted');
    const bbsTopic = G.getState('bbsTopic');

    //服务器返回0是首要条件
    if (topicIsPosted.value !== 0) return null;

    //新话题id跟旧话题id一样
    //现在的时间比缓存的时间小
    if (
        bbsTopic.lastTopicId == topicToday.topicId &&
        bbsTopic.time != 0 &&
        Utils.getTimestamp() < bbsTopic.time
    )
        return null;

    return (
        <div className={prefixCls}>
            <Flex>
                <img
                    className="img-icon"
                    src={`${Const.__IMAGES__}/icon/message.png`}
                />
                <Flex.Item>#{topicToday.title}#</Flex.Item>
                <img
                    className="img-icon img-icon-close"
                    src={`${Const.__IMAGES__}/icon/delete_fill.png`}
                    onClick={() => $.hideTopicFixed(false)}
                />
            </Flex>
            <Flex
                className="mt-sm"
                onClick={() =>
                    $.onTopicClick(topicToday.topicId, topicToday.title)}
            >
                <Flex.Item>
                    <div className="fake-textarea" />
                </Flex.Item>
                <img
                    className="img-btn ml-sm"
                    src={`${images}/btn_topic.png`}
                />
            </Flex>

            <style jsx>{`
                .styles-12618546 {
                    position: fixed;
                    left: 0;
                    right: 0;
                    bottom: 1rem;
                    padding: ${Styles.wind} ${Styles.wind} ${Styles.space};
                    color: #fff;
                    ${Styles._bg};
                    background-image: url(${images}/topic.jpg);
                }
                .img-icon {
                    width: 0.54rem;
                    height: 0.54rem;
                }
                .img-icon-close {
                    opacity: 0.64;
                }
                .fake-textarea {
                    height: 0.52rem;
                    background: #fff;
                    box-shadow: 0.02rem 0.02rem 0.08rem rgba(0, 0, 0, 0.32)
                        inset;
                }
                .img-btn {
                    width: 1.36rem;
                    height: 0.52rem;
                }
            `}</style>
        </div>
    );
};

_TopicFixed.contextTypes = {
    $: PropTypes.object
};

export default observer(_TopicFixed);
