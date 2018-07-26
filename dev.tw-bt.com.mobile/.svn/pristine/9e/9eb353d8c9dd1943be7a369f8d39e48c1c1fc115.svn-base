/**
 * const prefixCls = 'styles-12043216';
 * const images = '/static/images/components/CountDown';
 * @Author: Jack
 * @Date:   2018-01-23 09:42:08
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-25 18:12:30
 * @Path btWap \components\CountDown\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'c-count-down';

export default class CountDown extends React.Component {
    static propsTypes = {
        now: PropTypes.any,
        beginTime: PropTypes.any
    };

    static defaultProps = {
        beginTime: 0
    };

    state = {
        now: this.props.now || Utils.getTimestamp()
    };

    interval;
    componentDidMount() {
        if (!Const.__SERVER__) {
            this.interval = setInterval(() => {
                const { now } = this.state;

                this.setState({
                    now: now + 1
                });
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
        if (!Const.__SERVER__) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { left, beginTime, className, children, ...other } = this.props;
        const { now } = this.state;

        if (!beginTime) return null;

        let isWaiting,
            h = 99,
            m = 59,
            s = 59;
        const _beginTime = parseInt(beginTime);

        if (now < _beginTime) {
            isWaiting = true;

            const distance = _beginTime - now;
            h = Math.floor(distance / 3600);
            m = Math.floor((distance - h * 3600) / 60);
            s = Math.floor(distance - h * 3600 - m * 60);
        }

        if (h < 10) h = `0${h}`;
        if (m < 10) m = `0${m}`;
        if (s < 10) s = `0${s}`;

        if (isWaiting) {
            return (
                <Flex className={classNames(prefixCls, className)} {...other}>
                    {left}
                    <span className="item">{h}</span>
                    <span>:</span>
                    <span className="item">{m}</span>
                    <span>:</span>
                    <span className="item">{s}</span>

                    <style jsx>{`
                        .c-count-down {
                        }
                        .item {
                            padding: ${Styles.xs};
                            color: #fff;
                            font-size: ${Styles.font_xxs};
                            background: #3c4043;
                            border-radius: 0.04rem;
                        }
                    `}</style>
                </Flex>
            );
        } else {
            return (
                <div className={classNames(prefixCls, className)} {...other}>
                    {children}
                </div>
            );
        }
    }
}
