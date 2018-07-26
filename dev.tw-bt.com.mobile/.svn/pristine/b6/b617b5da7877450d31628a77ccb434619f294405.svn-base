/**
 * const prefixCls = 'styles-15412280';
 * const images = '/static/images/src/person/Index';
 * @Author: qizc
 * @Date:   2017-12-27 09:51:13
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:30:04
 * @Path btWap \src\person\Index\_Power.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import Utils from 'utils';
import Styles from 'styles';
import { images, powerData } from './ds';

const prefixCls = 'styles-15412280';

const _Power = (props, { $ }) => {
    const { className } = props;
    const isLogin = Utils.checkLogin();

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="text-center top">
                <img src={`${images}/power.png`} />
            </div>
            <div className="list">
                {powerData.map((item, index) => (
                    <div key={index} className="item mt-sm">
                        <div
                            className="bg t-bg"
                            style={{ backgroundImage: `url(${item.img})` }}
                            onClick={() => {
                                isLogin
                                    ? Utils.router.push(item.href)
                                    : Utils.router.push('/login');
                            }}
                        />
                        <Flex className="con" justify="around">
                            {item.tit && <p className="text-sm text-sub">{item.tit}</p>}
                            {item.power.map((i, idx) => (
                                <div key={idx} className="text-center ml-sm">
                                    <img className="power-img" src={i.img} />
                                    <div className="text-main text-sm mt-sm">{i.tit}</div>
                                </div>
                            ))}
                        </Flex>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .styles-15412280 {
                }
                .item {
                    background: #fff;
                }
                .bg {
                    padding-bottom: 30%;
                }
                .power-img {
                    height: 0.53rem;
                    width: 0.61rem;
                }
                .top img {
                    max-width: 100%;
                    height: 0.42rem;
                }
            `}</style>
            <style jsx global>{`
                .styles-15412280 {
                }
                .${prefixCls} .con {
                    padding: ${Styles.md};
                }
            `}</style>
        </div>
    );
};

_Power.contextTypes = {
    $: PropTypes.object
};

export default observer(_Power);
