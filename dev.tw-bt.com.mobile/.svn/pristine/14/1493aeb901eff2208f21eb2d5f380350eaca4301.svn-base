/**
 * const prefixCls = 'styles-71028254';
 * const images = '/static/images/components/RichEditor';
 * @Author: Jack
 * @Date:   2017-12-26 16:16:11
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 16:12:14
 * @Path btWap \components\RichEditor\_ControlButtom.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EditorState } from 'draft-js';
import { Flex, Button } from 'antd-mobile';
import __BtnControl from './__BtnControl';
import __BtnView from './__BtnView';
import Utils from 'utils';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'styles-71028254';

export default class _ControlBottom extends React.Component {
    static propsTypes = {
        onOk: PropTypes.func,
        onGetAutoSave: PropTypes.func
    };

    static defaultProps = {
        onOk: Function.prototype,
        onGetAutoSave: Function.prototype
    };

    undo = () => {
        const { editorState, onChange } = this.props;

        const newEditorState = EditorState.undo(editorState);

        if (newEditorState) onChange(newEditorState);
    };

    redo = () => {
        const { editorState, onChange } = this.props;

        const newEditorState = EditorState.redo(editorState);

        if (newEditorState) onChange(newEditorState);
    };

    getBackup = () => {
        const { localStorageKey, onGetAutoSave } = this.props;
        const backupDS = Utils.lsGet(localStorageKey, []);

        if (backupDS.length === 0) {
            Utils.light('没有任何自动保存的数据');
        } else {
            const DS = backupDS.map(item => ({
                icon: Utils.date('H:i', item.date / 1000),
                title: Utils.date('m-d', item.date / 1000)
            }));

            Utils.shareActionSheet(
                DS,
                index => {
                    if (backupDS[index]) {
                        Utils.onConfirm('恢复会覆盖当前数据，确定恢复?', () => {
                            onGetAutoSave(backupDS[index]);
                        });
                    }
                },
                {
                    message: '请选择你要恢复的数据',
                    destructiveButtonIndex: undefined
                }
            );
        }
    };

    render() {
        const { editorState, advance, title, onOk, className } = this.props;

        return (
            <Flex className={classNames(prefixCls, className)}>
                <Flex.Item>
                    <Flex>
                        {advance && (
                            <__BtnControl
                                label={<img src={`${images}/undo.png`} />}
                                onClick={this.undo}
                            />
                        )}
                        {advance && (
                            <__BtnControl
                                className="ml-sm"
                                label={<img src={`${images}/redo.png`} />}
                                onClick={this.redo}
                            />
                        )}
                        <__BtnControl
                            className={advance ? 'ml-sm' : undefined}
                            label={<img src={`${images}/document.png`} />}
                            onClick={this.getBackup}
                        />
                    </Flex>
                </Flex.Item>
                <__BtnView
                    className="mr-sm"
                    editorState={editorState}
                    title={title}
                />
                <Button
                    type="primary"
                    size="small"
                    inline
                    onClick={() => Utils.onConfirm('确定发布贴子？', onOk)}
                >
                    发布
                </Button>

                <style jsx global>{`
                    .styles-71028254 {
                    }
                    .${prefixCls} {
                        padding: ${Styles.sm} ${Styles.wind};
                        background-color: #eee;
                        border-top: 0.01rem solid ${Styles.color_border};
                        border-bottom: 0.01rem solid ${Styles.color_border};
                    }
                `}</style>
            </Flex>
        );
    }
}
