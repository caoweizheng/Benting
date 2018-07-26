/**
 * const prefixCls = 'styles-03056254';
 * const images = '/static/images/components/Dot';
 * @Author: Jack
 * @Date:   2017-05-26 15:03:22
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-08 15:18:24
 * @Path btWap \components\Dot\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import Styles from 'styles';

const prefixCls = 'c-dot';

const Dot = props => {
    const { className, ...other } = props;

    return (
        <div className={classNames(prefixCls, className)} {...other}>
            <style jsx global>{`
                .c-dot {
                    position: absolute;
                    top: ${Styles.sm};
                    right: ${Styles.sm};
                    width: ${Styles.sm};
                    height: ${Styles.sm};
                    background-color: ${Styles.color_info_danger};
                    border-radius: 50%;
                    opacity: 0.8;
                }
            `}</style>
        </div>
    );
};

export default Dot;
