/**
 * const prefixCls = 'styles-71524658';
 * const images = '/static/images/src/person/event/myFloor/Index';
 * @Author: qizc
 * @Date:   2018-01-18 16:25:03
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-18 16:56:34
 * @Path btWap \src\person\event\myFloor\Index\index.js
 */
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { ListView } from 'components';
import { Layout } from 'src/_';
import _Item from './_Item';
import store from './store';

const prefixCls = 'styles-71524658';

@inject(store)
@observer
export default class Order extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const myFloorList = $.getState('myFloorList');

        return (
            <Layout title="我的踩楼">
                <ListView
                    className="t-antd-list-split t-antd-list-sm"
                    data={myFloorList}
                    renderRow={data => <_Item {...data} />}
                    onEndReached={$.fetchMyFloorList}
                />
            </Layout>
        );
    }
}
