/**
 * const prefixCls = 'styles-44379480';
 * const images = '/static/images/src/shop/miaosha/Index';
 * @Author: Jack
 * @Date:   2018-01-24 11:43:47
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:59:43
 * @Path btWap \src\shop\miaosha\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { ListView } from 'components';
import { Layout } from 'src/_';
import _Item from './_Item';
import Styles from 'styles';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-44379480';

@inject(store)
@observer
export default class Miaosha extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const miaoshaList = $.getState('miaoshaList');

        return (
            <Layout title="秒杀商城" hideHeader>
                <div className="banner" />
                <ListView
                    className="mt-d"
                    data={miaoshaList}
                    renderRow={data => <_Item {...data} />}
                    onEndReached={$.fetchMiaoshaList}
                />

                <style jsx>{`
                    .styles-44379480 {
                    }
                    .banner {
                        padding-bottom: 40%;
                        .${Styles._bg};
                        background-image: url(${images}/banner.jpg);
                    }
                `}</style>
            </Layout>
        );
    }
}
