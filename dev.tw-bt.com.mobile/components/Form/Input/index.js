/**
 * const prefixCls = 'styles-17139044';
 * @Author: Jack
 * @Date:   2017-11-30 18:32:35
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-29 10:56:11
 * @Path nidosport@next \components\Form\Input\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { InputItem, Modal } from 'antd-mobile';
import Const from 'const';
import _utils from '../_utils';

class Input extends React.Component {
    state = {
        passwordView: false
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
            className,
            ...other
        } = this.props;
        const { passwordView } = this.state;

        const isPassword = type === 'password';
        const _type = isPassword && !passwordView ? type : 'text';
        let _extra;

        if (isPassword) {
            _extra = (
                <img
                    src={
                        passwordView
                            ? `${Const.__IMAGES__}/icon/eye.png`
                            : `${Const.__IMAGES__}/icon/eye_close.png`
                    }
                    onClick={() =>
                        this.setState({ passwordView: !passwordView })}
                />
            );
        }

        return (
            <InputItem
                {...form.getFieldProps(name, {
                    initialValue,
                    ...option
                })}
                className={classNames(_utils.getFormItemCls(name), className)}
                name={name}
                clear
                placeholder="请输入"
                updatePlaceholder
                error={!!form.getFieldError(name)}
                type={isPassword ? _type : type}
                extra={isPassword ? _extra : extra}
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
