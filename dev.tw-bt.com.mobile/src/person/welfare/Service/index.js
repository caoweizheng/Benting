/**
 * const prefixCls = 'styles-09242653';
 * const images = '/static/images/src/person/welfare/Service';
 * @Author: Jack
 * @Date:   2018-01-06 11:02:29
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-06 11:04:00
 * @Path btWap \src\person\welfare\Service\index.js
 */
'use strict';

import React from 'react';
import { inject, observer } from '@';
import { Button } from 'antd-mobile';
import { Layout } from 'src/_';
import Top from 'src/person/welfare/_/Top';
import Utils from 'utils';
import store from './store';

@inject(store)
export default class Service extends React.Component {
    render() {
        return (
            <Layout title="金牌客服">
                <Top
                    title="金牌客服"
                    desc="专属客服一对一服务"
                    content={[
                        '成为会员的用户，并且会员等级达到黄金级别以上会员，可尊享专属的金牌客服来为你您进行一对一优先服务。'
                    ]}
                />
                <Button
                    className="t-fixed-btn"
                    type="primary"
                    onClick={() => Utils.light('敬请期待')}
                >
                    联系客服
                </Button>
            </Layout>
        );
    }
}
