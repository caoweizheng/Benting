/**
 * const prefixCls = 'styles-14144646';
 * const images = '/static/images/components/Form/Upload';
 * @Author: qizc
 * @Date:   2018-01-02 09:47:45
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-30 14:33:28
 * @Path btWap \components\Form\Upload\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { List, InputItem, Flex, Icon } from 'antd-mobile';
import Img from '../../Img';
import Upload from '../../Upload';
import Const from 'const';
import Styles from 'styles';
import _utils from '../_utils';

const prefixCls = 'styles-14144646';

export default class FormUpload extends React.Component {
    state = {
        src: this.props.src || ''
    };

    render() {
        const {
            form,
            initialValue,
            option,
            label,
            name,
            right,
            data,
            className,
            disabled = false
        } = this.props;
        const { src } = this.state;

        //关键：form改变后要以form的值为主，不再使用initialValue，并构造upload需要的数据结构
        const value = form.getFieldValue(name);
        let _value;
        if (src) {
            _value = src;
        } else if (value) {
            _value = value;
        } else {
            _value = initialValue || '';
        }

        return (
            <List.Item
                className={classNames(
                    prefixCls,
                    className,
                    _utils.getFormItemCls(name),
                    {
                        [`${prefixCls}_disabled-input`]: !!_value
                    }
                )}
                arrow="horizontal"
            >
                <Flex justify={right ? 'between' : undefined}>
                    <div className="am-input-label am-input-label-5">
                        {label && _utils.getLabelDecorator(option)(label)}
                    </div>
                    <Upload
                        disabled={disabled}
                        beforeUpload={() => Utils.loading('上传中...')}
                        data={data}
                        onSuccess={(result, file) => {
                            const { data } = result;

                            this.setState(
                                {
                                    src: `${data.targetPath}/${data.name}`
                                },
                                () => {
                                    form.setFieldsValue({
                                        [name]: data.fileId
                                    });
                                }
                            );

                            Utils.hideToast();
                        }}
                    >
                        {_value ? (
                            <Img
                                className={`${prefixCls}__upload`}
                                src={_value ? _value : value}
                            />
                        ) : (
                            <Flex
                                className={`${prefixCls}__upload`}
                                justify="center"
                            >
                                <img
                                    className={`${prefixCls}__upload-add`}
                                    src={`${Const.__IMAGES__}/icon/plus.png`}
                                />
                            </Flex>
                        )}
                    </Upload>
                </Flex>
                <div style={{ display: 'none' }}>
                    <InputItem
                        {...form.getFieldProps(name, {
                            initialValue,
                            ...option
                        })}
                    />
                </div>

                <style jsx global>{`
                    .styles-14144646 {
                    }
                    .${prefixCls}__upload {
                        width: 1.6rem !important;
                        height: 1.6rem !important;
                        border: 0.01rem solid ${Styles.color_border};
                    }
                    .${prefixCls}__upload-add {
                        width: 0.74rem !important;
                        height: 0.74rem !important;
                    }
                `}</style>
            </List.Item>
        );
    }
}
