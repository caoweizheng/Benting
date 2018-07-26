/**
 * const prefixCls = 'styles-73571934';
 * const images = '/static/images/src/person/Index';
 * @Author: qizc
 * @Date:   2017-12-27 09:51:24
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:29:45
 * @Path btWap \src\person\Index\_OtherPower.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import Utils from 'utils';
import Styles from 'styles';
import { otherPowerData } from './ds';

const prefixCls = 'styles-73571934';

const _OtherPower = (props, { $ }) => {
    const { className } = props;
    const isLogin = Utils.checkLogin();
    
    return (
        <div className={classNames(prefixCls, className)}>
            <div className="text-center top p-sw">
                <div className="text-title text-lg">其他特权</div>
                <div className="text-sub text-sm mt-xs">尊享特权 精彩不停</div>
            </div>
            <div className="list">
                {otherPowerData.map((item, index) => (
                    <div
                        key={index}
                        className="item mb-md t-bg"
                        style={{ backgroundImage: `url(${item.img})` }}
                        onClick={() => {
                                isLogin
                                    ? Utils.router.push(item.href)
                                    : Utils.router.push('/login');
                            }}
                    />
                ))}
            </div>

            <style jsx>{`
                .styles-73571934 {
                }
                .list {
                    padding: ${Styles.space} ${Styles.wind} 0;
                    border-top: 0.01rem solid ${Styles.color_border};
                }
                .item {
                    display: inline-block;
                    width: 30%;
                    margin-left: 5%;
                    padding-bottom: 36%;
                    vertical-align: top;
                }
                .item:nth-of-type(3n + 1) {
                    margin-left: 0;
                }
            `}</style>
            <style jsx global>{`
                .styles-73571934 {
                }
                .${prefixCls} {
                    background: #fff;
                }
            `}</style>
        </div>
    );
};

_OtherPower.contextTypes = {
    $: PropTypes.object
};

export default observer(_OtherPower);
