/**
 * const prefixCls = 'styles-42725124';
 * const images = '/static/images/src/event/floor/Index';
 * @Author: Jack
 * @Date:   2018-01-13 18:05:48
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-03 12:13:57
 * @Path btWap \src\event\floor\Index\__Media.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Img } from 'components';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-42725124';
const getImgUrl = str => {
    str = str.toString();

    //视频截图没有thumb，直接拿原图
    if (Utils.isPoster(str)) {
        return Utils.getImgUrl(str);
    }

    if (
        Utils.validate(str, 'number') ||
        ~str.indexOf('http://') ||
        ~str.indexOf('https://') ||
        ~str.indexOf('static/uploads/')
    ) {
        return str;
    }

    return `http://bbs.tw-bt.com/data/attachment/forum/${str}`;
};

const __Media = props => {
    let { data, className } = props;

    //暂时去掉.zip
    data = data.filter(item => item && item.toString().indexOf('.zip') === -1);

    if (data.length === 0) return null;

    return (
        <div className={classNames(prefixCls, className)}>
            {data
                .filter((item, index) => index < 4)
                .map((item, index) => (
                    <Img
                        key={index}
                        className={`${prefixCls}__img`}
                        src={getImgUrl(item)}
                    />
                ))}

            <style jsx global>{`
                .styles-42725124 {
                }
                .${prefixCls}__img {
                    width: 23%;
                    padding-bottom: 23%;
                    margin-right: 2.66666%;
                }
                .${prefixCls}__img:nth-of-type(4) {
                    margin-right: 0;
                }
            `}</style>
        </div>
    );
};

export default __Media;
