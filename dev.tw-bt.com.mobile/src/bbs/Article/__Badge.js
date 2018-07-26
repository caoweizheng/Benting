/**
 * const prefixCls = 'styles-43055403';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2018-05-29 10:11:15
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-29 11:38:25
 * @Path btWap \src\bbs\Article\__Badge.js
 */
'use strict';

import React from 'react';
import Styles from 'styles';

const prefixCls = 'styles-43055403';

const __Badge = ({ children }) => (
    <span>
        {children}

        <style jsx>{`
            .styles-43055403 {
            }
            span {
                display: inline-block;
                width: 0.28rem;
                height: 0.28rem;
                color: #fff;
                font-size: ${Styles.font_xs};
                line-height: 0.28rem;
                text-align: center;
                background: ${Styles.color_primary};
            }
        `}</style>
    </span>
);

export default __Badge;
