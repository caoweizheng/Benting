/**
 * const prefixCls = 'styles-14517113';
 * const images = '/static/images/src/index/Chat';
 * @Author: Jack
 * @Date:   2018-05-03 11:47:31
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-24 11:05:01
 * @Path btWap \src\index\Chat\_Item.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import __Content from './__Content';
import Utils from 'utils';

const prefixCls = 'styles-14517113';

const _Item = (props, { $ }) => {
    const { userId, faceImg, niname } = props;

    return (
        <Flex className={prefixCls} align="start">
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
            <Flex className="ml-sm" direction="column" align="start">
                <p className="mt-xs text-sm text-sub">{niname}</p>
                <__Content className="mt-sm" {...props} />
            </Flex>

            <style jsx global>{`
                .styles-14517113 {
                    padding-right: 1.24rem;
                    margin-top: 0.24rem;
                }
                .${prefixCls} .am-flexbox {
                    overflow-y: initial;
                }
            `}</style>
            <style jsx>{`
                .styles-14517113 {
                }
                .img {
                    width: 0.8rem;
                }
            `}</style>
        </Flex>
    );
};

_Item.contextTypes = {
    $: PropTypes.object
};

export default observer(_Item);
