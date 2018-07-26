/**
 * const prefixCls = 'styles-10498325';
 * const images = '/static/images/components/Form/Textarea';
 * @Author: Jack
 * @Date:   2018-01-03 16:04:58
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-21 16:04:41
 * @Path btWap \components\Form\Textarea\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { TextareaItem } from 'antd-mobile';

const prefixCls = 'styles-10498325';

const Textarea = props => {
    const {
        form,
        name,
        initialValue,
        option,
        className,
        children,
        ...other
    } = props;

    const formProps =
        name &&
        form.getFieldProps(name, {
            initialValue,
            ...option
        });

    return (
        <TextareaItem
            {...formProps}
            className={classNames(prefixCls, className)}
            name={name}
            rows={4}
            clear
            autoHeight
            {...other}
        />
    );
};

export default Textarea;
