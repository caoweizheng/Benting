/**
 * const prefixCls = 'styles-93109198';
 * const images = '/static/images/src/person/message/Index';
 * @Author: qizc
 * @Date:   2018-01-23 11:34:58
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\message\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import { ListView } from 'components';
import _BbsItem from './_BbsItem';
import Styles from 'styles';
import store from './store';

@inject(store)
@observer
export default class Message extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const messageList = $.getState('messageList');

        return (
            <Layout title="我的消息">
                <ListView
                    data={messageList}
                    renderRow={rowData => <_BbsItem {...rowData} />}
                    onEndReached={$.fetchMessageList}
                />
            </Layout>
        );
    }
}
