/**
 * const prefixCls = 'styles-18611403';
 * const images = '/static/images/components/RichEditor';
 * @Author: Jack
 * @Date:   2017-12-26 14:11:49
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 16:12:05
 * @Path btWap \components\RichEditor\_Control.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import {
    EditorState,
    RichUtils,
    Entity,
    Modifier,
    AtomicBlockUtils,
    convertToRaw
} from 'draft-js';
import { Flex } from 'antd-mobile';
import Upload from '../Upload';
import __BtnControl from './__BtnControl';
import __BtnLinkImage from './__BtnLinkImage';
import __BtnEmoji from './__BtnEmoji';
import __BtnLink from './__BtnLink';
import { inlineTypes, blockTypes, colors, colorStyleMap } from './config';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'styles-18611403';

export default class _Control extends React.Component {
    state = {
        uploading: false
    };

    toggleBlockType = blockType => {
        const { editorState, onChange } = this.props;

        onChange(RichUtils.toggleBlockType(editorState, blockType));
    };

    toggleInlineStyle = inlineStyle => {
        const { editorState, onChange } = this.props;

        onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };

    toggleColor = toggledColor => {
        const { editorState, onChange } = this.props;
        const selection = editorState.getSelection();

        // Let's just allow one color at a time. Turn off all active colors.
        const nextContentState = Object.keys(
            colorStyleMap
        ).reduce((contentState, color) => {
            return Modifier.removeInlineStyle(contentState, selection, color);
        }, editorState.getCurrentContent());

        let nextEditorState = EditorState.push(
            editorState,
            nextContentState,
            'change-inline-style'
        );

        const currentStyle = editorState.getCurrentInlineStyle();

        // Unset style override for current color.
        if (selection.isCollapsed()) {
            nextEditorState = currentStyle.reduce((state, color) => {
                return RichUtils.toggleInlineStyle(state, color);
            }, nextEditorState);
        }

        // If the color is being toggled on, apply it.
        if (!currentStyle.has(toggledColor)) {
            nextEditorState = RichUtils.toggleInlineStyle(
                nextEditorState,
                toggledColor
            );
        }

        onChange(nextEditorState);
    };

    addMedia = (type, data, qiniuFileKey) => {
        const { editorState, onChange } = this.props;

        const entityKey = Entity.create(type, 'IMMUTABLE', data);
        const newEditorState = AtomicBlockUtils.insertAtomicBlock(
            editorState,
            entityKey,
            ' '
        );

        if (newEditorState) onChange(newEditorState);
    };

    addDecoratorItem = (key, value, text) => {
        const { editorState, onChange } = this.props;

        const entityKey = Entity.create(key, 'IMMUTABLE', value);
        const newContentState = Modifier.replaceText(
            editorState.getCurrentContent(),
            editorState.getSelection(),
            text,
            null,
            entityKey
        );
        const newEditorState = EditorState.push(
            editorState,
            newContentState,
            `insert-${key}`
        );

        if (newEditorState) onChange(newEditorState);
    };

    renderBtnsInlineTypes() {
        const { editorState } = this.props;

        return inlineTypes.map(item => (
            <__BtnControl
                key={item.style}
                label={item.label}
                active={editorState.getCurrentInlineStyle().has(item.style)}
                onMouseDown={
                    !Const.__IOS__
                        ? e => {
                              e.preventDefault();
                              this.toggleInlineStyle(item.style);
                          }
                        : undefined
                }
                onTouchEnd={
                    Const.__IOS__
                        ? e => {
                              e.preventDefault();
                              this.toggleInlineStyle(item.style);
                          }
                        : undefined
                }
            />
        ));
    }

    renderBtnsBlockTypes() {
        const { editorState } = this.props;

        const selection = editorState.getSelection();
        const blockType = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();

        return blockTypes.map(item => (
            <__BtnControl
                key={item.style}
                label={item.label}
                active={item.style === blockType}
                onMouseDown={
                    !Const.__IOS__
                        ? e => {
                              e.preventDefault();
                              this.toggleBlockType(item.style);
                          }
                        : undefined
                }
                onTouchEnd={
                    Const.__IOS__
                        ? e => {
                              e.preventDefault();
                              this.toggleBlockType(item.style);
                          }
                        : undefined
                }
            />
        ));
    }

    renderBtnUploadImage() {
        const { uploading } = this.state;

        return (
            <Upload
                className={`${prefixCls}__upload-image`}
                disabled={uploading}
                beforeUpload={() => Utils.loading('上传中...')}
                onSuccess={(result, file) => {
                    const { code, data } = result;

                    if (code !== 0) {
                        Utils.hideToast();
                        Utils.light(`文件上传失败, ${result.err}`);
                        return;
                    }

                    this.addMedia('image', {
                        src: data.fileId
                    });

                    Utils.hideToast();
                }}
            >
                <__BtnControl label={<img src={`${images}/pic.png`} />} />

                <style jsx global>{`
                    .styles-18611403 {
                    }
                    .${prefixCls}__upload-image {
                        display: inline-block;
                        width: 0.6rem;
                        height: 0.6rem;
                    }
                `}</style>
            </Upload>
        );
    }

    renderBtnUploadVideo() {
        const { qiniu, qiniuFileKey, onQiniuUploadClick } = this.props;
        const { uploading } = this.state;

        return (
            <Upload
                className={`${prefixCls}__upload-video`}
                accept="video/mp4,video/quicktime,video/*"
                disabled={uploading}
                needCb
                qiniu={qiniu}
                qiniuFileKey={qiniuFileKey}
                beforeUpload={() => Utils.loading('上传中...')}
                onSuccess={async (result, file) => {
                    let data;

                    if (qiniu) {
                        if (result.ret !== 'success') {
                            Utils.hideToast();
                            Utils.light('视频上传失败，请重试。');
                            return;
                        }

                        data = await Api.P('get_qiniu_file-info', {
                            key: qiniuFileKey
                        });

                        this.addMedia('video', {
                            src: data.filePath,
                            poster: data.surImg,
                            size: data.fsize,
                            playTime: data.playTime
                        });
                    } else {
                        if (result.code !== 0) {
                            Utils.hideToast();
                            Utils.light(`文件上传失败, ${result.err}`);
                            return;
                        }

                        data = result.data;

                        this.addMedia('video', {
                            src: `${data.targetPath}/${data.name}`,
                            poster: data.surface,
                            size: data.size,
                            playTime: data.play_time
                        });
                    }

                    Utils.hideToast();
                }}
            >
                <__BtnControl
                    label={<img src={`${images}/video.png`} />}
                    onClick={onQiniuUploadClick}
                />

                <style jsx global>{`
                    .styles-18611403 {
                    }
                    .${prefixCls}__upload-video {
                        display: inline-block;
                        width: 0.6rem;
                        height: 0.6rem;
                    }
                `}</style>
            </Upload>
        );
    }

    renderBtnsColors() {
        const { editorState } = this.props;

        return colors.map(item => (
            <__BtnControl
                key={item.style}
                color={item.label}
                active={editorState.getCurrentInlineStyle().has(item.style)}
                onMouseDown={
                    !Const.__IOS__
                        ? e => {
                              e.preventDefault();
                              this.toggleColor(item.style);
                          }
                        : undefined
                }
                onTouchEnd={
                    Const.__IOS__
                        ? e => {
                              e.preventDefault();
                              this.toggleColor(item.style);
                          }
                        : undefined
                }
            />
        ));
    }

    renderBtnsSimple() {
        const { onToggleAdvance } = this.props;

        return (
            <__BtnControl
                label={<img src={`${images}/packup.png`} />}
                onClick={onToggleAdvance}
            />
        );
    }

    renderBtnsAdvance() {
        const { onToggleAdvance } = this.props;

        return (
            <__BtnControl
                label={<img src={`${images}/unfold.png`} />}
                onClick={onToggleAdvance}
            />
        );
    }

    render() {
        const {
            className,
            focused,
            editorState,
            advance,
            onChange
        } = this.props;

        if (advance) {
            return (
                <div className={classNames(prefixCls, className)}>
                    <div className={`${prefixCls}__control`}>
                        <Flex justify="between">
                            {this.renderBtnUploadImage()}
                            {this.renderBtnUploadVideo()}
                            <__BtnLinkImage onAdd={this.addMedia} />
                            {this.renderBtnsInlineTypes()}
                            {this.renderBtnsBlockTypes()}
                        </Flex>
                        <Flex className="mt-xs" justify="between">
                            <__BtnEmoji
                                focused={focused}
                                onAdd={this.addDecoratorItem}
                            />
                            <__BtnLink onAdd={this.addDecoratorItem} />
                            {this.renderBtnsColors()}
                            {this.renderBtnsSimple()}
                        </Flex>
                    </div>

                    <style jsx global>{`
                        .styles-18611403 {
                        }
                        .${prefixCls}__control {
                            position: fixed;
                            top: 0;
                            left: 0;
                            right: 0;
                            z-index: ${Styles.z_rich_editor_control};
                            padding: ${Styles.sm} ${Styles.wind};
                            background-color: #eee;
                            border-top: 0.01rem solid ${Styles.color_border};
                            border-bottom: 0.01rem solid ${Styles.color_border};
                        }
                        .${prefixCls}__control__split {
                            width: 0;
                            height: 0.5rem;
                            border-left: 0.01rem solid ${Styles.color_border};
                        }
                        .${prefixCls}__emoji-picker {
                            position: fixed;
                            z-index: ${Styles.z_fixed_textarea};
                            right: 0;
                            left: 0;
                            bottom: 0;
                            width: 100%;
                            background-color: #fff;
                            border-top: 0.01rem solid ${Styles.color_border};
                            transform: translate3d(0, 100%, 0);
                            transition: all 0.3s;
                        }
                        .${prefixCls}__emoji-picker_open {
                            transform: translate3d(0, 0, 0);
                        }
                    `}</style>
                </div>
            );
        }

        return (
            <div className={classNames(prefixCls, className)}>
                <div className={`${prefixCls}__control`}>
                    <Flex justify="between">
                        <__BtnEmoji
                            focused={focused}
                            onAdd={this.addDecoratorItem}
                        />
                        {this.renderBtnUploadImage()}
                        {this.renderBtnUploadVideo()}
                        <div style={{ width: '.6rem' }} />
                        <div style={{ width: '.6rem' }} />
                        <div style={{ width: '.6rem' }} />
                        <div style={{ width: '.6rem' }} />
                        {this.renderBtnsAdvance()}
                    </Flex>
                </div>

                <style jsx global>{`
                    .styles-18611403 {
                    }
                    .${prefixCls}__control {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        z-index: ${Styles.z_rich_editor_control};
                        padding: ${Styles.sm} ${Styles.wind};
                        background-color: #eee;
                        border-top: 0.01rem solid ${Styles.color_border};
                        border-bottom: 0.01rem solid ${Styles.color_border};
                    }
                    .${prefixCls}__control__split {
                        width: 0;
                        height: 0.5rem;
                        border-left: 0.01rem solid ${Styles.color_border};
                    }
                    .${prefixCls}__emoji-picker {
                        position: fixed;
                        z-index: ${Styles.z_fixed_textarea};
                        right: 0;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        background-color: #fff;
                        border-top: 0.01rem solid ${Styles.color_border};
                        transform: translate3d(0, 100%, 0);
                        transition: all 0.3s;
                    }
                    .${prefixCls}__emoji-picker_open {
                        transform: translate3d(0, 0, 0);
                    }
                `}</style>
            </div>
        );
    }
}
