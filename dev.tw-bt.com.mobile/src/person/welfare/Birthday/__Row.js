/**
 * const prefixCls = 'styles-06063047';
 * const images = '/static/images/src/person/welfare/Birthday';
 * @Author: Jack
 * @Date:   2018-01-10 11:16:52
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\welfare\Birthday\__Row.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, Button } from 'antd-mobile';
import { Tag } from 'components';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-06063047';

const __Row = (props, { $ }) => {
    const isEnableGet = props.isEnableGet == 1;
    const isGet = props.isGet == 1;

    let btnText;
    if (isEnableGet) {
        btnText = '领取';
    } else {
        if (isGet) {
            btnText = '已领取';
        } else {
            btnText = '未满足';
        }
    }

    return (
        <div className="item">
            <div
                className="thumb"
                style={{
                    backgroundImage: `url(${Utils.getAppImgUrl(props.imgId)})`
                }}
            >
                <Tag className={`${prefixCls}__tag`}>
                    {Utils.getBTLevel(props.grade)}专属
                </Tag>
            </div>
            <Flex className="mt-sm">
                <Flex.Item>
                    <p className="p-name text-clamp-2">{props.prizeName}</p>
                </Flex.Item>
                <Button
                    className="t-btn-round-sm ml-sm"
                    type="primary"
                    inline
                    size="small"
                    disabled={!isEnableGet}
                    onClick={() => $.doGet(props.lotteryPrizeId)}
                >
                    {btnText}
                </Button>
            </Flex>

            <style jsx global>{`
                .styles-06063047 {
                }
                .${prefixCls}__tag {
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            `}</style>
            <style jsx>{`
                .styles-06063047 {
                }
                .item {
                    display: inline-block;
                    vertical-align: top;
                    width: 48.5%;
                    margin-right: 3%;
                    margin-bottom: 3%;
                }
                .item:nth-of-type(2n) {
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
