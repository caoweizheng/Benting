/**
 * const prefixCls = 'styles-78838021';
 * const images = '/static/images/src/person/wallet/Index';
 * @Author: Jack
 * @Date:   2018-01-08 10:46:08
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-12 12:21:45
 * @Path btWap \src\person\wallet\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'antd-mobile';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _Info from './_Info';
import _List from './_List';
import Const from 'const';
import Utils from 'utils';
import UI from 'stores/ui';
import store from './store';

const prefixCls = 'styles-78838021';

@inject(store)
export default class Wallet extends React.Component {
    componentDidMount() {
        UI.header({
            ft: (
                <Flex>
                    <img
                        key={1}
                        src={`${Const.__IMAGES__}/icon/exchange.png`}
                        style={{ width: '0.32rem', height: '0.32rem' }}
                    />
                    <span
                        key={2}
                        className="text-sm ml-xs"
                        onClick={() =>
                            Utils.router.push('/person/wallet/exchange')}
                    >
                        划转
                    </span>
                </Flex>
            )
        });
    }

    componentWillUnmount() {
        UI.resetHeader();
    }

    render() {
        return (
            <Layout title="我的余额">
                <_Info />
                <_List />
            </Layout>
        );
    }
}
