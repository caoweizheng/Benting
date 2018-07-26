/**
 * const prefixCls = 'styles-16967340';
 * const images = '/static/images/src/index/Chat';
 * @Author: Jack
 * @Date:   2018-05-03 11:48:19
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-03 15:02:35
 * @Path btWap \src\index\Chat\__Content.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Content } from 'components';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-16967340';

const __Content = (props, { $ }) => {
    let { message, con, img, isMe, className } = props;

    if (message) {
        let _message = { value: '' };
        try {
            _message = JSON.parse(message);
        } catch (ex) {}

        con = _message.value;
        img = _message.id;
    }

    return (
        <div
            className={classNames(className, 'content', {
                'content-me': isMe,
                'content-img': !!img
            })}
        >
            {img ? (
                <img
                    className="image"
                    src={Utils.getAppImgUrl(img, 'scale', true)}
                    onClick={() => $.showImgView(img)}
                />
            ) : (
                <Content style={{ wordBreak: 'break-all' }}>{con}</Content>
            )}

            <style jsx>{`
                .styles-16967340 {
                }
                .content {
                    position: relative;
                    padding: ${Styles.sm};
                    background-color: #fff;
                    border-radius: 0.08rem;
                }
                .content:before {
                    content: '';
                    position: absolute;
                    top: 0.16rem;
                    left: 0;
                    margin-left: -0.12rem;
                    border-top: 0.12rem solid transparent;
                    border-bottom: 0.12rem solid transparent;
                    border-right: 0.12rem solid #fff;
                }
                .content-me {
                    background-color: ${Styles.color_success};
                }
                .content-me:before {
                    top: 0.16rem;
                    left: initial;
                    right: 0;
                    margin-left: initial;
                    margin-right: -0.12rem;
                    border-top: 0.12rem solid transparent;
                    border-right: 0;
                    border-bottom: 0.12rem solid transparent;
                    border-left: 0.12rem solid ${Styles.color_success};
                }
                .content-img {
                    padding: 0;
                }
                .content-img:before {
                    content: initial;
                }
                .image {
                    display: inline-block;
                    vertical-align: top;
                    min-width: 1.2rem;
                    height: initial;
                    max-width: 56vw;
                    max-height: 56vh;
                    border-radius: 0.08rem;
                }
            `}</style>
        </div>
    );
};

__Content.contextTypes = {
    $: PropTypes.object
};

export default observer(__Content);
