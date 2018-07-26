/**
 * const prefixCls = 'styles-8349454';
 * const images = '/static/images/src/person/customer/Index';
 * @Author: Jack
 * @Date:   2018-01-03 15:01:42
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:21:01
 * @Path btWap \src\person\customer\Index\_Item.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List } from 'antd-mobile';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-8349454';

const _Item = props => {
    return (
        <div className={prefixCls}>
            <Flex className={`${prefixCls}__item`}>
                <img className="img-card t-img" src={`${images}/card.png`} />
                <Flex.Item className="ml-md">
                    <p className="text-sm">获得免费售后机会，使用需找到购买店铺客服要求配节。</p>
                    <p className="text-xs text-main mt-md">
                        单号：{props.orderNo}
                    </p>
                </Flex.Item>
                <div className="ml-md">
                    <p className="text-sm text-center">剩余次数</p>
                    <p className="text-sm text-primary text-center mt-md">
                        {parseInt(props.carNum) - parseInt(props.cardUsed)}次
                    </p>
                </div>
            </Flex>

            <style jsx global>{`
                .styles-8349454 {
                }
                .${prefixCls}__item {
                    padding: ${Styles.md};
                    background: #fff;
                    border: 0.01rem solid ${Styles.color_border};
                }
            `}</style>
            <style jsx>{`
                .styles-8349454 {
                    padding: 0 ${Styles.wind};
                    margin-bottom: ${Styles.distance};
                }
                .img-card {
                    width: 1.54rem;
                    height: 0.93rem;
                }
            `}</style>
        </div>
    );
};

export default observer(_Item);
