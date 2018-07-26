/**
 * const prefixCls = 'style-141292';
 * const images = '/static/images/src/person/event/Registration/Index';
 * @Author: czy0729
 * @Date: 2018-06-27 12:39:35
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-29 16:01:18
 * @Path dev.tw-bt.com.mobile /src/person/event/Registration/Index/_Item.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Flex, Icon } from 'antd-mobile';
import Utils from 'utils';
import Styles from 'styles';
import { statusDS } from './ds';

const prefixCls = 'styles-141292';

const _Item = (props, { $ }) => {
    const { id, thread_id, subject, status, marks, className } = props;
    const statusLabel = Utils.getLabel(statusDS, status);

    let showDetialBtn = true;
    let showCancelBtn = false;
    let showRegistBtn = false;
    let showSubmitBtn = false;
    let btnSubmitLabel = '提交订单';
    let showMarks = false;
    let statusTextType;
    switch (statusLabel) {
        case '取消报名':
            break;

        case '报名审核中':
            showCancelBtn = true;
            statusTextType = 'desc';
            break;

        case '报名审核未通过':
            showRegistBtn = true;
            showMarks = !!marks;
            statusTextType = 'danger';
            break;

        case '报名审核通过':
            showSubmitBtn = true;
            statusTextType = 'primary';
            break;

        case '订单信息审核中':
            statusTextType = 'desc';
            break;

        case '订单信息审核未通过':
            showMarks = !!marks;
            showSubmitBtn = true;
            statusTextType = 'danger';
            btnSubmitLabel = '重新提交订单';
            break;

        case '订单信息审核通过':
            statusTextType = 'primary';
            break;

        default:
            break;
    }

    return (
        <List.Item className={classNames(prefixCls, className)} wrap>
            <Flex
                onClick={() =>
                    Utils.router.push(
                        `/bbs/article?id=${thread_id}`,
                        `/bbs/article/${thread_id}`
                    )
                }
            >
                <Flex.Item>{subject}</Flex.Item>
                <Icon className="text-sub" type="right" />
            </Flex>
            <div className="line" />
            {showMarks ? (
                <div>
                    <p className={`text-sm text-${statusTextType}`}>
                        状态：{statusLabel}
                    </p>
                    <p className="text-sm text-sub mt-xs">{marks}</p>
                    <div className="text-right mt-md">
                        {showDetialBtn && (
                            <div
                                className="btn btn-default"
                                onClick={() =>
                                    Utils.router.push(
                                        `/person/event/registration/detail?id=${id}`,
                                        `/person/event/registration/detail/${id}`
                                    )
                                }
                            >
                                报名资料
                            </div>
                        )}
                        {showSubmitBtn && (
                            <div
                                className="btn btn-primary ml-sm"
                                onClick={() =>
                                    Utils.router.push(
                                        `/bbs/registration?id=${thread_id}`,
                                        `/bbs/registration/${thread_id}`
                                    )
                                }
                            >
                                {btnSubmitLabel}
                            </div>
                        )}
                        {showCancelBtn && (
                            <div
                                className="btn btn-danger ml-sm"
                                onClick={() =>
                                    Utils.onConfirm('确定取消报名?', () =>
                                        $.doCancel(id)
                                    )
                                }
                            >
                                取消报名
                            </div>
                        )}
                        {showRegistBtn && (
                            <div
                                className="btn btn-primary ml-sm"
                                onClick={() =>
                                    Utils.router.push(
                                        `/bbs/registration?id=${thread_id}`,
                                        `/bbs/registration/${thread_id}`
                                    )
                                }
                            >
                                重新报名
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <Flex>
                    <Flex.Item>
                        <p className={`text-sm text-${statusTextType}`}>
                            状态：{statusLabel}
                        </p>
                    </Flex.Item>
                    {showDetialBtn && (
                        <div
                            className="btn btn-default"
                            onClick={() =>
                                Utils.router.push(
                                    `/person/event/registration/detail?id=${id}`,
                                    `/person/event/registration/detail/${id}`
                                )
                            }
                        >
                            报名资料
                        </div>
                    )}
                    {showSubmitBtn && (
                        <div
                            className="btn btn-primary ml-sm"
                            onClick={() =>
                                Utils.router.push(
                                    `/bbs/registration?id=${thread_id}`,
                                    `/bbs/registration/${thread_id}`
                                )
                            }
                        >
                            {btnSubmitLabel}
                        </div>
                    )}
                    {showCancelBtn && (
                        <div
                            className="btn btn-danger ml-sm"
                            onClick={() =>
                                Utils.onConfirm('确定取消报名?', () =>
                                    $.doCancel(id)
                                )
                            }
                        >
                            取消报名
                        </div>
                    )}
                    {showRegistBtn && (
                        <div
                            className="btn btn-primary ml-sm"
                            onClick={() =>
                                Utils.router.push(
                                    `/bbs/registration?id=${thread_id}`,
                                    `/bbs/registration/${thread_id}`
                                )
                            }
                        >
                            重新报名
                        </div>
                    )}
                </Flex>
            )}

            <style jsx>{`
                .style-141292 {
                }
                .line {
                    margin: 0.16rem 0;
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
                .btn {
                    display: inline-block;
                    height: 0.48rem;
                    padding: 0 0.16rem;
                    text-align: center;
                    font-size: 0.24rem;
                    line-height: 0.46rem;
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
                    color: ${Styles.color_font_desc};
                    border: 0.01rem solid ${Styles.color_font_desc};
                }
                .btn-primary {
                    color: ${Styles.color_primary};
                    border: 0.01rem solid ${Styles.color_primary};
                }
                .btn-danger {
                    color: ${Styles.color_danger};
                    border: 0.01rem solid ${Styles.color_danger};
                }
            `}</style>
        </List.Item>
    );
};

_Item.contextTypes = {
    $: PropTypes.object
};

export default observer(_Item);
