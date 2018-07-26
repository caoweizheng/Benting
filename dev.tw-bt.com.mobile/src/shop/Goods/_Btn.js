/**
 * const prefixCls = 'styles-50275978';
 * const images = '/static/images/src/shop/Goods';
 * @Author: qizc
 * @Date:   2017-12-28 15:55:26
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:53:45
 * @Path btWap \src\shop\Goods\_Btn.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Button, Flex } from 'antd-mobile';
import Styles from 'styles';
import Utils from 'utils';
import __Row from './__Row';
import { images } from './ds';

const prefixCls = 'styles-50275978';

const _Btn = (props, { $ }) => {
    const { className } = props;

    return (
        <div className={classNames(prefixCls, className, 't-fixed-btn')}>
            <Flex>
                <Flex.Item
                    style={{ flex: 2 }}
                    onClick={() => Utils.light('即将开放')}
                >
                    <Button
                        className={`${prefixCls}_btn text-sm btn_1`}
                        disabled
                    >
                        <Flex justify="center" align="center">
                            <img
                                style={{ width: '0.44rem' }}
                                src={`${images}/shop.png`}
                            />
                            <span className="text-main ml-sm">加入购物车</span>
                        </Flex>
                    </Button>
                </Flex.Item>
                <Flex.Item style={{ flex: 3, marginLeft: 0 }}>
                    <Button
                        className={`${prefixCls}_btn text-sm`}
                        type="primary"
                        onClick={() => Utils.light('即将开放')}
                    >
                        立即购买
                    </Button>
                </Flex.Item>
            </Flex>
            <style jsx global>{`
                .styles-50275978 {
                    background: #fff;
                    z-index: 10;
                }
                .${prefixCls}_btn {
                    border-radius: 0 !important;
                }
                .${prefixCls}_btn.btn_1 {
                    border-top: 0.01rem solid ${Styles.color_border};
                }
            `}</style>
        </div>
    );
};

_Btn.contextTypes = {
    $: PropTypes.object
};

export default observer(_Btn);
