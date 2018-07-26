/**
 * const prefixCls = 'styles-78032390';
 * const images = '/static/images/src/person/event/_';
 * @Author: qizc
 * @Date:   2018-01-24 18:03:26
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\event\_\Address.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List, Button } from 'antd-mobile';
import { Img } from 'components';
import { Header } from 'src/_';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-78032390';

const Address = (props, { $ }) => {
    const { className, defaultAddress = {}, orderinfo = {} } = props;
    const {
        address = '',
        city = '',
        district = '',
        phone = '',
        province = '',
        recName = ''
    } =
        defaultAddress || {};
    const { orderId = '', state = 0 } = orderinfo || {};

    return (
        <div className={classNames(prefixCls, className)}>
            <Header>收货地址</Header>
            {!!phone && (
                <div>
                    <div className={`${prefixCls}_address`}>
                        <Flex justify="between" className="mb-sm">
                            <p>{recName}</p>
                            <p>{String(phone).replace(/ /g, '')}</p>
                        </Flex>
                        <div className="text-sm text-desc">
                            {province}
                            {city}
                            {district}
                            {address}
                        </div>
                    </div>
                    <div className="stripe" />
                </div>
            )}
            {!phone && (
                <div
                    className="add_address"
                    onClick={() =>
                        Utils.router.push(
                            `/person/address/confirm?id=${orderId}`,
                            `/person/address/confirm/${orderId}`
                        )}
                >
                    <div className="add_img text-center p-sw">
                        <Img
                            src={`${Const.__IMAGES__}/add.png`}
                            size=".8rem"
                            style={{
                                backgroundColor: 'transparent'
                            }}
                        />
                    </div>
                    <div className="text-center text-sub text-md mb-md">
                        添加收货地址
                    </div>
                    <div className="stripe" />
                </div>
            )}
            <style jsx>{`
                .stripe{
                    height: .15rem;
                    ${Styles._bg}
                    background-image: url(${Const.__IMAGES__}/line.png)
                }
                .add_address{
                    background-color: #fff;
                }
            `}</style>
            <style jsx global>{`
                .styles-78032390 {
                }
                .${prefixCls}_address {
                    background-color: #fff;
                    padding: ${Styles.md} ${Styles.wind};
                }
            `}</style>
        </div>
    );
};

Address.contextTypes = {
    $: PropTypes.object
};

export default observer(Address);
