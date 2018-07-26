/**
 * const prefixCls = 'styles-92456346';
 * const images = '/static/images/src/auth/LuckDraw';
 * @Author: Jack
 * @Date:   2018-01-04 17:19:24
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-03 11:51:01
 * @Path btWap \src\auth\LuckDraw\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer, form } from '@';
import { Button, Modal } from 'antd-mobile';
import { Carousel } from 'components';
import { Layout } from 'src/_';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-92456346';
const images = Utils.cdn('/static/images/src/auth/LuckDraw');

@inject(store)
@form
@observer
export default class LuckDraw extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    renderWinList() {
        const { $ } = this.context;
        const winList = $.getState('winList');

        return (
            <div className="win-list">
                <Carousel.Origin
                    className={`${prefixCls}__win-list`}
                    vertical
                    autoplay
                    dots={false}
                >
                    {winList.list.map((item, index) => (
                        <p
                            key={index}
                            className="win-item text-sm text-center text-clamp-1"
                        >
                            <span>恭喜</span>
                            <span className="text-primary ml-xs">
                                {item.nickname}
                            </span>
                            <span className="ml-xs">抽中</span>
                            <span className="text-primary ml-xs">
                                {item.prizeName}
                            </span>
                        </p>
                    ))}
                </Carousel.Origin>

                <style jsx>{`
                    .styles-92456346 {
                    }
                    .win-list {
                        min-height: 1.03rem;
                        background: ${Styles.color_bg};
                    }
                    .win-item {
                        padding: ${Styles.space} ${Styles.wind};
                    }
                `}</style>
            </div>
        );
    }

    renderDraw() {
        const { $ } = this.context;
        const { drawIndex } = $.getState();
        const lotteryList = $.getState('lotteryList');

        return (
            <div className="draw mt-d">
                {lotteryList.list.map((item, index) => {
                    const isWin = item.prizeType !== '0';

                    return (
                        <div
                            key={index}
                            className={classNames('draw-item', {
                                'draw-item-active': index === drawIndex
                            })}
                            style={
                                isWin
                                    ? {
                                          backgroundImage: `url(${Utils.getImgUrl(
                                              item.imgId
                                          )})`
                                      }
                                    : {}
                            }
                        >
                            {!isWin && (
                                <span className="draw-item-text">谢谢惠顾</span>
                            )}
                        </div>
                    );
                })}
                <Button
                    className={`${prefixCls}__btn-draw`}
                    type="primary"
                    inline
                    size="small"
                    onClick={() =>
                        Utils.checkLogin(() =>
                            Modal.prompt(
                                '温馨提示',
                                '请输入防伪码',
                                [
                                    { text: '取消' },
                                    {
                                        text: '好的',
                                        onPress: value =>
                                            new Promise(resolve => {
                                                $.doDraw(value);
                                                resolve();
                                            })
                                    }
                                ],
                                'default',
                                null,
                                ['12位数字防伪码']
                            )
                        )
                    }
                >
                    点击抽奖
                </Button>

                <style jsx global>{`
                    .styles-92456346 {
                    }
                    .${prefixCls}__btn-draw {
                        position: absolute !important;
                        top: 50%;
                        left: 50%;
                        border-radius: 0.36rem;
                        transform: translate(-50%, -50%);
                    }
                `}</style>
                <style jsx>{`
                    .styles-92456346 {
                    }
                    .draw {
                        position: relative;
                        min-height: 4.44rem;
                        padding-bottom: 75%;
                    }
                    .draw-item {
                        position: absolute;
                        width: 25%;
                        top: 0;
                        left: 0;
                        padding-bottom: 25%;
                        background-color: ${Styles.color_bg};
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 80%;
                        outline: 0.01rem solid ${Styles.color_border};
                        border-radius: 0.04rem;
                    }
                    .draw-item:nth-of-type(1),
                    .draw-item:nth-of-type(6) {
                        margin-top: 25%;
                    }
                    .draw-item:nth-of-type(7),
                    .draw-item:nth-of-type(8),
                    .draw-item:nth-of-type(9),
                    .draw-item:nth-of-type(10) {
                        margin-top: 50%;
                    }
                    .draw-item:nth-of-type(3),
                    .draw-item:nth-of-type(9) {
                        margin-left: 25%;
                    }
                    .draw-item:nth-of-type(4),
                    .draw-item:nth-of-type(8) {
                        margin-left: 50%;
                    }
                    .draw-item:nth-of-type(5),
                    .draw-item:nth-of-type(6),
                    .draw-item:nth-of-type(7) {
                        margin-left: 75%;
                    }
                    .draw-item-active {
                        background-color: #b7bbc4;
                    }
                    .draw-item-text {
                        ${Styles._absolute};
                        width: 100%;
                        text-align: center;
                        font-size: ${Styles.font_sm};
                        color: ${Styles.color_main};
                    }
                `}</style>
            </div>
        );
    }

    render() {
        return (
            <Layout title="防伪中心" hideHeader>
                <div className="search text-center">
                    <div
                        className="btn-go"
                        onClick={() => Utils.router.push('/')}
                    />
                </div>
                <div className="wrap">
                    {this.renderWinList()}
                    {this.renderDraw()}
                </div>
                <Button
                    className="t-fixed-btn"
                    type="primary"
                    onClick={() =>
                        Utils.checkLogin(() =>
                            Utils.router.push('/person/goods')
                        )
                    }
                >
                    我的礼单
                </Button>

                <style jsx>{`
                    .styles-92456346 {
                    }
                    .search {
                        overflow: hidden;
                        height: 47vw;
                        padding: 0.24rem 1rem;
                        background: url(${images}/thumb.jpg);
                        ${Styles._bg};
                    }
                    .btn-go {
                        height: 25vw;
                        width: 100%;
                    }
                    .wrap {
                        padding: ${Styles.space} ${Styles.lg} ${Styles.bottom};
                        background: #fff;
                    }
                `}</style>
            </Layout>
        );
    }
}
