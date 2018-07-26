/**
 * const prefixCls = 'styles-59803655';
 * @Author: Jack
 * @Date:   2017-11-30 18:28:16
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-26 15:54:14
 * @Path nidosport@next \components\Form\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List } from 'antd-mobile';
import Const from 'const';
import Styles from 'styles';

const prefixCls = 'c-form';

const Form = props => {
    const {
        form,
        onSubmit,
        id = 'form',
        renderHeader,
        label,
        className,
        children,
        ...other
    } = props;

    return (
        <form
            className={classNames(prefixCls, className, {
                [`${prefixCls}_has-header`]: !!renderHeader,
                [`${prefixCls}_no-label`]: !label
            })}
            id={id}
            onSubmit={onSubmit}
        >
            <List renderHeader={renderHeader} {...other}>
                {React.Children.map(children, (item, idx) => {
                    if (!item) return null;

                    return React.cloneElement(item, {
                        key: idx,
                        form
                    });
                })}
            </List>

            <style jsx global>{`
                .c-form {
                    margin-top: ${Styles.distance};
                }
                .${prefixCls}_has-header {
                    margin-top: 0;
                }
                .${prefixCls}_no-label .am-input-label {
                    width: auto !important;
                    margin-right: 0.24rem;
                }

                .${prefixCls} .am-list-header {
                    background-color: transparent;
                }
                .${prefixCls} .am-list-body {
                    border-top: 0;
                    border-bottom: 0;
                }
                .${prefixCls} .am-list-body:before,
                .${prefixCls} .am-list-body:after {
                    display: none !important;
                }
                .${prefixCls} .am-list-line {
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
                .${prefixCls} .am-list-body > .am-list-item:nth-last-child(1) .am-list-line {
                    border-bottom: 0 !important;
                }
                .${prefixCls} .am-list-content {
                    padding-top: 0.14rem !important;
                    padding-bottom: 0.14rem !important;
                }

                .${prefixCls} input,
                .${prefixCls} input::-webkit-input-placeholder {
                    color: #333;
                }
                .${prefixCls} .am-input-clear {
                    background-color: #999;
                }
            `}</style>
        </form>
    );
};

Form.propTypes = {
    form: PropTypes.object
};

import Button from './Button';
import Captcha from './Captcha';
import DatePicker from './DatePicker';
import Input from './Input';
import MoneyInput from './MoneyInput';
import Picker from './Picker';
import Radio from './Radio';
import Textarea from './Textarea';
import Upload from './Upload';

Form.Button = Button;
Form.Captcha = Captcha;
Form.DatePicker = DatePicker;
Form.Input = Input;
Form.MoneyInput = MoneyInput;
Form.Picker = Picker;
Form.Radio = Radio;
Form.Textarea = Textarea;
Form.Upload = Upload;

export default Form;
