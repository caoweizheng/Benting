/**
 * const prefixCls = 'styles-41351946';
 * const images = '/static/images/src/person/welfare/RankUp';
 * @Author: Jack
 * @Date:   2018-01-06 16:14:48
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-31 18:47:08
 * @Path btWap \src\person\welfare\RankUp\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { AffixTabs } from 'components';
import { Layout } from 'src/_';
import Top from 'src/person/welfare/_/Top';
import _RankList from './_RankList';
import _RankUpList from './_RankUpList';
import _ExchangeList from './_ExchangeList';
import _Fixed from './_Fixed';
import store from './store';

@inject(store)
@observer
export default class RankUp extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { id } = $.getParams().params;
        const { initialPage } = $.getState();

        const isSub = typeof id !== 'undefined';

        return (
            <Layout title="升级尊享">
                <Top
                    title="升级尊享"
                    desc="会员升级有好礼"
                    content={[
                        '1. 会员每升一级可领取30元现金券一张，消费满200元即可使用。',
                        '2. 会员每升一级可在升级专区任意挑选一次对应会员级别的专属礼品一份。',
                        '3. 会员升级为五星会员以上级别可领取享受包邮卡，每升一个级别可领取一张。',
                        <span className="text-primary">
                            特别声明：有效期为自领取之日后的60日，现金礼券不可重复叠加使用，包邮卡只可在除购物外的本汀或灵动官方活动中使用。
                        </span>,
                        <span className="text-primary">现金券可使用时间不排除个别情况有所调整，最终解释权归本汀所有。</span>
                    ]}
                />
                {isSub ? (
                    <AffixTabs
                        tabs={[{ title: '升级礼券' }, { title: '升级礼品' }]}
                        initialPage={initialPage}
                        onChange={(tab, index) =>
                            $.setState({ initialPage: index })}
                    >
                        <_RankUpList className="mt-d" />
                        <_ExchangeList className="mt-d" />
                    </AffixTabs>
                ) : (
                    <_RankList className="mt-d" />
                )}
                {isSub && initialPage === 1 && <_Fixed />}
            </Layout>
        );
    }
}
