/**
 * const prefixCls = 'styles-37148357';
 * const images = '/static/images/src/person/wallet/Withdrawals';
 * @Author: qizc
 * @Date:   2018-01-24 12:19:20
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-31 10:52:02
 * @Path btWap \src\person\wallet\Withdrawals\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _Form from './_Form';
import _Info from './_Info';
import _BankInfo from './_BankInfo';
import store from './store';

@inject(store)
@observer
export default class Withdrawals extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };
    render() {
        const { $ } = this.context;
        
        return (
            <Layout title="余额提现">
                <_Info />
                <_BankInfo className="mt-md"/>
                <_Form />
            </Layout>
        );
    }
}
