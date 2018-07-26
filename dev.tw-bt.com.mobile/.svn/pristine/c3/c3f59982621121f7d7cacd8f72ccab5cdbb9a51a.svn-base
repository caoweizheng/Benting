/**
 * const prefixCls = 'styles-17009730';
 * const images = '/static/images/src/index/Chat';
 * @Author: Jack
 * @Date:   2018-05-03 11:51:55
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-24 10:21:07
 * @Path btWap \src\index\Chat\_ItemMe.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import __Content from './__Content';

const prefixCls = 'styles-17009730';

const _ItemMe = (props, { $ }) => {
    const { userId, faceImg, niname } = props;

    return (
        <Flex className={prefixCls} align="start" justify="end">
            <Flex
                className="mr-sm"
                direction="column"
                align="end"
                justify="start"
            >
                <p className="mt-xs text-sm text-sub">{niname}</p>
                <__Content className="text-void mt-sm" isMe {...props} />
            </Flex>
            <div className="img">
                <Img
                    src={faceImg}
                    size="0.8rem"
                    circle
                    onClick={() =>
                        Utils.router.push(
                            `/person/zone?id=${userId}`,
                            `/person/zone/${userId}`
                        )}
                />
            </div>

            <style jsx global>{`
                .styles-17009730 {
                    padding-left: 1.24rem;
                    margin-top: 0.24rem;
                }
                .${prefixCls} .am-flexbox {
                    overflow-y: initial;
                }
            `}</style>
            <style jsx>{`
                .styles-17009730 {
                }
                .img {
                    width: 0.8rem;
                }
            `}</style>
        </Flex>
    );
};

_ItemMe.contextTypes = {
    $: PropTypes.object
};

export default observer(_ItemMe);
