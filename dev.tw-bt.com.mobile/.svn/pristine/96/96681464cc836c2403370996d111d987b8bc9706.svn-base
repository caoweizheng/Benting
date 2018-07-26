/**
 * const prefixCls = 'styles-42578875';
 * const images = '/static/images/src/person/wallet/CoinDesc';
 * @Author: Jack
 * @Date:   2018-01-15 15:44:02
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-22 12:28:34
 * @Path btWap \src\person\wallet\CoinDesc\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { List } from 'antd-mobile';
import { Layout } from 'src/_';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-42578875';
const DS = [
    {
        title: '一、活动送金币',
        desc: '参与活动或任务，根据规则获取金币奖励！'
    },
    {
        title: '二、精华送金币',
        desc: '发表帖子、视频，一旦加精将获得对应的金币奖励！'
    },
    {
        title: '三、VIP送金币',
        desc: '灵动会员每个月可获100枚金币奖励，每月一号发放！'
    },
    {
        title: '四、红包送金币',
        desc: '灵动【发现】版块每天将不定时发放金币红包，每个人都可以参与抢金币！'
    },
    {
        title: '五、消费送金币',
        desc: '购买本汀产品在本汀售后服务中心提交订单，审核通过后将获金币奖励，满100元送10金币，以此类推！'
    },
    {
        title: '六、兑换金币',
        desc: (
            <p className="text-sm">
                <span>您可在个人中心【我的金币】版块充值兑换金币，兑换比例为1:10，即1元可兑换10金币。</span>
                <span
                    className="text-primary"
                    style={{
                        textDecoration: 'underline'
                    }}
                    onClick={() => Utils.router.push('/person/wallet/coin_buy')}
                >
                    兑换
                </span>
            </p>
        )
    }
];

@inject(store)
@observer
export default class CoinDesc extends React.Component {
    render() {
        return (
            <Layout className={prefixCls} title="获取金币">
                <List renderHeader={() => '如何获取金币?'}>
                    {DS.map((item, index) => (
                        <List.Item key={index} wrap={true}>
                            <p>{item.title}</p>
                            <div className="text-sm mt-xs">{item.desc}</div>
                        </List.Item>
                    ))}
                </List>

                <style jsx>{`
                    .styles-42578875 {
                    }
                `}</style>
            </Layout>
        );
    }
}
