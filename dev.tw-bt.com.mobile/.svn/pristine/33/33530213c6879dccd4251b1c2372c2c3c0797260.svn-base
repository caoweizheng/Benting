/**
 * const prefixCls = 'styles-55820894';
 * const images = '/static/images/components/RichEditor';
 * @Author: Jack
 * @Date:   2017-12-26 12:28:19
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-27 17:47:52
 * @Path btWap \components\RichEditor\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { toHTML } from './utils';
import _Control from './_Control';
import _Title from './_Title';
import _Editor from './_Editor';
import _ControlButtom from './_ControlButtom';
import decorator from './decorator';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'c-rich-editor';
const localStorageKey = prefixCls;

export default class RichEditor extends React.Component {
    static propsTypes = {
        placeholder: PropTypes.string,
        imgView: PropTypes.bool,
        onOk: PropTypes.func
    };

    static defaultProps = {
        placeholder: '请在这里输入内容',
        imgView: false,
        onOk: Function.prototype
    };

    int; //自动保存Interval

    constructor(props) {
        super(props);

        this.state = {
            editorState: props.data
                ? EditorState.createWithContent(
                      convertFromRaw(JSON.parse(props.data)),
                      decorator
                  )
                : EditorState.createEmpty(decorator),
            title: props.title,
            info: '当贴子有内容时，每60秒会自动保存一次',
            readOnly: !!props.readOnly,
            focused: false,
            advance: false
        };
    }

    componentDidMount() {
        const { readOnly } = this.state;

        if (!readOnly) {
            this.int = setInterval(this.doAutoSave, 60000);
        }
    }

    componentWillUnmount() {
        const { readOnly } = this.state;

        if (!readOnly) {
            this.doAutoSave();
            clearInterval(this.int);
        }
    }

    doAutoSave = () => {
        const { editorState, title } = this.state;
        const backupDS = Utils.lsGet(localStorageKey, []);
        const content = convertToRaw(editorState.getCurrentContent());

        //编辑器内容比较少的时候，不自动保存
        if (JSON.stringify(content).length < 300) return false;

        const date = new Date().valueOf();
        backupDS.unshift({
            title,
            content,
            date
        });

        //保存数不大于5个
        if (backupDS.length > 5) {
            backupDS.pop();
        }

        Utils.lsSet(localStorageKey, backupDS);
        this.setState({
            info: `${Utils.date('m-d H:i', date / 1000)} 已自动保存`
        });
    };

    doSubmit = () => {
        const { onOk } = this.props;
        const { editorState, title } = this.state;

        const content = editorState.getCurrentContent();
        onOk(title, convertToRaw(content), toHTML(editorState));
    };

    doRecovery = obj => {
        this.setState({
            title: obj.title,
            editorState: EditorState.createWithContent(
                convertFromRaw(obj.content),
                decorator
            ),
            info: `已恢复到 ${Utils.date('m-d H:i', obj.date / 1000)}`
        });
    };

    onToggleAdvance = () => {
        const { advance } = this.state;

        this.setState({
            advance: !advance
        });
        Utils.light(`已切换至${advance ? '常用' : '高级'}版`);
    };

    onChange = editorState => {
        this.setState({ editorState });
    };

    render() {
        const {
            data,
            placeholder,
            imgView,
            qiniu,
            qiniuFileKey,
            onQiniuUploadClick,
            className
        } = this.props;
        const {
            editorState,
            title,
            info,
            focused,
            readOnly,
            advance
        } = this.state;

        //抓取draft的图片entity
        let files = [];
        try {
            if (readOnly) {
                files = Utils.getRealDraftEntityMap(JSON.parse(data));
            }
        } catch (ex) {
            console.log(ex);
        }

        return (
            <div>
                <div
                    className={classNames(prefixCls, className, {
                        [`${prefixCls}_read-only`]: !!readOnly,
                        [`${prefixCls}_advance`]: advance
                    })}
                >
                    {/*上方按钮*/}
                    {!readOnly && (
                        <_Control
                            advance={advance}
                            editorState={editorState}
                            focused={focused}
                            qiniu={qiniu}
                            qiniuFileKey={qiniuFileKey}
                            onChange={this.onChange}
                            onQiniuUploadClick={onQiniuUploadClick}
                            onToggleAdvance={this.onToggleAdvance}
                        />
                    )}

                    {/*标题*/}
                    {!readOnly && (
                        <_Title
                            value={title}
                            onChange={title => this.setState({ title })}
                        />
                    )}

                    {/*编辑器*/}
                    <_Editor
                        editorState={editorState}
                        files={files}
                        imgView={imgView}
                        placeholder={placeholder}
                        readOnly={readOnly}
                        onChange={this.onChange}
                        onBlur={() => this.setState({ focused: false })}
                        onFocus={() => this.setState({ focused: true })}
                    />

                    {/*下方按钮*/}
                    {!readOnly && (
                        <_ControlButtom
                            advance={advance}
                            editorState={editorState}
                            localStorageKey={localStorageKey}
                            title={title}
                            onChange={this.onChange}
                            onGetAutoSave={this.doRecovery}
                            onOk={this.doSubmit}
                        />
                    )}
                </div>

                {/*底部提示或描述*/}
                {!readOnly && (
                    <p className="text-xs text-light p-sw">
                        {info}
                    </p>
                )}

                <style jsx global>{`
                    .DraftEditor-editorContainer,
                    .DraftEditor-root,
                    .public-DraftEditor-content {
                        height: inherit;
                        text-align: initial;
                    }
                    .public-DraftEditor-content[contenteditable='true'] {
                        -webkit-user-modify: read-write-plaintext-only;
                    }
                    .DraftEditor-root {
                        position: relative;
                    }
                    .DraftEditor-editorContainer {
                        background-color: rgba(255, 255, 255, 0);
                        border-left: 0.01rem solid transparent;
                        position: relative;
                        z-index: 1;
                    }
                    .public-DraftEditor-block {
                        position: relative;
                    }
                    .DraftEditor-alignLeft .public-DraftStyleDefault-block {
                        text-align: left;
                    }
                    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {
                        left: 0;
                        text-align: left;
                    }
                    .DraftEditor-alignCenter .public-DraftStyleDefault-block {
                        text-align: center;
                    }
                    .DraftEditor-alignCenter
                        .public-DraftEditorPlaceholder-root {
                        margin: 0 auto;
                        text-align: center;
                        width: 100%;
                    }
                    .DraftEditor-alignRight .public-DraftStyleDefault-block {
                        text-align: right;
                    }
                    .DraftEditor-alignRight
                        .public-DraftEditorPlaceholder-root {
                        right: 0;
                        text-align: right;
                    }
                    .public-DraftEditorPlaceholder-root {
                        color: ${Styles.color_font_sub};
                        position: absolute;
                        z-index: 1;
                    }
                    .public-DraftEditorPlaceholder-hasFocus {
                        color: ${Styles.color_font_sub};
                    }
                    .DraftEditorPlaceholder-hidden {
                        display: none;
                    }
                    .public-DraftStyleDefault-block {
                        position: relative;
                        white-space: pre-wrap;
                    }
                    .public-DraftStyleDefault-ltr {
                        direction: ltr;
                        text-align: left;
                    }
                    .public-DraftStyleDefault-rtl {
                        direction: rtl;
                        text-align: right;
                    }
                    .public-DraftStyleDefault-listLTR {
                        direction: ltr;
                    }
                    .public-DraftStyleDefault-listRTL {
                        direction: rtl;
                    }
                    .public-DraftStyleDefault-ol,
                    .public-DraftStyleDefault-ul {
                        margin: 0.16rem 0;
                        padding: 0;
                    }
                    .public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR {
                        margin-left: 0.75rem;
                    }
                    .public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL {
                        margin-right: 0.75rem;
                    }
                    .public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR {
                        margin-left: 1.5rem;
                    }
                    .public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL {
                        margin-right: 1.5rem;
                    }
                    .public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR {
                        margin-left: 2.25rem;
                    }
                    .public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL {
                        margin-right: 2.25rem;
                    }
                    .public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR {
                        margin-left: 3rem;
                    }
                    .public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL {
                        margin-right: 3rem;
                    }
                    .public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR {
                        margin-left: 3.75rem;
                    }
                    .public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL {
                        margin-right: 3.75rem;
                    }
                    .public-DraftStyleDefault-unorderedListItem {
                        list-style-type: square;
                        position: relative;
                    }
                    .public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0 {
                        list-style-type: disc;
                    }
                    .public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1 {
                        list-style-type: circle;
                    }
                    .public-DraftStyleDefault-orderedListItem {
                        list-style-type: none;
                        position: relative;
                    }
                    .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before {
                        left: -0.36rem;
                        position: absolute;
                        text-align: right;
                        width: 0.3rem;
                    }
                    .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before {
                        position: absolute;
                        right: -0.36rem;
                        text-align: left;
                        width: 0.3rem;
                    }
                    .public-DraftStyleDefault-orderedListItem:before {
                        content: counter(ol0) '. ';
                        counter-increment: ol0;
                    }
                    .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before {
                        content: counter(ol1) '. ';
                        counter-increment: ol1;
                    }
                    .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before {
                        content: counter(ol2) '. ';
                        counter-increment: ol2;
                    }
                    .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before {
                        content: counter(ol3) '. ';
                        counter-increment: ol3;
                    }
                    .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before {
                        content: counter(ol4) '. ';
                        counter-increment: ol4;
                    }
                    .public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset {
                        counter-reset: ol0;
                    }
                    .public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset {
                        counter-reset: ol1;
                    }
                    .public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset {
                        counter-reset: ol2;
                    }
                    .public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset {
                        counter-reset: ol3;
                    }
                    .public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset {
                        counter-reset: ol4;
                    }
                `}</style>
                <style jsx global>{`
                    .c-rich-editor {
                    }
                    .${prefixCls} * {
                        -webkit-user-select: text;
                    }
                    .${prefixCls} {
                        padding-top: 1rem;
                        font-size: 0.32rem;
                        color: ${Styles.color_font_title};
                        border: 0.01rem solid ${Styles.color_border};
                        background-color: #fff;
                    }
                    .${prefixCls}_read-only {
                        padding-top: 0;
                        border: 0;
                    }
                    .${prefixCls}_read-only figure {
                        margin: ${Styles.sm} 0;
                    }
                    .${prefixCls}_read-only div[data-block]:first-child br,
                    .${prefixCls}_read-only figure + div br {
                        display: none;
                    }
                    .${prefixCls}_advance {
                        padding-top: 1.68rem;
                    }
                    .${prefixCls} .am-flexbox {
                        overflow: initial;
                    }
                `}</style>
            </div>
        );
    }
}
