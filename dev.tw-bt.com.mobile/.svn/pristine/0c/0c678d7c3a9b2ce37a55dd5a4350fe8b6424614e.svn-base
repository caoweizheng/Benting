/**
 * const prefixCls = 'styles-11305190';
 * const images = '/static/images/src/person/zone/Index';
 * @Author: Jack
 * @Date:   2018-03-02 17:29:45
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-16 10:08:45
 * @Path btWap \src\person\zone\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { ListView } from 'components';
import { Layout } from 'src/_';
import _Top from './_Top';
import _List from './_List';
import _Fixed from './_Fixed';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-11305190';

@inject(store)
@observer
export default class Zone extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { niname } = $.getState('personInfo');

        return (
            <Layout title={niname ? `${niname}的空间` : '空间'} hideHeader>
                <_Top />
                <_List />
                <_Fixed />
            </Layout>
        );
    }
}
