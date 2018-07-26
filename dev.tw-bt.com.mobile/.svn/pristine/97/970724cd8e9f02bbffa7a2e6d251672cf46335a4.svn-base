/**
 * const prefixCls = 'styles-33252366';
 * const images = '/static/images/src/person/welfare/Birthday';
 * @Author: Jack
 * @Date:   2018-01-06 10:23:15
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-31 18:48:42
 * @Path btWap \src\person\welfare\Birthday\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Flex, Button } from 'antd-mobile';
import { Layout } from 'src/_';
import { AffixTabs } from 'components';
import Top from 'src/person/welfare/_/Top';
import _BirthdayCouponList from './_BirthdayCouponList';
import _ExchangeList from './_ExchangeList';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-33252366';

@inject(store)
@observer
export default class Birthday extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { birDay } = $.getState('userInfo');

        const hasBirthDay = !!birDay && birDay !== '0-0-0';

        return (
            <Layout title="生日尊享">
                <Top
                    title="生日尊享"
                    desc="会员生日有好礼"
                    content={[
                        '会员可在生日当月在本汀官网领取生日礼券和生日礼品一份，此特权当月有效。',
                        '1. 生日礼品：会员可在生日当月从礼品页面热选对应级别的礼品一份！',
                        '2. 生日礼券：会员可在生日当月领取对应级别的现金礼券一张！该券可在本汀官网、本汀天猫旗舰店、本汀麦酥天猫专卖店、本汀京东与本汀线下授权实体店，仅限当月消费使用！',
                        <span className="text-primary">现金券可使用时间不排除个别情况有所调整，最终解释权归本汀所有。</span>
                    ]}
                />
                {!hasBirthDay && (
                    <Flex className={`${prefixCls}__birthday`} justify="center">
                        <Button
                            className="t-btn-round-sm"
                            type="primary"
                            onClick={() =>
                                Utils.router.push('/person/user/info')}
                        >
                            设置生日
                        </Button>
                    </Flex>
                )}
                <AffixTabs tabs={[{ title: '生日礼券' }, { title: '生日礼品' }]}>
                    <_BirthdayCouponList className="mt-d" />
                    <_ExchangeList className="mt-d" />
                </AffixTabs>

                <style jsx global>{`
                    .styles-33252366 {
                    }
                    .${prefixCls}__birthday {
                        padding-bottom: ${Styles.space};
                        background: #f9f9f9;
                    }
                `}</style>
            </Layout>
        );
    }
}
