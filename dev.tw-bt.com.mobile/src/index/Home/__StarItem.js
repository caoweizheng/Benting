/**
 * const prefixCls = 'styles-78314721';
 * const images = '/static/images/src/index';
 * @Author: qizc
 * @Date:   2017-12-25 11:31:02
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:07:29
 * @Path btWap \src\index\__StarItem.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import __StarMask from './__StarMask';
import Utils from 'utils';
import Styles from 'styles';
import UI from 'stores/ui';

const prefixCls = 'styles-78314721';

const __StarItem = props => {
    const { img, child, className } = props;

    return (
        <div
            className={classNames(prefixCls, className, 't-bg')}
            style={{
                backgroundImage: `url(${img})`
            }}
            onClick={() => {
                UI.showMask({ children: <__StarMask data={child} /> });
            }}
        >
            <style jsx>{`
                .styles-78314721 {
                    display: inline-block;
                    width: 48.5%;
                    padding-bottom: 15%;
                    margin-bottom: ${Styles.sm};
                }
                .${prefixCls}:nth-last-child(1),
                .${prefixCls}:nth-last-child(2) {
                    margin-bottom: 0;
                }
                .${prefixCls}:nth-of-type(2n) {
                    margin-left: 3%;
                }
            `}</style>
        </div>
    );
};

export default observer(__StarItem);
