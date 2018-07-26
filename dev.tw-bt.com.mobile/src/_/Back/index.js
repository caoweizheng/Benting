/**
 * const prefixCls = 'styles-57636852';
 * const images; = '/static/images;/src/_/Back';
 * @Author: qizc
 * @Date:   2017-12-29 16:34:27
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 14:21:48
 * @Path btWap \src\_\Back\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Icon } from 'antd-mobile';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-57636852';

const Back = props => {
    const { className, style, size = 'lg' } = props;

    return (
        <div
            className={classNames(prefixCls, className)}
            onClick={() => Utils.router.back()}
            style={style}
        >
            <Icon type="left" size={size} />

            <style jsx>{`
                .styles-57636852 {
                    color: #fff;
                    position: absolute;
                    top: ${Styles.sm};
                    left: ${Styles.sm};
                    z-index: 8;
                }
            `}</style>
        </div>
    );
};

export default Back;
