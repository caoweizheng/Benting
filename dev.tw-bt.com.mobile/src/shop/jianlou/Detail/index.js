/**
 * const prefixCls = 'styles-10017042';
 * const images = '/static/images/src/shop/jianlou/Detail';
 * @Author: qizc
 * @Date:   2018-01-30 12:20:53
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 11:15:31
 * @Path btWap \src\shop\jianlou\Detail\index.js
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
import _Record from './_Record';
import _Btn from './_Btn';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-10017042';

const sumType = (start, end, current, now) => {
    //1.预告中 2.捡漏中 3.已结束
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
        const { explain = '', salePrice = 0, beginTime, endTime, perNum } = $.getState(
            'jianlouDetail'
        );
        const { time } = $.getState('time');
        const type = sumType(beginTime, endTime, time, perNum);

        return (
            <Layout title="捡漏详情" hideHeader>
                <_Carousel>
                    <_Info type={type} />
                </_Carousel>
                <_Detail />
                {explain && (
                    <Rule className="mt-d" title="说明" showNum content={explain.split('\n')} />
                )}
                <Rule
                    className="mt-d"
                    title="捡漏规则"
                    showNum
                    content={[
                        '每人只有机会抢购到一只杆子',
                        '每期定时出现不等量的杆子，捡漏时间提前24小时通知',
                        '等到捡漏开始后点击立即捡漏按钮，排名最先付款的人视为捡漏成功',
                        '捡漏成功后商品不支持退款',
                        '本活动最终解释权归本汀所有'
                    ]}
                />
                <_Record className="mt-d" />
                {type !== 3 && <_Btn type={type} />}
                <PayConfirm
                    type="coin"
                    show={show}
                    amount={salePrice}
                    onClose={$.closeModal}
                    onConfirm={$.doJianlou}
                />
            </Layout>
        );
    }
}
