/**
 * const prefixCls = 'styles-55976708';
 * const images = '/static/images/components/RichEditor';
 * @Author: Jack
 * @Date:   2017-12-26 15:37:25
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-30 13:45:25
 * @Path btWap \components\RichEditor\_Editor.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Editor } from 'draft-js';
import ImgView from '../ImgView';
import _Media from './_Media';
import { colorStyleMap } from './config';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-12352571';

export default class _Editor extends React.Component {
    state = {
        show: false,
        current: 0
    };

    showImgView = src => {
        const { files } = this.props;

        const current = files.findIndex(item => item === src);

        this.setState({
            show: true,
            current
        });
    };

    renderMediaBlock(block) {
        if (block.getType() === 'atomic') {
            return {
                component: _Media,
                editable: false
            };
        }
        return null;
    }

    renderHOCMediaBlock(block, that) {
        //ImgView HOC
        const ViewMedia = props => {
            return <_Media {...props} onClick={that.showImgView} />;
        };

        if (block.getType() === 'atomic') {
            return {
                component: ViewMedia,
                editable: false
            };
        }
        return null;
    }

    render() {
        const {
            editorState,
            readOnly,
            files = [],
            imgView,
            className,
            ...other
        } = this.props;
        const { show, current } = this.state;

        //开始时使用非unstyled的元素时，要手动处理placeholder
        let hasContent = false;
        const contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (
                contentState
                    .getBlockMap()
                    .first()
                    .getType() !== 'unstyled'
            ) {
                hasContent = true;
            }
        }

        return (
            <div
                className={classNames(prefixCls, className, {
                    [`${prefixCls}_hide-placeholder`]: hasContent,
                    [`${prefixCls}_read-only`]: readOnly
                })}
            >
                <Editor
                    placeholder="输入内容"
                    editorState={editorState}
                    readOnly={readOnly}
                    blockRendererFn={
                        imgView
                            ? block => this.renderHOCMediaBlock(block, this)
                            : this.renderMediaBlock
                    }
                    customStyleMap={colorStyleMap}
                    spellCheck={false}
                    {...other}
                />
                {imgView && (
                    <ImgView
                        show={show}
                        current={current}
                        data={files.map(item => {
                            if (item.toString().indexOf('.gif') !== -1)
                                return Utils.getImgUrl(item);

                            return Utils.getAppImgUrl(item, 'scale');
                        })}
                        onClose={() => this.setState({ show: false })}
                    />
                )}

                <style jsx global>{`
                    .styles-12352571 {
                    }
                    .${prefixCls} {
                        position: relative;
                        min-height: 40vw;
                        padding: 0.2rem;
                        line-height: 1.5;
                        color: #333;
                        word-wrap: break-word;
                        background-color: #fff;
                    }
                    .${prefixCls}_hide-placeholder
                        .public-DraftEditorPlaceholder-root {
                        display: none;
                    }
                    .${prefixCls}_read-only {
                        padding: 0;
                        min-height: 0;
                        border: 0;
                        line-height: 1.5;
                    }
                    .${prefixCls} .public-DraftStyleDefault-ol,
                    .${prefixCls} .public-DraftStyleDefault-ul {
                        margin: 0;
                    }
                    //ol
                    .${prefixCls}
                        .public-DraftStyleDefault-ol
                        .public-DraftStyleDefault-orderedListItem {
                        padding-left: 0.16rem;
                        margin-left: 0.26rem;
                    }
                    .${prefixCls}
                        .public-DraftStyleDefault-ol
                        .public-DraftStyleDefault-orderedListItem:nth-of-type(1n
                            + 10) {
                        padding-left: 0.36rem;
                    }
                    .${prefixCls}
                        .public-DraftStyleDefault-ol
                        .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before {
                        width: auto;
                    }
                    .${prefixCls}
                        .public-DraftStyleDefault-ul
                        .public-DraftStyleDefault-unorderedListItem {
                        margin-left: 0.32rem;
                    }
                    .${prefixCls} .public-DraftEditorPlaceholder-inner {
                        color: #aaa;
                    }
                `}</style>
            </div>
        );
    }
}
