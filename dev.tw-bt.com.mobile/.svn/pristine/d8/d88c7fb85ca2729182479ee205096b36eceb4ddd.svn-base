/**
 * const prefixCls = 'styles-68899121';
 * const images = '/static/images/src/person/wallet/Coin';
 * @Author: Jack
 * @Date:   2018-01-08 14:17:22
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-13 15:08:51
 * @Path btWap \src\person\wallet\Coin\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _Info from './_Info';
import _List from './_List';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-68899121';

@inject(store)
@observer
export default class Coin extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;

        return (
            <Layout title="我的金币">
                <_Info />
                <_List />
            </Layout>
        );
    }
}
