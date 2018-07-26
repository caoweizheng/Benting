/**
 * const prefixCls = 'styles-11095819';
 * const images = '/static/images/src/_/Header';
 * @Author: Jack
 * @Date:   2018-01-03 16:04:59
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 11:05:08
 * @Path btWap \src\_\Header\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import Styles from 'styles';

const prefixCls = 'styles-11095819';

const Header = props => {
    const { icon, extra, className, children, ...other } = props;

    return (
        <Flex className={classNames(prefixCls, className)} {...other}>
            {icon}
            <Flex.Item
                className={classNames('text-main', {
                    'ml-sm': !!icon
                })}
            >
                {children}
            </Flex.Item>
            {extra}

            <style jsx global>{`
                .styles-11095819 {
                }
                .${prefixCls} {
                    position: relative;
                    padding: 0.28rem ${Styles.wind};
                    background-color: #fff;
                    border-left: 0.06rem solid ${Styles.color_main};
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
                .${prefixCls} img {
                    display: inline-block;
                    height: 0.36rem;
                    vertical-align: top;
                }
            `}</style>
        </Flex>
    );
};

export default Header;
