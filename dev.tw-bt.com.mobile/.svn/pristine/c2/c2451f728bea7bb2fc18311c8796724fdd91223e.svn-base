/**
 * rc-form 规则
 * const prefixCls = 'styles-19001770';
 * @Author: Jack
 * @Date:   2017-04-21 10:15:22
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-11-30 18:21:24
 * @Path nidosport@next \common\const\rules.js
 */
'use strict';

import React from 'react';

/**
 * rc-form rules生成器
 * @version 170310 1.0
 * @version 170421 1.1 fixed bug
 * @version 170501 1.2 当required为false时，没有值时不验证
 * @param  {String}  *type      规则
 * @param  {Boolean} isRequierd 是否必须
 * @return {Object}  rc-form    Decorator rules
 */
const genRules = (type, isRequired = true) => {
    const rules = [];
    const required = {
        required: true,
        message: '必填'
    };

    isRequired && rules.push(required);

    switch (type) {
        //async-validator没有提供以下这些验证，手动实现
        case 'email':
        case 'wechat':
        case 'number':
            rules.push({
                validator(rule, value, callback) {
                    //callback需要至少执行一次
                    //https://github.com/ant-design/ant-design/issues/5155
                    let errMsg;

                    //v1.2
                    if (isRequired || (!isRequired && value)) {
                        if (!Utils.validate(value, type)) errMsg = `格式错误`;
                    }

                    callback(errMsg);
                }
            });
            break;

        //170511
        case 'mobile':
            rules.push({
                validator(rule, value, callback) {
                    let errMsg;

                    if (isRequired || (!isRequired && value)) {
                        if (
                            !Utils.validate(
                                value && value.replace(/\s/g, ''),
                                type
                            )
                        )
                            errMsg = `格式错误`;
                    }

                    callback(errMsg);
                }
            });
            break;

        //170511
        case 'password':
            rules.push({
                validator(rule, value, callback) {
                    let errMsg;

                    if (isRequired || (!isRequired && value)) {
                        if (
                            value == null ||
                            value.length < 2 ||
                            value.length > 16
                        ) {
                            errMsg = `密码长度应为2-16位`;
                        }

                        if (!errMsg) {
                            const reg = new RegExp(/^[0-9A-Za-z]+$/);
                            if (!reg.test(value)) {
                                errMsg = `密码不能包含空格或者特殊符号`;
                            }
                        }
                    }

                    callback(errMsg);
                }
            });
            break;

        //20170506
        case 'bank':
            rules.push({
                validator(rule, value, callback) {
                    let errMsg;

                    if (isRequired || (!isRequired && value)) {
                        if (!Utils.bankCheck(value)) errMsg = `银行卡校验错误`;
                    }

                    callback(errMsg);
                }
            });
            break;

        //数字 len
        //[数字，数字] range
        //string, boolean, method, regexp, integer, float, array, object, enum, date, url, hex
        default:
            if (typeof type === 'number') {
                rules.push({
                    len: type,
                    message: `长度至少为${type}位`
                });
            } else if (Array.isArray(type)) {
                rules.push({
                    min: type[0],
                    max: type[1],
                    message: `长度应为${type[0]}-${type[1]}位`
                });
            } else if (type) {
                rules.push({
                    type,
                    message: '格式错误'
                });
            }

            break;
    }

    return { rules };
};

export default {
    required: genRules(),
    gen: genRules
};
