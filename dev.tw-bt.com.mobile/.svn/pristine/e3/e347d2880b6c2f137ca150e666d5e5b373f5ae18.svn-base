/**
 * const prefixCls = 'styles-51658592';
 * const images = '/static/images/src/member/Index';
 * @Author: qizc
 * @Date:   2017-12-25 15:43:53
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-20 12:35:16
 * @Path btWap \src\member\Index\index.js
 */
'use strict';

import React from 'react';
import LazyLoad from 'react-lazyload';
import { inject, observer } from '@';
import Layout from 'src/_/Layout';
import _Join from './_Join';
import _Power from 'src/person/Index/_Power';
import _OtherPower from 'src/person/Index/_OtherPower';
import store from './store';

const prefixCls = 'styles-51658592';

@inject(store)
@observer
export default class Member extends React.Component {
    render() {
        return (
            <Layout title="汀友会">
                <_Join />

                <LazyLoad height="17rem" once>
                    <_Power className="mt-lg" />
                </LazyLoad>
                <LazyLoad height="4.6rem" once>
                    <_OtherPower className="mt-md" />
                </LazyLoad>
            </Layout>
        );
    }
}
