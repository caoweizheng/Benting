/**
 * const prefixCls = 'styles-11309696';
 * const images = '/static/images/components/Form/MoneyInput';
 * @Author: Jack
 * @Date:   2018-01-08 14:51:31
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-16 17:01:21
 * @Path btWap \components\Form\MoneyInput\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { InputItem, Modal } from 'antd-mobile';
import _utils from '../_utils';
import Const from 'const';

const prefixCls = 'styles-11309696';

class Input extends React.Component {
    prev = '';

    moneyNatural = v => {
        if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
            if (v === '.') {
                return '0.';
            }

            if (!v) return '';

            return this.prev;
        }

        this.prev = v;
        return v;
    };

    moneyInt = (v = '') => {
        let _v = v.replace('.', '');

        return _v == 0 ? '' : _v;
    };

    render() {
        const {
            form,
            option,
            name,
            label,
            initialValue,
            type,
            extra,
            format,
            focused,
            onChange,
            className,
            ...other
        } = this.props;

        //if (Const.__SERVER__) return null;

        return (
            <InputItem
                {...form.getFieldProps(name, {
                    initialValue,
                    ...option
                })}
                className={classNames(
                    prefixCls,
                    _utils.getFormItemCls(name),
                    className
                )}
                name={name}
                clear
                extra={extra}
                placeholder="请输入"
                updatePlaceholder
                error={!!form.getFieldError(name)}
                //type="money"
                onChange={value => {
                    form.setFieldsValue({
                        [name]:
                            format === 'int'
                                ? this.moneyInt(value)
                                : this.moneyNatural(value)
                    });
                }}
                onErrorClick={() => {
                    Modal.alert('提示', form.getFieldError(name).join('，'));
                }}
                {...other}
            >
                {label && _utils.getLabelDecorator(option)(label)}
            </InputItem>
        );
    }
}

export default Input;
