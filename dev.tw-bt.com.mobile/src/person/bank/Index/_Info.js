/**
 * const prefixCls = 'styles-39439583';
 * const images = '/static/images/src/person/bank/Index';
 * @Author: qizc
 * @Date:   2018-01-24 11:20:24
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\bank\Index\_Info.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List, Button } from 'antd-mobile';
import { Img, Form } from 'components';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-39439583';

const _Info = (props, { $ }) => {
    const { className } = props;
    const { bankName = '', bankNo = '' } = $.getState('bankInfo');

    let bgColor;
    switch (bankName) {
        case '民生银行':
        case '农业银行':
        case '邮政储蓄银行':
        case '民生银行':
        case '光大银行':
        case '广州农商银行':
        case '宁波银行':
        case '其他':
            bgColor = '#08998a';
            break;
        case '北京银行':
        case '成都银行':
        case '工商银行':
        case '华夏银行':
        case '南京银行':
        case '平安银行':
        case '青岛银行':
        case '招商银行':
        case '中国银行':
        case '中信银行':
        case '重庆银行':
            bgColor = '#de5e7f';
            break;
        default:
            bgColor = '#426ab0';
            break;
    }

    return (
        <div className={classNames(prefixCls, className)}>
            {bankName && (
                <div>
                    <div
                        className={`${prefixCls}_list text-void`}
                        style={{
                            backgroundImage: `url(${Const.__IMAGES__}/bank/${bankName}_bg.png`,
                            backgroundColor: `${bgColor}`
                        }}
                    >
                        <Flex>
                            <div className="img">
                                <img
                                    src={`${Const.__IMAGES__}/bank/${bankName}.png`}
                                />
                            </div>
                            <Flex direction="column" align="start">
                                <Flex>
                                    <p className="mb-xs text-lg">{bankName}</p>
                                </Flex>
                                <p className="mb-xs text-sm">储蓄卡</p>
                            </Flex>
                        </Flex>
                        <p className="card_num text-right text-md">
                            {bankNo.replace(
                                /^\d+(\d{4})$/,
                                '****  ****  ****  $1'
                            )}
                        </p>
                    </div>
                    <div className="cue text-center text-sm text-sub">
                        若要修改银行卡信息，请联系本汀客服进行处理。
                    </div>
                </div>
            )}
            {!bankName && (
                <div className="mt-lg text-center">
                    <img
                        src={`${Const.__IMAGES__}/bank/bank.png`}
                        className={`${prefixCls}_img`}
                    />
                    <p className="text-md mb-lg text-xs text-sub mt-sm">
                        您还没有绑定银行卡
                    </p>
                    <Form.Button
                        onClick={() => Utils.router.push('/person/bank/bind')}
                    >
                        绑定银行卡
                    </Form.Button>
                </div>
            )}
            <style jsx>{`
                .cue {
                    padding: 0 ${Styles.sm};
                }
                .img {
                    ${Styles._bg} background-color: ${Styles.color_bg};
                    width: ${Styles.xxl};
                    height: ${Styles.xxl};
                    margin-right: ${Styles.md};
                    vertical-align: bottom;
                    border-radius: 50%;
                    padding: ${Styles.xs};
                }
                .img img {
                    width: 100%;
                    height: 100%;
                }
                .card_num {
                    margin-top: ${Styles.xl};
                    margin-bottom: ${Styles.sm};
                    padding-right: ${Styles.md};
                }
            `}</style>
            <style jsx global>{`
                .${prefixCls}_img {
                    height: 2rem;
                }
                .${prefixCls}_list {
                    margin: ${Styles.md};
                    padding: ${Styles.md};
                    border-radius: ${Styles.sm};
                    background-position: 90% 90%;
                    background-repeat: no-repeat;
                    background-size: auto 90%;
                    box-shadow: 2px 2px 10px #999;
                }
            `}</style>
        </div>
    );
};

_Info.contextTypes = {
    $: PropTypes.object
};
export default observer(_Info);
