/**
 * const prefixCls = 'styles-01630194';
 * const images = '/static/images/src/index';
 * @Author: qizc
 * @Date:   2017-12-25 10:09:28
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:10:10
 * @Path btWap \src\index\index.js
 */
'use strict';

import React from 'react';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _Carousel from './_Carousel';
import _List from './_List';
import store from './store';

@inject(store)
@observer
export default class Infomation extends React.Component {
    render() {
        return (
            <Layout title="资讯" hideHeader>
                <_Carousel />
                <_List className="mt-md" />
            </Layout>
        );
    }
}
