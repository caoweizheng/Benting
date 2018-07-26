/**
 * const prefixCls = 'styles-92587420';
 * const images = '/static/images/components/Form/DatePicker';
 * @Author: Jack
 * @Date:   2018-01-10 17:40:20
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-16 12:13:09
 * @Path btWap \components\Form\DatePicker\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { DatePicker, List } from 'antd-mobile';
import _utils from '../_utils';
import Const from 'const';
import Utils from 'utils';

const prefixCls = 'styles-92587420';

const _DatePicker = props => {
    let {
        form,
        option,
        name,
        label,
        initialValue,
        mode = 'date',
        format,
        minDate,
        maxDate,
        className,
        ...other
    } = props;

    const _initialValue = initialValue
        ? new Date(initialValue.replace(/\-/g, '/'))
        : undefined;

    return (
        <DatePicker
            className={classNames(prefixCls, className)}
            mode={mode}
            format={format}
            title={label}
            minDate={
                minDate === null
                    ? undefined
                    : minDate || new Date('1900/1/1')
            }
            maxDate={
                maxDate === null
                    ? undefined
                    : maxDate || new Date(Date.now())
            }
            {...form.getFieldProps(name, {
                initialValue: _initialValue,
                ...option
            })}
            {...other}
        >
            <List.Item
                className={classNames({
                    [`${prefixCls}__list-item`]: true,
                    [_utils.getFormItemCls(name)]: true,
                    [`${prefixCls}__list-item_active`]: !!form.getFieldValue(
                        name
                    )
                })}
                arrow="horizontal"
            >
                {label && _utils.getLabelDecorator(option)(label)}
            </List.Item>
        </DatePicker>
    );
};

export default _DatePicker;
