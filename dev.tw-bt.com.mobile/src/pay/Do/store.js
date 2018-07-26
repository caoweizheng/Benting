/**
 * const prefixCls = 'styles-84778494';
 * const images = '/static/images/src/pay/Do';
 * @Author: Jack
 * @Date:   2018-01-12 15:50:01
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-26 10:18:51
 * @Path btWap \src\pay\Do\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';

export default class Store extends common {
    @observable
    state = {
        state: {
            payType: '',
            _filter: true
        }
    };

    /*==================== Action ====================*/
    doCharge = async values => {
        const { payType } = this.getState();

        const returnUrl = `${window.location.origin}/pay/result`;

        if (payType === 'alipay') {
            const url = Api.getRequestUrl('get_pay_charge', {
                price: values.price,
                payPort: 1,
                returnUrl
            });

            window.location = url;
        } else {
            if (Const.__WX__) {
                const data = await Api.PP('get_pay_charge', {
                    price: values.price,
                    payPort: 3,
                    returnUrl
                });

                if (data.code == 0) {
                    Utils.wxPay(data.data, () => {
                        Utils.router.replace(
                            `/pay/result?id=${data.data.orderNo}`,
                            `/pay/result/${data.data.orderNo}`
                        );
                    });
                }

                //H5
            } else {
                const data = await Api.P('get_pay_charge', {
                    price: values.price,
                    payPort: 4,
                    returnUrl
                });

                if (data.mweb_url) {
                    window.location = data.mweb_url;
                }
            }
        }
    };
}
