/**
 * const prefixCls = 'styles-55518632';
 * const images = '/static/images/src/person/user/Info';
 * @Author: Jack
 * @Date:   2018-01-10 12:27:57
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-30 14:33:34
 * @Path btWap \src\person\user\Info\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, form, observer } from '@';
import { Button } from 'antd-mobile';
import { Form } from 'components';
import { Layout } from 'src/_';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-55518632';

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
        const userInfo = $.getState('userInfo');

        return (
            <Layout title="我的资料">
                <Form className={prefixCls} form={form}>
                    <Form.Upload
                        label="头像"
                        name="faceImg"
                        right
                        initialValue={userInfo.faceImg}
                        option={Const.rules.required}
                        data={{
                            iswatermark: 1
                        }}
                    />
                    <Form.Input
                        label="昵称"
                        name="niname"
                        initialValue={userInfo.niname}
                        option={Const.rules.required}
                    />
                    <Form.Picker
                        label="性别"
                        name="sex"
                        initialValue={userInfo.sex ? [userInfo.sex] : ['0']}
                        data={[
                            {
                                label: '男',
                                value: '1'
                            },
                            {
                                label: '女',
                                value: '2'
                            },
                            {
                                label: '保密',
                                value: '0'
                            }
                        ]}
                    />
                    <Form.DatePicker
                        label="生日"
                        name="birDay"
                        initialValue={
                            userInfo.birDay === '0-0-0' ||
                            !/^(\d+)-(\d+)-(\d+)$/g.test(userInfo.birDay)
                                ? ''
                                : userInfo.birDay
                        }
                    />
                </Form>
                <Button
                    className="t-fixed-btn"
                    type="primary"
                    onClick={() => onSubmit(form, $.doUpdate)}
                >
                    保存
                </Button>

                <style jsx global>{`
                    .styles-55518632 {
                    }
                    .${prefixCls} .c-img {
                        width: 1rem !important;
                        height: 1rem !important;
                        border-radius: 50%;
                    }
                    .${prefixCls} input,
                    .${prefixCls} .am-list-extra {
                        text-align: right !important;
                        color: #888 !important;
                    }
                `}</style>
            </Layout>
        );
    }
}
