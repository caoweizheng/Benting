/**
 * const prefixCls = 'styles-12077949';
 * const images = '/static/images/src/person/user/basic';
 * @Author: qizc
 * @Date:   2018-02-24 13:49:33
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-27 10:04:43
 * @Path btWap \src\person\user\basic\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, form, observer } from '@';
import { Button, Flex } from 'antd-mobile';
import { Form, Upload, Img } from 'components';
import { Layout } from 'src/_';
import classNames from 'classnames';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-12077949';

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
        const faceImg = form.getFieldValue('faceImg');

        return (
            <Layout title="完善资料">
                <Flex justify="center" className="mt-md">
                    <Upload
                        data={{
                            iswatermark: 1
                        }}
                        onSuccess={(result, file) => {
                            const { data } = result;

                            form.setFieldsValue({
                                faceImg: data.fileId
                            });
                        }}
                    >
                        <Flex direction="column">
                            <div className="face_img">
                                {userInfo.faceImg ? (
                                    <Img
                                        circle
                                        size="1.66rem"
                                        src={
                                            faceImg ? faceImg : userInfo.faceImg
                                        }
                                    />
                                ) : (
                                    <Img
                                        circle
                                        size="1.66rem"
                                        src={`${Const.__IMAGES__}/head.png`}
                                    />
                                )}
                            </div>
                            <Button
                                className="mt-sm"
                                inline
                                type="primary"
                                size="small"
                            >
                                上传头像
                            </Button>
                        </Flex>
                    </Upload>
                </Flex>
                <Form
                    className={classNames(prefixCls, 'mt-md')}
                    form={form}
                    renderFooter={() => (
                        <p className="text-sm text-main">
                            提示：每位用户仅有一次修改资料的机会，请谨慎填写。
                        </p>
                    )}
                >
                    <div style={{ display: 'none' }}>
                        <Form.Input
                            form={form}
                            name="faceImg"
                            initialValue={userInfo.faceImg}
                            option={Const.rules.required}
                        />
                    </div>
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
                    .styles-12077949 {
                    }
                    .${prefixCls} input,
                    .${prefixCls} .am-list-extra {
                        text-align: right !important;
                        color: #888 !important;
                    }
                `}</style>
                <style jsx>{`
                    .face_img {
                        padding: 10px;
                        border: 0.01rem solid ${Styles.color_border};
                        background: #fff;
                        border-radius: 50%;
                    }
                `}</style>
            </Layout>
        );
    }
}
