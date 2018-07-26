/**
 * const prefixCls = 'styles-12507859';
 * const images = '/static/images/components/RichEditor';
 * @Author: Jack
 * @Date:   2017-12-26 15:34:27
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 10:05:15
 * @Path btWap \components\RichEditor\_Title.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { TextareaItem } from 'antd-mobile';

const prefixCls = 'styles-12507859';

const _title = props => {
    const { value, onChange, className } = props;

    return (
        <div>
            <TextareaItem
                className={classNames(prefixCls, className)}
                placeholder="输入贴子标题"
                autoHeight
                clear
                value={value}
                onChange={onChange}
            />

            <style jsx global>{`
                .styles-12507859 {
                }
                .${prefixCls} {
                    width: 80%;
                    margin-left: 10%;
                    padding: 0 ${Styles.sm} !important;
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
                .${prefixCls} .am-textarea-clear {
                    margin-top: 0;
                }
                .${prefixCls} textarea {
                    text-align: center;
                    font-size: ${Styles.font_lg};
                }
                .${prefixCls} textarea::-webkit-input-placeholder {
                    color: #aaa;
                }
            `}</style>
        </div>
    );
};

export default _title;
