/**
 * const prefixCls = 'styles-13810920';
 * const images = '/static/images/components/RichEditor';
 * @Author: Jack
 * @Date:   2017-12-26 14:59:55
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 16:11:00
 * @Path btWap \components\RichEditor\__BtnEmoji.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import __BtnControl from './__BtnControl';
import EmojiPicker from '../EmojiPicker';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'styles-13810920';

export default class __BtnEmoji extends React.Component {
    state = {
        showEmojiPicker: false
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.focused) {
            this.setState({
                showEmojiPicker: false
            });
        }
    }

    toggleEmojiPicker = () => {
        const { showEmojiPicker } = this.state;

        this.setState({
            showEmojiPicker: !showEmojiPicker
        });
    };

    doAdd = value => {
        const { onAdd } = this.props;

        onAdd('emoji', { value }, value);
    };

    render() {
        const { focused, className } = this.props;
        const { showEmojiPicker } = this.state;

        return (
            <div className={classNames(prefixCls, className)}>
                <__BtnControl
                    label={<img src={`${images}/emoji.png`} />}
                    onClick={this.toggleEmojiPicker}
                />
                <EmojiPicker
                    className={classNames({
                        [`${prefixCls}__emoji-picker`]: true,
                        //focus时要隐藏
                        [`${prefixCls}__emoji-picker_open`]:
                            !focused && showEmojiPicker
                    })}
                    onPick={this.doAdd}
                />

                <style jsx global>{`
                    .styles-13810920 {
                    }
                    .${prefixCls} {
                        display: inline-block;
                        width: 0.6rem;
                        height: 0.6rem;
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
