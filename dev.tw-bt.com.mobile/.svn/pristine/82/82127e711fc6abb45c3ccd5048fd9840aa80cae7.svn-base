/**
 * const prefixCls = 'styles-8440477';
 * const images = '/static/images/src/person/event/myFloor/GetPrize';
 * @Author: qizc
 * @Date:   2018-01-18 17:22:47
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-25 09:28:04
 * @Path btWap \src\person\event\myFloor\GetPrize\index.js
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

const prefixCls = 'styles-8440477';

@inject(store)
@observer
export default class Detail extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { show } = $.getState();
        const { defaultAddress, orderinfo = {} } = $.getState('floorAward');
        const { phone } = defaultAddress || {};
        const { state = 0, amount = '0.00', logisticsNo = '' } = orderinfo || {};

        return (
            <Layout title="领奖详情">
                <div className={prefixCls}>
                    <Info orderinfo={orderinfo} />
                    <Address
                        defaultAddress={defaultAddress}
                        orderinfo={orderinfo}
                        className="mt-md"
                    />
                    {state > 0 && <State className="mt-md" state={state} logisticsNo={logisticsNo}/>}
                    {state == 0 && (
                        <Form.Button
                            disabled={!phone}
                            onClick={() => $.onConfirm()}
                        >
                            付邮领取
                        </Form.Button>
                    )}
                    <PayConfirm
                        show={show}
                        amount={amount}
                        onClose={$.closeModal}
                        onConfirm={$.doPay}
                    />
                </div>
            </Layout>
        );
    }
}
