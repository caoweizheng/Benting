/**
 * const prefixCls = 'styles-70616575';
 * const images = '/static/images/src/person/welfare/Point';
 * @Author: Jack
 * @Date:   2018-01-09 17:25:23
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\welfare\Point\__Row.js
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

const prefixCls = 'styles-70616575';

const __Row = (props, { $ }) => {
    const { className } = props;
    const { btscore } = $.getState('userInfo');
    const isEnableGet = props.isEnableGet == 1;

    const isCanGet = isEnableGet && btscore >= props.point;
    let btnText;
    if (isCanGet) {
        btnText = '兑换';
    } else {
        btnText = '积分不足';
    }

    return (
        <div className={classNames(prefixCls, className)}>
            <div
                className="thumb"
                style={{
                    backgroundImage: `url(${Utils.getAppImgUrl(props.imgId)})`
                }}
            />
            <Flex className="mt-sm">
                <Flex.Item>
                    <p className="text-clamp-1">{props.prizeName}</p>
                    <p className="text-xs text-sub mt-xs">
                        需要 {props.point} 积分
                    </p>
                </Flex.Item>
                <Button
                    className="t-btn-round-sm ml-sm"
                    type="primary"
                    inline
                    size="small"
                    disabled={!isCanGet}
                    onClick={() =>
                        Utils.onConfirm(
                            `是否使用${props.point}积分兑换${props.prizeName}?`,
                            () => $.doGet(props.lotteryPrizeId)
                        )}
                >
                    {btnText}
                </Button>
            </Flex>

            <style jsx>{`
                .styles-70616575 {
                    display: inline-block;
                    vertical-align: top;
                    width: 48.5%;
                    margin-right: 3%;
                    margin-bottom: 3%;
                }
                .styles-70616575:nth-of-type(2n) {
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
            `}</style>
        </div>
    );
};

__Row.contextTypes = {
    $: PropTypes.object
};

export default observer(__Row);
