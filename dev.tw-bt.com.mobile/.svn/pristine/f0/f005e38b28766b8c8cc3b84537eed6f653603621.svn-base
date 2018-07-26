/**
 * const prefixCls = 'styles-71168648';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2018-05-28 18:48:24
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-31 18:32:36
 * @Path btWap \src\bbs\Article\_CompetitionRecord.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Flex, Button } from 'antd-mobile';
import { Img, Empty } from 'components';
import { Header } from 'src/_';
import __Badge from './__Badge';
import Utils from 'utils';

const prefixCls = 'styles-10270371';

const _CompetitionRecord = (props, { $ }) => {
    const { className } = props;
    const { userId } = $.getState('userInfo');
    const { guessingData = {} } = $.getState('postDetail');
    const { competitionPlayers = [], competitionType } = guessingData;
    const competitionRecordList = $.getState('competitionRecordList');
    const { me } = $.getState('_CompetitionRecord');

    const playerMap = {};
    let sumAmount = 0;
    competitionPlayers.forEach((item, index) => {
        playerMap[item.id] = {
            index: index + 1,
            name: item.name
        };
        sumAmount += item.amount;
    });

    return (
        <div className={classNames(prefixCls, className)}>
            <Header
                extra={
                    !!userId && (
                        <Flex
                            className={classNames(
                                'pull-right text-sm text-sub'
                            )}
                            onClick={$.toggleCompetitionRecordList}
                        >
                            <span>{me ? '全部' : '我的'}</span>
                            <img
                                src={`${Const.__IMAGES__}/icon/enter_gray.png`}
                            />
                        </Flex>
                    )
                }
            >
                {!me ? (
                    <p>
                        <span>支持记录</span>
                        <span className="text-xs text-sub">（</span>
                        <span className="text-xs text-primary">
                            {competitionRecordList.pageinfo.recordtotal}
                        </span>
                        <span className="text-xs text-sub">人次支持，共</span>
                        <span className="text-xs text-primary">
                            {Utils.formatNumber(sumAmount, 0)}
                        </span>
                        <span className="text-xs text-sub">{$.competitionTypeLabel}）</span>
                    </p>
                ) : (
                    <p>
                        <span>支持记录</span>
                        <span className="text-xs text-sub">（</span>
                        <span className="text-xs text-primary">
                            {competitionRecordList.pageinfo.recordtotal}
                        </span>
                        <span className="text-xs text-sub">人次支持）</span>
                    </p>
                )}
            </Header>
            {competitionRecordList.list.length ? (
                <List>
                    {competitionRecordList.list.map((item, index) => (
                        <List.Item key={index} wrap>
                            <Flex>
                                <Img src={item.avatar} circle />
                                <Flex.Item className="ml-sm">
                                    <p className="text-main text-sm">
                                        {item.name}
                                    </p>
                                    <p className="text-sub text-xs">
                                        {Utils.date(
                                            'm.d H:i:s',
                                            item.created_at
                                        )}
                                    </p>
                                </Flex.Item>
                                <div>
                                    <Flex justify="end">
                                        <__Badge>
                                            {playerMap[item.player_id].index}
                                        </__Badge>
                                        <span className="text-main text-sm ml-xs">
                                            {playerMap[item.player_id].name}
                                        </span>
                                    </Flex>
                                    <p className="text-primary text-xs text-right">
                                        +{Utils.formatNumber(item.amount, 0)}{$.competitionTypeLabel}
                                    </p>
                                </div>
                            </Flex>
                        </List.Item>
                    ))}
                    {competitionRecordList._hasMore && (
                        <List.Item onClick={$.fetchCompetitionRecordList}>
                            <p
                                className="text-sm text-center"
                                style={{ color: '#b8b8b8' }}
                            >
                                点击加载更多
                            </p>
                        </List.Item>
                    )}
                </List>
            ) : (
                <Empty>没有记录</Empty>
            )}
        </div>
    );
};

_CompetitionRecord.contextTypes = {
    $: PropTypes.object
};

export default observer(_CompetitionRecord);
