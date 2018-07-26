/**
 * const prefixCls = 'style-714428';
 * const images = '/static/images/src/auth/Baidu';
 * @Author: czy0729
 * @Date: 2018-07-17 11:11:14
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-17 15:49:54
 * @Path dev.tw-bt.com.mobile /src/auth/Baidu/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer, form } from '@';
import { Flex } from 'antd-mobile';
import { Form } from 'components';
import { Layout } from 'src/_';
import _Title from './_Title';
import _History from './_History';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import G from 'stores/g';
import store from './store';

const prefixCls = 'style-714428';
import { images } from './ds';

@inject(store)
@form
@observer
export default class Auth extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { form, onSubmit } = this.props;
        const mounted = G.getState('mounted');

        if (!mounted) return null;

        const { queryCode, queryList } = $.getState();
        const isLogin = Utils.checkLogin();

        return (
            <Layout hide title="百度本汀防伪认证中心">
                <div className="search text-center">
                    <div className="go" />
                    <Flex className={`${prefixCls}__box`} align="center">
                        <Flex.Item>
                            <Form form={form} className={`${prefixCls}__form`}>
                                <Form.Input
                                    className={`${prefixCls}__input-in`}
                                    label={<img src={`${images}/search.png`} />}
                                    name="code"
                                    maxLength={14}
                                    placeholder="输入您的防伪码"
                                    disabled={!isLogin}
                                />
                            </Form>
                        </Flex.Item>
                        <div
                            className="btn"
                            onClick={() => {
                                if (isLogin) {
                                    onSubmit(form, $.doCodeQuery);
                                } else {
                                    G.setJump();
                                    Utils.router.push('/login');
                                }
                            }}
                        >
                            {isLogin ? '查询' : '前往登录'}
                        </div>
                    </Flex>
                    {queryCode != false && <_Title queryCode={queryCode} />}
                </div>
                <_History queryList={queryList} queryCode={queryCode} />

                <style jsx>{`
                    .style-714428 {
                    }
                    .go {
                        height: 25vw;
                        width: 100%;
                    }
                    .search {
                        position: relative;
                        height: 75vw;
                        padding: 0.24rem 0.6rem;
                        ${Styles._bg};
                        background-image: url(${images}/bg.jpg);
                        overflow: hidden;
                    }
                    .btn {
                        height: 0.88rem;
                        padding: 0 ${Styles.md} !important;
                        line-height: 0.88rem;
                        color: #fff;
                        background-color: ${Styles.color_primary};
                    }
                `}</style>
                <style jsx global>{`
                    .style-714428 {
                    }
                    .${prefixCls}__input-in {
                        background: #fff !important;
                    }
                    .${prefixCls}__box {
                        margin-top: 20%;
                    }
                    .${prefixCls}__form {
                        margin-top: 0;
                    }
                `}</style>
            </Layout>
        );
    }
}
