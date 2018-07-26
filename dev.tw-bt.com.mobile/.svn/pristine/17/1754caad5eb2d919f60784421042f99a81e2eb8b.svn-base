/**
 * const prefixCls = 'styles-82201935';
 * const images = '/static/images/src/person/event/myGuess/Index';
 * @Author: qizc
 * @Date:   2018-02-05 09:32:44
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-05 09:46:16
 * @Path btWap \src\person\event\myGuess\Index\index.js
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
        const myGuessList = $.getState('myGuessList');

        return (
            <Layout title="我的竞猜">
                <ListView
                    className="t-antd-list-split t-antd-list-sm"
                    data={myGuessList}
                    renderRow={data => <_Item {...data} />}
                    onEndReached={$.fetchMyGuessList}
                />
            </Layout>
        );
    }
}
