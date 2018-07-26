/**
 * const prefixCls = 'styles-50372333';
 * const images = '/static/images/src/event/sign/Index';
 * @Author: Jack
 * @Date:   2018-05-26 14:59:59
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-26 16:19:03
 * @Path btWap \src\event\sign\Index\_List.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'c';
//import Grade from 'src/_/Grade';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'styles-05430106';

const _List = (props, { $ }) => {
    const { className } = props;
    const { list } = $.getState('today');

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="wrap">
                {/*标题*/}
                <p className="title">签到先锋</p>

                {/*前三名*/}
                <Flex className={`${prefixCls}__rank`} align="end">
                    {list[1] && <Rank rank={2} {...list[1]} />}
                    {list[0] && <Rank rank={1} {...list[0]} />}
                    {list[2] && <Rank rank={3} {...list[2]} />}
                </Flex>

                {list
                    .filter((item, index) => index > 2)
                    .map((item, index) => (
                        <Item key={index} index={index} {...item} />
                    ))}
            </div>

            <style jsx global>{`
                .styles-05430106 {
                    position: relative;
                    width: 95%;
                    padding: 0.16rem 0;
                    margin-left: 2.5%;
                    background-color: rgba(255, 255, 255, 0.32);
                    border-radius: ${Styles.radius_sm};
                    box-shadow: 0.02rem 0.02rem 0.08rem rgba(0, 0, 0, 0.16);
                }
                .styles-05430106 .am-flexbox {
                    overflow: initial;
                }
                .styles-05430106 img {
                    display: inline-block;
                    vertical-align: middle;
                }
                .styles-05430106__rank {
                    padding: 0.56rem 0.16rem 0.32rem;
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
            `}</style>
            <style jsx>{`
                .wrap {
                    margin: 0 0.16rem;
                    background-color: #fff;
                }
                .title {
                    padding: 0.2rem 0;
                    text-align: center;
                    font-size: 0.36rem;
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
            `}</style>
        </div>
    );
};

_List.contextTypes = {
    $: PropTypes.object
};

export default observer(_List);

const Rank = props => {
    const { userId, rank, faceImg, niname, grade } = props;

    let size, marginTop, color, img, poin;
    switch (rank) {
        case 1:
            size = '1.44rem';
            marginTop = '.64rem';
            color = '#EB1306';
            img = `${images}/1st.png`;
            poin = 30;
            break;

        case 2:
            size = '1.2rem';
            marginTop = '.24rem';
            color = '#165DCE';
            img = `${images}/2nd.png`;
            poin = 25;
            break;

        case 3:
            size = '1.2rem';
            marginTop = '.24rem';
            img = `${images}/3rd.png`;
            poin = 20;
            break;
    }

    return (
        <Flex.Item>
            <Flex
                className={`${prefixCls}__rank-item`}
                direction="column"
                justify="center"
            >
                <Img
                    className={`${prefixCls}__avatar`}
                    src={faceImg}
                    size={size}
                    onClick={() => Utils.router.push(`/person/zone/${userId}`)}
                />
                <p className="mt-xs">
                    <span className="text-xs">{niname.substr(0, 5)}</span>
                    {/*<Grade level={grade} />*/}
                </p>
                <p
                    className="text-sm"
                    style={{
                        marginTop,
                        color
                    }}
                >
                    +{poin}积分
                </p>
                <img className="img-crown" src={img} />
            </Flex>

            <style jsx global>{`
                .styles-05430106__rank-item {
                    position: relative;
                }
                .styles-05430106__avatar {
                    border-radius: 50%;
                    box-shadow: 0.02rem 0.02rem 0.16rem rgba(0, 0, 0, 0.32);
                }
            `}</style>
            <style jsx>{`
                .img-crown {
                    position: absolute;
                    top: 0;
                    left: 68%;
                    width: 68px;
                    height: 68px;
                    margin-top: -18%;
                    transform: translateX(-50%);
                }
            `}</style>
        </Flex.Item>
    );
};

const Item = props => {
    const { userId, index, rank, faceImg, niname, grade } = props;

    return (
        <Flex className={`${prefixCls}__item`}>
            <Flex className={`${prefixCls}__item_no`} justify="center">
                <img className="img-rank" src={`${images}/rank.png`} />
                <span className="text-rank text-sm text-main">{index + 4}</span>
            </Flex>
            <Img
                className={`${prefixCls}__avatar`}
                src={faceImg}
                size=".88rem"
                onClick={() => Utils.router.push(`/person/zone/${userId}`)}
            />
            <Flex.Item className="ml-md">
                <span className="text-sm">{niname}</span>
                {/*<Grade level={grade} />*/}
            </Flex.Item>
            <span className="text-sm">+15积分</span>

            <style jsx global>{`
                .styles-05430106__item {
                    padding: 0.2rem 0.24rem 0.2rem 0;
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
                .styles-05430106__item_no {
                    position: relative;
                    width: 1.12rem;
                }
            `}</style>
            <style jsx>{`
                .img-rank {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0.59rem;
                    height: 0.53rem;
                    transform: translate(-50%, -50%);
                }
                .text-rank {
                    margin-bottom: 0.32rem;
                }
            `}</style>
        </Flex>
    );
};
