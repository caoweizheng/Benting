/**
 * const prefixCls = 'styles-65677407';
 * const images = '/static/images/components/RichEditor';
 * @Author: Jack
 * @Date:   2017-12-26 14:47:07
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 16:11:48
 * @Path btWap \components\RichEditor\__BtnLinkImage.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Modal } from 'antd-mobile';
import __BtnControl from './__BtnControl';
import { images } from './ds';

const prefixCls = 'styles-65677407';

export default class __BtnLinkImage extends React.Component {
    state = {
        visible: false,
        src: ''
    };

    toggleModal = () => {
        const { visible } = this.state;

        this.setState({
            visible: !visible
        });
    };

    onChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };

    doAdd = () => {
        const { onAdd } = this.props;
        let { src } = this.state;

        onAdd('link-image', { src });

        this.setState({
            src: ''
        });
        this.toggleModal();
    };

    render() {
        const { className } = this.props;
        const { visible, src } = this.state;

        return (
            <div className={classNames(prefixCls, className)}>
                <__BtnControl
                    label={<img src={`${images}/link_pic.png`} />}
                    onClick={this.toggleModal}
                />
                <Modal
                    classNames={`${prefixCls}__modal`}
                    title="插入网络图片"
                    transparent
                    maskClosable={false}
                    visible={visible}
                    footer={[
                        {
                            text: '取消',
                            onPress: this.toggleModal
                        },
                        {
                            text: '确定',
                            onPress: this.doAdd
                        }
                    ]}
                >
                    <div className="am-modal-input-container">
                        <div className="am-modal-input">
                            <label>
                                <input
                                    name="src"
                                    placeholder="图片链接地址"
                                    value={src}
                                    onChange={this.onChange}
                                />
                            </label>
                        </div>
                    </div>
                </Modal>

                <style jsx global>{`
                    .styles-65677407 {
                    }
                    .${prefixCls} {
                        width: 0.6rem;
                        height: 0.6rem;
                    }
                `}</style>
            </div>
        );
    }
}
