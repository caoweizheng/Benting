/**
 * const prefixCls = 'styles-65826892';
 * const images = '/static/images/src/index/Home';
 * @Author: qizc
 * @Date:   2018-01-17 15:31:10
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:32:47
 * @Path btWap \src\index\Home\_Notice.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import Styles from 'styles';
import Const from 'const';
import G from 'stores/g';

const prefixCls = 'styles-65826892';

const _Notice = (props, { $ }) => {
    const { isRead = false, count = 0 } = G.getState('indexNotice');

    if (isRead) return null;

    return (
        <div className={prefixCls}>
            <div className="box">
                <Flex className={`${prefixCls}__wrap`} justify="center" onClick={$.onNoticeClick}>
                    <Flex.Item>
                        <Flex>
                            <Img
                                src={`${Const.__IMAGES__}/notice.png`}
                                size="0.44rem"
                                style={{
                                    backgroundColor: 'transparent'
                                }}
                            />
                            <span className="ml-sm">您有未读新公告</span>
                        </Flex>
                    </Flex.Item>
                    <span className="text-center text-sm badge">{count}</span>
                </Flex>
            </div>

            <style jsx>{`
                .styles-65826892 {
                }
                .box {
                    margin-top: ${Styles.md};
                    width: 64%;
                    padding: 0.08rem 0;
                    margin-left: 18%;
                }
                .badge {
                    width: auto;
                    height: 0.32rem;
                    padding: 0 0.08rem;
                    color: #fff;
                    background-color: ${Styles.color_danger};
                    border-radius: 0.16rem;
                }
            `}</style>
            <style jsx global>{`
                .styles-65826892 {
                }
                .${prefixCls}__wrap {
                    padding: 0.16rem 0.24rem;
                    background-color: #fff;
                    border: 0.01rem solid ${Styles.color_border};
                }
            `}</style>
        </div>
    );
};

_Notice.contextTypes = {
    $: PropTypes.object
};

export default observer(_Notice);
