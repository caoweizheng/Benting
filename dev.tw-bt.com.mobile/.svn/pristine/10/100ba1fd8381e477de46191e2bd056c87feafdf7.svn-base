/**
 * const prefixCls = 'styles-12788843';
 * const images = '/static/images/src/person/event/myFloor/Index';
 * @Author: qizc
 * @Date:   2018-01-18 16:31:21
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\event\myFloor\Index\_Item.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List, Button } from 'antd-mobile';
import { Img } from 'components';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-12788843';

const _Item = props => {
    const {
        postId,
        orderState = 0,
        state = 0,
        isWin = 0,
        floor,
        allFloor,
        imgId,
        threadId,
        repayPrice,
        title
    } = props;
    const _stateText = state == 0 ? '已结束' : '等待开奖';

    return (
        <List.Item className={prefixCls} wrap={true}>
            <Flex>
                <Img
                    src={imgId}
                    size="2rem"
                    onClick={() =>
                        Utils.router.push(
                            `/event/floor/detail?id=${threadId}`,
                            `/event/floor/detail/${threadId}`
                        )}
                />
                <Flex.Item>
                    <div className="text-title title text-md">
                        <p
                            className="text-clamp-2"
                            onClick={() =>
                                Utils.router.push(
                                    `/event/floor/detail?id=${threadId}`,
                                    `/event/floor/detail/${threadId}`
                                )}
                        >
                            {title}
                        </p>
                    </div>
                    <p className="text-sm">
                        <span className="text-sub">消耗金币：</span>
                        <span className="text-primary">{repayPrice || 1} 枚</span>
                    </p>
                    <p className="text-sm">
                        <span className="text-sub">所在楼层：</span>
                        <span className="text-primary"># {floor}</span>
                    </p>
                </Flex.Item>
            </Flex>
            <Flex justify="between" className="text-sm mt-d footer">
                <div>{_stateText}</div>
                {isWin == 0 && (
                    <div>
                        <span className="text-sub">
                            {state == 0 ? '总楼层数：' : '当前参与总数：'}
                        </span>
                        <span className="text-primary">{allFloor}</span>
                    </div>
                )}
                {isWin == 1 && (
                    <Button
                        inline
                        size="small"
                        type="primary"
                        onClick={() =>
                            Utils.router.push(
                                `/person/event/my_floor/get_prize?id=${postId}`,
                                `/person/event/my_floor/get_prize/${postId}`
                            )}
                    >
                        {orderState > 0 ? '已领取' : '领取奖品'}
                    </Button>
                )}
            </Flex>
            <style jsx global>{`
                .${prefixCls} .footer {
                    padding-top: ${Styles.sm};
                    border-top: 0.01rem solid ${Styles.color_border};
                }
            `}</style>
            <style jsx>{`
                .title {
                    height: 1.16rem;
                }
            `}</style>
        </List.Item>
    );
};

export default observer(_Item);
