/**
 * const prefixCls = 'styles-43468506';
 * const images = '/static/images/src/shop/miaosha/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 14:18:55
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 10:04:44
 * @Path btWap \src\shop\miaosha\Detail\_Detail.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, Button } from 'antd-mobile';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-43468506';

const _Detail = (props, { $ }) => {
    const { className } = props;
    const { refreshing } = $.getState();
    const auctionDetail = $.getState('auctionDetail');

    let time, left, tag, tagType, desc, isEnd;
    switch (parseInt(auctionDetail.showState)) {
        case 2:
            time = auctionDetail.endTime;
            left = '剩余：';
            tag = '竞拍中';
            desc = '当前价：';
            tagType = 'primary';
            break;

        case 3:
            tag = '已结束';
            desc = '最终价：';
            tagType = 'default';
            isEnd = true;
            break;

        default:
            time = auctionDetail.beginTime;
            left = '倒数：';
            tag = '预告中';
            desc = '起拍价：';
            tagType = 'main';
            break;
    }

    let type;
    if (auctionDetail.auctionType == 1) {
        type = '金币';
    } else {
        if (auctionDetail.appType == 1) {
            type = '本汀积分';
        } else {
            type = '灵动积分';
        }
    }

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="content">
                <p className="p-title">{auctionDetail.title}</p>
                <Flex className="mt-md">
                    <Flex.Item>
                        <p className="text-bold">
                            <span>{desc}</span>
                            {auctionDetail._loaded && (
                                <span className="text-primary ml-xs">
                                    {parseInt(auctionDetail.currentPrice || 0)}
                                    {type}
                                </span>
                            )}
                        </p>
                        <p className="text-xs text-sub mt-xs">
                            <span>加价幅度：</span>
                            {auctionDetail._loaded && (
                                <span>
                                    {parseInt(auctionDetail.addPrice || 0)}
                                    {type}
                                </span>
                            )}
                        </p>
                    </Flex.Item>
                    {!isEnd && (
                        <Button
                            type="primary"
                            inline
                            size="small"
                            loading={refreshing}
                            disabled={refreshing}
                            onClick={$.refresh}
                        >
                            {refreshing ? '刷新中' : '刷新信息'}
                        </Button>
                    )}
                </Flex>
                <p className="text-xs text-sub mt-md">
                    <span>已参与</span>
                    <span className="text-primary ml-xs mr-xs">
                        {auctionDetail.currentNum || 0}
                    </span>
                    <span>人次</span>
                    {!!auctionDetail.endTime && (
                        <span className="pull-right">
                            结束时间：{Utils.date(
                                'm月d日 H:i:s',
                                auctionDetail.endTime
                            )}
                        </span>
                    )}
                </p>
            </div>
            {props.auctionType == 1 && (
                <div className="content">
                    <p className="text-clamp-2 text-sub text-xs">
                        本活动仅支持金币支付，请提前准备好金币，以免错失机会。
                    </p>
                </div>
            )}

            <style jsx>{`
                .styles-43468506 {
                    background: #fff;
                    border-top: 0.01rem solid ${Styles.color_border};
                }
                .content {
                    padding: ${Styles.wind};
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
                .p-title {
                    min-height: 0.36rem;
                }
            `}</style>
        </div>
    );
};

_Detail.contextTypes = {
    $: PropTypes.object
};

export default observer(_Detail);
