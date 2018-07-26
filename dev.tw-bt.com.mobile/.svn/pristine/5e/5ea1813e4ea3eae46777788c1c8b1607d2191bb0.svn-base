/**
 * const prefixCls = 'styles-16560419';
 * const images = '/static/images/src/person/goods/Index';
 * @Author: Jack
 * @Date:   2018-01-05 15:05:51
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-28 12:33:19
 * @Path btWap \src\person\goods\Index\_Item.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Flex, Button } from 'antd-mobile';
import { Img } from 'components';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-19170922';

const _Item = (props, { $ }) => {
    const isUsed = props.state != 1;
    const isReal = props.prizeType == 1;

    return (
        <Flex
            className={`${prefixCls}__item`}
            onClick={() =>
                Utils.router.push(
                    `/person/goods/detail?id=${props.recordId}`,
                    `/person/goods/detail/${props.recordId}`
                )}
        >
            {isReal ? (
                <Flex
                    className={`${prefixCls}__prize`}
                    direction="column"
                    justify="center"
                >
                    <Img src={Utils.getAppImgUrl(props.imgId)} size="1rem" />
                </Flex>
            ) : (
                <Flex
                    className={`${prefixCls}__prize`}
                    direction="column"
                    justify="center"
                >
                    <p className="text-xxl text-primary text-bold text-center">
                        ¥ {props.prizeVal}
                    </p>
                    {props.limitPrize && (
                        <p className="text-xs text-sub mt-xs">
                            满 {parseInt(props.limitPrize)} 可用
                        </p>
                    )}
                </Flex>
            )}
            <Flex.Item>
                <Flex className="text-sm" style={{ minHeight: '0.5rem' }}>
                    {props.prizeName}
                </Flex>
                <p className="text-xxs text-sub mt-xs">
                    <span>{Utils.date('y.m.d H:i', props.expdatebegin)}</span>
                    <span> - </span>
                    <span>{Utils.date('y.m.d H:i', props.expdateend)}</span>
                </p>
            </Flex.Item>
            <Button
                className={`${prefixCls}__btn text-xs ml-sm`}
                type="primary"
                inline
                size="small"
                disabled={isUsed}
            >
                {isUsed ? '已发放' : '查看详情'}
            </Button>

            <style jsx global>{`
                .styles-19170922 {
                }
                .${prefixCls}__item {
                    padding: 0.24rem 0.28rem 0.16rem;
                    margin-bottom: ${Styles.distance};
                    background: ${Styles.color_bg};
                    border: 0.01rem solid ${Styles.color_border};
                    border-radius: 0.04rem;
                }
                .${prefixCls}__item:last-child {
                    margin-bottom: 0;
                }
                .${prefixCls}__prize {
                    min-width: 1.6rem;
                    min-height: 1.13rem;
                    padding: ${Styles.sm} ${Styles.wind};
                    padding-left: 0;
                    margin-right: ${Styles.sm};
                    border-right: 0.01rem solid ${Styles.color_border};
                }
                .${prefixCls}__btn {
                    min-width: 1.6rem;
                    border-radius: 0.4rem;
                }
            `}</style>
        </Flex>
    );
};

_Item.contextTypes = {
    $: PropTypes.object
};

export default observer(_Item);
