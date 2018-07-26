/**
 * const prefixCls = 'styles-55815239';
 * const images = '/static/images/src/person/bank/Index';
 * @Author: qizc
 * @Date:   2018-01-24 11:20:24
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-24 11:51:30
 * @Path btWap \src\person\bank\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _Info from './_Info';
import store from './store';

@inject(store)
@observer
export default class Order extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };
   
    render() {
        const { $ } = this.context;
        return (
            <Layout title="我的银行卡">
                <_Info />
            </Layout>
        );
    }
}
