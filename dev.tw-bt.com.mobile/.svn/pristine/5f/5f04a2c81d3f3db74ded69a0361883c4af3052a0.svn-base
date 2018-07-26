/**
 * const prefixCls = 'styles-46448116';
 * const images = '/static/images/src/person/bank/Bind';
 * @Author: qizc
 * @Date:   2018-01-24 11:20:26
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\bank\Bind\_Form.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer, form } from '@';
import { Form } from 'components';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';
import { bankDs } from 'ds/bank';

const prefixCls = 'styles-12788843';

const _Form = (props, { $ }) => {
    const { form, onSubmit } = props;
    const bankName = form.getFieldValue('bankName') || ['工商银行'];
    const isNeedBrand =
        bankName[0] != '工商银行' &&
        bankName[0] != '农业银行' &&
        bankName[0] != '中国银行' &&
        bankName[0] != '建设银行';

    return (
        <div>
            <Form
                form={form}
                renderHeader={<p className="text-md text-sub">请完善银行卡信息</p>}
            >
                <Form.Picker
                    name="bankName"
                    label="卡类型"
                    option={Const.rules.required}
                    data={bankDs}
                />
                {isNeedBrand && (
                    <Form.Input
                        name="branchName"
                        label="支行名称"
                        option={Const.rules.required}
                    />
                )}
                <Form.Input
                    name="bankNo"
                    label="银行卡号"
                    option={Const.rules.gen('bank')}
                    type="number"
                />
                <Form.Input
                    name="cardUsername"
                    label="持卡人"
                    option={Const.rules.required}
                />
            </Form>
            <div className="p-sw text-danger text-sm">
                本银行卡用于参与本汀后续所有活动的奖励金发放，绑定之后无法修改，请认真核对并填写正确的银行卡信息。
            </div>
            <Form.Button
                onClick={() =>
                    Utils.checkLogin(() =>
                        onSubmit(form, value => {
                            Utils.onConfirm(
                                '银行卡一经绑定无法解绑，请确认您输入的信息无误。',
                                () => $.doSubmit(value),
                                '绑定银行卡'
                            );
                        })
                    )}
            >
                确定
            </Form.Button>
        </div>
    );
};

_Form.contextTypes = {
    $: PropTypes.object
};
export default form(observer(_Form));
