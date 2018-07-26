/**
 * const prefixCls = 'styles-97286911';
 * const images = '/static/images/src/person/welfare/RankUp';
 * @Author: Jack
 * @Date:   2018-01-09 14:03:31
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:47:13
 * @Path btWap \src\person\welfare\RankUp\_RankList.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, Button } from 'antd-mobile';
import { Tag } from 'components';
import ListWrap from 'src/person/welfare/_/ListWrap';
import Utils from 'utils';
import Styles from 'styles';
import { images } from '../_/ds';

const prefixCls = 'styles-97286911';

const _RankList = (props, { $ }) => {
    const { className } = props;
    const { btlevel } = $.getState('userInfo');
    const lotteryGradeInfo = $.getState('lotteryGradeInfo');

    return (
        <ListWrap className={classNames(prefixCls, className)} title="升级专区">
            <p className="text-sm">当前等级：{Utils.getBTLevel(btlevel)}</p>
            <div className="mt-d">
                {lotteryGradeInfo.list
                    .filter((item, index) => index > 0)
                    .map((item, index) => (
                        <div
                            key={index}
                            className="item"
                            style={{
                                backgroundImage: `url(${images}/${Utils.getBTLevel(
                                    item.grade
                                )}.jpg)`
                            }}
                            onClick={() =>
                                Utils.router.push(
                                    `/person/welfare/rank_up?id=${item.grade}`,
                                    `/person/welfare/rank_up/${item.grade}`
                                )}
                        >
                            {item.state === 2 && (
                                <Flex
                                    className={`${prefixCls}__mask`}
                                    direction="column"
                                    justify="center"
                                >
                                    <img src={`${images}/complete.png`} />
                                    <p className="text-sm text-void mt-sm">
                                        已领取
                                    </p>
                                </Flex>
                            )}
                            {item.state === 3 && (
                                <Flex
                                    className={`${prefixCls}__mask`}
                                    direction="column"
                                    justify="center"
                                >
                                    <img src={`${images}/lock.png`} />
                                    <p className="text-sm text-void mt-sm">
                                        达到{Utils.getBTLevel(item.grade)}开启
                                    </p>
                                    <Tag
                                        className="mt-sm"
                                        style={{
                                            background: Styles.color_primary
                                        }}
                                    >
                                        查看奖励
                                    </Tag>
                                </Flex>
                            )}
                            {item.state === 4 && (
                                <Flex
                                    className={`${prefixCls}__mask`}
                                    direction="column"
                                    justify="center"
                                >
                                    <img src={`${images}/close.png`} />
                                    <p className="text-sm text-void mt-sm">
                                        等级不符，已关闭
                                    </p>
                                </Flex>
                            )}
                        </div>
                    ))}
            </div>

            <style jsx global>{`
                .styles-97286911 {
                }
                .${prefixCls}__mask {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    padding: 0 ${Styles.wind};
                    text-align: center;
                    background: rgba(0, 0, 0, 0.24);
                }
                .${prefixCls}__mask img {
                    width: 0.44rem;
                    height: 0.44rem;
                }
            `}</style>
            <style jsx>{`
                .styles-97286911 {
                }
                .item {
                    position: relative;
                    display: inline-block;
                    vertical-align: top;
                    width: 48.5%;
                    margin-right: 3%;
                    margin-bottom: 3%;
                    padding-bottom: 30%;
                    ${Styles._bg};
                    border-radius: 0.08rem;
                    overflow: hidden;
                }
                .item:nth-of-type(2n) {
                    margin-right: 0;
                }
            `}</style>
        </ListWrap>
    );
};

_RankList.contextTypes = {
    $: PropTypes.object
};

export default observer(_RankList);
