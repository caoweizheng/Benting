/**
 * const prefixCls = 'styles-13906625';
 * const images = '/static/images/src/person/event/myMiaosha/Index';
 * @Author: qizc
 * @Date:   2018-01-24 15:29:23
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-24 15:36:18
 * @Path btWap \src\person\event\myMiaosha\Index\index.js
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
        const myMiaoshaList = $.getState('myMiaoshaList');

        return (
            <Layout title="我的秒杀">
                <ListView
                    className="t-antd-list-split t-antd-list-sm"
                    data={myMiaoshaList}
                    renderRow={data => <_Item {...data} />}
                    onEndReached={$.fetchMyMiaoshaList}
                />
            </Layout>
        );
    }
}
