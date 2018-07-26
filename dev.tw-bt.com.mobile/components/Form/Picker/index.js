/**
 * const prefixCls = 'styles-56101143';
 * const images = '/static/images/components/Form/Picker';
 * @Author: qizc
 * @Date:   2017-12-26 14:08:31
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-03 18:08:05
 * @Path btWap \components\Form\Picker\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Picker, List } from 'antd-mobile';
import _utils from '../_utils';

const prefixCls = 'components-form__picker';

const _Picker = props => {
    const {
        form,
        option,
        name,
        label,
        initialValue,
        disabled,
        className,
        ...other
    } = props;

    return (
        <div
            className={classNames(prefixCls, className, {
                [`${prefixCls}_disabled`]: disabled
            })}
        >
            <Picker
                cols={1}
                {...form.getFieldProps(name, {
                    initialValue,
                    ...option
                })}
                title={label}
                disabled={disabled}
                {...other}
            >
                <List.Item
                    className={classNames({
                        [`${prefixCls}__list-item`]: true,
                        [_utils.getFormItemCls(name)]: true,
                        [`${prefixCls}__list-item_active`]:
                            form.getFieldValue(name) &&
                            form.getFieldValue(name)[0]
                    })}
                    arrow="horizontal"
                >
                    {label && _utils.getLabelDecorator(option)(label)}
                </List.Item>
            </Picker>
            <style jsx global>{`
                .components-form__picker__list-item {
                    padding-left: 0;
                }
                .components-form__picker__list-item .am-list-content {
                    flex: initial !important;
                    width: 1.7rem !important;
                    margin-right: 0.1rem;
                }
                .components-form__picker__list-item .am-list-extra {
                    flex: 1;
                    font-size: 0.34rem !important;
                    text-align: left !important;
                    color: #c0c0c0 !important;
                }
                .components-form__picker__list-item_active .am-list-extra {
                    color: initial !important;
                }
                .components-form__picker_disabled .am-list-content,
                .components-form__picker_disabled .am-list-extra {
                    color: #bbb !important;
                }
                .components-form__picker_disabled
                    .components-form__picker__list-item.components-form__picker__list-item_active
                    .am-list-extra {
                    color: #bbb !important;
                }
            `}</style>
        </div>
    );
};

export default _Picker;
