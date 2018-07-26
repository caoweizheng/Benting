/**
 * const prefixCls = 'styles-17539465';
 * const images = '/static/images/src/auth/LuckDraw';
 * @Author: Jack
 * @Date:   2018-01-04 17:34:50
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-03 11:05:39
 * @Path btWap \src\auth\LuckDraw\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';

class store extends common {
    @observable
    state = this.initState({
        state: {
            drawIndex: 0,
            _filter: true
        },

        //奖品列表
        lotteryList: Const.__EMPTY__,

        //中奖名单
        winList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchLotteryList', 'fetchWinList']
    };

    /*==================== DS ====================*/
    //奖品列表
    fetchLotteryList = async () => {
        const data = await Api.P('get_auth-lottery_list');

        const list = [...data.list];
        const len = list.length;

        if (len > 10) {
            list.length = 10;
        } else if (len < 10) {
            for (let i = 0; i < 10 - len; i++) {
                list.push({
                    prizeType: '0'
                });
            }
        }

        //打乱数组
        list.sort(() => 0.5 - Math.random());

        this.setState({ list }, 'lotteryList');
    };

    //中奖名单
    fetchWinList = () =>
        this.fetchThenSetState('get_lottery_new-win-list', 'winList', {
            _: { search: { lotteryType: '60' } }
        });

    /*==================== Action ====================*/
    //验证并抽奖
    doDraw = async value => {
        const { prizeName, prizeType } = await Api.P(
            'do_auth-lottery_lottery',
            {
                code: value
            }
        );
        const lotteryList = this.getState('lotteryList');

        const isWin = prizeType != 0;
        let drawIndex;

        if (isWin) {
            drawIndex = lotteryList.list.findIndex(
                item => item.prizeName === prizeName
            );
        } else {
            drawIndex = lotteryList.list.findIndex(item => item.prizeType == 0);
        }

        this.rotate(drawIndex, () => {
            if (isWin) {
                Utils.onConfirm(
                    `抽中了${prizeName}，是否前往我的物品查看?`,
                    () => {
                        Utils.router.push('/person/goods');
                    },
                    '恭喜您'
                );
            } else {
                Utils.light('谢谢惠顾');
            }
        });
    };

    rotate = (index, cb) => {
        const speed = 500;
        let q = 1;

        const fn = () => {
            const { drawIndex } = this.getState();

            if (drawIndex >= 9) {
                q += 1;
            }

            setTimeout(() => {
                const nextDrawIndex = drawIndex >= 9 ? 0 : drawIndex + 1;

                this.setState({
                    drawIndex: nextDrawIndex
                });

                if (q > 4 && nextDrawIndex === index) {
                    setTimeout(() => {
                        cb();
                    }, 500);
                } else {
                    fn();
                }
            }, q * 50);
        };

        fn();
    };
}

export default store;
