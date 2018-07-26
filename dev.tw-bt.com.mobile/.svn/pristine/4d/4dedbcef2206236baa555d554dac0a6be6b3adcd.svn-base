/**
 * const prefixCls = 'styles-15911063';
 * const images = '/static/images/src/person/zone/Index';
 * @Author: Jack
 * @Date:   2018-03-02 17:36:57
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:48:21
 * @Path btWap \src\person\zone\Index\_Top.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'styles-15911063';

const _Top = (props, { $ }) => {
    const { className } = props;
    const {
        faceImg,
        niname = '-',
        sex,
        point = 0,
        concernCount = 0,
        fanCount = 0,
        btlevel = 0,
        btscore = 0,
        postLikeNum = 0,
        releaseLikeNum = 0
    } = $.getState('personInfo');

    return (
        <Flex
            className={classNames(prefixCls, className)}
            direction="column"
            justify="center"
        >
            <div className="p-relative">
                <Img
                    className={`${prefixCls}__img`}
                    src={Utils.getAppImgUrl(faceImg)}
                    size="1.6rem"
                />
            </div>
            <Flex className={`${prefixCls}__user-info mt-xs`}>
                <span>{niname}</span>
                {sex == 1 && (
                    <img className="img-sex ml-xs" src={`${images}/male.png`} />
                )}
                {sex == 2 && (
                    <img
                        className="img-sex ml-xs"
                        src={`${images}/female.png`}
                    />
                )}
                <Img
                    className="ml-xs"
                    src={`${Const.__IMAGES__}/grade/${btlevel}.png`}
                    size="0.44rem"
                    style={{ backgroundColor: 'transparent' }}
                />
            </Flex>
            <Flex
                className={`${prefixCls}__extra-info text-xs mt-sm`}
                justify="between"
            >
                <span>关注：{concernCount}</span>
                <span>粉丝：{fanCount}</span>
                <span>积分：{point}</span>
            </Flex>

            <style jsx global>{`
                .styles-15911063 {
                    position: relative;
                    height: 3.8rem;
                    background-color: ${Styles.color_main};
                    overflow: hidden;
                }
                .${prefixCls}__img {
                    border: 0.04rem solid #fff;
                    border-radius: 50%;
                }
                .${prefixCls}__user-info, .${prefixCls}__extra-info {
                    position: relative;
                    color: #fff;
                }
                .${prefixCls}__extra-info {
                    width: 68%;
                    padding: 0.08rem 0.32rem;
                    background: rgba(0, 0, 0, 0.24);
                    border-radius: ${Styles.radius_xs};
                }
            `}</style>
            <style jsx>{`
                .styles-15911063 {
                }
                .img-sex {
                    display: inline-block;
                    width: 0.36rem;
                    height: 0.36rem;
                    margin-left: ${Styles.sm};
                    vertical-align: middle;
                }
            `}</style>
        </Flex>
    );
};

_Top.contextTypes = {
    $: PropTypes.object
};

export default observer(_Top);
