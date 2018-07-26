/**
 * const prefixCls = 'styles-37538055';
 * const images = '/static/images/src/shop/jianlou/Detail';
 * @Author: qizc
 * @Date:   2018-01-30 12:20:53
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-27 11:33:09
 * @Path btWap \src\shop\jianlou\Detail\store.js
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

        //捡漏详情
        jianlouDetail: {},

        //捡漏记录
        jianlouRecord: Const.__EMPTY__,

        //服务器时间
        time: {}
    });

    initFetch = {
        update: ['fetchJianlouDetail', 'fetchJianlouRecord'],
        every: ['fetchTime']
    };

    /*==================== DS ====================*/
    //捡漏详情
    fetchJianlouDetail = () => {
        const { id } = this.getParams().params;

        return this.fetchThenSetState(
            'get_shop_miaosha-detail',
            'jianlouDetail',
            {
                panicId: id
            }
        );
    };

    //捡漏记录
    fetchJianlouRecord = refresh => {
        const { id } = this.getParams().params;

        return this.fetchListThenSetState(
            'get_shop_miaosha-record',
            'jianlouRecord',
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
    //捡漏
    doJianlou = async () => {
        const { panicId } = this.getState('jianlouDetail');

        const { orderNo } = await Api.P('do_shop_miaosha', { panicId });

        this.closeModal();
        this.fetchJianlouDetail();
        this.fetchJianlouRecord(true);
        Utils.light('捡漏成功');
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
