/**
 * const prefixCls = 'styles-43788788';
 * const images = '/static/images/src/person/welfare/Point';
 * @Author: Jack
 * @Date:   2018-01-06 11:28:13
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\welfare\Point\index.js
 */
'use strict';

import React from 'react';
import { inject, observer } from '@';
import { AffixTabs } from 'components';
import { Layout } from 'src/_';
import Top from 'src/person/welfare/_/Top';
import _MoneyCouponList from './_MoneyCouponList';
import _LuckyDraw from './_LuckyDraw';
import _ExchangeList from './_ExchangeList';
import store from './store';

@inject(store)
@observer
export default class Point extends React.Component {
    render() {
        return (
            <Layout title="超爽积分">
                <Top
                    title="超爽积分"
                    desc="兑换抽奖享不停"
                    content={[
                        '奖励积分：参与本汀或灵动官方举行的活动可获取额度不等的奖励积分。',
                        '消费积分：会员在本汀官网、本汀天猫旗舰店、本汀麦酥天猫专卖店、本汀京东每成功消费1元积1分并尊享积分活动。',
                        '积分使用：会员所积累的积分可用于兑换礼品 、积分抽奖、兑换现金劵。',
                        <span className="text-primary">
                            特别声明：积分有效期为积分获取之日起至次年年底；每年12月31日清空当年1月1日前获取的积分。
                        </span>
                    ]}
                />
                <AffixTabs
                    tabs={[
                        { title: '礼券兑换' },
                        //{ title: '积分抽奖' },
                        { title: '礼品兑换' }
                    ]}
                >
                    <_MoneyCouponList className="mt-d" />
                    {/*<_LuckyDraw className="mt-d" />*/}
                    <_ExchangeList className="mt-d" />
                </AffixTabs>
            </Layout>
        );
    }
}
