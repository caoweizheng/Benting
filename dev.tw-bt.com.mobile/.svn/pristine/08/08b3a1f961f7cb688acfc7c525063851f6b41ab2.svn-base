/**
 * const prefixCls = 'styles-38768619';
 * const images = '/static/images/src/merchant/Lottery';
 * @Author: Jack
 * @Date:   2018-04-25 14:56:40
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:15:07
 * @Path btWap \src\merchant\Lottery\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer, form } from '@';
import { Flex } from 'antd-mobile';
import { Form, ListView, Empty } from 'components';
import { Layout } from 'src/_';
import _SectionHeader from './_SectionHeader';
import _Row from './_Row';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-38768619';

@inject(store)
@form
@observer
export default class Lottery extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentWillMount() {
        const { $ } = this.context;
        const { form } = this.props;

        $.form = form;
    }

    render() {
        const { $ } = this.context;
        const { form, onSubmit } = this.props;
        const { name } = $.getState('merchantInfo');
        const merchantLotteryRecord = $.getState('merchantLotteryRecord');

        return (
            <Layout hideHeader title="商家发奖中心">
                <div className="search text-center">
                    <div
                        className="go"
                        onClick={() => Utils.router.push('/')}
                    />
                    <Flex className={`${prefixCls}__box`} align="center">
                        <Flex.Item>
                            <Form form={form} className={`${prefixCls}__form`}>
                                <Form.Input
                                    className={`${prefixCls}__input`}
                                    name="code"
                                    placeholder="扫描或输入顾客奖品口令"
                                    label={
                                        <img
                                            src={`${images}/scan.png`}
                                            onClick={$.onQRCodeScan}
                                        />
                                    }
                                />
                            </Form>
                        </Flex.Item>
                        <div
                            className="btn"
                            onClick={() => onSubmit(form, $.doGet)}
                        >
                            发放
                        </div>
                    </Flex>
                    <p className="p-shop-name text-void text-center">{name}</p>
                </div>
                {merchantLotteryRecord._loaded ? (
                    <ListView
                        data={merchantLotteryRecord}
                        section={$.section}
                        renderSectionHeader={sectionData => (
                            <_SectionHeader sectionData={sectionData} />
                        )}
                        renderRow={data => <_Row {...data} />}
                        onEndReached={$.fetchMerchantLotteryRecord}
                    />
                ) : (
                    <Empty>数据加载中...</Empty>
                )}

                <style jsx>{`
                    .styles-38768619 {
                    }
                    .search {
                        position: relative;
                        height: 75vw;
                        padding: 0.24rem 0.6rem;
                        ${Styles._bg};
                        background-image: url(${images}/bg.png);
                        overflow: hidden;
                    }
                    .go {
                        height: 25vw;
                        width: 100%;
                    }
                    .btn {
                        height: 0.88rem;
                        padding: 0 ${Styles.md} !important;
                        line-height: 0.88rem;
                        color: #fff;
                        background-color: ${Styles.color_primary};
                    }
                    .p-shop-name {
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        margin-bottom: 8%;
                        transform: translateX(-50%);
                    }
                `}</style>
                <style jsx global>{`
                    .styles-38768619 {
                    }
                    .${prefixCls}__input {
                        background: #fff !important;
                    }
                    .${prefixCls}__box {
                        margin-top: 15%;
                    }
                    .${prefixCls}__form {
                        margin-top: 0;
                    }
                `}</style>
            </Layout>
        );
    }
}
