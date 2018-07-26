/**
 * const prefixCls = 'styles-04566576';
 * const images = '/static/images/src/bbs/_/List';
 * @Author: Jack
 * @Date:   2017-12-26 10:00:43
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-04-11 11:34:21
 * @Path btWap \src\bbs\_\List\__Media.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Img } from 'components';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-04566576';
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
    const { data, className } = props;

    let _data = [];
    //去掉.zip，默认图也没必要显示
    _data = data.filter(
        item =>
            item &&
            item.toString().indexOf('.zip') === -1 &&
            item !== Const.__IMG_DEFAULT_THUMB__
    );
    if (_data.length === 0) return null;

    return (
        <div className={classNames(prefixCls, className)}>
            {_data
                .filter((item, index) => index < 3)
                .map((item, index) => (
                    <Img
                        key={index}
                        className={`${prefixCls}__img`}
                        src={getImgUrl(item)}
                    />
                ))}

            <style jsx global>{`
                .styles-04566576 {
                }
                .${prefixCls}__img {
                    width: 32.33333%;
                    padding-bottom: 32.33333%;
                    margin-right: 1.5%;
                    //border: 0.01rem solid ${Styles.color_border};
                    box-shadow: 0 0.02rem 0.08rem rgba(0, 21, 41, 0.08);
                }
                .${prefixCls}__img:nth-of-type(3) {
                    margin-right: 0;
                }
            `}</style>
        </div>
    );
};

export default __Media;
