/**
 * const prefixCls = 'styles-17526451';
 * const images = '/static/images/src/person/welfare/RankUp';
 * @Author: Jack
 * @Date:   2018-01-06 16:20:41
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-10 11:50:02
 * @Path btWap \src\person\welfare\RankUp\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';

export default class Store extends common {
    @observable
    state = this.initState({
        state: {
            initialPage: 0,
            selectedIndex: [],
            _filter: true
        },

        //用户信息
        userInfo: {
            _filter: true
        },

        //礼品等级信息
        lotteryGradeInfo: Const.__EMPTY__,

        //现金券
        lotteryMoneyList: Const.__EMPTY__,

        //实物券
        lotteryList: Const.__EMPTY__
    });

    initFetch = {
        static: [['fetchUserInfo', 'userInfo']],
        one: ['fetchLotteryGradeInfo', 'fetchLotteryMoneyList', 'fetchLotteryList']
    };

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };

    //礼品等级信息
    fetchLotteryGradeInfo = () => {
        this.fetchThenSetState(
            'get_bt-lottery_grade-info',
            'lotteryGradeInfo',
            {
                getType: 2
            }
        );
    };

    //现金券
    fetchLotteryMoneyList = () => {
        const { id } = this.getParams().params;

        return this.fetchListThenSetState(
            'get_bt-lottery_list',
            'lotteryMoneyList',
            {
                _: {
                    limit: Const.__LIMIT__,
                    search: {
                        getType: 2,
                        prizeType: 4,
                        grade: id
                    }
                }
            }
        );
    };

    //实物券
    fetchLotteryList = () => {
        const { id } = this.getParams().params;

        return this.fetchListThenSetState(
            'get_bt-lottery_list',
            'lotteryList',
            {
                _: {
                    limit: Const.__LIMIT__,
                    search: {
                        getType: 2,
                        prizeType: 1,
                        grade: id
                    }
                }
            }
        );
    };

    /*==================== Action ====================*/
    doGet = async lotteryPrizeId => {
        await Api.P('do_bt-lottery_get-batch', {
            getType: 2,
            lotteryPrizeId
        });

        Utils.light('领取成功');
        Utils.router.push('/person/goods');
    };

    doGetBatch = async () => {
        const { selectedIndex } = this.getState();

        await Api.P('do_bt-lottery_get-batch', {
            getType: 2,
            lotteryPrizeId: selectedIndex.join(',')
        });

        Utils.light('领取成功');
        Utils.router.push('/person/goods');
    };

    /*==================== Page ====================*/
    toggleItem = index => {
        const { selectedIndex } = this.getState();
        const { getNum = 0 } = this.getState('lotteryList');

        let _selectedIndex = [...selectedIndex];

        if (_selectedIndex.includes(index)) {
            _selectedIndex = _selectedIndex.filter(item => item !== index);
        } else {
            if (_selectedIndex.length >= getNum) {
                Utils.light('不能选择更多礼品了');
            } else {
                _selectedIndex.push(index);
            }
        }

        this.setState({
            selectedIndex: _selectedIndex
        });
    };
}
