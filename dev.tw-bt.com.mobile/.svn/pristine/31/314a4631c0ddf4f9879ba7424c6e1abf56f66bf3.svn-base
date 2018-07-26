/**
 * const prefixCls = 'styles-66799445';
 * const images = '/static/images/src/person/Index';
 * @Author: qizc
 * @Date:   2017-12-26 18:17:15
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:29:37
 * @Path btWap \src\person\Index\_Grade.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, Progress, Button } from 'antd-mobile';
import { Img } from 'components';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import { gradeData } from './ds';

const prefixCls = 'styles-66799445';

const _Grade = (props, { $ }) => {
    const { className } = props;
    const { btexp = 0, btlevel = 0 } = $.getState('userInfo');

    const _point = gradeData[parseInt(btlevel) + 1].point;
    const percent = parseInt(btexp / _point * 100);

    return (
        <div className={classNames(prefixCls, className, 'p-sw text-center')}>
            <p>
                <span>当前距升级还需要消费</span>
                <span className="text-danger ml-xs mr-xs">
                    {_point > btexp ? _point - btexp : btexp}
                </span>
                <span>元</span>
            </p>
            <p
                className="text-sm text-primary mt-sm rule"
                onClick={() => Utils.router.push('/person/grade')}
            >
                查看升级规则
            </p>
            <Flex className="text-sm mt-sm" align="start" justify="between">
                <div className="text-center">
                    <Img
                        src={`${Const.__IMAGES__}/grade/${btlevel}.png`}
                        size="0.8rem"
                        style={{ backgroundColor: 'transparent' }}
                    />
                    <div className="mt-sm">{Utils.getBTLevel(btlevel)}</div>
                </div>
                <Flex.Item>
                    <Progress
                        className="mt-md"
                        position="normal"
                        percent={percent > 100 ? 100 : percent}
                    />
                    <p className="text-xs text-sub mt-sm text-center">
                        <span>您已累计消费本汀产品</span>
                        <span className="text-danger ml-xs">{btexp}</span>
                        <span>/{_point} 元</span>
                    </p>
                </Flex.Item>
                <div className="text-center ml-sm">
                    <Img
                        src={`${Const.__IMAGES__}/grade/${parseInt(btlevel) +
                            1}.png`}
                        size="0.8rem"
                        style={{ backgroundColor: 'transparent' }}
                    />
                    <div className="mt-sm">
                        {Utils.getBTLevel(parseInt(btlevel) + 1)}
                    </div>
                </div>
            </Flex>
            <Flex className="mt-sm" justify="center">
                <Button
                    className={`${prefixCls}__btn`}
                    type="primary"
                    onClick={() => Utils.router.push('/person/order/add')}
                >
                    添加消费订单
                </Button>
            </Flex>

            <style jsx>{`
                .styles-66799445 {
                }
                .rule {
                    text-decoration: underline;
                }
            `}</style>
            <style jsx global>{`
                .styles-66799445 {
                    background: #fff;
                }
                .${prefixCls} .am-progress-outer {
                    border-radius: 0.08rem;
                }
                .${prefixCls} .am-progress-bar {
                    border: 0.06rem solid #476dd9;
                    border-radius: 0.08rem;
                }
                .${prefixCls}__btn {
                    width: 2.4rem;
                    height: 0.8rem;
                    font-size: ${Styles.font_sm};
                    line-height: 0.8rem;
                }
            `}</style>
        </div>
    );
};

_Grade.contextTypes = {
    $: PropTypes.object
};

export default observer(_Grade);
