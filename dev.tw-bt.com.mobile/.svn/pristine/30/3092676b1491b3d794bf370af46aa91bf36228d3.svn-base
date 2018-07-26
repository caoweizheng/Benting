/**
 * ImgView 全屏图片查看 v1.1
 * const prefixCls = 'styles-20647656';
 * const images = '/static/images/components/ImgView';
 * @Author: Jack
 * @Date:   2018-01-03 16:04:58
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-08 15:15:25
 * @Path btWap \components\ImgView\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import ImageView from '../_/react-imageview';
import Icon from '../Icon';
import Styles from 'styles';

const prefixCls = 'c-img-view';

export default class ImgView extends React.Component {
    state = {
        close: false,
        data: this.props.data || [],
        hideOrigin: false,
        originKeys: {},
        current: this.props.current || 0
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            //data: nextProps.data,
            current: nextProps.current
        });
    }

    componentWillUnmount() {
        this.onClose();
    }

    //查看原图
    doViewOrigin = () => {
        const { data, originKeys, current } = this.state;

        const _data = [...data];
        const _originKeys = { ...originKeys };

        if (~_data[current].indexOf('.com/file/getimg/')) {
            _data[current] = _data[current].replace('/scale', '');
            _originKeys[current] = true;
        }

        if (~_data[current].indexOf('.com/static/uploads/')) {
            _data[current] = _data[current].replace('_scale.', '.');
            _originKeys[current] = true;
        }

        this.setState({
            data: _data,
            originKeys: _originKeys,
            current
        });
    };

    onClose = () => {
        const { onClose = Function.prototype } = this.props;

        this.setState({
            close: true
        });

        setTimeout(() => {
            this.setState({
                close: false
            });
            onClose();
        }, 700);
    };

    render() {
        const { show, hideOrigin, className } = this.props;
        const { close, current, data, originKeys } = this.state;

        if (!show) return null;

        return (
            <div
                className={classNames(prefixCls, {
                    [`${prefixCls}_closing`]: close,
                    [className]: !!className
                })}
            >
                {/*<Icon
                    className={`${prefixCls}__btn-close`}
                    type={require('svg/cross.svg')}
                    size="lg"
                    onClick={this.onClose}
                />*/}
                <ImageView
                    imagelist={data}
                    current={current}
                    close={this.onClose}
                    maxScale={4}
                    gap={0}
                    disableRotate
                    onChange={current => this.setState({ current })}
                />
                {!hideOrigin &&
                    !originKeys[current] && (
                        <span
                            className={`${prefixCls}__btn-origin`}
                            onClick={this.doViewOrigin}
                        >
                            查看原图
                        </span>
                    )}

                <style jsx global>{`
                    .c-img-view {
                    }
                    .${prefixCls} {
                        position: fixed;
                        z-index: ${Styles.z_img_view};
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                    }
                    .${prefixCls}_closing {
                        opacity: 0;
                        transition: opacity 600ms ease;
                    }
                    .${prefixCls}__btn-close {
                        position: absolute;
                        z-index: ${Styles.z_img_view + 1};
                        top: 0.16rem;
                        right: 0.16rem;
                        color: rgba(255, 255, 255, 0.8);
                        background-color: rgba(0, 0, 0, 0.48);
                        border: 16px solid rgba(0, 0, 0, 0.01);
                        border-radius: 50%;
                    }
                    .${prefixCls}__btn-origin {
                        position: absolute;
                        z-index: ${Styles.z_img_view + 1};
                        bottom: ${Styles.space};
                        right: 0.2rem;
                        font-size: 0.28rem;
                        color: rgba(255, 255, 255, 0.8);
                        padding: ${Styles.xs} ${Styles.sm};
                        background-color: rgba(0, 0, 0, 0.48);
                        border-radius: ${Styles.radius_md};
                    }

                    //react-imageview rewrite
                    .${prefixCls} .hide {
                        opacity: 0;
                        transition: opacity 0.2s;
                    }
                    .${prefixCls} .imageview {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: ${Styles.z_img_view};
                        background-color: #000;
                        overflow: hidden;
                        animation: easeshow 0.25s;
                    }
                    @keyframes easeshow {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                    .${prefixCls} .imagelist {
                        display: -webkit-box;
                        height: 100%;
                    }
                    .${prefixCls} .imagelist .imagelist-item {
                        display: -webkit-box;
                        width: 100%;
                        text-align: center;
                        position: relative;
                        background-color: #000;
                        margin-right: 0;
                    }
                    .${prefixCls}
                        .imagelist
                        .imagelist-item
                        .imagelist-item-img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        max-width: 100%;
                        max-height: 100%;
                    }
                    .${prefixCls} .page {
                        position: fixed;
                        bottom: ${Styles.space};
                        left: 50%;
                        padding: ${Styles.xs} ${Styles.sm};
                        font-size: ${Styles.font_sm};
                        color: rgba(255, 255, 255, 0.8);
                        background-color: rgba(0, 0, 0, 0.48);
                        border-radius: ${Styles.radius_md};
                        transform: translateX(-50%);
                    }
                    .${prefixCls} .spinner {
                        position: absolute;
                        top: 45%;
                        left: 50%;
                        width: 0.4rem;
                        height: 0.4rem;
                        transform: translate(-50%, -50%);
                    }
                    .${prefixCls} .double-bounce1,
                    .double-bounce2 {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #333;
                        border-radius: 50%;
                        opacity: 0.6;
                        animation: sk-bounce 2s infinite ease-in-out;
                    }
                    .${prefixCls} .double-bounce2 {
                        animation-delay: -1s;
                    }
                    @keyframes sk-bounce {
                        0%,
                        100% {
                            transform: scale(0);
                        }
                        50% {
                            transform: scale(1);
                        }
                    }
                `}</style>
            </div>
        );
    }
}
