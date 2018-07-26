/**
 * const prefixCls = 'styles-10250584';
 * const images = '/static/images/src/person/wallet/Withdrawals';
 * @Author: qizc
 * @Date:   2018-01-24 13:37:08
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\wallet\Withdrawals\_Info.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer, form } from '@';
import { Form } from 'components';
import { List } from 'antd-mobile';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-10250584';

const _Info = (props, { $ }) => {
    const { btAmount = '0.00' } = $.getState('walletInfo');

    return (
        <div className={`${prefixCls} text-center text-void`}>
            <p className="text-sm mt-lg">可提现金额 (元)</p>
            <p className={`${prefixCls}__money`}>{btAmount}</p>
            <style jsx global>{`
                .styles-10250584 {
                    background: #0e1425;
                    overflow: hidden;
                }
                .${prefixCls}__money {
                    padding: .64rem 0;
                    font-size: 1rem;
                }
            `}</style>
        </div>
    );
};

_Info.contextTypes = {
    $: PropTypes.object
};

export default observer(_Info);
