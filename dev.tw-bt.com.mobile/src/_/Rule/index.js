/**
 * const prefixCls = 'styles-18035825';
 * const images = '/static/images/src/_/Rule';
 * @Author: Jack
 * @Date:   2017-12-06 12:09:13
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-22 09:43:43
 * @Path nidosport@next \src\_\Rule\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Flex, Icon } from 'antd-mobile';
import Header from '../Header';
import Styles from 'styles';

const prefixCls = 'styles-18035825';

export default class Rule extends React.Component {
    state = {
        expand: false
    };

    componentDidMount() {
        const { open = false } = this.props;
        if (open) {
            this.setState({
                expand: true
            });
        }
    }

    render() {
        const {
            icon,
            title,
            content = [],
            showNum = false,
            showEnd = true,
            check = true,
            className
        } = this.props;
        const { expand } = this.state;

        return (
            <div className={classNames(prefixCls, className)}>
                <Header
                    icon={icon}
                    extra={
                        <Icon
                            className="text-main"
                            type={expand ? 'up' : 'down'}
                            onClick={() =>
                                this.setState({
                                    expand: !expand
                                })}
                        />
                    }
                >
                    {title}
                </Header>
                {expand && (
                    <div className="content text-desc user-select">
                        {content.map((item, index) => {
                            let _item = item;
                            if (typeof _item === 'string') {
                                //过滤并矫正不合法的输入
                                if (check) {
                                    _item = _item
                                        .replace(/ /g, '')
                                        .replace(/,/g, '，')
                                        .replace(/\./g, '。')
                                        .replace(/\(/g, '（')
                                        .replace(/\)/g, '）');
                                }

                                if (
                                    showEnd &&
                                    _item[_item.length - 1] !== '。'
                                ) {
                                    _item = `${_item}。`;
                                }
                            }

                            if (!showNum) {
                                return (
                                    <div
                                        key={index}
                                        className={`${prefixCls}__line text-sm`}
                                    >
                                        {_item}
                                    </div>
                                );
                            }

                            return (
                                <Flex
                                    key={index}
                                    className={`${prefixCls}__line text-sm`}
                                    align="start"
                                >
                                    <span>{index + 1}.</span>
                                    <Flex.Item className="ml-sm">
                                        {_item}
                                    </Flex.Item>
                                </Flex>
                            );
                        })}
                    </div>
                )}

                <style jsx global>{`
                    .styles-18035825 {
                    }
                    .${prefixCls}__line {
                        margin: 0.16rem 0;
                        line-height: 2;
                    }
                `}</style>
                <style jsx>{`
                    .styles-18035825 {
                    }
                    .content {
                        padding: ${Styles.sm} ${Styles.wind};
                        background-color: #fff;
                    }
                `}</style>
            </div>
        );
    }
}
