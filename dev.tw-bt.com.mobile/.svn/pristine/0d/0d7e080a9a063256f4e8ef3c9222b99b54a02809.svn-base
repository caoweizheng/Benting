/**
 * const prefixCls = 'styles-21988030';
 * const images = '/static/images/src/event/sign/Index';
 * @Author: Jack
 * @Date:   2018-05-26 14:48:21
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-26 16:14:07
 * @Path btWap \src\event\sign\Index\index.js
 */
'use strict';

import React from 'react';
import { inject } from '@';
import { Layout } from 'src/_';
import _Top from './_Top';
import _List from './_List';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-21988030';

@inject(store)
export default class Sign extends React.Component {
    render() {
        return (
            <Layout className={prefixCls} title="每日签到" hideHeader>
                <_Top />
                <_List className="mt-d" />

                <style jsx global>{`
                    .styles-21988030 {
                        min-height: 100vh;
                        background-image: url(${images}/bg.png);
                        background-color: #ff7b77;
                        background-size: 100%;
                        background-position: top;
                        background-repeat: no-repeat;
                    }
                `}</style>
            </Layout>
        );
    }
}
