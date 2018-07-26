/**
 * const prefixCls = 'styles-22452638';
 * const images = '/static/images/src/person/welfare/Birthday';
 * @Author: Jack
 * @Date:   2018-01-06 16:53:06
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-20 09:33:27
 * @Path btWap \src\person\welfare\Birthday\_BirthdayCouponList.js
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

const prefixCls = 'styles-22452638';

const _BirthdayCouponList = (props, { $ }) => {
    const { className } = props;
    const lotteryMoneyList = $.getState('lotteryMoneyList');

    return (
        <ListWrap className={classNames(prefixCls, className)} title="生日礼券">
            <ListView
                className="mt-md"
                data={lotteryMoneyList}
                renderRow={item => {
                    const isEnableGet = item.isEnableGet == 1;
                    const isGet = item.isGet == 1;

                    let btnText;
                    if (isGet) {
                        btnText = '已领取';
                    } else {
                        if (isEnableGet) {
                            btnText = '点击领取';
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
                                    disabled={!isEnableGet}
                                    onClick={() => $.doGet(item.lotteryPrizeId)}
                                >
                                    {btnText}
                                </Button>
                            }
                        >
                            <p className="text-title text-bold">
                                {item.prizeName}
                            </p>
                            <p className="text-xs mt-xs">仅限生日当月使用</p>
                            <Tag
                                className="mt-sm"
                                style={{ background: Styles.color_primary }}
                            >
                                {Utils.getBTLevel(item.grade)}专属
                            </Tag>
                        </Coupon>
                    );
                }}
                onEndReached={$.fetchLotteryMoneyList}
            />

            <style jsx global>{`
                .styles-22452638 {
                }
                .${prefixCls} .am-list-footer {
                    background: #fff;
                }
            `}</style>
        </ListWrap>
    );
};

_BirthdayCouponList.contextTypes = {
    $: PropTypes.object
};

export default observer(_BirthdayCouponList);
