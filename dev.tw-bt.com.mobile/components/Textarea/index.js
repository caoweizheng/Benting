/**
 * const prefixCls = 'styles-01915732';
 * const images = '/static/images/components/Textarea';
 * @Author: Jack
 * @Date:   2018-01-03 16:04:58
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-27 17:19:49
 * @Path btWap \components\Textarea\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { TextareaItem } from 'antd-mobile';
import Styles from 'styles';

const prefixCls = 'c-textarea';

const _Textarea = props => {
    const { className, ...other } = props;

    return (
        <div>
            <TextareaItem
                className={classNames(prefixCls, className)}
                placeholder="说点是什么吧..."
                clear
                rows={4}
                count={200}
                {...other}
            />

            <style jsx global>{`
                .${prefixCls} {
                    width: 100%;
                    background-color: ${Styles.color_bg};
                    border-radius: ${Styles.radius_xs};
                }
                .${prefixCls} .am-textarea-control {
                    padding-top: ${Styles.xs};
                }
                .${prefixCls} .am-textarea-clear {
                    margin-top: -${Styles.sm};
                    margin-right: ${Styles.xs};
                }
                .${prefixCls} textarea {
                    color: ${Styles.color_font_desc};
                }
            `}</style>
        </div>
    );
};

export default _Textarea;
