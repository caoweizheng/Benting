/**
 * const prefixCls = 'styles-45787990';
 * const images = '/static/images/src/person/welfare/RankUp';
 * @Author: Jack
 * @Date:   2018-01-09 16:37:44
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:47:00
 * @Path btWap \src\person\welfare\RankUp\__Row.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, Button } from 'antd-mobile';
import { ListView, Tag } from 'components';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import { images } from '../_/ds';

const prefixCls = 'styles-45787990';

const __Row = (props, { $ }) => {
    const { className } = props;
    const { selectedIndex } = $.getState();

    const isSelected = selectedIndex.includes(props.lotteryPrizeId);
    const isEnableGet = props.isEnableGet == 1;
    const isGet = props.isGet == 1;

    let checkbox, mask;

    if (isGet) {
        mask = (
            <Flex
                className={`${prefixCls}__mask`}
                direction="column"
                justify="center"
            >
                <img src={`${images}/complete.png`} />
                <p className="text-sm text-void mt-sm">已领取</p>
            </Flex>
        );
    } else {
        if (isEnableGet) {
            if (isSelected) {
                checkbox = (
                    <img
                        className={`${prefixCls}__checkbox`}
                        src={`${Const.__IMAGES__}/icon/square_check_main.png`}
                    />
                );
            } else {
                checkbox = (
                    <img
                        className={`${prefixCls}__checkbox`}
                        src={`${Const.__IMAGES__}/icon/square_main.png`}
                    />
                );
            }
        } else {
            mask = (
                <Flex
                    className={`${prefixCls}__mask`}
                    direction="column"
                    justify="center"
                >
                    <img src={`${images}/lock.png`} />
                    <p className="text-sm text-void mt-sm">未满足条件</p>
                </Flex>
            );
        }
    }

    return (
        <div
            className={classNames(prefixCls, className)}
            onClick={() => {
                if (isEnableGet) {
                    $.toggleItem(props.lotteryPrizeId);
                } else {
                    Utils.light('该礼品不能选择');
                }
            }}
        >
            <div
                className="thumb"
                style={{
                    backgroundImage: `url(${Utils.getAppImgUrl(props.imgId)})`
                }}
            >
                {mask}
                {checkbox}
            </div>
            <p className="p-name text-clamp-2 mt-sm">{props.prizeName}</p>

            <style jsx global>{`
                .styles-45787990 {
                }
                .${prefixCls}__tag {
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .${prefixCls}__checkbox {
                    position: absolute;
                    z-index: 2;
                    top: ${Styles.xs};
                    right: ${Styles.xs};
                    width: 0.44rem;
                    height: 0.44rem;
                }
                .${prefixCls}__mask {
                    position: absolute;
                    z-index: 1;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    padding: 0 ${Styles.wind};
                    text-align: center;
                    background: rgba(0, 0, 0, 0.24);
                }
                .${prefixCls}__mask img {
                    width: 0.44rem;
                    height: 0.44rem;
                }
            `}</style>
            <style jsx>{`
                .styles-45787990 {
                    display: inline-block;
                    vertical-align: top;
                    width: 48.5%;
                    margin-right: 3%;
                    margin-bottom: 3%;
                }
                .styles-45787990:nth-of-type(2n) {
                    margin-right: 0;
                }
                .thumb {
                    position: relative;
                    padding-bottom: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 64%;
                    background-color: #f9f9f9;
                    border: 0.01rem solid ${Styles.color_border};
                }
                .checkbox {
                    position: absolute;
                    top: ${Styles.xs};
                    right: ${Styles.xs};
                    width: 0.44rem;
                    height: 0.44rem;
                }
                .p-name {
                    min-height: 0.88rem;
                }
            `}</style>
        </div>
    );
};

__Row.contextTypes = {
    $: PropTypes.object
};

export default observer(__Row);
