/**
 * const prefixCls = 'styles-13122101';
 * const images = '/static/images/src/merchant/Lottery';
 * @Author: Jack
 * @Date:   2018-04-25 15:07:28
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-04-26 16:23:33
 * @Path btWap \src\merchant\Lottery\store.js
 */
'use strict';

import React from 'react';
import { observable, computed } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import G from 'stores/g';

class store extends common {
    @observable
    state = this.initState({
        //商家信息
        merchantInfo: {},

        //商家发奖记录
        merchantLotteryRecord: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchMerchantInfo']
    };

    @computed
    get section() {
        const merchantLotteryRecord = this.getState('merchantLotteryRecord');

        if (!merchantLotteryRecord._loaded) return [];

        const dateMap = {};
        merchantLotteryRecord.list.forEach(item => {
            const date = Utils.date('y,m,d', item.receivedTime);
            dateMap[date] = date;
        });

        return Object.keys(dateMap).map(item => ({
            title: item,
            filter: i => Utils.date('y,m,d', i.receivedTime) === item
        }));
    }

    /*==================== DS ====================*/
    //商家信息
    fetchMerchantInfo = async () => {
        const res = Api.PP('get_merchant_is-merchant');
        const data = await res;

        if (data.code == 0) {
            this.setState(data.data, 'merchantInfo');
            this.fetchMerchantLotteryRecord(true);
        } else {
            Utils.onConfirm('页面只允许商家访问，请使用认证商家手机号进行登录。前往登录?', () => {
                G.setJump();
                Utils.router.push('/login');
            });
        }

        return res;
    };

    //商家发奖记录
    fetchMerchantLotteryRecord = refresh => {
        return this.fetchListThenSetState(
            'get_merchant_customer-lottery-list',
            'merchantLotteryRecord',
            {
                _: {
                    limit: Const.__LIMIT__,
                    order: {
                        receivedTime: 'desc'
                    }
                }
            },
            refresh
        );
    };

    /*==================== Action ====================*/
    doGet = async values => {
        const { code } = values;

        if (!code) {
            Utils.light('请输入奖品口令');
            return;
        }

        await Api.P('do_merchant_check-customer-lottery', {
            cdk: code
        });

        Utils.light('发放成功');
        this.form.setFieldsValue({
            code: ''
        });
        this.fetchMerchantLotteryRecord(true);
    };

    /*==================== Page ====================*/
    onQRCodeScan = () => {
        if (Const.__WX__) {
            wx.scanQRCode({
                needResult: 1,
                scanType: ['qrCode'],
                success: res => {
                    if (res.errMsg === 'scanQRCode:ok') {
                        const { resultStr } = res;

                        this.form.setFieldsValue({
                            code: resultStr
                        });
                    } else {
                        Utils.light('扫描二维码失败，请重新扫描');
                    }
                }
            });
        } else {
            Utils.light('只能在微信浏览器里使用扫码功能');
        }
    };
}

export default store;
