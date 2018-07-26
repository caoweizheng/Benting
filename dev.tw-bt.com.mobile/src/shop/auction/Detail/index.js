/**
 * const prefixCls = 'styles-35655442';
 * const images = '/static/images/src/shop/auction/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 19:11:07
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:50:32
 * @Path btWap \src\shop\auction\Detail\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { ListView, PayConfirm } from 'components';
import { Layout, Rule } from 'src/_';
import _Carousel from './_Carousel';
import _Info from './_Info';
import _Detail from './_Detail';
import _Winner from './_Winner';
import _Record from './_Record';
import _Btn from './_Btn';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-35655442';

@inject(store)
@observer
export default class Detail extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentWillUnmount() {
        const { $ } = this.context;

        $.closeModal();
    }

    render() {
        const { $ } = this.context;
        const { show, addPrice } = $.getState();
        const { auctionType, appType, addTime } = $.getState('auctionDetail');

        let type;
        if (auctionType == 1) type = 'coin';
        if (auctionType == 2) {
            if (appType == 1) type = 'bt';
            if (appType == 2) type = 'nido';
        }

        const dataRule = [
            '第一次出价将支付全部出价，后续出价仅需要补足到出价金额既本次出价与历史出价总额的差价。',
            '在时间完全结束时，出价最高者竞拍成功，获得竞拍物品；竞拍失败的用户在活动结束后金币全额返回到账户中',
            '每次竞拍加价数量不得少于加价幅度',
            '为了体现竞拍的公平性，使所有用户都用充分的时间拍下自己心仪的商品。若用户在结束时间倒计时最后1分钟内参与竞拍，竞拍结束时间将顺延一分钟让其他竞拍者有时间决定是否出价',
            '本活动最终解释权归本汀所有'
        ];

        if (addTime === 0) {
            dataRule.splice(3, 1);
        }
        
        return (
            <Layout title="竞拍详情" hideHeader>
                <_Carousel>
                    <_Info />
                </_Carousel>
                <_Detail />
                <Rule
                    className="mt-d"
                    title="竞拍规则"
                    showNum
                    content={dataRule}
                />
                <_Winner className="mt-d" />
                <_Record className="mt-d" />
                <_Btn />
                {type && (
                    <PayConfirm
                        type={type}
                        show={show}
                        amount={addPrice}
                        onClose={$.closeModal}
                        onConfirm={$.doAuction}
                    />
                )}
            </Layout>
        );
    }
}
