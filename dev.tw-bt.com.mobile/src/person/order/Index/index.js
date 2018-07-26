/**
 * const prefixCls = 'styles-15517474';
 * const images = '/static/images/src/person/order/Index';
 * @Author: Jack
 * @Date:   2018-01-02 16:26:38
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:33:39
 * @Path btWap \src\person\order\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { ListView } from 'components';
import { Layout } from 'src/_';
import Item from 'src/person/order/_/Item';
import store from './store';

const prefixCls = 'styles-15517474';

@inject(store)
@observer
export default class Order extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const consumerList = $.getState('consumerList');

        return (
            <Layout title="我的订单">
                <ListView
                    className="t-antd-list-split t-antd-list-sm"
                    data={consumerList}
                    renderRow={data => <Item {...data} />}
                    onEndReached={$.fetchConsumerList}
                />
            </Layout>
        );
    }
}
