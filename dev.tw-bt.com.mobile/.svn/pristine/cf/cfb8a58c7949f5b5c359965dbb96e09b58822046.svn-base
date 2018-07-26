/**
 * const prefixCls = 'styles-87204626';
 * const images = '/static/images/src/shop/miaosha/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 13:39:57
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 12:24:26
 * @Path btWap \src\shop\miaosha\Detail\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';

class store extends common {
    @observable
    state = this.initState({
        state: {
            show: false,
            amount: '0.00',
            
            //ImgView
            showImgView: false,
            imgViewIndex: 0,

            _filter: true
        },

        //秒杀详情
        miaoshaDetail: {},

        //秒杀记录
        miaoshaRecord: Const.__EMPTY__,

        //服务器时间
        time: {}
    });

    initFetch = {
        update: ['fetchMiaoshaDetail', 'fetchMiaoshaRecord'],
        every: ['fetchTime']
    };

    /*==================== DS ====================*/
    //秒杀详情
    fetchMiaoshaDetail = () => {
        const { id } = this.getParams().params;

        return this.fetchThenSetState(
            'get_shop_miaosha-detail',
            'miaoshaDetail',
            {
                panicId: id
            }
        );
    };

    //秒杀记录
    fetchMiaoshaRecord = refresh => {
        const { id } = this.getParams().params;

        return this.fetchListThenSetState(
            'get_shop_miaosha-record',
            'miaoshaRecord',
            {
                _: {
                    limit: Const.__LIMIT__,
                    search: {
                        panicId: id
                    }
                }
            },
            refresh
        );
    };

    fetchTime = () => {
        return this.fetchThenSetState('get_time', 'time');
    };

    /*==================== Action ====================*/
    //秒杀
    doMiaosha = async () => {
        const { panicId, panicType } = this.getState('miaoshaDetail');

        const { orderNo } = await Api.P('do_shop_miaosha', { panicId });

        this.closeModal();
        this.fetchMiaoshaDetail();
        this.fetchMiaoshaRecord(true);

        // 余额支付跳转
        if (panicType == 1) {
            Utils.router.push(
                `/pay/result?id=${orderNo}`,
                `/pay/result/${orderNo}`
            );
        }
    };

    /*==================== Page ====================*/
    onConfirm = amount => {
        this.setState({ show: true, amount });
    };

    closeModal = () => {
        this.setState({ show: false });
    };
}

export default store;
