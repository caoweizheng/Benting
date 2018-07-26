/**
 * const prefixCls = 'styles-41629543';
 * const images = '/static/images/src/person/welfare/Special';
 * @Author: Jack
 * @Date:   2018-01-06 09:53:28
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-06 10:57:08
 * @Path btWap \src\person\welfare\Special\index.js
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
export default class Special extends React.Component {
    render() {
        return (
            <Layout title="会员福利日">
                <Top
                    title="会员福利日"
                    desc="精彩活动嗨不停"
                    content={[
                        '成为会员的用户，可以参加每月由本汀举办的会员福利日活动，本汀会员福利日为19号，在当天会有超值超给力的福利产品及活动，最精彩的内容相信可以带给汀粉们最火热的激情。'
                    ]}
                />
                <Button
                    className="t-fixed-btn"
                    type="primary"
                    onClick={() => Utils.router.push('/shop')}
                >
                    前往商城
                </Button>
            </Layout>
        );
    }
}
