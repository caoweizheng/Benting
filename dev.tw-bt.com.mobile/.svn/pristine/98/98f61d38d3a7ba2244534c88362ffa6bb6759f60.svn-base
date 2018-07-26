/**
 * const prefixCls = 'styles-09911940';
 * const images = '/static/images/src/person/order/Add';
 * @Author: Jack
 * @Date:   2018-01-03 09:53:44
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:32:30
 * @Path btWap \src\person\order\Add\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer, form } from '@';
import { List, Flex, Button } from 'antd-mobile';
import { Layout } from 'src/_';
import { Form } from 'components';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import G from 'stores/g';
import store from './store';
import { images, data } from './ds';

const prefixCls = 'styles-09911940';

@inject(store)
@form
@observer
export default class Add extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    handleUploadPic = () => {
        document.querySelector(`.${prefixCls} input[type=file]`).click();
    };

    render() {
        const { $ } = this.context;
        const { form, onSubmit } = this.props;
        const shopName = form.getFieldValue('shopName') || [];
        const isPhysical = shopName[0] === '实体店';

        const mounted = G.getState('mounted');
        let isLogin = true;
        if (Const.__CLIENT__) {
            isLogin = !!G.getState('tk');
        }

        return (
            <Layout hideHeader title="售后服务中心">
                <img className="thumb" src={`${images}/thumb.png`} />

                {/*注册*/}
                {mounted &&
                    !isLogin && (
                        <Form
                            id="register"
                            className="mb-d"
                            label
                            form={form}
                            renderHeader={() => (
                                <div>
                                    <p className="text-xs text-sub">
                                        <span>提交订单需要先登录，若已有账号</span>
                                        <span
                                            className="text-primary"
                                            onClick={$.doLoginThenBack}
                                        >
                                            （点击登录）
                                        </span>
                                    </p>
                                    <p className="text-xs text-sub mt-xs">
                                        或注册：
                                    </p>
                                </div>
                            )}
                        >
                            <Form.Input
                                label="手机号"
                                name="mobile"
                                option={Const.rules.gen('mobile')}
                                type="phone"
                                updatePlaceholder={false}
                            />
                            <Form.Captcha
                                label="验证码"
                                name="code"
                                option={Const.rules.required}
                                placeholder="6位短信验证码"
                                updatePlaceholder={false}
                                smsType="register"
                            />
                            <Form.Input
                                label="密码"
                                name="pwd"
                                option={Const.rules.required}
                                placeholder="8-16位密码"
                                type="password"
                                updatePlaceholder={false}
                            />
                        </Form>
                    )}

                <Form
                    id="order"
                    form={form}
                    label
                    renderHeader={() => (
                        <p className="text-xs text-sub">请完善您的订单信息</p>
                    )}
                    renderFooter={() => (
                        <div>
                            {isPhysical && (
                                <p className="text-danger text-xs mb-sm">
                                    请把实体店铺售后卡拍照并上传
                                </p>
                            )}
                            <p className="text-primary text-xs">
                                完善订单信息后，所得积分、金币和电子售后凭证将会与7天后发放
                            </p>
                        </div>
                    )}
                >
                    <Form.Picker
                        label="订单店铺"
                        name="shopName"
                        initialValue={[data[0].value]}
                        option={Const.rules.required}
                        data={data}
                    />
                    {!isPhysical && (
                        <Form.Input
                            label="订单号"
                            type="number"
                            name="orderNo"
                            option={Const.rules.required}
                        />
                    )}
                    {isPhysical && (
                        <Form.Upload
                            label="上传图片"
                            name="cardImg"
                            option={Const.rules.required}
                        />
                    )}
                    {isPhysical && (
                        <span
                            className="p-select"
                            onClick={this.handleUploadPic}
                        >
                            选择
                        </span>
                    )}
                </Form>

                <List
                    className="mt-d"
                    renderFooter={() => (
                        <p className="text-xs text-primary">
                            享受现金券、金币、积分兑换、抽奖礼品、晋升等级、会员特权、生日礼物等权益
                        </p>
                    )}
                >
                    <List.Item
                        arrow="horizontal"
                        onClick={() => Utils.router.push('/person')}
                    >
                        <Flex>
                            <img src={`${Const.__IMAGES__}/user.png`} />
                            <span className="ml-sm">前往个人中心</span>
                        </Flex>
                    </List.Item>
                </List>

                <List
                    className="mt-d"
                    renderFooter={() => (
                        <p className="text-xs text-primary">
                            查看离您最近的本汀专卖店，到店可享受更多服务
                        </p>
                    )}
                >
                    <List.Item
                        arrow="horizontal"
                        onClick={() => Utils.router.push('/merchant')}
                    >
                        <Flex>
                            <img src={`${images}/md.png`} />
                            <span className="ml-sm">离您最近的本汀专卖店</span>
                        </Flex>
                    </List.Item>
                </List>
                <Button
                    className="t-fixed-btn"
                    type="primary"
                    onClick={() => {
                        if (isLogin) {
                            onSubmit(form, $.doSubmit);
                        } else {
                            onSubmit(form, $.doRegisterThenSubmit);
                        }
                    }}
                >
                    确认提交
                </Button>

                <style jsx>{`
                    .styles-09911940 {
                    }
                    .wrap {
                        padding: 0 ${Styles.wind};
                    }
                    .thumb {
                        width: 100%;
                        min-height: 2.25rem;
                    }
                    .p-select {
                        position: absolute;
                        bottom: 0;
                        right: 0.68rem;
                        margin-bottom: 0.76rem;
                        color: #999;
                    }
                `}</style>
            </Layout>
        );
    }
}
