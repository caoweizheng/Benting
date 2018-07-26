/**
 * const prefixCls = 'styles-20454689';
 * const images = '/static/images/src/index/Chat';
 * @Author: Jack
 * @Date:   2018-05-03 11:43:13
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-04 09:40:43
 * @Path btWap \src\index\Chat\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Flex, List } from 'antd-mobile';
import { ImgView } from 'components';
import { Layout } from 'src/_';
import _FixedTextarea from './_FixedTextarea';
import _Item from './_Item';
import _ItemMe from './_ItemMe';
import _Time from './_Time';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import UI from 'stores/ui';
import store from './store';
import { prefixCls, wrapCls } from './ds';

@inject(store)
@observer
export default class Chat extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentDidMount() {
        const { $ } = this.context;
        const { id } = $.getParams().params;
        const { niname } = $.getState('toUserInfo');
        const num = $.getState('num');

        UI.header({
            bd: id ? niname : `讨论组 (${num}人在线)`,
            ft: id ? null : (
                <img
                    src={`${Const.__IMAGES__}/icon/group.png`}
                    style={{
                        width: '0.44rem',
                        height: '0.44rem'
                    }}
                    onClick={() => Utils.router.push('/chat_info')}
                />
            )
        });

        setTimeout(() => {
            document.querySelector(wrapCls).scrollTop = 99999;
        }, 0);
    }

    componentWillUnmount() {
        UI.resetHeader();
    }

    render() {
        const { $ } = this.context;
        const { imgView } = $.getState();
        const { userId } = $.getState('userInfo');
        const { niname } = $.getState('toUserInfo');
        const chatList = $.getState('chatList');

        return (
            <Layout
                className={prefixCls}
                wrapStyle={{
                    position: 'initial'
                }}
                title={niname ? niname : '聊天'}
            >
                <Flex className={`${prefixCls}__container`} direction="column">
                    <Flex.Item className={`${prefixCls}__wrap`}>
                        {chatList.list.map((item, index) => {
                            let showTime;
                            if (index === 0) {
                                showTime = true;
                            } else {
                                if (item.createTime - chatList.list[index - 1].createTime > 60) {
                                    showTime = true;
                                }
                            }

                            if (showTime) {
                                if (item.userId === userId) {
                                    return (
                                        <div key={index}>
                                            <_Time ctime={item.createTime} />
                                            <_ItemMe {...item} />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={index}>
                                            <_Time ctime={item.createTime} />
                                            <_Item {...item} />
                                        </div>
                                    );
                                }
                            } else {
                                if (item.userId === userId) {
                                    return <_ItemMe key={index} {...item} />;
                                } else {
                                    return <_Item key={index} {...item} />;
                                }
                            }
                        })}
                    </Flex.Item>
                    <_FixedTextarea />
                    {imgView.show && (
                        <ImgView
                            show={imgView.show}
                            current={imgView.current}
                            data={imgView.data.slice()}
                            onClose={$.hideImgView}
                        />
                    )}
                </Flex>

                <style jsx global>{`
                    .styles-20454689 {
                        min-height: 100vh !important;
                        padding-bottom: 0 !important;
                    }
                    .${prefixCls}__container {
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                    }
                    .${prefixCls}__wrap {
                        width: 100%;
                        padding: 0.8rem ${Styles.wind} 1.6rem;
                        overflow: scroll;
                    }
                `}</style>
            </Layout>
        );
    }
}
