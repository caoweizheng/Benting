/**
 * const prefixCls = 'styles-50590246';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2018-05-30 10:48:26
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-31 18:42:35
 * @Path btWap \src\bbs\Article\_CompetitionAwardRecord.js
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
    const {
        competitionPlayers = [],
        competitionType,
        competitionPump,
        competitionWinner
    } = guessingData;
    const competitionAwardRecordList = $.getState('competitionAwardRecordList');
    const { me } = $.getState('_CompetitionRecord');
    const type = competitionType === '1' ? '金币' : '积分';

    const playerMap = {};
    let sumAmount = 0;
    let jackPot = 0;
    competitionPlayers.forEach((item, index) => {
        playerMap[item.id] = {
            index: index + 1,
            name: item.name
        };
        sumAmount += item.amount;
        if (item.id != competitionWinner) jackPot += item.amount;
    });
    jackPot = Math.ceil(jackPot * (1 - competitionPump));

    return (
        <div className={classNames(prefixCls, className)}>
            <Header
                extra={
                    !!userId && (
                        <Flex
                            className={classNames(
                                'pull-right text-sm text-sub'
                            )}
                            onClick={$.toggleCompetitionAwardRecordList}
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
                        <span>中奖记录</span>
                        <span className="text-xs text-sub">（</span>
                        <span className="text-xs text-primary">
                            {competitionAwardRecordList.pageinfo.recordtotal}
                        </span>
                        <span className="text-xs text-sub">人次瓜分掉</span>
                        <span className="text-xs text-primary">
                            {Utils.formatNumber(jackPot, 0)}
                        </span>
                        <span className="text-xs text-sub">{type}）</span>
                    </p>
                ) : (
                    <p>
                        <span>中奖记录</span>
                        <span className="text-xs text-sub">（</span>
                        <span className="text-xs text-primary">
                            {competitionAwardRecordList.pageinfo.recordtotal}
                        </span>
                        <span className="text-xs text-sub">次支持）</span>
                    </p>
                )}
            </Header>
            {competitionAwardRecordList.list.length ? (
                <List>
                    {competitionAwardRecordList.list.map((item, index) => (
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
                                <p className="text-xs text-right">
                                    <span className="text-sub">
                                        返还{Utils.formatNumber(item.amount, 0)}
                                    </span>
                                    <span className="text-sub ml-xs">+</span>
                                    <span className="text-danger ml-xs">
                                        {Utils.formatNumber(
                                            item.bonus - item.amount,
                                            0
                                        )}
                                        {$.competitionTypeLabel}
                                    </span>
                                </p>
                            </Flex>
                        </List.Item>
                    ))}
                    {competitionAwardRecordList._hasMore && (
                        <List.Item onClick={$.fetchCompetitionAwardRecordList}>
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
