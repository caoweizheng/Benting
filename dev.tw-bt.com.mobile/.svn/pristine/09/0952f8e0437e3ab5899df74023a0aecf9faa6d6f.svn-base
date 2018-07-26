/**
 * const prefixCls = 'styles-16819584';
 * const images = '/static/images/components/RichEditor';
 * @Author: Jack
 * @Date:   2017-12-26 15:06:26
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 16:11:38
 * @Path btWap \components\RichEditor\__BtnLink.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Modal } from 'antd-mobile';
import __BtnControl from './__BtnControl';
import { images } from './ds';

const prefixCls = 'styles-16819584';

export default class __BtnLink extends React.Component {
    state = {
        visible: false,
        link: '',
        tag: ''
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
        let { link, tag } = this.state;

        if (!~link.indexOf('://')) link = `http://${link}`;
        if (!tag) tag = link;

        onAdd('link', { link, tag }, tag);

        this.setState({
            link: '',
            tag: ''
        });
        this.toggleModal();
    };

    render() {
        const { className } = this.props;
        const { visible, link, tag } = this.state;

        return (
            <div className={classNames(prefixCls, className)}>
                <__BtnControl
                    label={<img src={`${images}/link.png`} />}
                    onClick={this.toggleModal}
                />
                <Modal
                    classNames={`${prefixCls}__modal`}
                    title="插入链接"
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
                                    name="link"
                                    placeholder="链接地址"
                                    value={link}
                                    onChange={this.onChange}
                                />
                            </label>
                        </div>
                        <div className="am-modal-input">
                            <label>
                                <input
                                    className="mt-sm"
                                    name="tag"
                                    placeholder="链接名字 (选填)"
                                    value={tag}
                                    onChange={this.onChange}
                                />
                            </label>
                        </div>
                    </div>
                </Modal>

                <style jsx global>{`
                    .styles-16819584 {
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
