/**
 * const prefixCls = 'styles-36816566';
 * const images = '/static/images/src/star/Detail';
 * @Author: qizc
 * @Date:   2018-01-20 11:56:39
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 16:01:10
 * @Path btWap \src\star\Detail\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import Layout from 'src/_/Layout';
import _Info from './_Info';
import store from './store';

const prefixCls = 'styles-36816566';

@inject(store)
@observer
export default class Member extends React.Component {
    render() {
        return (
            <Layout className={prefixCls} title="名人简介">
                <_Info  />
                <style jsx global>{`
                    .styles-36816566 {
                        background: #fff;
                    }
                `}</style>
            </Layout>
        );
    }
}
