/**
 * const prefixCls = 'styles-65482626';
 * const images = '/static/images/src/shop/Index';
 * @Author: Jack
 * @Date:   2017-12-28 10:25:50
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:56:29
 * @Path btWap \src\shop\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _Menu from './_Menu';
import _List from './_List';
import _GoodsList from './_GoodsList';
import store from './store';

@inject(store)
@observer
export default class Shop extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;

        return (
            <Layout title="商品" hideHeader>
                <_Menu />
                <_List className="mt-d" />
                <div className="t-line" />
                <_GoodsList className="mt-d" />
            </Layout>
        );
    }
}
