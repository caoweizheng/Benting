/**
 * const prefixCls = 'style-104163';
 * const images = '/static/images/src/bbs/Registration';
 * @Author: czy0729
 * @Date: 2018-06-26 15:33:02
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-20 14:17:14
 * @Path dev.tw-bt.com.mobile /src/bbs/Registration/store.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer, form } from '@';
import { Layout } from 'src/_';
import { Form } from 'components';
import CityPicker from 'components/Form/CityPicker';
import Const from 'const';
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
        const { form, onSubmit } = this.props;
        const userInfo = $.getState('userInfo');
        const joinInfo = $.getState('registration');
        const bankInfo = $.getState('bankInfo');

        if (!joinInfo._loaded) return null;

        let isCanEdit = false;
        let isFormRegist = false;
        let isCanRegist = false;
        let isFormSubmit = false;
        let isCanSubmit = false;
        let isUpdateOrder = false;
        let text;

        //joinInfo.status(-1=>取消报名, 0=>报名审核中, 1=>报名审核未通过, 2=>报名审核通过,
        //3=>订单信息审核中, 4=>订单信息审核未通过, 5=>订单信息审核通过)
        switch (parseInt(joinInfo.status)) {
            case -1:
                isFormRegist = true;
                isCanRegist = true;
                isCanEdit = true;
                text = '重新报名';
                break;

            case 0:
                isFormRegist = true;
                text = '报名审核中';
                break;

            case 1:
                isFormRegist = true;
                isCanRegist = true;
                isCanEdit = true;
                text = '审核未通过，重新报名';
                break;

            case 2:
                isFormSubmit = true;
                isCanSubmit = true;
                isCanEdit = true;
                text = '提交订单';
                break;

            case 3:
                isFormSubmit = true;
                text = '订单审核中';
                break;

            case 4:
                isFormSubmit = true;
                isCanSubmit = true;
                isCanEdit = true;
                isUpdateOrder = true;
                text = '审核未通过，重新提交订单';
                break;

            case 5:
                isFormSubmit = true;
                text = '审核通过，请等待奖金发放';
                break;

            default:
                isFormRegist = true;
                isCanRegist = true;
                isCanEdit = true;
                text = '提交报名';
                break;
        }

        return (
            <Layout title="活动报名">
                {isFormRegist && (
                    <div>
                        <Form label form={form} renderHeader="请填写基本信息">
                            <Form.Input
                                label="姓名"
                                name="name"
                                option={Const.rules.required}
                                updatePlaceholder={false}
                                initialValue={joinInfo.name}
                                disabled={!isCanEdit}
                            />
                            <Form.Input
                                label="手机号"
                                name="phone"
                                option={Const.rules.gen('mobile')}
                                type="phone"
                                updatePlaceholder={false}
                                initialValue={joinInfo.phone}
                                disabled={!isCanEdit}
                            />
                            <Form.Input
                                label="旺旺号"
                                name="ww"
                                option={Const.rules.required}
                                updatePlaceholder={false}
                                initialValue={joinInfo.ww || userInfo.ww}
                            />
                            <Form.Input
                                label="微信昵称"
                                name="wechat"
                                option={Const.rules.required}
                                updatePlaceholder={false}
                                initialValue={joinInfo.wechat}
                                disabled={!isCanEdit}
                            />
                            <CityPicker
                                label="地区"
                                name="area"
                                option={Const.rules.required}
                                initialValue={
                                    joinInfo.province
                                        ? [
                                              joinInfo.province,
                                              joinInfo.city,
                                              joinInfo.county
                                          ]
                                        : []
                                }
                                disabled={!isCanEdit}
                            />
                            <Form.Input
                                label="详细地址"
                                name="address"
                                option={Const.rules.required}
                                updatePlaceholder={false}
                                initialValue={joinInfo.address}
                                disabled={!isCanEdit}
                            />
                        </Form>
                        <Form label form={form} renderHeader="选填">
                            <Form.Input
                                label="QQ"
                                name="qq"
                                updatePlaceholder={false}
                                initialValue={joinInfo.qq}
                                disabled={!isCanEdit}
                            />
                            <Form.Input
                                label="备注"
                                name="message"
                                updatePlaceholder={false}
                                initialValue={joinInfo.message}
                                disabled={!isCanEdit}
                            />
                        </Form>
                        <Form.Button
                            type="primary"
                            onClick={() =>
                                onSubmit(form, values =>
                                    Utils.onConfirm(
                                        '报名信息提交后不可修改，确定提交?',
                                        () => $.doRegist(values)
                                    )
                                )
                            }
                            disabled={!isCanRegist}
                        >
                            {text}
                        </Form.Button>
                    </div>
                )}

                {isFormSubmit && (
                    <div>
                        <Form
                            label
                            form={form}
                            renderHeader={
                                <span className="text-danger">
                                    请确保收货再提交订单信息
                                </span>
                            }
                        >
                            <Form.Input
                                label="订单号"
                                name="order_no"
                                option={Const.rules.required}
                                updatePlaceholder={false}
                                initialValue={joinInfo.order_no}
                                disabled={!isCanEdit}
                            />
                            <Form.Input
                                label="开户行"
                                name="bank_name"
                                option={Const.rules.required}
                                updatePlaceholder={false}
                                initialValue={
                                    joinInfo.bank_name ||
                                    `${bankInfo.bankName} ${
                                        bankInfo.branchName
                                    }`
                                }
                                disabled={!isCanEdit}
                            />
                            <Form.Input
                                label="开户姓名"
                                name="bank_user"
                                option={Const.rules.required}
                                updatePlaceholder={false}
                                initialValue={
                                    joinInfo.bank_user || bankInfo.cardUsername
                                }
                                disabled={!isCanEdit}
                            />
                            <Form.Input
                                label="银行卡号"
                                name="bank_card"
                                option={Const.rules.required}
                                updatePlaceholder={false}
                                initialValue={
                                    joinInfo.bank_card || bankInfo.bankNo
                                }
                                disabled={!isCanEdit}
                            />
                        </Form>
                        {joinInfo.marks && (
                            <p className="p-w mt-d text-sm text-danger">
                                <span>近一次审核信息：</span>
                                <span>{joinInfo.marks}</span>
                            </p>
                        )}
                        <Form.Button
                            type="primary"
                            onClick={() =>
                                onSubmit(form, values =>
                                    Utils.onConfirm(
                                        '订单信息提交后，在审核前不可修改，确定提交?',
                                        () => {
                                            if (isUpdateOrder) {
                                                $.doUpdate(values);
                                            } else {
                                                $.doSubmit(values);
                                            }
                                        }
                                    )
                                )
                            }
                            disabled={!isCanSubmit}
                        >
                            {text}
                        </Form.Button>
                    </div>
                )}
            </Layout>
        );
    }
}
