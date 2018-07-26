/**
 * const prefixCls = 'styles-20189043';
 * const images = '/static/images/src/shop/jianlou/Index';
 * @Author: qizc
 * @Date:   2018-01-30 12:20:53
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:57:05
 * @Path btWap \src\shop\jianlou\Index\index.js
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

const prefixCls = 'styles-20189043';

@inject(store)
@observer
export default class Miaosha extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const jianlouList = $.getState('jianlouList');

        return (
            <Layout hideHeader title="金币捡漏">
                <div className="banner" />
                <ListView
                    className="mt-d"
                    data={jianlouList}
                    renderRow={data => <_Item {...data} />}
                    onEndReached={$.fetchJianlouList}
                />

                <style jsx>{`
                    .styles-20189043 {
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
