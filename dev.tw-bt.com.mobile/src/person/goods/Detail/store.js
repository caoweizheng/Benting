/**
 * const prefixCls = 'styles-79138153';
 * const images = '/static/images/src/person/goods/Detail';
 * @Author: Jack
 * @Date:   2018-01-05 15:54:08
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-05 17:16:02
 * @Path btWap \src\person\goods\Detail\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';

export default class Store extends common {
    @observable
    state = this.initState({
        //我的物品详情
        myLotteryDetail: {
            rule: ''
        }
    });

    initFetch = {
        one: ['fetchMyLotteryDetail']
    };

    /*==================== DS ====================*/
    //我的物品详情
    fetchMyLotteryDetail = () => {
        const { id } = this.getParams().params;

        return this.fetchThenSetState(
            'get_bt-lottery_my-detail',
            'myLotteryDetail',
            {
                recordId: id
            }
        );
    };

    /*==================== Action ====================*/
}
