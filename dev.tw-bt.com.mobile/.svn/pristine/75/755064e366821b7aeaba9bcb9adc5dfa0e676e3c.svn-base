/**
 * const prefixCls = 'styles-0339898';
 * const images = '/static/images/src/person/address/Index';
 * @Author: qizc
 * @Date:   2018-01-19 09:22:12
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-19 10:59:12
 * @Path btWap \src\person\address\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { ListView } from 'components';
import { Layout } from 'src/_';
import { Button } from 'antd-mobile';
import _Item from './_Item';
import UI from 'stores/ui';
import store from './store';

const prefixCls = 'styles-0339898';

@inject(store)
@observer
export default class Order extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };
    componentDidMount() {
        UI.header({
            ft: (
                <Button
                    size="small"
                    type="primary"
                    onClick={() => Utils.router.push('/person/address/add')}
                    style={{
                        background: `${Styles.color_primary}`
                    }}
                >
                    新增地址
                </Button>
            )
        });
    }
    componentWillUnmount() {
        UI.resetHeader();
    }
    render() {
        const { $ } = this.context;
        const addressList = $.getState('addressList');

        return (
            <Layout title="选择地址">
                <ListView
                    data={addressList}
                    renderRow={data => <_Item {...data} />}
                    onEndReached={$.fetchAddressList}
                />
            </Layout>
        );
    }
}
