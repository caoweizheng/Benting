/**
 * const prefixCls = 'styles-38880602';
 * @Author: Jack
 * @Date:   2017-11-30 18:32:59
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-31 00:42:20
 * @Path nidosport@next \components\Form\_utils.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';

class utils {
    /**
     * 构造一个根据name生成的表单项目唯一类名
     * @version 170311 1.0
     * @param  {String} *name
     * @return {String}
     */
    getFormItemCls(name) {
        return `c-form_${name}`;
    }

    /**
     * 构造必填label
     * @version 170208 1.0
     * @param  {Element} content
     * @return {Element}
     */
    getLabel(content, isRequired) {
        return (
            <label
                className={classNames('t-label', {
                    't-label_required': isRequired,
                    'text-sm': content.length > 4
                })}
            >
                {content}
            </label>
        );
    }

    /**
     * 根据option，构造label
     * @version 170208 1.0
     * @param  {Object} option
     * @return {Func}
     */
    getLabelDecorator(option = { rules: [] }) {
        let required = false;

        option.rules.forEach(item => {
            if (item.required) {
                required = true;
                return false;
            }
        });

        return content => this.getLabel(content, required);
    }
}

export default new utils();
