/**
 * const prefixCls = 'styles-86542799';
 * const images = '/static/images/src/bbs/Article';
 * @Author: czy0729
 * @Date:   2018-06-26 11:23:44
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-17 14:58:00
 * @Path btWap \src\bbs\Article\_Registration.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-86542799';

const _ = (props, { $ }) => {
    const { className } = props;
    const { registrationData = {} } = $.getState('postDetail');
    const { id } = $.getParams().params;
    const joinInfo = $.getState('registration');

    let type, text, onClick;
    //joinInfo.status(-1=>取消报名, 0=>报名审核中, 1=>报名审核未通过, 2=>报名审核通过,
    //3=>订单信息审核中, 4=>订单信息审核未通过, 5=>订单信息审核通过)
    if (registrationData.status != 1) {
        type = 'default';
        text = '活动未开启';
    } else {
        const startTime = parseInt(registrationData.start_time);
        const endTime = parseInt(registrationData.end_time);
        const now = Utils.getTimestamp();

        if (now < startTime) {
            //报名未开始
            type = 'default';
            text = `活动将于${Utils.date('m-d H:i:s', startTime)}开始报名`;
        } else if (now >= startTime && now < endTime) {
            //报名已开始
            if (!joinInfo.id) {
                //未报名
                const leftNum =
                    parseInt(registrationData.num) -
                    parseInt(registrationData.joinNum);

                if (!leftNum) {
                    //没有名额
                    type = 'default';
                    text = `名额已抢光`;
                } else {
                    //还有名额
                    type = 'warning';
                    text = `还剩${leftNum}个报名名额，立即报名`;
                    onClick = () =>
                        Utils.router.push(
                            `/bbs/registration?id=${id}`,
                            `/bbs/registration/${id}`
                        );
                }
            } else {
                //已报名
                switch (parseInt(joinInfo.status)) {
                    case 1: //报名审核未通过
                        type = 'warning';
                        text = '重新报名';
                        onClick = () =>
                            Utils.router.push('/person/event/registration');
                        break;

                    case 2: //报名审核成功
                    case 3:
                    case 4:
                    case 5:
                        type = 'waiting';
                        text = '报名成功，请等待活动开始';
                        onClick = () =>
                            Utils.router.push('/person/event/registration');
                        break;

                    default:
                        //报名待审核
                        type = 'waiting';
                        text = `前面还有${
                            joinInfo.waiting_num
                        }人排队，请等待审核...`;
                        onClick = () =>
                            Utils.router.push('/person/event/registration');
                        break;
                }
            }
        } else {
            //报名已结束
            switch (parseInt(joinInfo.status)) {
                case 2: //订单信息待提交
                    type = 'primary';
                    text = '活动进行中，请提交订单';
                    onClick = () =>
                        Utils.router.push(
                            `/bbs/registration?id=${id}`,
                            `/bbs/registration/${id}`
                        );
                    break;

                case 3: //订单信息已提交，待审核
                    type = 'waiting';
                    text = '订单已提交，待审核';
                    onClick = () =>
                        Utils.router.push('/person/event/registration');
                    break;

                case 4: //订单信息审核未通过
                    type = 'warning';
                    text = '订单审核失败，请重新提交';
                    onClick = () =>
                        Utils.router.push('/person/event/registration');
                    break;

                case 5: //订单信息审核通过
                    type = 'primary';
                    text = '订单审核成功，请等待发放奖励';
                    onClick = () =>
                        Utils.router.push('/person/event/registration');
                    break;

                default:
                    //没有参加活动
                    type = 'default';
                    text = '活动已结束';
                    break;
            }
        }
    }

    return (
        <div className={classNames(prefixCls, className)}>
            <div
                className={`btn btn-${type}`}
                onClick={() => Utils.checkLogin(onClick)}
            >
                {text}
            </div>
            <p className="text-sm text-center mt-md">
                <span className="text-sub">审核中：</span>
                <span className="text-danger">{registrationData.waitNum}</span>
                <span className="text-sub"> / 已通过：</span>
                <span className="text-danger">
                    {registrationData.successNum}
                </span>
            </p>
            <p className="text-sm text-center mt-d">
                <span className="text-sub">不合格：</span>
                <span className="text-danger">{registrationData.failNum}</span>
                <span className="text-sub"> / 已报名：</span>
                <span className="text-danger">
                    {registrationData.joinNum}
                </span>
                <span className="text-sub"> / 总名额：</span>
                <span className="text-danger">{registrationData.passNum}</span>
            </p>

            <style jsx>{`
                .style-86542799 {
                }
                .btn {
                    text-align: center;
                    font-size: 0.32rem;
                    height: 0.94rem;
                    line-height: 0.94rem;
                    text-overflow: ellipsis;
                    word-break: break-word;
                    white-space: nowrap;
                    background-color: #fff;
                }
                .btn:hover {
                    opacity: 0.8;
                    transition: 0.3s all;
                }
                .btn-default {
                    color: #fff;
                    background: #c8c8c8;
                }
                .btn-waiting {
                    color: #fff;
                    background: #7289a5;
                }
                .btn-primary {
                    color: #fff;
                    background: ${Styles.color_primary};
                }
                .btn-warning {
                    color: #fff;
                    background: #e94f4f;
                }
            `}</style>
        </div>
    );
};

_.contextTypes = {
    $: PropTypes.object
};

export default observer(_);
