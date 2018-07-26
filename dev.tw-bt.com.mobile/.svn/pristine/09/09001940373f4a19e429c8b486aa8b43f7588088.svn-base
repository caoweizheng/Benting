/**
 * const prefixCls = 'styles-92581625';
 * @Author: qizc
 * @Date:   2017-12-08 17:00:16
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-21 15:04:07
 * @Path btWeb \src\video\_\Tag\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import Styles from 'styles';

const prefixCls = 'styles-92581625';

const Tag = props => {
    const { type, text = 'tag', className, style } = props;

    return (
        <span
            className={classNames(prefixCls, className, {
                [`${prefixCls}_gf`]: type === 'gf'
            })}
            style={style}
        >
            {type === 'gf' ? '官方' : text}

            <style jsx>{`
                .styles-92581625 {
                    display: inline-block;
                    color: #fff;
                    padding: 0.06rem 0.08rem;
                    background: rgba(0, 0, 0, 0.5);
                }
                .styles-92581625_gf {
                    background: #f94040;
                    vertical-align: middle;
                }
            `}</style>
        </span>
    );
};

export default Tag;
