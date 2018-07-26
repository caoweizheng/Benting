/**
 * const prefixCls = 'styles-30894691';
 * const images = '/static/images/components/Icon';
 * @Author: Jack
 * @Date:   2018-01-03 16:04:58
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-04 10:47:20
 * @Path btWap \components\Icon\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';

const prefixCls = 'c-icon';

const Icon = props => {
    const { type, size = 'sm', className, ...otherProps } = props;

    return (
        <i
            className={classNames(
                'iconfont',
                `iconfont-${size}`,
                `icon-${type}`,
                className
            )}
            {...otherProps}
        >
            <style jsx>{`
                .c-icon {
                }
                .iconfont {
                    display: inline-block;
                    font-style: normal;
                    line-height: 1;
                    text-align: center;
                    text-rendering: optimizeLegibility;
                    text-transform: none;
                    vertical-align: baseline;
                    -webkit-font-smoothing: antialiased;
                }
                .iconfont-sm {
                    font-size: 0.44rem;
                }
            `}</style>
        </i>
    );
};

export default Icon;

/*const Icon = ({ type, className, size = 'md', ...restProps }) => (
    <svg
        className={classNames(
            'am-icon',
            `am-icon-${type.substr(1)}`,
            `am-icon-${size}`,
            className
        )}
        {...restProps}
    >
        <use xlinkHref={type} />
    </svg>
);
*/
