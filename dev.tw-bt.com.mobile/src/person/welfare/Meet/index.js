/**
 * const prefixCls = 'styles-40981017';
 * const images = '/static/images/src/person/welfare/Meet';
 * @Author: Jack
 * @Date:   2018-01-06 11:11:44
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-26 11:22:43
 * @Path btWap \src\person\welfare\Meet\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Button } from 'antd-mobile';
import { Layout } from 'src/_';
import Top from 'src/person/welfare/_/Top';
import _RankList from './_RankList';
import _ExchangeList from './_ExchangeList';
import _Fixed from './_Fixed';
import Utils from 'utils';
import store from './store';

@inject(store)
export default class Meet extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { id } = $.getParams().params;

        const isSub = typeof id !== 'undefined';

        return (
            <Layout title="见面有礼">
                <Top
                    title="见面有礼"
                    desc="与您的一次美好邂逅"
                    content={[
                        '1. 第一次注册会员的用户，可在有礼专区任意挑选一次对应会员级别的礼品一份。',
                        '2. 单笔消费满39元时，随订单一起发送。',
                        <span className="text-primary">特别声明：每个新用户仅一次领取机会。</span>
                    ]}
                />
                {isSub ? (
                    <div>
                        <_ExchangeList className="mt-d" />
                        <_Fixed />
                    </div>
                ) : (
                    <_RankList className="mt-d" />
                )}
            </Layout>
        );
    }
}
