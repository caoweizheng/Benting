/**
 * const prefixCls = 'styles-88909466';
 * const images = '/static/images/src/index/Chat';
 * @Author: Jack
 * @Date:   2018-05-03 12:27:29
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:01:35
 * @Path btWap \src\index\Chat\_FixedTextarea.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, TextareaItem, Button } from 'antd-mobile';
import { EmojiPicker } from 'components';
import __Extra from './__Extra';
import Utils from 'utils';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'styles-88909466';

@observer
export default class _FixedTextarea extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentDidUpdate() {
        const textareaDom = this.textareaRef;

        if (textareaDom.scrollHeight > 240) return;

        textareaDom.style.height = ''; // 字数减少时能自动减小高度
        textareaDom.style.height = `${textareaDom.scrollHeight}px`;
    }

    render() {
        const { $ } = this.context;
        const { className } = this.props;
        const { showEmoji, showExtra, value } = $.getState();

        return (
            <div className={classNames(prefixCls, className)}>
                <Flex className={`${prefixCls}__form`}>
                    {showEmoji ? (
                        <img
                            src={`${images}/keyboard.png`}
                            style={{
                                width: '0.64rem',
                                height: '0.64rem'
                            }}
                            onClick={() => {
                                $.hideEmojiPicker();
                                document.querySelector('textarea').focus();
                            }}
                        />
                    ) : (
                        <img
                            src={`${images}/emoji.png`}
                            style={{
                                width: '0.64rem',
                                height: '0.64rem'
                            }}
                            onClick={$.toggleEmojiPicker}
                        />
                    )}
                    <Flex.Item style={{ position: 'relative' }}>
                        <div
                            className={`am-list-item am-textarea-item ${prefixCls}__textarea`}
                        >
                            <div className="am-textarea-control">
                                <textarea
                                    className={`${prefixCls}__textarea`}
                                    rows="1"
                                    value={value}
                                    ref={el => (this.textareaRef = el)}
                                    onFocus={() => {
                                        $.hideEmojiPicker();
                                    }}
                                    onChange={e => {
                                        $.onTextareaChange(e.target.value);

                                        this.componentDidUpdate();
                                    }}
                                />
                            </div>
                        </div>
                    </Flex.Item>
                    <div className={`${prefixCls}__extra text-center ml-sm`}>
                        {!value ? (
                            <__Extra
                                onUploadImageSuccess={fileId => {
                                    Utils.onConfirm(
                                        <div className="text-center">
                                            <p>确定发送图片?</p>
                                            <img
                                                className="mt-d"
                                                src={Utils.getAppImgUrl(
                                                    fileId,
                                                    'scale'
                                                )}
                                                style={{ width: '100%' }}
                                            />
                                        </div>,
                                        () => $.doComment({ id: fileId })
                                    );
                                }}
                            />
                        ) : (
                            <Button
                                className={`${prefixCls}__btn-send`}
                                type="primary"
                                size="small"
                                onClick={$.doComment}
                            >
                                发送
                            </Button>
                        )}
                    </div>
                </Flex>
                {showEmoji && (
                    <EmojiPicker
                        className={`${prefixCls}__emoji-picker`}
                        onPick={$.onEmojiPick}
                    />
                )}

                <style jsx global>{`
                    .styles-88909466 {
                        width: 100%;
                        background: #fff;
                        border-top: 0.01rem solid ${Styles.color_border};
                    }
                    .${prefixCls}__form {
                        padding: 0.12rem 0.12rem 0.08rem;
                    }
                    .${prefixCls}__textarea {
                        padding-left: 0 !important;
                    }
                    .${prefixCls}__textarea .am-textarea-control {
                        padding: 0;
                        padding-right: 0.56rem !important;
                        border-bottom: 0.01rem solid ${Styles.color_border};
                    }
                    .${prefixCls}__extra {
                        width: 1rem;
                    }
                    .${prefixCls}__btn-send {
                        width: 1rem;
                        padding: 0;
                        height: 0.52rem;
                        line-height: 0.52rem;
                        font-size: ${Styles.font_xs};
                    }
                `}</style>
            </div>
        );
    }
}
