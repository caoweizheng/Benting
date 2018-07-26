/**
 * const prefixCls = 'styles-14588046';
 * const images = '/static/images/src/person/wallet/Withdrawals';
 * @Author: qizc
 * @Date:   2018-01-24 13:56:49
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-24 18:43:22
 * @Path btWap \src\person\wallet\Withdrawals\_BankInfo.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Flex } from 'antd-mobile';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-14588046';

const _BankInfo = (props, { $ }) => {
    const { className } = props;
    const { bankNo = '', bankName = '' } = $.getState('bankInfo');

    //七牛云认为交通银行是敏感词，替换
    let _bankName = bankName;
    if (_bankName === '交通银行') {
        _bankName = 'jiaotongyinhang';
    }

    return (
        <List className={classNames(prefixCls, className)}>
            {!!bankNo && (
                <List.Item extra={bankNo.replace(/^\d+(\d{4})$/, '尾号$1')}>
                    <Flex>
                        <img src={`${Const.__IMAGES__}/bank/${_bankName}.png`} />
                        <span className="ml-sm">{bankName}</span>
                    </Flex>
                </List.Item>
            )}
            {!bankNo && (
                <List.Item
                    arrow="horizontal"
                    extra={<div className="text-info-danger">去绑卡</div>}
                    onClick={() => Utils.router.push('/person/bank/bind')}
                >
                    您还没有绑定银行卡
                </List.Item>
            )}
        </List>
    );
};

_BankInfo.contextTypes = {
    $: PropTypes.object
};

export default observer(_BankInfo);
