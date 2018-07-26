/**
 * const prefixCls = 'styles-61388452';
 * const images = '/static/images/src/_/Coupon';
 * @Author: Jack
 * @Date:   2018-01-06 12:55:42
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 10:04:45
 * @Path btWap \src\_\Coupon\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Button } from 'antd-mobile';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-61388452';

const Coupon = (props, { $ }) => {
    const { hd, children, ft } = props;

    return (
        <Flex className={prefixCls}>
            <Flex
                className={`${prefixCls}__hd`}
                direction="column"
                justify="center"
            >
                {hd}
            </Flex>
            <Flex.Item>
                {children}
            </Flex.Item>
            <div className="ml-sm">
                {ft}
            </div>

            <style jsx global>{`
                .styles-61388452 {
                }
                .${prefixCls} {
                    padding: 0.36rem 0.28rem;
                    margin-bottom: ${Styles.distance};
                    background: #F9F9F9;
                    border: 0.01rem solid ${Styles.color_border};
                    border-radius: 0.04rem;
                }
                .${prefixCls}:last-child {
                    margin-bottom: 0;
                }
                .${prefixCls}__hd {
                    min-width: 1.6rem;
                    min-height: 1.13rem;
                    padding: ${Styles.sm} ${Styles.wind};
                    padding-left: 0;
                    margin-right: ${Styles.sm};
                    border-right: 0.01rem solid ${Styles.color_border};
                }
            `}</style>
        </Flex>
    );
};

export default Coupon;
