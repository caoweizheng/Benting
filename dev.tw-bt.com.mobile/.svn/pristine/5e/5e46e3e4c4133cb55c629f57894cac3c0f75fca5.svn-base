/**
 * const prefixCls = 'styles-22722457';
 * const images = '/static/images/src/person/event/myJianlou/Index';
 * @Author: qizc
 * @Date:   2018-01-30 14:31:39
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-30 14:35:38
 * @Path btWap \src\person\event\myJianlou\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { ListView } from 'components';
import { Layout } from 'src/_';
import _Item from './_Item';
import store from './store';

const prefixCls = 'styles-13906625';

@inject(store)
@observer
export default class Index extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const myJianlouList = $.getState('myJianlouList');

        return (
            <Layout title="我的捡漏">
                <ListView
                    className="t-antd-list-split t-antd-list-sm"
                    data={myJianlouList}
                    renderRow={data => <_Item {...data} />}
                    onEndReached={$.fetchMyJianlouList}
                />
            </Layout>
        );
    }
}
