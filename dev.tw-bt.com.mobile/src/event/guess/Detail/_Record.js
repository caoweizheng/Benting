/**
 * const prefixCls = 'styles-87426522';
 * const images = '/static/images/src/event/guess/Detail';
 * @Author: qizc
 * @Date:   2018-02-03 11:51:59
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-03-03 12:36:45
 * @Path btWap \src\event\guess\Detail\_Record.js
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

const prefixCls = 'styles-87426522';

const _Record = (props, { $ }) => {
    const { className, isEnd, form } = props;
    const { isMy } = $.getParams();
    const { guessType } = $.getState('fetchGuessDetail');
    const guessLogList = $.getState('guessLogList');
    const { userId } = $.getState('userInfo');

    return (
        <div className={classNames(prefixCls, className)}>
            <Header
                extra={
                    !!userId && (
                        <span
                            className={classNames(
                                'pull-right text-sm text-desc'
                            )}
                            onClick={$.switchGuessList}
                        >
                            {isMy ? '全部竞猜' : '我的竞猜'}
                        </span>
                    )
                }
            >
                <span>竞猜记录</span>
                <span className="text-sm text-sub">（已有</span>
                <span className="text-sm text-primary ml-xs mr-xs">
                    {guessLogList.list && guessLogList.list[0]
                        ? guessLogList.pageinfo.recordtotal
                        : 0}
                </span>
                <span className="text-sm text-sub">次竞猜）</span>
            </Header>
            <ListView
                data={guessLogList}
                renderRow={item => (
                    <List.Item>
                        <Flex>
                            <Flex.Item>
                                <Flex justify="between">
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
                                        <div className="ml-sm text-desc">
                                            <p className="text-main text-sm">
                                                {item.nickName}
                                            </p>
                                            <p className="text-sub text-xs">
                                                {Utils.date(
                                                    'm.d H:i:s',
                                                    item.createTime
                                                )}
                                            </p>
                                        </div>
                                    </Flex>
                                    <p className="text-sm text-sub">
                                        {item.information}斤
                                    </p>
                                </Flex>
                            </Flex.Item>
                            {!isEnd && (
                                <Button
                                    className="ml-sm"
                                    type="ghost"
                                    size="small"
                                    onClick={() => {
                                        Utils.onConfirm(
                                            `确认跟猜${item.information}斤？`,
                                            () => {
                                                form.setFieldsValue({
                                                    information:
                                                        item.information
                                                });
                                                $.onConfirm();
                                            }
                                        );
                                    }}
                                >
                                    跟猜
                                </Button>
                            )}
                        </Flex>
                    </List.Item>
                )}
                onEndReached={$.fetchGuessLogList}
            />
        </div>
    );
};

_Record.contextTypes = {
    $: PropTypes.object
};

export default observer(_Record);
