/**
 * const prefixCls = 'styles-61642063';
 * const images = '/static/images/src/_/CountDown';
 * @Author: Jack
 * @Date:   2018-01-24 11:03:10
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-24 11:56:51
 * @Path btWap \src\_\CountDown\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-61642063';

export default class CountDown extends React.Component {
    static propsTypes = {
        left: PropTypes.any,
        now: PropTypes.any,
        beginTime: PropTypes.any,
        onEnd: PropTypes.func
    };

    static defaultProps = {
        beginTime: 0,
        onEnd: Function.prototype
    };

    state = {
        now: this.props.now || Utils.getTimestamp()
    };

    interval;
    componentDidMount() {
        if (Const.__CLIENT__) {
            this.interval = setInterval(() => {
                const { beginTime, onEnd } = this.props;
                const { now } = this.state;

                this.setState({
                    now: now + 1
                });

                if (now + 1 > beginTime) {
                    clearInterval(this.interval);
                    onEnd();
                }
            }, 1000);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.now) {
            this.setState({
                now: nextProps.now
            });
        }
    }

    componentWillUnmount() {
        if (Const.__CLIENT__) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { left, beginTime, className, children } = this.props;
        const { now } = this.state;

        let isWaiting,
            d = 0,
            h = 99,
            m = 59,
            s = 59;
        const _beginTime = parseInt(beginTime);

        if (now < _beginTime) {
            isWaiting = true;

            const distance = _beginTime - now;
            d = Math.floor(distance / (3600 * 24));
            h = Math.floor((distance - d * 3600 * 24) / 3600);
            m = Math.floor((distance - d * 3600 * 24 - h * 3600) / 60);
            s = Math.floor(distance - d * 3600 * 24 - h * 3600 - m * 60);
        }

        return (
            <div className={classNames(prefixCls, className)}>
                {isWaiting ? (
                    <p>
                        <span>{left}</span>
                        {!!d && <span>{d}天</span>}
                        {(!!d || !!h) && <span>{h}时</span>}
                        {(!!d || !!h || !!m) && <span>{m}分</span>}
                        <span>{s}秒</span>
                    </p>
                ) : (
                    children
                )}

                <style jsx global>{`
                    .styles-61642063 {
                    }
                `}</style>
            </div>
        );
    }
}
