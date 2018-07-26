/**
 * const prefixCls = 'styles-16356405';
 * const images = '/static/images/components/RichEditor';
 * @Author: Jack
 * @Date:   2017-12-26 16:34:50
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-27 11:49:25
 * @Path btWap \components\RichEditor\__BtnView.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Button, Modal } from 'antd-mobile';
import _Editor from './_Editor';
import Styles from 'styles';

const prefixCls = 'styles-16356405';

export default class __BtnView extends React.Component {
    state = {
        visible: false
    };

    toggleModal = () => {
        const { visible } = this.state;

        this.setState({
            visible: !visible
        });
    };

    render() {
        const { title, editorState, className } = this.props;
        const { visible } = this.state;

        return (
            <div className={classNames(prefixCls, className)}>
                <Button size="small" inline onClick={this.toggleModal}>
                    预览
                </Button>
                <Modal
                    maskClosable={false}
                    visible={visible}
                >
                    <div className={`${prefixCls}__modal`}>
                        <span
                            className="am-modal-close-x"
                            onClick={this.toggleModal}
                        />
                        <p
                            className="text-xl"
                            style={{ marginRight: '.48rem' }}
                        >
                            {title || '输入贴子标题'}
                        </p>
                        <_Editor
                            className="text-desc mt-lg"
                            editorState={editorState}
                            readOnly={true}
                        />
                    </div>
                </Modal>

                <style jsx global>{`
                    .styles-16356405 {}
                    .${prefixCls} {
                        display: inline-block;
                        height: 0.6rem;
                    }
                    .${prefixCls}__modal {
                        position: relative;
                        padding: 0.48rem;
                        font-size: ${Styles.font_md};
                        color: initial;
                        text-align: left;
                    }
                    .${prefixCls}__modal .am-modal-close-x {
                        position: absolute;
                        top: 0.64rem;
                        right: 0.48rem;
                    }
                `}</style>
            </div>
        );
    }
}
