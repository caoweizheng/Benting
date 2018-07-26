/**
 * const prefixCls = 'styles-66512790';
 * const images = '/static/images/src/person/zone/Index';
 * @Author: Jack
 * @Date:   2018-05-16 09:49:05
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-16 10:03:48
 * @Path btWap \src\person\zone\Index\_Fixed.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-66512790';

const _Fixed = (props, { $ }) => {
    const { className } = props;
    const { userId, prefix } = $.getState('personInfo');

    let isFollow;
    let btnText;
    switch (parseInt(prefix)) {
        case 1:
            isFollow = true;
            btnText = '已关注';
            break;

        case 2:
            isFollow = true;
            btnText = '互相关注';
            break;

        default:
            isFollow = false;
            btnText = '关注';
            break;
    }

    return (
        <Flex className={classNames(prefixCls, className)} justify="center">
            <Flex.Item style={{ flex: 2 }} onClick={$.toggleFollow}>
                <Flex
                    className={classNames({
                        [`${prefixCls}__btn-ghost`]: !isFollow,
                        [`${prefixCls}__btn-ghost-disabled`]: isFollow
                    })}
                    justify="center"
                >
                    {btnText}
                </Flex>
            </Flex.Item>
            <Flex.Item
                style={{ marginLeft: 0 }}
                onClick={() => {
                    if (isFollow) {
                        Utils.router.push(
                            `/chat?id=${userId}`,
                            `/chat/${userId}`
                        );
                    } else {
                        Utils.light('请先关注再私聊吧');
                    }
                }}
            >
                <Flex
                    className={classNames({
                        [`${prefixCls}__btn-main`]: isFollow,
                        [`${prefixCls}__btn-disabled`]: !isFollow
                    })}
                    justify="center"
                >
                    私聊
                </Flex>
            </Flex.Item>

            <style jsx global>{`
                .styles-66512790 {
                    position: fixed;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin-bottom: -0.01rem;
                    border-top: 0.01rem solid ${Styles.color_border};
                    transform: translateZ(0);
                }
                .${prefixCls}__btn-ghost {
                    height: 1rem;
                    color: ${Styles.color_main};
                    background: #fff;
                    transition: all 0.3s;
                }
                .${prefixCls}__btn-ghost-disabled {
                    height: 1rem;
                    background: #fff;
                    transition: all 0.3s;
                }
                .${prefixCls}__btn-disabled {
                    height: 1rem;
                    color: #bbb;
                    background-color: #ddd;
                    transition: all 0.3s;
                }
                .${prefixCls}__btn-main {
                    height: 1rem;
                    color: #fff;
                    background-color: ${Styles.color_main};
                    transition: all 0.3s;
                }
            `}</style>
        </Flex>
    );
};

_Fixed.contextTypes = {
    $: PropTypes.object
};

export default observer(_Fixed);
