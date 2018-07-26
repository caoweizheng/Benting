/**
 * const prefixCls = 'styles-14627069';
 * const images = '/static/images/src/_/LikeList';
 * @Author: Jack
 * @Date:   2018-04-04 14:36:21
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-04-04 15:50:21
 * @Path btWap \src\_\LikeList\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Flex, Icon } from 'antd-mobile';
import Styles from 'styles';

const prefixCls = 'styles-14627069';

export default class LikeList extends React.Component {
    state = {
        open: false
    };

    render() {
        const { data = [], className } = this.props;
        const { open } = this.state;

        if (!data.length) return null;

        return (
            <Flex className={classNames(prefixCls, className)}>
                <Flex.Item>
                    <Flex wrap="wrap">
                        <img src={`${Const.__IMAGES__}/praise.png`} />
                        {data
                            .filter((item, index) => open || index < 9)
                            .map((item, index) => (
                                <p key={index} className="text-sm">
                                    <span
                                        className="p-name text-main"
                                        onClick={e => {
                                            e.stopPropagation();
                                            Utils.router.push(
                                                `/person/zone?id=${item.userId}`,
                                                `/person/zone/${item.userId}`
                                            );
                                        }}
                                    >
                                        {item.niname}
                                    </span>
                                    {index !== data.length - 1 && (
                                        <span className="text-sub">,</span>
                                    )}
                                </p>
                            ))}
                    </Flex>
                </Flex.Item>
                {!open &&
                    data.length > 9 && (
                        <div
                            className="btn-open"
                            onClick={e => {
                                e.stopPropagation();
                                this.setState({
                                    open: !open
                                });
                            }}
                        >
                            <Icon
                                className="text-sub"
                                type={open ? 'up' : 'down'}
                            />
                        </div>
                    )}

                <style jsx global>{`
                    .styles-14627069 {
                        position: relative;
                        padding: ${Styles.xs};
                        word-break: break-all;
                        background: ${Styles.color_bg};
                        border-radius: 0.04rem;
                    }
                `}</style>
                <style jsx>{`
                    .styles-14627069 {
                    }
                    p {
                        display: inline-block;
                    }
                    .p-name {
                        padding: 0 ${Styles.xs};
                        border-radius: 0;
                    }
                    .btn-open {
                        padding: 0 ${Styles.sm};
                        height: 0.44rem;
                    }
                `}</style>
            </Flex>
        );
    }
}
