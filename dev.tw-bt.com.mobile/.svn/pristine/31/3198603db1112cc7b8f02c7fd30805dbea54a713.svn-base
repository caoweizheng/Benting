/**
 * const prefixCls = 'styles-12429415';
 * const images = '/static/images/src/person/event/_';
 * @Author: qizc
 * @Date:   2018-01-24 18:10:00
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\event\_\Info.js
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

const prefixCls = 'styles-12429415';

const Info = (props, { $ }) => {
    const { className, orderinfo = {} } = props;
    const { item = {}, orderId, orderType, state } = orderinfo || {};

    return (
        <div className={classNames(prefixCls, className)}>
            <List>
                <List.Item>
                    <Flex>
                        <Img src={item.imgId} size="2rem" />
                        <Flex.Item>
                            <div className="text-title title text-clamp-2 text-md">
                                {item.title}
                            </div>
                            <p className="text-sm">
                                <span className="text-sub">单价：</span>
                                {orderType == 8 ? (
                                    <span className="text-primary">
                                        {item.price}金币
                                    </span>
                                ) : (
                                    <span className="text-primary">
                                        ￥{item.price}
                                    </span>
                                )}
                            </p>
                            <p className="text-sm">
                                <span className="text-sub">数量：</span>
                                <span className="text-primary">
                                    {item.goodsNum}
                                </span>
                            </p>
                        </Flex.Item>
                    </Flex>
                </List.Item>
            </List>
            <style jsx>{`
                .title {
                    height: 1.2rem;
                }
            `}</style>
        </div>
    );
};

Info.contextTypes = {
    $: PropTypes.object
};

export default observer(Info);
