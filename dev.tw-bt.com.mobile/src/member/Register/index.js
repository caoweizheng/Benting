/**
 * const prefixCls = 'styles-44090003';
 * const images = '/static/images/src/member/Register';
 * @Author: Jack
 * @Date:   2018-02-24 14:58:22
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-29 15:39:08
 * @Path btWap \src\member\Register\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, form, observer } from '@';
import { Flex, Button } from 'antd-mobile';
import { Layout } from 'src/_';
import { Form } from 'components';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';
import store from './store';
import G from 'stores/g';
import { images } from './ds';

const prefixCls = 'styles-44090003';

@inject(store)
@form
@observer
export default class Register extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentDidMount() {
        if (Const.__CLIENT__) {
            const { $ } = this.context;

            G.loadAMapJS(() => $.geo());
        }
    }

    render() {
        const { $ } = this.context;
        const { form, onSubmit } = this.props;
        const { lng, address, status, registered } = $.getState();
        const userInfo = $.getState('userInfo');
        const { shopName, title } = $.getState('allianceInfo');

        let geoText;
        if (status === true) {
            geoText = address;
        } else if (status === false) {
            geoText = '定位失败，点击重新定位';
        } else {
            geoText = '定位中';
        }

        return (
            <Layout title="本汀官网">
                <div style={{ position: 'relative' }}>
                    <img className="img-banner" src={`${images}/banner.jpg`} />
                    <Flex className={`${prefixCls}__address`} onClick={$.regeo}>
                        <img
                            className="t-img img-geo"
                            src={`${Const.__IMAGES__}/icon/geo.png`}
                        />
                        <p className="text-sm ml-xs">{geoText}</p>
                    </Flex>
                    <Flex className={`${prefixCls}__info`}>
                        <img src={`${Const.__IMAGES__}/logo_mini.png`} />
                        {!!title && (
                            <p className="ml-sm">
                                <span>{shopName}邀请您加入</span>
                                <span className="text-danger">{title}</span>
                            </p>
                        )}
                    </Flex>
                </div>
                <Form form={form}>
                    <Form.Input
                        label={
                            <img src={`${Const.__IMAGES__}/icon/mobile.png`} />
                        }
                        name="mobile"
                        option={Const.rules.gen('mobile')}
                        type="phone"
                        placeholder="手机号"
                        updatePlaceholder={false}
                        onBlur={() => {
                            let mobile = form.getFieldValue('mobile') || '';
                            mobile = mobile.replace(/ /g, '');

                            if (!Utils.validate(mobile, 'mobile')) {
                                return;
                            }

                            $.checkMobile(mobile);
                        }}
                    />
                    <Form.Captcha
                        label={
                            <img src={`${Const.__IMAGES__}/icon/code.png`} />
                        }
                        name="code"
                        option={Const.rules.required}
                        placeholder="短信验证码"
                        updatePlaceholder={false}
                        smsType="register"
                    />
                    {!registered && (
                        <Form.Input
                            label={
                                <img
                                    src={`${Const.__IMAGES__}/icon/lock.png`}
                                />
                            }
                            name="pwd"
                            option={Const.rules.required}
                            placeholder="8-16位的密码"
                            type="password"
                            updatePlaceholder={false}
                        />
                    )}
                </Form>
                <div className="p-w mt-lg">
                    <Button
                        type="primary"
                        disabled={!status}
                        onClick={() => onSubmit(form, $.doRegister)}
                    >
                        确定
                    </Button>
                </div>

                <style jsx global>{`
                    .styles-44090003 {
                    }
                    .${prefixCls}__info {
                        position: relative;
                        padding: ${Styles.md} ${Styles.md} ${Styles.md}
                            ${Styles.sm};
                        margin: -0.8rem ${Styles.wind} 0;
                        background: #fff;
                        border-radius: 0.16rem;
                        box-shadow: 0.02rem 0.02rem 0.16rem rgba(0, 0, 0, 0.08);
                    }
                    .${prefixCls}__address {
                        position: absolute;
                        top: ${Styles.wind};
                        left: ${Styles.wind};
                        padding: ${Styles.xs} ${Styles.wind};
                        font-size: ${Styles.font_sm};
                        color: #fff;
                        background: rgba(255, 255, 255, 0.16);
                        border-radius: 0.32rem;
                    }
                `}</style>
                <style jsx>{`
                    .styles-44090003 {
                    }
                    .img-banner {
                        width: 100%;
                        min-height: 3.16rem;
                    }
                    .img-geo {
                        width: 0.4rem;
                        height: 0.4rem;
                    }
                `}</style>
            </Layout>
        );
    }
}
