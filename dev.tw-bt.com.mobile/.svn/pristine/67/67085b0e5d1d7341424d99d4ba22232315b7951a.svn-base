/**
 * const prefixCls = 'styles-83085523';
 * const images = '/static/images/components/Form/Button';
 * @Author: Jack
 * @Date:   2017-12-28 17:53:54
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-28 17:55:22
 * @Path btWap \components\Form\Button\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Button } from 'antd-mobile';
import Styles from 'styles';

const prefixCls = 'styles-83085523';

const _Button = props => {
    const { className, children, ...other } = props;

    return (
        <div className={classNames(prefixCls, 'mt-lg', className)}>
            <Button type="primary" {...other}>
                {children}
            </Button>

            <style jsx>{`
                .styles-83085523 {
                    padding: 0 ${Styles.wind};
                }
            `}</style>
        </div>
    );
};

export default _Button;
