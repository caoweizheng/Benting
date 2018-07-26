/**
 * const prefixCls = 'styles-19642127';
 * const images = '/static/images/components/LuckDraw';
 * @Author: Jack
 * @Date:   2018-01-06 14:25:41
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 10:05:13
 * @Path btWap \components\LuckDraw\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; 
import { Modal, Button } from 'antd-mobile';
import Api from 'api';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'c-luck-draw';

export default class LuckDraw extends React.Component {
    state = {
        drawIndex: 0,
        data: []
    };

    componentDidMount() {
        this.initData();
    }

    initData = async () => {
        const data = await Api.P('get_lottery_list', {
            lotteryType: 6
        });

        const list = [...data.list];
        const len = list.length;

        if (len > 10) {
            list.length = 10;
        } else if (len < 10) {
            for (let i = 0; i < 10 - len; i++) {
                list.push({
                    prizeType: '0'
                });
            }
        }

        //打乱数组
        list.sort(() => 0.5 - Math.random());

        this.setState({
            data: list
        });
    };

    doDraw = async value => {
        if (value.length !== 12 || !Utils.validate(value, 'number')) {
            Utils.light('防伪码为12位数字');
            return;
        }

        const { prizeName, prizeType } = await Api.P('do_lottery_new');
        const lotteryList = this.getState('lotteryList');

        const isWind = prizeType !== '0';
        let drawIndex;

        if (isWind) {
            drawIndex = lotteryList.list.findIndex(
                item => item.prizeName === prizeName
            );
        } else {
            drawIndex = lotteryList.list.findIndex(
                item => item.prizeType === '0'
            );
        }

        this.rotate(drawIndex, () => {
            if (isWind) {
                Utils.onConfirm(
                    `抽中了${prizeName}，是否前往我的物品查看?`,
                    () => {
                        Utils.router.push('/person/goods');
                    },
                    '恭喜您'
                );
            } else {
                Utils.light('谢谢惠顾');
            }
        });
    };

    rotate = (index, cb) => {
        const speed = 50;
        const limitQ = 4;
        let q = 1;

        const fn = () => {
            const { drawIndex } = this.state;

            if (drawIndex >= 9) {
                q += 1;
            }

            setTimeout(() => {
                const nextDrawIndex = drawIndex >= 9 ? 0 : drawIndex + 1;

                this.setState({
                    drawIndex: nextDrawIndex
                });

                if (q > limitQ && nextDrawIndex === index) {
                    setTimeout(() => {
                        cb();
                    }, 500);
                } else {
                    fn();
                }
            }, q * speed);
        };

        fn();
    };

    render() {
        const { className } = this.props;
        const { drawIndex, data } = this.state;

        return (
            <div className={classNames(prefixCls, className)}>
                {data.map((item, index) => {
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
                            {!isWin && <span className="draw-item-text">谢谢惠顾</span>}
                        </div>
                    );
                })}
                <Button
                    className={`${prefixCls}__btn-draw`}
                    type="primary"
                    inline
                    size="small"
                    onClick={() =>
                        Modal.prompt(
                            '温馨提示',
                            '请输入防伪码',
                            [
                                { text: '取消' },
                                {
                                    text: '好的',
                                    onPress: value =>
                                        new Promise(resolve => {
                                            this.doDraw(value);
                                            resolve();
                                        })
                                }
                            ],
                            'default',
                            null,
                            ['12位数字防伪码']
                        )}
                >
                    点击抽奖
                </Button>

                <style jsx global>{`
                    .c-luck-draw {
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
                    .c-luck-draw {
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
                        background-color: #f9f9f9;
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
}