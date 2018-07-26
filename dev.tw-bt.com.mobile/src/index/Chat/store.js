/**
 * const prefixCls = 'styles-71541171';
 * const images = '/static/images/src/index/Chat';
 * @Author: Jack
 * @Date:   2018-05-03 11:46:44
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-24 12:00:25
 * @Path btWap \src\index\Chat\store.js
 */
'use strict';

import React from 'react';
import RWS from 'es6-rws';
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import G from 'stores/g';
import { wrapCls } from './ds';

class store extends common {
    socket;
    tk;
    DS = [];
    realHeight = 0;

    @observable
    state = this.initState({
        //fixedTextarea
        state: {
            showEmoji: false,
            value: '',
            imgView: {
                show: false,
                current: 0,
                data: []
            }
        },

        //用户信息
        userInfo: {},

        //私聊他人信息
        toUserInfo: {},

        //聊天人数
        num: {},

        //聊天记录
        chatList: Const.__EMPTY__
    });

    initFetch = {
        static: [['fetchUserInfo', 'userInfo']],
        update: ['fetchChatList']
        //every: ['fetchChatOnlineNum']
    };

    storeDidMount() {
        if (Const.__SERVER__) return;

        const { id } = this.getParams().params;

        //有id的为私聊
        if (id) {
            this.fetchToUserInfo();
        }

        try {
            if (!this.socket) {
                this.socket = new RWS(Const.__WSS__);

                //socket收到推送
                this.socket.onmessage = e => {
                    const { userId } = this.getState('userInfo');

                    let data, message;
                    try {
                        data = JSON.parse(e.data);
                        message = JSON.parse(data.message);
                    } catch (ex) {}

                    //消息结构丢失和不是当前聊天信息都不能append
                    if (!message || id !== data.userId) return;

                    //message有id的为图片消息
                    if (message.id) {
                        this.append(
                            {
                                userId: data.userId,
                                faceImg: data.faceImg,
                                niname: data.niname,
                                img: message.id,
                                con: '',
                                createTime: Math.floor(new Date().valueOf() / 1000)
                            },
                            userId === data.userId
                        );
                    } else {
                        this.append(
                            {
                                userId: data.userId,
                                faceImg: data.faceImg,
                                niname: data.niname,
                                img: '',
                                con: message.value,
                                createTime: Math.floor(new Date().valueOf() / 1000)
                            },
                            userId === data.userId
                        );
                    }
                };
            } else {
                //因为socket只会创建一次，所以第二次进入私聊需要再次调用
                this.socketOpenPrivateChat();
            }
        } catch (ex) {
            console.warn('Open websocket maybe fail.');
        }

        this.socket.onopen = e => {
            this.tk = G.getState('tk');

            //告诉服务器接受推送消息
            const data = {
                servicename: 'socketweb.pushmsg',
                params: { tk: this.tk, groupId: id ? 0 : 1 }
            };
            this.socket.send(JSON.stringify(data));
            this.socketOpenPrivateChat();
        };
    }

    //私聊：进入聊天室时需要调用
    socketOpenPrivateChat = () => {
        const { id } = this.getParams().params;

        if (!id) return;

        this.socket.send(
            JSON.stringify({
                servicename: 'socketweb.openPrivateChat',
                params: { tk: this.tk, toUserId: id }
            })
        );
    };

    //私聊：离开聊天室时需要调用
    socketExitPrivateChat = () => {
        const { id } = this.getParams().params;

        if (!id) return;

        this.socket.send(
            JSON.stringify({
                servicename: 'socketweb.exitPrivateChat',
                params: { tk: this.tk, toUserId: id }
            })
        );
    };

    storeWillUnmount() {
        this.socketExitPrivateChat();

        this.realHeight = 0;
        this.socket = null;
    }

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };

    //私聊他人信息
    fetchToUserInfo = () => {
        const { id } = this.getParams().params;

        return this.fetchThenSetState('get_person_info', 'toUserInfo', {
            userId: id
        });
    };

    //在线人数
    fetchChatOnlineNum = () => {
        return this.fetchThenSetState('get_chat_online-num', 'num');
    };

    //聊天记录
    fetchChatList = async () => {
        const { id } = this.getParams().params;

        let res, data;
        if (id) {
            res = Api.P('get_chat_private-list', {
                _: {
                    limit: 200,
                    order: {
                        createTime: 'desc'
                    },
                    search: {
                        userId: id
                    }
                }
            });
        } else {
            res = Api.P('get_chat_logs', {
                _: {
                    limit: 80,
                    order: {
                        createTime: 'desc'
                    },
                    search: {
                        groupId: 1
                    }
                }
            });
        }

        data = await res;
        this.setState(
            {
                ...data,
                list: data.list.reverse()
            },
            'chatList'
        );

        return res;
    };

    /*==================== Action ====================*/
    //发送
    doComment = ({ id }) => {
        const { value } = this.getState();
        const { userId, faceImg, niname, grade } = this.getState('userInfo');

        this.socket.send(
            JSON.stringify({
                servicename: 'socketweb.sendmsg',
                params: {
                    tk: this.tk,
                    toUserId: this.getParams().params.id || '',
                    groupId: this.getParams().params.id ? 0 : 1,
                    message: JSON.stringify(id ? { id } : { value })
                }
            })
        );

        this.setState({
            showEmoji: false,
            value: ''
        });

        //造假数据
        if (this.getParams().params.id) {
            this.append(
                {
                    userId,
                    faceImg,
                    niname,
                    message: JSON.stringify(id ? { id } : { value }),
                    createTime: Math.floor(new Date().valueOf() / 1000)
                },
                true
            );
        }
    };

    //信息追加到页面中
    append = (item, isSelf) => {
        const chatList = this.getState('chatList');

        let _list;
        if (item) {
            _list = [...chatList.list, item];
        } else {
            _list = [...this.DS, ...chatList.list];
        }

        this.setState(
            {
                list: _list
            },
            'chatList'
        );

        //当滚动高度不在底部时，不滚动到底
        setTimeout(() => {
            const el = document.querySelector(wrapCls);

            if (this.realHeight === 0) {
                el.childNodes.forEach(item => {
                    this.realHeight += item.offsetHeight;
                });
            } else {
                this.realHeight += el.childNodes[el.childNodes.length - 1].offsetHeight;
            }

            //因为不同机型像素比不同，大概超过一屏高度遍不再滚到底
            const scrollTop = el.scrollTop;
            if (isSelf || (this.realHeight - scrollTop) / Const.__DPR__ < 800) {
                el.scrollTop = 99999;
            }
        }, 0);
    };

    /*==================== Page ====================*/
    //Textarea改变
    onTextareaChange = value => {
        this.setState({ value });
    };

    //选择Emoji
    onEmojiPick = emoji => {
        const { value } = this.getState();

        this.setState({
            value: `${value}${emoji}`
        });
    };

    //展开收起Emoji选择器
    toggleEmojiPicker = () => {
        const { showEmoji } = this.getState();

        this.setState({
            showEmoji: !showEmoji
        });
    };

    //收起Emoji选择器
    hideEmojiPicker = () => {
        this.setState({
            showEmoji: false
        });
    };

    //显示大图
    showImgView = img => {
        this.setState({
            imgView: {
                show: true,
                current: 0,
                data: [Utils.getAppImgUrl(img, 'scale', true)]
            }
        });
    };

    //隐藏大图
    hideImgView = () => {
        this.setState({
            imgView: {
                show: false,
                current: 0,
                data: []
            }
        });
    };
}

export default store;
