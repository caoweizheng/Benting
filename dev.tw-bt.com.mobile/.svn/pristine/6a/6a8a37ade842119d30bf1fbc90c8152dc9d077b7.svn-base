/**
 * const prefixCls = 'styles-29454728';
 * const images = '/static/images/src/shop/miaosha/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 15:01:49
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 10:04:44
 * @Path btWap \src\shop\miaosha\Detail\_Btn.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Button, Flex, Stepper } from 'antd-mobile';
import Const from 'const';

const prefixCls = 'styles-29454728';

const _Btn = (props, { $ }) => {
    const { type } = props;
    const { amount } = $.getState();
    const { showState = 1, addPrice = 10, currentPrice = 0 } = $.getState(
        'auctionDetail'
    );

    if (showState === 1) {
        return (
            <Button className="t-fixed-btn" type="primary">
                未开始
            </Button>
        );
    }

    if (showState === 2) {
        const min = parseInt(currentPrice) + parseInt(addPrice);

        return (
            <Flex className={prefixCls}>
                <Flex.Item className="text-center">
                    <Stepper
                        showNumber
                        min={min}
                        step={
                            Const.__IOS__
                                ? parseInt(addPrice)
                                : parseInt(addPrice) / 2
                        }
                        value={amount}
                        onChange={amount => $.setState({ amount })}
                    />
                </Flex.Item>
                <Button
                    className={`${prefixCls}__btn`}
                    type="primary"
                    onClick={() => Utils.checkLogin(() => $.doCheckAdd())}
                >
                    出价
                </Button>

                <style jsx global>{`
                    .styles-29454728 {
                    }
                    .${prefixCls} {
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: #fff;
                        border-top: 0.01rem solid ${Styles.color_border};
                        z-index: 2;
                    }
                    .${prefixCls}__btn {
                        width: 40%;
                    }
                `}</style>
            </Flex>
        );
    }

    return null;
};

_Btn.contextTypes = {
    $: PropTypes.object
};

export default observer(_Btn);
