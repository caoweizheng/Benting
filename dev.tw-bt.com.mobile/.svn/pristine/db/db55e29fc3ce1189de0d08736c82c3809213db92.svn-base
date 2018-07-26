/**
 * const prefixCls = 'styles-87204626';
 * const images = '/static/images/src/shop/miaosha/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 13:39:57
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 12:30:23
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
            amount: '0',
            addPrice: '0',
            refreshing: false,

            //ImgView
            showImgView: false,
            imgViewIndex: 0,
            
            _filter: true
        },

        //竞拍详情
        auctionDetail: {},

        //秒杀记录
        auctionRecord: Const.__EMPTY__
    });

    initFetch = {
        every: ['fetchAuctionDetail', 'fetchAuctionRecord']
    };

    /*==================== DS ====================*/
    //秒杀详情
    fetchAuctionDetail = async () => {
        const { id } = this.getParams().params;

        const res = this.fetchThenSetState(
            'get_auction_detail',
            'auctionDetail',
            {
                auctionId: id
            }
        );

        //设置最低amount
        const { currentPrice, addPrice } = await res;
        const min = parseInt(currentPrice) + parseInt(addPrice);
        this.setState({ amount: min });

        return res;
    };

    //秒杀记录
    fetchAuctionRecord = refresh => {
        const { id } = this.getParams().params;

        return this.fetchListThenSetState(
            'get_auction_record-list',
            'auctionRecord',
            {
                _: {
                    limit: Const.__LIMIT__,
                    order: {
                        auctionTime: 'desc'
                    },
                    search: {
                        auctionId: id
                    }
                }
            },
            refresh
        );
    };

    /*==================== Action ====================*/
    //检查出价
    doCheckAdd = async () => {
        const { id } = this.getParams().params;
        const { amount } = this.getState();

        const data = await Api.PP('get_auction_user-add', {
            auctionId: id,
            auctionPrice: amount
        });

        if (data.code == 0) {
            this.setState({ addPrice: data.data.price });
            this.onConfirm();

        } else if (data.code == 1) {
            Utils.onConfirm('该操作需要登录，前往登录?', () => {
                G.setJump();
                Utils.router.push('/login');
            });

        } else if (data.code == 306) {
            G.clearState('tk', '');
            G.setCache();

            Utils.onConfirm('登录信息已过期，前往登录?', () => {
                G.setJump();
                Utils.router.push('/login');
            });
            
        } else {
            Utils.light('当前出价有变动');
            this.fetchAuctionDetail();
            this.fetchAuctionRecord(true);
        }
    };

    //出价
    doAuction = async () => {
        const { id } = this.getParams().params;
        const { amount } = this.getState();

        const { orderNo } = await Api.P('do_auction', {
            auctionId: id,
            auctionPrice: amount
        });

        this.closeModal();
        this.fetchAuctionDetail();
        this.fetchAuctionRecord(true);
        Utils.light('出价成功');
    };

    /*==================== Page ====================*/
    onConfirm = () => {
        this.setState({ show: true });
    };

    closeModal = () => {
        this.setState({ show: false });
    };

    //刷新竞拍信息
    refresh = async () => {
        const { currentPrice } = this.getState('auctionDetail');

        this.setState({
            refreshing: true
        });

        const data = await this.fetchAuctionDetail();
        await this.fetchAuctionRecord(true);

        setTimeout(() => {
            this.setState({
                refreshing: false
            });

            if (data.currentPrice !== currentPrice) {
                Utils.light('当前出价有变动');
            }
        }, 1000);
    };
}

export default store;
