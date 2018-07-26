/**
 * const prefixCls = 'styles-16456223';
 * const images = '/static/images/src/person/welfare/Meet';
 * @Author: Jack
 * @Date:   2018-01-06 11:11:49
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-10 18:55:19
 * @Path btWap \src\person\welfare\Meet\store.js
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
            selectedIndex: [],
            _filter: true
        },

        //用户信息
        userInfo: {
            _filter: true
        },

        //礼品等级信息
        lotteryGradeInfo: Const.__EMPTY__,

        //商品列表
        lotteryList: Const.__EMPTY__
    });

    initFetch = {
        static: [['fetchUserInfo', 'userInfo']],
        one: ['fetchLotteryGradeInfo', 'fetchLotteryList']
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
                getType: 4
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
                        getType: 4,
                        prizeType: 1,
                        grade: id
                    }
                }
            }
        );
    };

    /*==================== Action ====================*/
    doGet = async () => {
        const { selectedIndex } = this.getState();

        await Api.P('do_bt-lottery_get-batch', {
            getType: 4,
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
