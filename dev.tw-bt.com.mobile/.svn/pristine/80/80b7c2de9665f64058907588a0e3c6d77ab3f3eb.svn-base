/**
 * const prefixCls = 'styles-27748893';
 * const images = '/static/images/src/shop/miaosha/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 13:57:21
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 12:32:50
 * @Path btWap \src\shop\miaosha\Detail\_Info.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import CountDown from 'src/_/CountDown';
import Styles from 'styles';

const prefixCls = 'styles-27748893';

const _Info = (props, { $ }) => {
    const { className } = props;
    const auctionDetail = $.getState('auctionDetail');

    let time, left, tag, tagType, desc;
    switch (parseInt(auctionDetail.showState)) {
        case 1:
            time = auctionDetail.beginTime;
            left = '倒数：';
            tag = '预告中';
            desc = '起拍价：';
            tagType = 'main';
            break;

        case 2:
            time = auctionDetail.endTime;
            left = '剩余：';
            tag = '竞拍中';
            desc = '当前价：';
            tagType = 'primary';
            break;

        case 3:
            tag = '已结束';
            tagType = 'default';
            desc = '最终价：';
            break;

        default:
            break;
    }

    return (
        <div className={classNames(prefixCls, className)}>
            {auctionDetail.showState == 1 && (
                <Flex>
                    <p className={`tag tag-${tagType}`}>{tag}</p>
                    <Flex.Item className={`${prefixCls}__desc`}>
                        开始时间：{Utils.date('m月d日 H:i:s', auctionDetail.beginTime)}
                    </Flex.Item>
                </Flex>
            )}

            {auctionDetail.showState == 2 && (
                <Flex>
                    <p className={`tag tag-${tagType}`}>{tag}</p>
                    <Flex.Item className={`${prefixCls}__desc`}>
                        <CountDown
                            left={left}
                            now={auctionDetail.nowTime}
                            beginTime={time}
                            onEnd={() => {
                                setTimeout(() => {
                                    $.fetchAuctionDetail();
                                    $.fetchAuctionRecord(true);
                                }, 1000);
                            }}
                        />
                    </Flex.Item>
                </Flex>
            )}

            {auctionDetail.showState == 3 && (
                <p className={`${prefixCls}__desc`}>{tag}</p>
            )}

            <style jsx global>{`
                .styles-27748893 {
                    color: #fff;
                    background: rgba(0, 0, 0, 0.5);
                }
                .${prefixCls}__desc {
                    padding: 0.24rem 0.36rem;
                    text-align: center;
                }
            `}</style>
            <style jsx>{`
                .styles-27748893 {
                }
                .tag {
                    padding: 0.24rem 0.36rem;
                }
                .tag-main {
                    color: #fff;
                    background: ${Styles.color_main};
                }
                .tag-primary {
                    color: #fff;
                    background: ${Styles.color_primary};
                }
                .tag-default {
                    color: #fff;
                    background: ${Styles.color_bg};
                }
            `}</style>
        </div>
    );
};

_Info.contextTypes = {
    $: PropTypes.object
};

export default observer(_Info);
