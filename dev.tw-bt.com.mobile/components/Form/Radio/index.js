/**
 * const prefixCls = 'styles-42353953';
 * const images = '/static/images/components/Form/Radio';
 * @Author: Jack
 * @Date:   2018-01-12 16:13:01
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-12 16:19:33
 * @Path btWap \components\Form\Radio\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { List, Radio } from 'antd-mobile';
const RadioItem = Radio.RadioItem;
import _utils from '../_utils';

const prefixCls = 'styles-42353953';

const _Radio = props => {
    const {
        form,
        option,
        name,
        label,
        initialValue,
        data,
        className,
        ...other
    } = props;

    return (
        <div className={classNames(prefixCls, className)}>
            {data.map(item => (
                <RadioItem
                    key={item.value}
                    checked={initialValue === item.value}
                    onChange={() => this.onChange(item.value)}
                >
                    {item.label}
                </RadioItem>
            ))}

            <style jsx global>{``}</style>
        </div>
    );
};

export default _Radio;
