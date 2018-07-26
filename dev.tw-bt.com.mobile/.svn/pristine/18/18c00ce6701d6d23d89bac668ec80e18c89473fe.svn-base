/**
 * const prefixCls = 'styles-68911813';
 * const images = '/static/images/src/shop/Goods';
 * @Author: qizc
 * @Date:   2017-12-28 14:25:41
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:55:03
 * @Path btWap \src\shop\Goods\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _Carousel from './_Carousel';
import _Info from './_Info';
import _Tag from './_Tag';
import _Attr from './_Attr';
import _Guess from './_Guess';
import _Btn from './_Btn';
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
            <Layout title="商品详情" hideHeader>
                <_Carousel />
                <_Info />
                <_Tag className="mt-d"/>
                <_Attr className="mt-d"/>
                <_Guess className="mt-d"/>
                <_Btn />
            </Layout>
        );
    }
}
