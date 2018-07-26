/**
 * const prefixCls = 'styles-10778770';
 * const images = '/static/images/components/Tag';
 * @Author: Jack
 * @Date:   2017-12-27 18:00:28
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-25 16:15:24
 * @Path btWap \components\Tag\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import Styles from 'styles';

const prefixCls = 'c-tag';

const Tag = props => {
    const { className, children, ...other } = props;

    return (
        <div className={classNames(prefixCls, className)} {...other}>
            {children}

            <style jsx global>{`
                .c-tag {
                }
                .${prefixCls} {
                    display: inline-block;
                    padding: 0.08rem 0.12rem;
                    vertical-align: top;
                    font-size: 0.2rem;
                    line-height: 1;
                    letter-spacing: 0.04rem;
                    color: #fff;
                    background: ${Styles.color_main};
                    border-radius: 0.02rem;
                }
            `}</style>
        </div>
    );
};

export default Tag;
