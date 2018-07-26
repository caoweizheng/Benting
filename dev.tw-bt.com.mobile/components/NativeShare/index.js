/**
 * const prefixCls = 'styles-96473134';
 * const images = '/static/images/components/NativeShare';
 * @Author: Jack
 * @Date:   2018-04-23 14:17:53
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 16:10:31
 * @Path btWap \components\NativeShare\index.js
 */
'use strict';

import React from 'react';
import NativeShare from '../_/nativeshare';
import { Modal } from 'antd-mobile';
import Const from 'const';
import Utils from 'utils';
import UI from 'stores/ui';
import { images } from './ds';

export default class _NativeShare extends React.Component {
    nativeShare;

    componentDidMount() {
        this.initNativeShare();
        this.setShareData();
    }

    componentWillReceiveProps(nextProps) {
        if ('config' in nextProps) {
            if (this.nativeShare) {
                if (Const.__WX__) {
                    Utils.wxShareUpdate({
                        title: nextProps.config.title,
                        desc: nextProps.config.desc,
                        imgUrl: nextProps.config.icon,
                        link: nextProps.config.link
                    });
                } else {
                    this.nativeShare.setShareData(nextProps.config);
                }
            }
        }
    }

    initNativeShare = () => {
        if (this.nativeShare) return;

        const { config } = this.props;

        if (Const.__WX__) {
            Utils.wxShareUpdate({
                title: config.title,
                desc: config.desc,
                imgUrl: config.icon,
                link: config.link
            });
        } else {
            this.nativeShare = new NativeShare();
        }
    };

    setShareData = () => {
        if (!this.nativeShare) return;

        const { config } = this.props;

        this.nativeShare.setShareData(config);
    };

    preCheck = () => {
        if (Const.__WX__) {
            UI.showMask({
                children: (
                    <img
                        src={`${images}/share.png`}
                        style={{
                            width: '100%',
                            height: 'initial'
                        }}
                        onClick={() => UI.hideMask()}
                    />
                )
            });
        } else {
            this.showShareActionSheet();
        }
    };

    showShareActionSheet = () => {
        const { actionSheetConfig } = this.props;

        const DS = [
            {
                icon: <img src={`${images}/wx.png`} />,
                title: '微信',
                command: 'wechatFriend'
            },
            {
                icon: <img src={`${images}/pengyouquan.png`} />,
                title: '朋友圈',
                command: 'wechatTimeline'
            },
            {
                icon: <img src={`${images}/qq.png`} />,
                title: 'QQ',
                command: 'qqFriend'
            },
            {
                icon: <img src={`${images}/qzone.png`} />,
                title: 'QQ空间',
                command: 'qZone'
            },
            {
                icon: <img src={`${images}/weibo.png`} />,
                title: '微博',
                command: 'weibo'
            },
            {
                icon: <img src={`${images}/more.png`} />,
                title: '更多',
                command: 'default'
            }
        ];

        Utils.shareActionSheet(
            DS,
            index => {
                if (DS[index]) {
                    try {
                        this.nativeShare.call(DS[index].command);
                    } catch (err) {
                        this.onShareFail();
                    } finally {
                        Utils.hideActionSheet();
                    }
                }
            },
            {
                message: '分享到',
                destructiveButtonIndex: undefined,
                ...actionSheetConfig
            }
        );
    };

    onShareFail = () => {
        const { config } = this.props;

        Modal.prompt(
            null,
            '您的浏览器不支持分享功能，可手动复制以下链接发送给您的朋友',
            [
                {
                    text: '取消'
                },
                {
                    text: '好的'
                }
            ],
            'plain-text',
            config.link
        );
    };

    render() {
        const { config, children } = this.props;

        return <div onClick={this.preCheck}>{children}</div>;
    }
}
