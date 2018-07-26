/**
 * const prefixCls = 'styles-13686384';
 * const images = '/static/images/src/shop/auction/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 18:56:30
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-04 09:41:34
 * @Path btWap \src\shop\auction\Detail\_Record.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Flex } from 'antd-mobile';
import { ListView, Img } from 'components';
import { Header } from 'src/_';
import Utils from 'utils';

const prefixCls = 'styles-13686384';

const _Record = (props, { $ }) => {
    const { className } = props;
    const { auctionType } = $.getState('auctionDetail');
    const auctionRecord = $.getState('auctionRecord');

    let type;
    if (auctionType == 1) {
        type = '金币';
    } else {
        type = '积分';
    }

    return (
        <div className={classNames(prefixCls, className)}>
            <Header>
                <span>出价记录</span>
                <span className="text-sm text-sub">（已有</span>
                <span className="text-sm text-primary ml-xs mr-xs">
                    {(auctionRecord.pageinfo &&
                        auctionRecord.pageinfo.recordtotal) ||
                        0}
                </span>
                <span className="text-sm text-sub">次出价）</span>
            </Header>
            <ListView
                data={auctionRecord}
                renderRow={item => (
                    <List.Item>
                        <Flex>
                            <Flex.Item>
                                <Flex>
                                    <Img
                                        src={item.faceImg}
                                        circle
                                        onClick={() =>
                                            Utils.router.push(
                                                `/person/zone?id=${item.userId}`,
                                                `/person/zone/${item.userId}`
                                            )}
                                    />
                                    <div className="ml-sm text-desc">
                                        <p className="text-main text-sm">
                                            {item.niname}
                                        </p>
                                        <p className="text-sub text-xs">
                                            {Utils.date(
                                                'm.d H:i:s',
                                                item.auctionTime
                                            )}
                                        </p>
                                    </div>
                                </Flex>
                            </Flex.Item>
                            <div>
                                <p className="text-xs text-sub text-right">
                                    <span>当前价：</span>
                                    <span className="text-primary">
                                        {parseInt(item.auctionPriceTotal)}
                                        {type}
                                    </span>
                                </p>
                                <p className="text-xs text-sub text-right">
                                    <span>+</span>
                                    <span>
                                        {parseInt(item.price)}
                                        {type}
                                    </span>
                                </p>
                            </div>
                        </Flex>
                    </List.Item>
                )}
                onEndReached={$.fetchAuctionRecord}
            />
        </div>
    );
};

_Record.contextTypes = {
    $: PropTypes.object
};

export default observer(_Record);
