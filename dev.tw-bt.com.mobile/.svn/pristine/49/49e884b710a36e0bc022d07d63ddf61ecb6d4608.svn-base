/**
 * const prefixCls = 'styles-33689899';
 * const images = '/static/images/src/_/Tag';
 * @Author: Jack
 * @Date:   2018-01-30 11:48:24
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:07:29
 * @Path btWap \src\_\Tag\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import Styles from 'styles';

const prefixCls = 'styles-33689899';

const Tag = props => {
    const { type = 'bt', className, children, ...other } = props;

    let backgroundImage;
    switch (type) {
        case 'bt':
            backgroundImage = 'linear-gradient(to right, #4d6eeb, #9855de)';
            break;

        case 'nidosport':
            backgroundImage = 'linear-gradient(to right, #41C69F, #23C8D4)';
            break;

        default:
            break;
    }

    return (
        <div
            className={classNames(prefixCls, className)}
            {...other}
        >
            {children}

            <style jsx>{`
                .styles-33689899 {
                    display: inline-block;
                    padding: ${Styles.xs} ${Styles.sm};
                    color: #fff;
                    line-height: 1;
                    font-size: ${Styles.font_xxs};
                    background-image: ${backgroundImage};
                    border-radius: 0.04rem;
                }
            `}</style>
        </div>
    );
};

export default Tag;
