/**
 * 竞猜模块
 * const prefixCls = 'styles-15643475';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2018-05-28 11:55:30
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-30 16:30:18
 * @Path btWap \src\bbs\Article\__Competition.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Button, Flex } from 'antd-mobile';
import { Img, PayConfirm, Empty } from 'components';
import { Header } from 'src/_';
import __Badge from './__Badge';
import Utils from 'utils';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'styles-15643475';

const __Competition = (props, { $ }) => {
    const { className } = props;
    const { guessingData = {} } = $.getState('postDetail');
    const payConfirm = $.getState('_payConfirm');
    const {
        competition,
        competitionPlayers = [],
        competitionBettingEnd,
        competitionWinner
    } = guessingData;
    if (competition != 1) return null;

    const isCanGuess =
        Utils.getTimestamp() < competitionBettingEnd &&
        !$.isCompetitionComplete;

    //计算支持占比
    const sumAmount = competitionPlayers.length
        ? competitionPlayers.map(item => item.amount).reduce((a, b) => a + b)
        : 0;

    const percentAmount = {};
    competitionPlayers.forEach(item => {
        if (sumAmount) {
            let percent = (item.amount / sumAmount).toFixed(2);
            let realPercent = percent;

            percent = Math.max(percent, 0.05);
            percent = Math.min(percent, 0.95);
            percentAmount[item.id] = {
                percent,
                realPercent
            };
        } else {
            percentAmount[item.id] = {
                percent: 0.1,
                realPercent: 0
            };
        }
    });

    return (
        <div className={classNames(prefixCls, className)}>
            <Header>参赛选手</Header>
            {competitionPlayers.length ? (
                <List>
                    {competitionPlayers.map((item, index) => (
                        <List.Item key={item.id} wrap>
                            <Flex>
                                <Img src={item.avatar} circle />
                                <Flex.Item className="ml-sm">
                                    <Flex className="text-main text-sm">
                                        <__Badge>{index + 1}</__Badge>
                                        <span className="ml-xs">
                                            {item.name}
                                        </span>
                                    </Flex>
                                    <p className="text-sub text-xs">
                                        {item.description}
                                    </p>
                                </Flex.Item>
                                <div
                                    className="wrap-btn ml-sm"
                                    onClick={
                                        isCanGuess
                                            ? undefined
                                            : () => Utils.light('当前不可支持')
                                    }
                                >
                                    {isCanGuess ? (
                                        <Button
                                            className={`${prefixCls}__btn-betting`}
                                            inline
                                            size="small"
                                            onClick={() =>
                                                Utils.checkLogin(() =>
                                                    $.showBettingModal(item)
                                                )}
                                        >
                                            支持TA
                                        </Button>
                                    ) : (
                                        <Button
                                            className={`${prefixCls}__btn-betting`}
                                            inline
                                            disabled
                                            size="small"
                                        >
                                            支持TA
                                        </Button>
                                    )}
                                    <div
                                        className="line"
                                        style={{
                                            width: `${percentAmount[item.id]
                                                .percent * 100}%`
                                        }}
                                    />
                                    {item.id === competitionWinner && (
                                        <img
                                            className="img-winner"
                                            src={`${images}/winner.png`}
                                        />
                                    )}
                                </div>
                            </Flex>
                        </List.Item>
                    ))}
                </List>
            ) : (
                <Empty>参赛选手暂未录入</Empty>
            )}
            <PayConfirm
                show={payConfirm.show}
                type={payConfirm.type}
                amount={payConfirm.amount}
                onClose={$.closePayConfirm}
                onConfirm={$.doBetting}
            />

            <style jsx global>{`
                .styles-15643475 {
                }
                .${prefixCls}__btn-betting {
                    vertical-align: top;
                    overflow: initial;
                }
                .${prefixCls}__btn-betting span {
                    padding-bottom: 0.04rem;
                }
                .${prefixCls}__btn-betting:before {
                    border: 0.01rem solid #888 !important;
                    border-radius: 0 !important;
                }
            `}</style>
            <style jsx>{`
                .styles-15643475 {
                }
                .wrap-btn {
                    position: relative;
                    padding: 0.02rem;
                }
                .line {
                    display: inline-block;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 0.04rem;
                    background: ${Styles.color_primary};
                }
                .img-winner {
                    position: absolute;
                    top: 50%;
                    right: 1.44rem;
                    width: auto;
                    height: 0.8rem;
                    transform: translateY(-50%);
                }
            `}</style>
        </div>
    );
};

__Competition.contextTypes = {
    $: PropTypes.object
};

export default observer(__Competition);
