/**
 * const prefixCls = 'styles-13000674';
 * const images = '/static/images/src/person/_';
 * @Author: Jack
 * @Date:   2018-01-08 12:01:05
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:07:29
 * @Path btWap \src\person\_\Top.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import Styles from 'styles';

const prefixCls = 'styles-13000674';

const Top = ({ extra, className, children, ...other }) => (
    <div
        className={classNames(prefixCls, className, {
            extra: !!extra
        })}
        {...other}
    >
        <div className="wrap">{children}</div>
        {extra}

        <style jsx>{`
            .styles-13000674 {
                position: relative;
                padding: 0 ${Styles.wind} ${Styles.space};
            }
            .styles-13000674:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 0.64rem;
                background: ${Styles.color_header};
                z-index: 0;
            }
            .extra {
                background: #fff;
            }
            .wrap {
                position: relative;
                width: 100%;
                background: #fff;
                box-shadow: 0.056rem 0.056rem 0.6rem 0.06rem rgba(51, 51, 51, 0.2);
                border-radius: 0.04rem;
                z-index: 2;
            }
        `}</style>
    </div>
);

export default Top;
