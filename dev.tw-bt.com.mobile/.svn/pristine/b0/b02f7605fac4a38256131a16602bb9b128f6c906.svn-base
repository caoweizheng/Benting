/**
 * const prefixCls = 'styles-15335343';
 * const images = '/static/images/components/FixedTextarea';
 * @Author: Jack
 * @Date:   2017-12-22 09:34:12
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 16:07:59
 * @Path btWap \components\FixedTextarea\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex, Button, InputItem, Icon } from 'antd-mobile';
import Animate from '../Animate';
import EmojiPicker from '../EmojiPicker';
import Img from '../Img';
import Textarea from '../Textarea';
import Upload from '../Upload';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';
import G from 'stores/g';
import { images } from './ds';

const prefixCls = 'c-fixed-textarea';
const localStorageKey = `${Const.__LS_PREFIX__}${prefixCls}`;
const defaultState = {
    showTextarea: false,
    showEmojiPicker: false,
    focus: false,
    value: '',
    fileId: ''
};

export default class FixedTextarea extends React.Component {
    static propsTypes = {
        placeholder: PropTypes.string,
        show: PropTypes.bool,
        showEmoji: PropTypes.bool,
        showUploadPicButton: PropTypes.bool,
        showCoin: PropTypes.bool,
        onSubmit: PropTypes.func,
        onClose: PropTypes.func
    };

    static defaultProps = {
        placeholder: '评论：',
        show: false,
        showEmoji: true,
        showUploadPicButton: false,
        showCoin: false,
        onSubmit: Function.prototype,
        onClose: Function.prototype
    };

    state = {
        ...defaultState,
        value: this.props.value || ''
    };
    iosScrollTop = 0;

    componentDidMount() {
        const { showCoin } = this.props;

        if (showCoin) {
            G.fetchWalletInfo();
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('show' in nextProps) {
            if (!nextProps.show) {
                //解决IOS fixed问题
                document.body.scrollTop = this.iosScrollTop;
                this.setState(defaultState);
            } else {
                this.setState(
                    {
                        showTextarea: true
                    },
                    () => this.focus()
                );
            }
        }
    }

    componentWillUnmount() {
        document.body.style.overflowY = '';
    }

    focus = () => {
        //解决IOS fixed问题
        this.iosScrollTop = document.body.scrollTop;
        document.getElementById(prefixCls).focus();
    };

    onFocus = () => {
        this.setState({
            showEmojiPicker: false,
            focus: false
        });
    };

    onBlur = () => {
        this.setState({ focus: false });
    };

    onChange = value => {
        this.setState({
            value
        });
    };

    onPick = emoji => {
        const { value } = this.state;

        this.setState({
            value: `${value}${emoji}`
        });
    };

    onSubmit = () => {
        const { showUploadPicButton, onSubmit } = this.props;
        const { value, fileId } = this.state;

        if (showUploadPicButton) {
            onSubmit({
                value,
                id: fileId
            });
        } else {
            onSubmit(value);
        }
    };

    onCancel = () => {
        const { onClose } = this.props;

        Utils.hideActionSheet();
        this.setState(defaultState, () => {
            onClose();
        });
    };

    onSelectPic = fileId => {
        this.setState({ fileId });
    };

    renderMask() {
        return <div className="am-modal-mask" />;
    }

    renderPic() {
        const { fileId } = this.state;
        const localUploadPicDS = Utils.lsGet(localStorageKey, []);
        const DS = [
            {
                icon: (
                    <img
                        src={`${images}/add.png`}
                        style={{ width: '1rem', height: '1rem' }}
                    />
                ),
                title: '上传图片'
            }
        ];
        localUploadPicDS.forEach((item, index) => {
            DS.push({
                icon: (
                    <Img
                        src={Utils.getAppImgUrl(item.id)}
                        size="1.04rem"
                        style={{ borderRadius: '.08rem' }}
                    />
                ),
                title: index + 1,
                fileId: item.id
            });
        });

        if (fileId) {
            return (
                <div
                    className="ml-sm"
                    style={{
                        backgroundImage: `url(${Utils.getAppImgUrl(fileId)})`
                    }}
                >
                    <img
                        className={`${prefixCls}__img-clear`}
                        src={`${images}/close.png`}
                        onClick={e => {
                            e.stopPropagation();

                            this.setState({ fileId: '' });
                        }}
                    />

                    <style jsx>{`
                        .c-fixed-textarea {
                        }
                        div {
                            display: inline-block;
                            position: relative;
                            width: 1.6rem;
                            height: 1.6rem;
                            background-repeat: no-repeat;
                            background-position: center;
                            background-size: cover;
                            border: 0.01rem solid ${Styles.color_border};
                            border-radius: ${Styles.radius_xs};
                        }
                    `}</style>
                    <style jsx global>{`
                        .c-fixed-textarea {
                        }
                        .${prefixCls}__img-clear {
                            position: absolute;
                            right: ${Styles.xs};
                            top: ${Styles.xs};
                            width: 0.6rem;
                            height: 0.6rem;
                            border-radius: 50%;
                        }
                    `}</style>
                </div>
            );
        }

        return (
            <img
                className="ml-sm"
                src={`${images}/pic.png`}
                style={{
                    width: '0.6rem',
                    height: '0.6rem'
                }}
                onClick={() => {
                    this.setState({ showEmojiPicker: false });
                    Utils.hideActionSheet();
                    Utils.shareActionSheet(
                        DS,
                        index => {
                            if (index === 0) {
                                return new Promise((resolve, reject) => {
                                    document
                                        .querySelector(
                                            `.${prefixCls}__upload-image > input`
                                        )
                                        .click();
                                    reject('waiting for upload finish.');
                                });
                            } else if (index < 11) {
                                if (index === -1 || index === DS.length) return false;

                                this.onSelectPic(DS[index].fileId);
                            }
                        },
                        {
                            message: '选择图片',
                            destructiveButtonIndex: undefined
                        }
                    );
                }}
            />
        );
    }

    renderTextarea() {
        const {
            placeholder,
            showEmoji,
            showUploadPicButton,
            showCoin,
            disabled,
            onSubmit
        } = this.props;
        const { showEmojiPicker, focus, value } = this.state;

        return (
            <div>
                <Textarea
                    id={prefixCls}
                    name={prefixCls}
                    value={this.props.value || value}
                    placeholder={placeholder}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />
                <Flex className="mt-sm" align="start">
                    <Flex.Item>
                        <Flex align="start">
                            {showEmoji &&
                                (showEmojiPicker && !focus ? (
                                    <img
                                        src={`${images}/emoji_fill.png`}
                                        style={{
                                            width: '0.6rem',
                                            height: '0.6rem'
                                        }}
                                        onClick={() =>
                                            this.setState({
                                                showEmojiPicker: !showEmojiPicker
                                            })}
                                    />
                                ) : (
                                    <img
                                        src={`${images}/emoji.png`}
                                        style={{
                                            width: '0.6rem',
                                            height: '0.6rem'
                                        }}
                                        onClick={() => {
                                            Utils.hideActionSheet();
                                            this.setState({
                                                showEmojiPicker: !showEmojiPicker
                                            });
                                        }}
                                    />
                                ))}
                            {showUploadPicButton && this.renderPic()}
                            {showCoin && this.renderCoin()}
                        </Flex>
                    </Flex.Item>
                    <a
                        className="text-sub"
                        style={{ lineHeight: '0.6rem' }}
                        onClick={this.onCancel}
                    >
                        取消
                    </a>
                    <Button
                        className="ml-md"
                        type="primary"
                        inline
                        size="small"
                        disabled={!(this.props.value || value)}
                        onClick={this.onSubmit}
                    >
                        回复
                    </Button>
                </Flex>

                <style jsx>{`
                    .c-fixed-textarea {
                    }
                    div {
                        position: fixed;
                        z-index: ${Styles.z_fixed_textarea};
                        top: 0;
                        right: 0;
                        left: 0;
                        padding: ${Styles.wind} ${Styles.wind} ${Styles.sm};
                        background-color: #fff;
                    }
                    div :global(texteara) {
                        position: static !important;
                    }
                `}</style>
            </div>
        );
    }

    renderEmojiPicker() {
        return (
            <div className={`${prefixCls}__emoji-picker`}>
                <EmojiPicker onPick={this.onPick} />

                <style jsx>{`
                    .c-fixed-textarea {
                    }
                    div {
                        position: fixed;
                        z-index: ${Styles.z_fixed_textarea};
                        right: 0;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        background-color: #fff;
                        border-top: 0.01rem solid ${Styles.color_border};
                    }
                `}</style>
            </div>
        );
    }

    renderUpload() {
        return (
            <Upload
                className={`${prefixCls}__upload-image`}
                beforeUpload={() => Utils.loading('上传中...')}
                style={{
                    display: 'none'
                }}
                onSuccess={(result, file) => {
                    const { code, data } = result;

                    if (code !== 0) {
                        Utils.hideToast();
                        Utils.light(`文件上传失败, ${result.err}`);
                        return;
                    }

                    /*========== 缓存上传图片 start ==========*/
                    const localUploadPicDS = Utils.lsGet(localStorageKey, []);
                    const date = new Date().valueOf();

                    localUploadPicDS.unshift({
                        id: data.fileId,
                        date
                    });

                    //保存数不大于10个
                    if (localUploadPicDS.length > 10) localUploadPicDS.pop();
                    Utils.lsSet(localStorageKey, localUploadPicDS);
                    /*========== 缓存上传图片 end ==========*/

                    this.setState({
                        fileId: data.fileId
                    });

                    Utils.hideToast();
                    Utils.hideActionSheet();
                }}
            />
        );
    }

    renderCoin() {
        const { sysAmount = '0.00' } = G.getState('walletInfo');

        return (
            <Flex style={{ height: '0.6rem' }}>
                <img
                    src={`${Const.__IMAGES__}/coin.png`}
                    style={{ width: '0.32rem', height: '0.32rem' }}
                />
                <span className="text-xs text-sub ml-xs">金币：</span>
                <span className="text-xs text-primary">{sysAmount}</span>
                <Button
                    className="btn-primary ml-sm"
                    size="small"
                    inline
                    onClick={() =>
                        Utils.router.push('/person/wallet/coin_desc')}
                >
                    获取
                </Button>
            </Flex>
        );
    }

    render() {
        const { className, showUploadPicButton } = this.props;
        const { showTextarea, showEmojiPicker, focus } = this.state;

        const isShow = showTextarea || showEmojiPicker; //组件是否展示中

        return (
            <div className={classNames(prefixCls, className)}>
                <Animate type="fade">{isShow && this.renderMask()}</Animate>
                <div className={classNames(prefixCls, className)}>
                    <Animate type="top">
                        {showTextarea && this.renderTextarea()}
                    </Animate>
                    <Animate type="bottom">
                        {/*focus时总是不显示EmojiPicker*/}
                        {!focus && showEmojiPicker && this.renderEmojiPicker()}
                    </Animate>
                </div>
                {showUploadPicButton && this.renderUpload()}
            </div>
        );
    }
}
