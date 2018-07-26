/**
 * const prefixCls = 'styles-19792022';
 * const images = '/static/images/src/shop/auction/Detail';
 * @Author: Jack
 * @Date:   2018-01-25 16:10:06
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:50:13
 * @Path btWap \src\shop\auction\Detail\_Winner.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import Utils from 'utils';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'styles-19792022';

const _Winner = (props, { $ }) => {
    const { className } = props;
    const { ownUser = {}, auctionType } = $.getState('auctionDetail');

    let type;
    if (auctionType == 1) {
        type = '金币';
    } else {
        type = '积分';
    }

    if (!ownUser.userId) return null;

    return (
        <Flex className={classNames(prefixCls, className)}>
            <Img
                src={ownUser.faceImg}
                circle
                onClick={() =>
                    Utils.router.push(
                        `/person/zone?id=${ownUser.userId}`,
                        `/person/zone/${ownUser.userId}`
                    )}
            />
            <Flex.Item className="ml-sm">
                <p className="text-main text-sm">{ownUser.niname}</p>
                <p className="text-sub text-xs mt-xs">共报价 {ownUser.num} 次</p>
            </Flex.Item>
            <p className="ml-sm">
                <span className="text-sm">成交价：</span>
                <span className="text-primary">
                    {parseInt(ownUser.auctionPriceTotal)}
                    {type}
                </span>
            </p>
            <img className="t-img img-pai" src={`${images}/pai.png`} />

            <style jsx global>{`
                .styles-19792022 {
                    position: relative;
                }
                .${prefixCls} {
                    padding: ${Styles.space} ${Styles.wind};
                    background: #fff;
                }
            `}</style>
            <style jsx>{`
                .styles-19792022 {
                }
                .img-pai {
                    position: absolute;
                    top: 50%;
                    right: 40%;
                    width: 0.68rem;
                    height: 0.68rem;
                    transform: translateY(-50%);
                }
            `}</style>
        </Flex>
    );
};

_Winner.contextTypes = {
    $: PropTypes.object
};

export default observer(_Winner);
