/**
 * const prefixCls = 'styles-97534186';
 * const images = '/static/images/components/RichEditor';
 * @Author: Jack
 * @Date:   2017-12-26 14:35:33
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 10:05:14
 * @Path btWap \components\RichEditor\__BtnControl.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import Styles from 'styles';

const prefixCls = 'styles-17070707';

const __BtnControl = props => {
    const { label, active, color, className, ...other } = props;

    if (color) {
        return (
            <Flex
                className={classNames(prefixCls, className, {
                    [`${prefixCls}_active`]: active
                })}
                justify="center"
                {...other}
            >
                <div
                    className="color-badge"
                    style={{ backgroundColor: color }}
                />
            </Flex>
        );
    }

    return (
        <Flex
            className={classNames(prefixCls, className, {
                [`${prefixCls}_active`]: active
            })}
            justify="center"
            {...other}
        >
            {label}

            <style jsx global>{`
                .styles-17070707 {
                }
                .${prefixCls} {
                    vertical-align: top;
                    position: relative;
                    width: 0.6rem;
                    height: 0.6rem;
                    color: #9fadc7;
                    cursor: pointer;
                }
                .${prefixCls} .am-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .${prefixCls} img {
                    width: 100%;
                    height: 100%;
                }
                .${prefixCls}_active {
                    background-color: #DDF8F3;
                    outline: 0.01rem solid #47CCA5;
                    opacity: 1 !important;
                }
                .color-badge {
                    width: 0.32rem;
                    height: 0.32rem;
                    opacity: 0.64;
                }
            `}</style>
        </Flex>
    );
};

export default __BtnControl;
