/**
 * const prefixCls = 'styles-45651917';
 * const images = '/static/images/src/shop/miaosha/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 13:34:22
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:59:06
 * @Path btWap \src\shop\miaosha\Detail\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { ListView, PayConfirm } from 'components';
import { Layout } from 'src/_';
import _Carousel from './_Carousel';
import _Info from './_Info';
import _Detail from './_Detail';
import _Record from './_Record';
import _Btn from './_Btn';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-45651917';
const sumType = (start, end, current, now) => {
    //1.预告中 2.秒杀中 3.已结束
    if (current <= start) return 1;

    if (!now || (!!end && current > end)) return 3;

    return 2;
};

@inject(store)
@observer
export default class Detail extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { show } = $.getState();
        const {
            panicType,
            salePrice = 0,
            beginTime,
            endTime,
            perNum
        } = $.getState('miaoshaDetail');
        const { time } = $.getState('time');
        const type = sumType(beginTime, endTime, time, perNum);

        let amount, payType;
        if (panicType == 3) {
            amount = parseFloat(salePrice * 1000 / 100);
            payType = 'coin'
        }else{
            amount = salePrice;
            payType = 'amount'
        }
             
        return (
            <Layout title="秒杀详情" hideHeader>
                <_Carousel>
                    <_Info type={type} />
                </_Carousel>
                <_Detail />
                <_Record className="mt-d" />
                {type !== 3 && <_Btn type={type} />}
                <PayConfirm
                    show={show}
                    type={payType}
                    amount={amount}
                    onClose={$.closeModal}
                    onConfirm={$.doMiaosha}
                />
            </Layout>
        );
    }
}
