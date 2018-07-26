/**
 * const prefixCls = 'styles-72659228';
 * const images = '/static/images/code/btWap/components/FixedTextarea';
 * @Author: Jack
 * @Date:   2018-03-23 14:42:55
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 16:08:39
 * @Path nidosport E:\code\btWap\components\FixedTextarea\topic.js
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

const prefixCls = 'c-fixed-textarea-topic';
const localStorageKey = `${Const.__LS_PREFIX__}${prefixCls}`;
const defaultState = {
    showTextarea: false,
    showEmojiPicker: false,
    focus: false,
    value: '',
    fileId: []
};

export default class FixedTextarea extends React.Component {
    static propsTypes = {
        count: PropTypes.number,
        placeholder: PropTypes.string,
        rows: PropTypes.number,
        show: PropTypes.bool,
        showCoin: PropTypes.bool,
        showEmoji: PropTypes.bool,
        showUploadPicButton: PropTypes.any, //数字代表限制能传多少张图
        onSubmit: PropTypes.func,
        onClose: PropTypes.func
    };

    static defaultProps = {
        count: 200,
        placeholder: '评论：',
        rows: 4,
        show: false,
        showCoin: false,
        showEmoji: true,
        showUploadPicButton: 0,
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
        this.setState({ value });
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
        const _fileId = [...this.state.fileId];
        _fileId.push(fileId);

        this.setState({
            fileId: _fileId
        });
    };

    onImgClick = () => {
        const { fileId } = this.state;

        if (fileId.length < 2) return;

        const _fileId = [...fileId];
        const head = _fileId.shift();
        _fileId.push(head);

        this.setState({ fileId: _fileId });
    };

    removeHeadPic = () => {
        const { fileId } = this.state;

        if (!fileId.length) return;

        const _fileId = [...fileId];
        _fileId.shift();
        this.setState({ fileId: _fileId });
    };

    renderPic() {
        const { showUploadPicButton } = this.props;
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

        let imgs;
        if (fileId.length) {
            imgs = fileId
                .filter((item, index) => index < 3)
                .map((item, index) => {
                    const len = fileId.length < 2 ? fileId.length : 2;

                    if (index < 2) {
                        return (
                            <div
                                key={index}
                                className="img"
                                style={{
                                    zIndex: 10 - index,
                                    top: `${index * 0.08}rem`,
                                    left: `${index * 0.08}rem`,
                                    width: `${1.6 - len * 0.08}rem`,
                                    height: `${1.6 - len * 0.08}rem`,
                                    backgroundImage: `url(${Utils.getAppImgUrl(
                                        item
                                    )})`
                                }}
                                onClick={
                                    index === 0 ? this.onImgClick : undefined
                                }
                            >
                                {index === 0 && (
                                    <div
                                        className="img-clear"
                                        onClick={e => {
                                            e.stopPropagation();
                                            this.removeHeadPic();
                                        }}
                                    />
                                )}

                                <style jsx>{`
                                    .c-fixed-textarea-topic {
                                    }
                                    .img {
                                        display: inline-block;
                                        position: absolute;
                                        width: 1.6rem;
                                        height: 1.6rem;
                                        ${Styles._bg};
                                        background-color: #fff;
                                        border: 0.01rem solid #fff;
                                        border-radius: ${Styles.radius_xs};
                                    }
                                    .img-clear {
                                        position: absolute;
                                        top: 0.08rem;
                                        right: 0.08rem;
                                        width: 0.4rem;
                                        height: 0.4rem;
                                        ${Styles._bg};
                                        background-size: 128%;
                                        background-image: url(${images}/close_topic.png);
                                        background-color: #fff;
                                        border-radius: 50%;
                                        opacity: 0.64;
                                        overflow: hidden;
                                    }
                                `}</style>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} className="num">
                                {fileId.length}

                                <style jsx>{`
                                    .c-fixed-textarea-topic {
                                    }
                                    .num {
                                        display: inline-block;
                                        position: absolute;
                                        z-index: 11;
                                        right: 0.28rem;
                                        bottom: 0.24rem;
                                        width: 0.36rem;
                                        height: 0.36rem;
                                        line-height: 0.36rem;
                                        text-align: center;
                                        font-size: ${Styles.font_xs};
                                        color: #fff;
                                        background-color: #000;
                                        opacity: 0.64;
                                        border-radius: 0.08rem;
                                    }
                                `}</style>
                            </div>
                        );
                    }
                });
        }

        return (
            <Flex align="start">
                {fileId.length < showUploadPicButton && (
                    <img
                        className="ml-sm"
                        src={`${images}/pic_white.png`}
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
                                        return new Promise(
                                            (resolve, reject) => {
                                                document
                                                    .querySelector(
                                                        `.${prefixCls}__upload-image > input`
                                                    )
                                                    .click();
                                                reject(
                                                    'waiting for upload finish.'
                                                );
                                            }
                                        );
                                    } else if (index < 11) {
                                        if (index === -1 || index === DS.length)
                                            return false;

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
                )}
                {!!fileId.length && (
                    <div className="wrap-imgs ml-sm">{imgs}</div>
                )}

                <style jsx>{`
                    .c-fixed-textarea-topic {
                    }
                    .wrap-imgs {
                        display: inline-block;
                        position: relative;
                        width: 1.6rem;
                        height: 1.6rem;
                    }
                `}</style>
            </Flex>
        );
    }

    renderTextarea() {
        const {
            renderTop,
            placeholder,
            showEmoji,
            showUploadPicButton,
            showCoin,
            disabled,
            rows,
            count,
            onSubmit
        } = this.props;
        const { showEmojiPicker, focus, value } = this.state;

        return (
            <div>
                {renderTop}
                <Textarea
                    id={prefixCls}
                    className={classNames({
                        'mt-sm': !!renderTop
                    })}
                    name={prefixCls}
                    value={this.props.value || value}
                    placeholder={placeholder}
                    rows={rows}
                    count={count}
                    clear={false}
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
                                        src={`${images}/emoji_fill_white.png`}
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
                                        src={`${images}/emoji_white.png`}
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
                            {!!showUploadPicButton && this.renderPic()}
                            {showCoin && this.renderCoin()}
                        </Flex>
                    </Flex.Item>
                    <a
                        className="text-void"
                        style={{ lineHeight: '0.6rem' }}
                        onClick={this.onCancel}
                    >
                        取消
                    </a>
                    <img
                        className="img-btn ml-sm"
                        src={`${images}/btn-add.png`}
                        style={{
                            opacity: !(this.props.value || value) ? 0.5 : 1
                        }}
                        onClick={() => {
                            if (!(this.props.value || value)) {
                                return;
                            }

                            this.onSubmit();
                        }}
                    />
                </Flex>

                <style jsx>{`
                    .c-fixed-textarea-topic {
                    }
                    div {
                        position: fixed;
                        z-index: ${Styles.z_fixed_textarea};
                        top: 0;
                        right: 0;
                        left: 0;
                        padding: ${Styles.wind} ${Styles.wind} ${Styles.sm};
                        ${Styles._bg};
                        background-color: #fff;
                        background-image: url(${images}/topic.jpg);
                    }
                    div :global(texteara) {
                        position: static !important;
                    }
                    div :global(.c-textarea) {
                        box-shadow: 0.02rem 0.02rem 0.08rem rgba(0, 0, 0, 0.32)
                            inset;
                    }
                    .img-btn {
                        width: 1.36rem;
                        height: 0.52rem;
                        margin-top: 0.04rem;
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
                    .c-fixed-textarea-topic {
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

                    this.onSelectPic(data.fileId);
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
                <span className="text-xs text-success">{sysAmount}</span>
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
                <Animate type="fade">
                    {isShow && <div className="am-modal-mask" />}
                </Animate>
                <div className={classNames(prefixCls, className)}>
                    <Animate type="top">
                        {showTextarea && this.renderTextarea()}
                    </Animate>
                    <Animate type="bottom">
                        {/*focus时总是不显示EmojiPicker*/}
                        {!focus && showEmojiPicker && this.renderEmojiPicker()}
                    </Animate>
                </div>
                {!!showUploadPicButton && this.renderUpload()}
            </div>
        );
    }
}
