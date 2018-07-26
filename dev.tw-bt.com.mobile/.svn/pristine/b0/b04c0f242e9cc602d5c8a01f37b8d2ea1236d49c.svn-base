/**
 * const prefixCls = 'styles-56890169';
 * const images = '/static/images/src/_/RewardList';
 * @Author: qizc
 * @Date:   2018-02-25 16:41:03
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-29 15:05:17
 * @Path btWap \src\_\RewardList\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, Button } from 'antd-mobile';
import { Img } from 'components';
import { AuthorInfo, Header } from 'src/_';
import Styles from 'styles';

const prefixCls = 'styles-56890169';

const RewardList = props => {
    const { className, rewardList, id, type, isList = false } = props;

    if (isList) {
        return (
            <div className={classNames(prefixCls, className)}>
                {rewardList.list[0] &&
                    rewardList.list.map((item, index) => {
                        return (
                            <Flex key={index} className="text-sm mt-md">
                                <AuthorInfo
                                    userId={item.userId}
                                    img={item.faceImg}
                                    name={item.userName.substr(0, 6)}
                                    date={item.createTime}
                                />
                                <Flex.Item>
                                    <Flex justify="end">
                                        <img
                                            className="img-reward"
                                            src={Utils.getImgUrl(item.goodsImg)}
                                        />
                                        <div className="text-primary text-clamp-1 ml-xs">
                                            <span>打赏</span>
                                            <span className="text-primary">
                                                {item.title}
                                            </span>
                                            <span>x1</span>
                                        </div>
                                    </Flex>
                                </Flex.Item>
                            </Flex>
                        );
                    })}
                <Button
                    className="mt-md"
                    type="ghost"
                    size="small"
                    onClick={() =>
                        Utils.router.push(
                            `/rewardrank?id=${id}&type=${type}`,
                            `/rewardrank/${id}/${type}`
                        )}
                >
                    查看全部打赏
                </Button>

                <style jsx global>{`
                    .styles-56890169 {
                        background: #fff;
                    }
                `}</style>
                <style jsx>{`
                    .styles-56890169 {
                    }
                    .img-reward {
                        height: 0.5rem;
                        width: auto;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className={classNames(prefixCls, className)}>
            <Header
                extra={
                    <span
                        className="text-sub text-sm"
                        onClick={() =>
                            Utils.router.push(
                                `/rewardrank?id=${id}&type=${type}`,
                                `/rewardrank/${id}/${type}`
                            )}
                    >
                        更多
                    </span>
                }
            >
                打赏榜单
            </Header>
            <div className="wrap">
                {rewardList.list[0] &&
                    rewardList.list.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="item text-center text-sm"
                            >
                                <img
                                    className="img-reward"
                                    src={Utils.getImgUrl(item.goodsImg)}
                                />
                                <div className="text-primary text-clamp-1 mt-xs">
                                    {item.title}
                                </div>
                                <div className="text-clamp-1 text-main mt-xs">
                                    <span>{item.userName.substr(0, 6)}</span>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <style jsx global>{`
                .styles-56890169 {
                    background: #fff;
                }
            `}</style>
            <style jsx>{`
                .styles-56890169 {
                }
                .wrap {
                    padding: ${Styles.space} ${Styles.wind};
                    background: #fff;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    white-space: nowrap;
                }
                .item {
                    display: inline-block;
                    padding-right: ${Styles.sm};
                    overflow: hidden;
                }
                .item:last-child {
                    padding-right: 0;
                }
                .img-reward {
                    height: 0.98rem;
                    width: auto;
                    vertical-align: top;
                }
            `}</style>
        </div>
    );
};

export default observer(RewardList);
