/**
 * const prefixCls = 'styles-38202118';
 * const images = '/static/images/src/person/welfare/Point';
 * @Author: Jack
 * @Date:   2018-01-06 14:13:33
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-20 09:34:25
 * @Path btWap \src\person\welfare\Point\_MoneyCouponList.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Button } from 'antd-mobile';
import { ListView, Tag } from 'components';
import Coupon from 'src/_/Coupon';
import ListWrap from 'src/person/welfare/_/ListWrap';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-38202118';

const _MoneyCouponList = (props, { $ }) => {
    const { className } = props;
    const { btscore = 0 } = $.getState('userInfo');
    const lotteryMoneyList = $.getState('lotteryMoneyList');

    return (
        <ListWrap className={classNames(prefixCls, className)} title="现金券兑换">
            <p className="text-sm">
                <span>您当前拥有</span>
                <span className="text-primary ml-xs mr-xs">{btscore}</span>
                <span>积分</span>
            </p>
            <ListView
                className="mt-md"
                data={lotteryMoneyList}
                renderRow={item => {
                    const isEnableGet = item.isEnableGet == 1;
                    const isGet = item.isGet == 1;

                    let btnText;
                    if (isGet) {
                        btnText = '已兑换';
                    } else {
                        if (isEnableGet) {
                            if (btscore >= item.point) {
                                btnText = '点击兑换';
                            } else {
                                btnText = '积分不足';
                            }
                        } else {
                            btnText = '未满足';
                        }
                    }

                    return (
                        <Coupon
                            hd={
                                <div>
                                    <p className="text-xxl text-primary text-bold text-center">
                                        ¥ {item.prizeVal}
                                    </p>
                                    <p className="text-xs text-sub mt-xs">
                                        满 {parseInt(item.limitPrize)} 可用
                                    </p>
                                </div>
                            }
                            ft={
                                <Button
                                    className="t-btn-round"
                                    type="primary"
                                    inline
                                    size="small"
                                    disabled={
                                        !(isEnableGet && btscore >= item.point)
                                    }
                                    onClick={() =>
                                        Utils.onConfirm(
                                            `是否使用${item.point}积分兑换${item.prizeName}?`,
                                            () => $.doGet(item.lotteryPrizeId)
                                        )}
                                >
                                    {btnText}
                                </Button>
                            }
                        >
                            <p className="text-title text-bold">
                                {item.prizeName}
                            </p>
                            <p className="text-xs mt-xs">
                                需要 {item.point} 积分兑换
                            </p>
                            <Tag
                                className="mt-sm"
                                style={{ background: Styles.color_primary }}
                            >
                                积分兑换
                            </Tag>
                        </Coupon>
                    );
                }}
                onEndReached={$.fetchLotteryMoneyList}
            />

            <style jsx global>{`
                .styles-38202118 {
                }
                .${prefixCls} .am-list-footer {
                    background: #fff;
                }
            `}</style>
        </ListWrap>
    );
};

_MoneyCouponList.contextTypes = {
    $: PropTypes.object
};

export default observer(_MoneyCouponList);
