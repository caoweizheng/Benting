/**
 * const prefixCls = 'styles-05563986';
 * const images = '/static/images/src/person/bank/Bind';
 * @Author: qizc
 * @Date:   2018-01-24 11:20:26
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-24 11:51:37
 * @Path btWap \src\person\bank\Bind\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _Form from './_Form';
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
            <Layout title="绑定银行卡">
                <_Form />
            </Layout>
        );
    }
}
