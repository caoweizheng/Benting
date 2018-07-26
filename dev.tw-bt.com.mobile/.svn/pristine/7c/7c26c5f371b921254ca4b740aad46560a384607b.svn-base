/**
 * const prefixCls = 'styles-69835293';
 * const images = '/static/images/src/video/Index';
 * @Author: qizc
 * @Date:   2017-12-25 16:30:05
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 16:05:20
 * @Path btWap \src\video\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _Carousel from './_Carousel';
import _List from './_List';
import _BtVideo from './_BtVideo';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';
import UI from 'stores/ui';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-69835293';

@inject(store)
@observer
export default class Index extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentDidMount() {
        UI.header({
            hd: null,
            ft: (
                <img
                    src={`${images}/upload.png`}
                    onClick={() => Utils.router.push('/video/add')}
                    style={{
                        width: '1.2rem',
                        height: '.42rem',
                        borderRadius: '0.04rem'
                    }}
                />
            )
        });
    }

    componentWillUnmount() {
        UI.resetHeader();
    }

    render() {
        const { $ } = this.context;

        return (
            <Layout className={prefixCls} title="视讯">
                <_BtVideo />
                <_List className="mt-md" />
            </Layout>
        );
    }
}
