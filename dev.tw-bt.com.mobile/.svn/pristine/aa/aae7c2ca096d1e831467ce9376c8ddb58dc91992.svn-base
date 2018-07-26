/**
 * const prefixCls = 'styles-83830744';
 * const images = '/static/images/src/merchant/QRCode';
 * @Author: Jack
 * @Date:   2018-05-09 18:20:06
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-22 16:47:22
 * @Path btWap \src\merchant\QRCode\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import G from 'stores/g';

class store extends common {
    @observable
    state = this.initState({
        //商家信息
        merchantInfo: {},

        //二维码base64
        qrcode: ''
    });

    initFetch = {
        update: ['fetchMerchantInfo']
    };

    /*==================== DS ====================*/
    //商家信息
    fetchMerchantInfo = async () => {
        const res = Api.PP('get_merchant_is-merchant');
        const data = await res;

        if (data.code == 0) {
            this.setState(data.data, 'merchantInfo');
            this.fetchQRCode(data.data.allianceId);
        } else {
            Utils.onConfirm('页面只允许商家访问，请使用认证商家手机号进行登录。前往登录?', () => {
                G.setJump();
                Utils.router.push('/login');
            });
        }

        return res;
    };

    fetchQRCode = allianceId => {
        if (!allianceId) return;

        return this.fetchThenSetState('do_merchant_qrcode', 'qrcode', {
            url: `${Const.__WEB__}/member/register/${allianceId}`
        });
    };
}

export default store;
