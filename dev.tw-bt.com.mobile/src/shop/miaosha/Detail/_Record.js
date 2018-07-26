/**
 * const prefixCls = 'styles-77472158';
 * const images = '/static/images/src/shop/miaosha/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 14:35:45
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-04 09:41:49
 * @Path btWap \src\shop\miaosha\Detail\_Record.js
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

const prefixCls = 'styles-77472158';

const _Record = (props, { $ }) => {
    const { className } = props;
    const miaoshaRecord = $.getState('miaoshaRecord');

    return (
        <div className={classNames(prefixCls, className)}>
            <Header>本期参与记录</Header>
            <ListView
                data={miaoshaRecord}
                renderRow={item => (
                    <List.Item>
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
                            <Flex.Item className="ml-sm text-desc">
                                <p>
                                    <span className="text-main text-sm">
                                        {item.niname}
                                    </span>
                                </p>
                                <p className="text-xs text-sub">
                                    {Utils.date('m.d H:i:s', item.createTime)}
                                </p>
                            </Flex.Item>
                            <p className="text-sm ml-sm">成功秒杀了宝贝！</p>
                        </Flex>
                    </List.Item>
                )}
                onEndReached={$.fetchMiaoshaRecord}
            />
        </div>
    );
};

_Record.contextTypes = {
    $: PropTypes.object
};

export default observer(_Record);
