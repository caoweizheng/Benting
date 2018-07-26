/**
 * const prefixCls = 'styles-48178965';
 * const images = '/static/images/components/PayConfirm';
 * @Author: Jack
 * @Date:   2018-01-12 11:44:03
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-29 12:11:17
 * @Path btWap \components\PayConfirm\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal, List, Button } from 'antd-mobile';
import Utils from 'utils';
import Styles from 'styles';
import G from 'stores/g';

const prefixCls = 'c-pay-comfirn';

export default class PayComfirn extends React.Component {
    static propsTypes = {
        //余额、金币、本汀积分、灵动积分
        type: PropTypes.oneOf(['amount', 'coin', 'bt', 'nido']),
        dataType: PropTypes.any, //灵动余额、本汀余额  1,2
        show: PropTypes.bool,
        loading: PropTypes.bool,
        amount: PropTypes.any,
        onClose: PropTypes.func,
        onConfirm: PropTypes.func
    };

    static defaultProps = {
        type: 'amount',
        dataType: 2,
        show: false,
        loading: false,
        amount: 0,
        onClose: Function.prototype,
        onConfirm: Function.prototype
    };

    componentDidMount() {
        this.fetchAmount(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchAmount(nextProps);
    }

    fetchAmount = async props => {
        const { show, type } = props;

        if (show) {
            if (type === 'bt' || type === 'nido') {
                await G.fetchUserInfo();
            } else {
                await G.fetchWalletInfo();
            }

            this.forceUpdate();
        }
    };

    render() {
        const {
            type,
            dataType,
            show,
            loading,
            amount,
            onClose,
            onConfirm,
            className
        } = this.props;
        const walletInfo = G.getState('walletInfo');
        const { btAmount = 0, sysAmount = 0 } = walletInfo;
        const nidosportAmount = walletInfo.amount || 0;
        const { btscore = 0, point = 0 } = G.getState('userInfo');

        let userAmount, payWay, ext, btnText, btnUrl;
        let _amount, _userAmount;
        switch (type) {
            case 'amount':
                userAmount =
                    dataType === 1
                        ? parseFloat(nidosportAmount)
                        : parseFloat(btAmount);
                payWay = dataType === 1 ? '灵动余额支付' : '本汀余额支付';
                ext = '元';
                btnText = '前往充值';
                btnUrl =
                    dataType === 1
                        ? 'https://www.nidosport.com/pay/do'
                        : '/pay/do';
                _amount = parseFloat(amount).toFixed(2);
                _userAmount = userAmount.toFixed(2);
                break;

            case 'coin':
                userAmount = parseFloat(sysAmount);
                payWay = '金币支付';
                ext = '金币';
                btnText = '前往兑换金币';
                btnUrl = '/person/wallet/coin_buy';
                _amount = parseFloat(amount).toFixed(2);
                _userAmount = userAmount.toFixed(2);
                break;

            case 'bt':
                userAmount = parseInt(btscore);
                payWay = '本汀积分支付';
                ext = '积分';
                btnText = '消费本汀产品可获得';
                _amount = parseInt(amount);
                _userAmount = userAmount;
                break;

            case 'nido':
                userAmount = parseInt(point);
                payWay = '灵动积分支付';
                ext = '积分';
                btnText = '灵动平台各种玩法和活动获得';
                _amount = parseInt(amount);
                _userAmount = userAmount;
                break;

            default:
                break;
        }

        const isEnough = userAmount >= amount;

        return (
            <Modal
                popup
                visible={show}
                onClose={onClose}
                animationType="slide-up"
            >
                <List
                    className={`${prefixCls}__list`}
                    renderHeader={() => (
                        <div className={`${prefixCls}__header`}>
                            <span>结算</span>
                            <span className="btn-cancel" onClick={onClose}>
                                取消
                            </span>
                        </div>
                    )}
                >
                    <List.Item extra={payWay}>付款方式</List.Item>
                    <List.Item
                        extra={
                            <span
                                className={classNames({
                                    'text-danger': !isEnough
                                })}
                            >
                                {_userAmount}
                                {ext}
                            </span>
                        }
                    >
                        <span
                            className={classNames({
                                'text-danger': !isEnough
                            })}
                        >
                            余额
                        </span>
                    </List.Item>
                    <List.Item
                        extra={
                            <span>
                                {amount}
                                {ext}
                            </span>
                        }
                    >
                        <span>需支付</span>
                    </List.Item>
                    <List.Item>
                        {isEnough ? (
                            <Button type="primary" onClick={onConfirm}>
                                确认支付
                            </Button>
                        ) : (
                            <Button
                                type="primary"
                                disabled={!btnUrl}
                                onClick={() => {
                                    if (btnUrl) {
                                        if (btnUrl === '/pay/do') {
                                            Utils.goToPay();
                                        } else if (
                                            btnUrl.indexOf('https://') !== -1
                                        ) {
                                            window.location = btnUrl;
                                        } else {
                                            Utils.router.push(btnUrl);
                                        }
                                    }
                                }}
                            >
                                {btnText}
                            </Button>
                        )}
                    </List.Item>
                </List>

                <style jsx global>{`
                    .c-pay-comfirn {
                    }
                    .${prefixCls}__header {
                        position: relative;
                    }
                    .${prefixCls}__list .am-list-body {
                        border-top: 0.01rem solid ${Styles.color_border} !important;
                    }
                `}</style>
                <style jsx>{`
                    .c-pay-comfirn {
                    }
                    .btn-cancel {
                        position: absolute;
                        top: 50%;
                        right: 0;
                        transform: translateY(-50%);
                    }
                `}</style>
            </Modal>
        );
    }
}
