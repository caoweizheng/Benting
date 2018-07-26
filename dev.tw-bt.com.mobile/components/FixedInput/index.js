/**
 * const prefixCls = 'styles-27134207';
 * const images = '/static/images/components/FixedInput';
 * @Author: Jack
 * @Date:   2017-06-26 17:35:37
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-08 15:19:35
 * @Path btWap \components\FixedInput\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Flex, Button, InputItem } from 'antd-mobile';
import Styles from 'styles';
import G from 'stores/g';

const prefixCls = 'c-fixed-input';

const FixedInput = props => {
    const {
        placeholder = '说点什么吧...',
        onInputClick,
        className,
        children,
        ...other
    } = props;
    const tk = G.getState('tk');

    let extra;
    if (tk) {
        if (children) {
            extra = <div className="ml-sm">{children}</div>;
        } else {
            extra = (
                <Button
                    className="ml-sm"
                    type="primary"
                    size="small"
                    disabled={true}
                >
                    发送
                </Button>
            );
        }
    }

    return (
        <Flex className={classNames(prefixCls, className)}>
            <Flex.Item>
                {tk ? (
                    <div
                        className={`${prefixCls}__placeholder`}
                        onClick={onInputClick}
                    >
                        {placeholder}
                    </div>
                ) : (
                    <p className={`${prefixCls}__btn-login`}>
                        <span>登录后才能操作，</span>
                        <a
                            className="text-main"
                            onClick={() => {
                                G.setJump();
                                Utils.router.replace('/login');
                            }}
                        >
                            前往
                        </a>
                    </p>
                )}
            </Flex.Item>
            {extra}

            <style jsx global>{`
                .c-fixed-input {
                    position: fixed;
                    z-index: ${Styles.z_fixed_input};
                    left: 0;
                    right: 0;
                    bottom: 0;
                    padding: ${Styles.sm} ${Styles.wind};
                    background-color: #fff;
                    border-top: 0.01rem solid ${Styles.color_border};
                }
                .${prefixCls} .am-list-item .am-input-control input:disabled {
                    background-color: ${Styles.color_bg};
                }
                .${prefixCls}__input {
                    width: 100%;
                    height: 0.6rem !important;
                    min-height: 0.6rem !important;
                    padding: ${Styles.xs} ${Styles.sm};
                    background-color: ${Styles.color_bg};
                    border-radius: ${Styles.radius_xs};
                }
                .${prefixCls}__input:after {
                    content: initial;
                }
                .${prefixCls}__input input {
                    font-size: ${Styles.font_md};
                    color: ${Styles.color_font_sub};
                }
                .${prefixCls}__placeholder {
                    height: 0.6rem;
                    min-height: 0.6rem;
                    padding: ${Styles.xs} ${Styles.sm};
                    line-height: 1.4;
                    color: ${Styles.color_font_sub};
                    background-color: ${Styles.color_bg};
                    border-radius: ${Styles.radius_xs};
                }
                .${prefixCls}__btn-login {
                    padding: 0.12rem ${Styles.sm};
                    font-size: ${Styles.font_md};
                    color: ${Styles.color_font_sub};
                    background-color: ${Styles.color_bg};
                    border-radius: ${Styles.radius_xs};
                }
            `}</style>
        </Flex>
    );
};

export default FixedInput;
