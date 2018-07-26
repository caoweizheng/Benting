/**
 * const prefixCls = 'styles-12747660';
 * const images = '/static/images/src/person/wallet/CoinBuy';
 * @Author: Jack
 * @Date:   2018-01-08 14:29:26
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-15 15:15:27
 * @Path btWap \src\person\wallet\CoinBuy\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { PayConfirm } from 'components';
import { Layout } from 'src/_';
import _Block from './_Block';
import _Input from './_Input';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-12747660';

@inject(store)
@observer
export default class CoinBuy extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { show, amount } = $.getState();
        const { sysAmount } = $.getState('walletInfo');

        return (
            <Layout className={prefixCls} title="兑换金币" hideLogo>
                <div className="amount text-center">
                    <p className="text-sm text-void">金币余额</p>
                    <p className="p-amount text-void">
                        <span>{sysAmount}</span>
                        <span className="text-sm ml-xs">枚</span>
                    </p>
                </div>
                <_Block />
                <_Input />
                <PayConfirm
                    show={show}
                    amount={amount}
                    onClose={$.closeModal}
                    onConfirm={$.doBuyCoin}
                />

                <style jsx>{`
                    .styles-12747660 {
                    }
                    .amount {
                        padding-bottom: 0.8rem;
                        background: ${Styles.color_header};
                    }
                    .p-amount {
                        padding-top: 0.48rem;
                        font-size: 0.64rem;
                    }
                `}</style>
            </Layout>
        );
    }
}
