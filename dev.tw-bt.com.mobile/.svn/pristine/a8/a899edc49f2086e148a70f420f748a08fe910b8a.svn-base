/**
 * const prefixCls = 'styles-55642593';
 * const images = '/static/images/src/person/Index';
 * @Author: Jack
 * @Date:   2018-01-03 16:04:59
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:30:19
 * @Path btWap \src\person\Index\_UserCenter.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Badge } from 'antd-mobile';
import Utils from 'utils';
import Styles from 'styles';
import { images, userData } from './ds';

const prefixCls = 'styles-55642593';

const _UserCenter = (props, { $ }) => {
    const { className } = props;
    const { replyNum = 0 } = $.getState('messageCount');
    const { assemblyId } = $.getState('merchantInfo');
    const { messageIsRead } = $.getState();

    return (
        <div className={classNames(prefixCls, className, 'p-sw')}>
            <div className="text-center text-md text-title">个人中心</div>
            <div className="list">
                {userData.map(item => (
                    <div
                        key={item.tit}
                        className="item text-center mt-lg"
                        style={!item.href ? { opacity: 0.32 } : {}}
                        onClick={() => {
                            if (item.href) {
                                Utils.router.push(item.href);
                            } else {
                                Utils.light('即将开放');
                            }

                            if (item.tit === '我的消息') {
                                $.setState({ messageIsRead: true });
                            }
                        }}
                    >
                        <div className="img_box">
                            <img src={item.img} />
                            {!messageIsRead &&
                                item.tit === '我的消息' &&
                                !!replyNum && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-0.15rem',
                                            right: '-0.15rem'
                                        }}
                                    >
                                        <Badge
                                            size="lager"
                                            hot
                                            text={replyNum}
                                            overflowCount={99}
                                        />
                                    </div>
                                )}
                        </div>
                        <div className="text-sm mt-xs">{item.tit}</div>
                    </div>
                ))}

                {!!assemblyId && (
                    <div
                        className="item text-center mt-lg"
                        onClick={() => Utils.router.push('/person/merchant')}
                    >
                        <div className="img_box">
                            <img src={`${images}/merchant.png`} />
                        </div>
                        <div className="text-sm mt-xs">商家中心</div>
                    </div>
                )}
            </div>

            <style jsx>{`
                .styles-55642593 {
                }
                .list {
                    border-top: 0.01rem solid ${Styles.color_border};
                    margin-top: ${Styles.space};
                }
                .item {
                    position: relative;
                    width: 25%;
                    display: inline-block;
                }
                .item img {
                    width: 0.44rem;
                    height: 0.44rem;
                }
                .img_box {
                    position: relative;
                    display: inline-block;
                }
            `}</style>
            <style jsx global>{`
                .styles-55642593 {
                }
                .${prefixCls} {
                    background: #fff;
                }
            `}</style>
        </div>
    );
};

_UserCenter.contextTypes = {
    $: PropTypes.object
};

export default observer(_UserCenter);
