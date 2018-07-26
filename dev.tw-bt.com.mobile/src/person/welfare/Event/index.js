/**
 * const prefixCls = 'styles-32978605';
 * const images = '/static/images/src/person/welfare/Event';
 * @Author: Jack
 * @Date:   2018-01-06 11:07:53
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-06 11:08:51
 * @Path btWap \src\person\welfare\Event\index.js
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
export default class Event extends React.Component {
    render() {
        return (
            <Layout title="活动优先">
                <Top
                    title="活动优先"
                    desc="各种活动优先入场"
                    content={[
                        '成为会员的用户，尊享各种活动的优先入场，其中包括但不限于预售、限购、新品、福利、试用、线下活动等！'
                    ]}
                />
            </Layout>
        );
    }
}
