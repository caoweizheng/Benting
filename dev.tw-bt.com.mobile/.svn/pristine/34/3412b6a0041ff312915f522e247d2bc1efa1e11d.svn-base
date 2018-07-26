/**
 * const prefixCls = 'styles-13020018';
 * const images = '/static/images/src/person/event/GetPrize';
 * @Author: qizc
 * @Date:   2018-01-25 14:13:17
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-01 11:48:51
 * @Path btWap \src\person\event\GetPrize\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Flex } from 'antd-mobile';
import { Img, Form, PayConfirm } from 'components';
import { Layout, Header } from 'src/_';
import Const from 'const';
import Styles from 'styles';
import Info from 'src/person/event/_/Info';
import Address from 'src/person/event/_/Address';
import State from 'src/person/event/_/State';
import Utils from 'utils';
import store from './store';

const prefixCls = 'styles-13020018';

@inject(store)
@observer
export default class Detail extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { show } = $.getState();
        const { defaultAddress = {}, orderinfo = {} } = $.getState('orderInfo');
        const { phone = '' } = defaultAddress || {};
        const {
            dataType = 2,
            state = 0,
            amount = '0.00',
            payState = 0,
            logisticsNo = ''
        } =
            orderinfo || {};

        return (
            <Layout title="领奖详情">
                <div className={prefixCls}>
                    <Info orderinfo={orderinfo} />
                    <Address
                        defaultAddress={defaultAddress}
                        orderinfo={orderinfo}
                        className="mt-md"
                    />
                    {state > 0 && (
                        <State
                            className="mt-md"
                            state={state}
                            logisticsNo={logisticsNo}
                        />
                    )}
                    {state == 0 &&
                        payState == 0 && (
                            <Form.Button
                                disabled={!phone}
                                onClick={() => $.onConfirm()}
                            >
                                付邮领取
                            </Form.Button>
                        )}
                    <PayConfirm
                        show={show}
                        dataType={dataType}
                        amount={amount}
                        onClose={$.closeModal}
                        onConfirm={$.doPay}
                    />
                </div>
            </Layout>
        );
    }
}
