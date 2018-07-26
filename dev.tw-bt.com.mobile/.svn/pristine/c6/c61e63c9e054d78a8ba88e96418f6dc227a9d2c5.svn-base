/**
 * const prefixCls = 'style-134520';
 * const images = '/static/images/src/person/event/registration/Detail';
 * @Author: czy0729
 * @Date: 2018-06-27 15:25:50
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-03 12:09:26
 * @Path dev.tw-bt.com.mobile /src/person/event/registration/Detail/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer, form } from '@';
import { Layout } from 'src/_';
import { Form } from 'components';
import store from './store';

@inject(store)
@form
@observer
export default class Registration extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { form } = this.props;
        const joinInfo = $.getState('registrationDetail');

        return (
            <Layout title="活动报名">
                <Form label form={form} renderHeader="我的活动信息">
                    <Form.Input
                        label="姓名"
                        name="name"
                        initialValue={joinInfo.name}
                        disabled
                    />
                    <Form.Input
                        label="手机号"
                        name="phone"
                        initialValue={joinInfo.phone}
                        disabled
                    />
                    <Form.Input
                        label="旺旺号"
                        name="ww"
                        initialValue={joinInfo.ww}
                        disabled
                    />
                    <Form.Input
                        label="微信昵称"
                        name="wechat"
                        initialValue={joinInfo.wechat}
                        disabled
                    />
                    <Form.Input
                        label="地区"
                        name="area"
                        initialValue={
                            joinInfo.province
                                ? `${joinInfo.province} ${joinInfo.city} ${
                                      joinInfo.county
                                  }`
                                : ''
                        }
                        disabled
                    />
                    <Form.Input
                        label="详细地址"
                        name="address"
                        initialValue={joinInfo.address}
                        disabled
                    />
                    <Form.Input
                        label="QQ"
                        name="qq"
                        initialValue={joinInfo.qq || '-'}
                        disabled
                    />
                    <Form.Input
                        label="备注"
                        name="message"
                        initialValue={joinInfo.message || '-'}
                        disabled
                    />
                </Form>
                {joinInfo.order_no && (
                    <Form
                        className="mt-d"
                        label
                        form={form}
                        renderHeader="我的订单信息"
                    >
                        <Form.Input
                            label="订单号"
                            name="order_no"
                            initialValue={joinInfo.order_no}
                            disabled
                        />
                        <Form.Input
                            label="开户行"
                            name="bank_name"
                            initialValue={joinInfo.bank_name}
                            disabled
                        />
                        <Form.Input
                            label="开户姓名"
                            name="bank_user"
                            initialValue={joinInfo.bank_user}
                            disabled
                        />
                        <Form.Input
                            label="银行卡号"
                            name="bank_card"
                            initialValue={joinInfo.bank_card}
                            disabled
                        />
                    </Form>
                )}
            </Layout>
        );
    }
}
