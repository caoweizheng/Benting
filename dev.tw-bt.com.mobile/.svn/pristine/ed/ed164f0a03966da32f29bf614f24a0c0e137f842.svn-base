/**
 * const prefixCls = 'styles-26975921';
 * const images = '/static/images/src/person/event/Index';
 * @Author: qizc
 * @Date:   2018-01-24 14:47:33
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-27 12:13:30
 * @Path btWap \src\person\event\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _List from './_List';
import store from './store';

@inject(store)
@observer
export default class Index extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        return (
            <Layout title="我的活动">
                <_List className="mt-md"/>
            </Layout>
        );
    }
}
