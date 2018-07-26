/**
 * const prefixCls = 'styles-09199114';
 * const images = '/static/images/src/information/Index';
 * @Author: qizc
 * @Date:   2017-12-25 14:45:40
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-03-20 11:39:15
 * @Path btWap \src\information\Index\__Row.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-09199114';

const __Row = props => {
    const {
        tbId,
        imgId,
        createTime,
        tit,
        introCon,
        className,
        postId,
        ...other
    } = props;

    return (
        <div className={classNames(prefixCls, className, 'text-sm')}>
            <Flex
                align="center"
                onClick={() => {
                    postId > 0
                        ? Utils.router.push(
                              `/bbs/article?id=${postId}`,
                              `/bbs/article/${postId}`
                          )
                        : Utils.router.push(
                              `/information/detail?id=${tbId}`,
                              `/information/detail/${tbId}`
                          );
                }}
            >
                <div className="l text-void text-center">
                    {Utils.date('m月', createTime)}
                </div>
                <Flex.Item className={`${prefixCls}_con`}>
                    <div className="text-clamp-1">{introCon}</div>
                    <span className="text-xs text-sub">
                        发布于{Utils.date('d号H:i', createTime)}
                    </span>
                </Flex.Item>
            </Flex>

            <style jsx global>{`
                .styles-09199114 {
                    padding: ${Styles.wind};
                }
                .styles-09199114:first-child {
                    padding-top: 0;
                }
                .${prefixCls}_con {
                    position: relative;
                    height: 0.72rem;
                    line-height: 1.3;
                }
            `}</style>
            <style jsx>{`
                .styles-09199114 {
                }
                .l {
                    width: 0.72rem;
                    height: 0.72rem;
                    line-height: 0.72rem;
                    background: ${Styles.color_main};
                }
            `}</style>
        </div>
    );
};

export default observer(__Row);
