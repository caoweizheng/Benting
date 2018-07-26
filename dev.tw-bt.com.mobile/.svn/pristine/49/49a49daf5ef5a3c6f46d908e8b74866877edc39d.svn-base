/**
 * const prefixCls = 'styles-35908172';
 * const images = '/static/images/src/person/address/Update';
 * @Author: qizc
 * @Date:   2018-01-19 10:24:31
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-19 10:36:08
 * @Path btWap \src\person\address\Update\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, form, observer } from '@';
import { Button } from 'antd-mobile';
import { Form } from 'components';
import { Layout } from 'src/_';
import CityPicker from 'components/Form/CityPicker';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-93670299';

@inject(store)
@form
@observer
export default class Info extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { form, onSubmit } = this.props;
        const { list = [] } = $.getState('addressInfo');

        const { recName, phone, province, city, district, address } =
            list[0] || {};

        const _recName = form.getFieldValue('recName');
        return (
            <Layout title="添加地址">
                <Form className={prefixCls} form={form}>
                    <Form.Input
                        label="收货人"
                        name="recName"
                        initialValue={recName}
                        placeholder="请输入收货人姓名"
                        option={Const.rules.required}
                    />

                    <Form.Input
                        label="联系电话"
                        name="phone"
                        initialValue={phone}
                        placeholder="输入手机号码"
                        option={Const.rules.gen('mobile')}
                        type="phone"
                    />

                    <CityPicker
                        label="省市区"
                        name="city"
                        initialValue={
                            province ? [province, city, district] : []
                        }
                        option={Const.rules.required}
                    />
                    <Form.Textarea
                        name="address"
                        placeholder="详细地址"
                        initialValue={address}
                        rows={3}
                        option={Const.rules.required}
                    />
                </Form>
                
                <Form.Button
                    type="primary"
                    disabled={!_recName}
                    onClick={() =>
                        onSubmit(form, values =>
                            Utils.onConfirm('确认修改该地址', () => $.doUpdate(values))
                        )}
                >
                    保存
                </Form.Button>
            </Layout>
        );
    }
}
