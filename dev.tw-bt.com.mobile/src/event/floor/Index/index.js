/**
 * const prefixCls = 'styles-18972480';
 * const images = '/static/images/src/event/floor/Index';
 * @Author: Jack
 * @Date:   2018-01-13 17:11:23
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 14:44:00
 * @Path btWap \src\event\floor\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import _Info from './_Info';
import _List from './_List';
import Utils from 'utils';
import store from './store';

@inject(store)
@observer
export default class Floor extends React.Component {
    render() {
        return (
            <Layout title="欢乐踩楼">
                <_Info />
                <_List className="mt-d" />
            </Layout>
        );
    }
}
