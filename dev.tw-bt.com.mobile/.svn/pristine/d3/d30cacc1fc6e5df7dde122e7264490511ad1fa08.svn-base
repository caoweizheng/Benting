/**
 * const prefixCls = 'styles-95326805';
 * const images = '/static/images/src/person/wallet/Withdrawals';
 * @Author: qizc
 * @Date:   2018-01-24 12:19:20
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\wallet\Withdrawals\_Form.js
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
import __About from './__About';

const prefixCls = 'styles-95326805';

const _Form = (props, { $ }) => {
    const { form, onSubmit } = props;
    const { bankNo = '' } = $.getState('bankInfo');
    const { btAmount = '0.00' } = $.getState('walletInfo');

    const money = Number(form.getFieldValue('money')) || 0;
    const again_money = (money * 100 - Math.floor(money * 0.01 * 100)) / 100;

    const more = money > btAmount ? true : false;

    //全部提现
    const allWithdrawal = () => {
        if (Number(btAmount) < 1) {
            Utils.light('提现金额不能小于一元');
            form.setFieldsValue({
                money: ''
            });
            return false;
        }
        form.setFieldsValue({
            money: btAmount
        });
    };

    return (
        <div>
            <Form className="withd-form" form={form}>
                <Form.MoneyInput
                    className="money"
                    label="提现金额"
                    name="money"
                    maxLength={10}
                    option={Const.rules.required}
                />
                <Form.Input
                    className="again_money"
                    name="fact_money"
                    type="number"
                    label={<span className="text-black">实际到账</span>}
                    disabled
                    initialValue={again_money}
                />
                <List.Item
                    extra={
                        <span
                            className="text-main"
                            onClick={() => {
                                allWithdrawal();
                            }}
                        >
                            全部提现
                        </span>
                    }
                >
                    {!more && <span className="text-sub">可用余额 {btAmount}</span>}
                    {more && (
                        <span className="text-info-danger">
                            超出余额 {btAmount}
                        </span>
                    )}
                </List.Item>
            </Form>
            <__About />
            <Form.Button
                onClick={() =>
                    onSubmit(form, values => {
                        Utils.onConfirm('确定提现到绑定的银行卡?', () =>
                            $.doWithdrawals(values)
                        );
                    })}
                disabled={!bankNo || more || !money || money < 1}
            >
                {bankNo ? '确认提现' : '请先绑定银行卡'}
            </Form.Button>
        </div>
    );
};

_Form.contextTypes = {
    $: PropTypes.object
};
export default form(observer(_Form));
