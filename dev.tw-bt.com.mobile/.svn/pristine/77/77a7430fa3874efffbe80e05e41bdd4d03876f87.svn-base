/**
 * const prefixCls = 'styles-77721386';
 * const images = '/static/images/src/person/customer/Index';
 * @Author: Jack
 * @Date:   2018-01-03 15:01:22
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-03 15:45:13
 * @Path btWap \src\person\customer\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Button } from 'antd-mobile';
import { ListView } from 'components';
import { Layout } from 'src/_';
import _Item from './_Item';
import Utils from 'utils';
import store from './store';

const prefixCls = 'styles-77721386';

@inject(store)
@observer
export default class Customer extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const consumerCardList = $.getState('consumerCardList');

        return (
            <Layout title="我的订单">
                <ListView
                    className="t-antd-list-split t-antd-list-sm"
                    data={consumerCardList}
                    renderRow={data => <_Item {...data} />}
                    onEndReached={$.fetchConsumerCardList}
                />
                <Button
                    className="t-fixed-btn"
                    type="primary"
                    onClick={() => Utils.router.push('/person/order/add')}
                >
                    添加消费订单
                </Button>
            </Layout>
        );
    }
}
