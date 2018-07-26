/**
 * const prefixCls = 'style-182880';
 * const images = '/static/images/src/person/event/Registration/Index';
 * @Author: czy0729
 * @Date: 2018-06-27 12:25:12
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-28 10:11:34
 * @Path dev.tw-bt.com.mobile /src/person/event/Registration/Index/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { ListView } from 'components';
import { Layout } from 'src/_';
import Item from './_Item';
import store from './store';

@inject(store)
@observer
export default class Index extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const data = $.getState('registration');

        return (
            <Layout title="社区活动">
                <ListView
                    className="t-antd-list-split t-antd-list-sm"
                    data={data}
                    renderRow={data => <Item {...data} />}
                    onEndReached={$.fetchRegistration}
                />
            </Layout>
        );
    }
}
