/**
 * const prefixCls = 'styles-12684955';
 * const images = '/static/images/src/person/event/myAuction/Index';
 * @Author: qizc
 * @Date:   2018-01-25 13:41:07
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-03 11:49:11
 * @Path btWap \src\person\event\myAuction\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { ListView } from 'components';
import { Layout } from 'src/_';
import _Item from './_Item';
import store from './store';

const prefixCls = 'styles-12684955';

@inject(store)
@observer
export default class Index extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const myAuctionList = $.getState('myAuctionList');

        return (
            <Layout title="我的竞拍">
                <ListView
                    className="t-antd-list-split t-antd-list-sm"
                    data={myAuctionList}
                    renderRow={data => <_Item {...data} />}
                    onEndReached={$.fetchMyAuctionList}
                />
            </Layout>
        );
    }
}
