/**
 * const prefixCls = 'styles-58423365';
 * const images = '/static/images/src/person/message/Group';
 * @Author: Jack
 * @Date:   2018-06-03 14:38:58
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-04 14:06:58
 * @Path btWap \src\person\message\Group\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { List, Flex, Badge } from 'antd-mobile';
import { Img, Icon, Content } from 'components';
import { Layout } from 'src/_';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';
import { staticDS } from './ds';

const prefixCls = 'styles-58423365';

@inject(store)
@observer
export default class MessageGroup extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    renderStaticItem(config) {
        const { $ } = this.context;
        const messageCount = $.getState('messageCount');
        const { icon, iconStyle, text, extraKey, onClick } = config;

        return (
            <List.Item
                arrow="horizontal"
                key={text}
                extra={messageCount[extraKey] || ''}
                onClick={onClick}
            >
                <Flex>
                    <Flex
                        className={`${prefixCls}__thumb`}
                        justify="center"
                        style={iconStyle}
                    >
                        <Icon className="text-void" type={icon} />
                    </Flex>
                    <span className="ml-sm">{text}</span>
                </Flex>

                <style jsx global>{`
                    .styles-58423365 {
                    }
                    .${prefixCls}__thumb {
                        width: 0.8rem;
                        height: 0.8rem;
                        border-radius: 100%;
                    }
                `}</style>
            </List.Item>
        );
    }

    renderChatItem(config) {
        const { toUserId, faceImg, niname, message, time, newNum } = config;

        return (
            <List.Item
                key={toUserId}
                onClick={() =>
                    Utils.router.push(
                        `/chat?id=${toUserId}`,
                        `/chat/${toUserId}`
                    )}
            >
                <Flex>
                    <Img src={faceImg} size="0.8rem" circle />
                    <Flex.Item className="ml-sm">
                        <p>{niname}</p>
                        <p className="text-sm text-sub text-clamp-1">
                            {message.id ? '[图片]' : message.value}
                        </p>
                    </Flex.Item>
                    <Flex align="end" direction="column">
                        <p className="text-xs text-sub ml-sm">{time}</p>
                        {newNum > 0 && (
                            <Badge className="mt-xs" text={newNum} />
                        )}
                    </Flex>
                </Flex>

                <style jsx global>{`
                    .styles-58423365 {
                    }
                    .${prefixCls}__thumb {
                        width: 0.8rem;
                        height: 0.8rem;
                        border-radius: 100%;
                    }
                `}</style>
                <style jsx global>{`
                    .styles-58423365 {
                    }
                    p {
                        line-height: 1.2;
                    }
                `}</style>
            </List.Item>
        );
    }

    render() {
        const { $ } = this.context;
        const privateNotice = $.getState('privateNotice');

        return (
            <Layout title="我的物品">
                <List>
                    {staticDS.map(item => this.renderStaticItem(item))}
                    {privateNotice.list.map(item => {
                        let message = {};
                        let time;

                        try {
                            message = JSON.parse(item.message);
                        } catch (ex) {}

                        if (
                            Utils.date('m-d', item.createTime) ===
                            Utils.date('m-d', Utils.getTimestamp() / 1000)
                        ) {
                            time = Utils.date('H:i', item.createTime);
                        } else {
                            time = Utils.date('m-d', item.createTime);
                        }

                        return this.renderChatItem({
                            ...item,
                            message,
                            time
                        });
                    })}
                </List>
            </Layout>
        );
    }
}
