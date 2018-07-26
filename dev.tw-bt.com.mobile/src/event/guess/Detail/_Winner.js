/**
 * const prefixCls = 'styles-40219675';
 * const images = '/static/images/src/event/guess/Detail';
 * @Author: qizc
 * @Date:   2018-02-03 11:51:59
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 14:53:36
 * @Path btWap \src\event\guess\Detail\_Winner.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Flex, Button } from 'antd-mobile';
import { ListView, Img } from 'components';
import { Header } from 'src/_';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-40219675';

const _Winner = (props, { $ }) => {
    const { className } = props;
    const guessWinnerList = $.getState('guessWinnerList');

    return (
        <div className={classNames(prefixCls, className)}>
            <Header>
                <span>竞猜中奖名单</span>
                <span className="text-sm text-sub">（</span>
                <span className="text-sm text-primary ml-xs mr-xs">
                    {guessWinnerList.list && guessWinnerList.list[0]
                        ? guessWinnerList.pageinfo.recordtotal
                        : 0}
                </span>
                <span className="text-sm text-sub">人）</span>
            </Header>
            <ListView
                data={guessWinnerList}
                hideFooter
                renderRow={item => (
                    <List.Item className={`${prefixCls}_item`}>
                        <Flex>
                            <Img
                                src={item.face}
                                circle
                                onClick={() =>
                                    Utils.router.push(
                                        `/person/zone?id=${item.userId}`,
                                        `/person/zone/${item.userId}`
                                    )}
                            />
                            <Flex.Item className="ml-sm text-desc">
                                <p className="text-main text-sm">
                                    {item.nickName}
                                </p>
                                <p className="text-sub text-xs">
                                    {Utils.date('m.d H:i:s', item.createTime)}
                                </p>
                            </Flex.Item>
                            <p className="text-sm text-sub">
                                {item.information}斤
                            </p>
                        </Flex>
                        <img className="win_img" src={`${images}/winner.png`} />
                        <style jsx global>{`
                            .styles-40219675 {
                            }
                            .${prefixCls}_item {
                                position: relative;
                            }
                        `}</style>
                        <style jsx>{`
                            .styles-40219675 {
                            }
                            .win_img {
                                position: absolute;
                                top: 50%;
                                right: 1.44rem;
                                width: auto;
                                height: 0.8rem;
                                transform: translateY(-50%);
                            }
                        `}</style>
                    </List.Item>
                )}
                onEndReached={$.fetchGuessWinnerList}
            />
        </div>
    );
};

_Winner.contextTypes = {
    $: PropTypes.object
};

export default observer(_Winner);
