/**
 * const prefixCls = 'styles-49490316';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2018-03-28 12:31:17
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-04-26 18:16:39
 * @Path btWap \src\bbs\Article\__Score.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Button } from 'antd-mobile';
import { Img } from 'components';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-49490316';

const __Score = (props, { $ }) => {
    const { className } = props;
    const { more } = $.getState('_score');
    const { userId, isFav } = $.getState('userInfo');
    const { list, allnum = '-', allsco = '-' } = $.getState('scoreList');
    const isHongren = isFav == 1; //是否红人
    const isScored =
        !!userId && list.findIndex(item => item.userId === userId) !== -1; //是否已加分

    return (
        <div className={classNames(prefixCls, className, 'text-center')}>
            {isHongren ? (
                <Button
                    className="mt-sm"
                    type="warning"
                    size="small"
                    inline
                    disabled={isScored}
                    onClick={() =>
                        Utils.checkLogin(() =>
                            Utils.onPrompt(
                                '确定给作者加积分?',
                                $.doRewardHongrenScore,
                                1,
                                '请根据帖子质量加1-10积分'
                            )
                        )}
                >
                    {isScored ? '已加分' : '红人加分'}
                </Button>
            ) : (
                <Button
                    className="mt-sm"
                    type="primary"
                    size="small"
                    inline
                    disabled={isScored}
                    onClick={() =>
                        Utils.checkLogin(() =>
                            Utils.onConfirm(`确定给作者加积分?`, $.doRewardScore)
                        )}
                >
                    {isScored ? '已加分' : '加分'}
                </Button>
            )}
            {!!list.length && (
                <div>
                    <p className="text-sm text-sub mt-d">
                        <span>已获得</span>
                        <span className="text-primary">{allnum}</span>
                        <span>人的加分，共得到</span>
                        <span className="text-primary">{allsco}</span>
                        <span>积分</span>
                    </p>
                    <div className="mt-sm">
                        {list
                            .filter((item, index) => (more ? true : index < 19))
                            .map((item, index) => (
                                <div key={index} className="wrap">
                                    <Img
                                        className={`${prefixCls}__avatar`}
                                        src={item.faceImg}
                                        size="0.8rem"
                                        circle
                                        onClick={() =>
                                            Utils.router.push(
                                                `/person/zone?id=${item.userId}`,
                                                `/person/zone/${item.userId}`
                                            )}
                                    />
                                    {parseInt(item.point) > 1 && (
                                        <span className="badge">
                                            {item.point}
                                        </span>
                                    )}
                                </div>
                            ))}
                    </div>
                    {list.length > 18 &&
                        !more && (
                            <p
                                className="text-primary text-sm text-center mt-xs"
                                onClick={$.scoreShowMore}
                            >
                                展开全部
                            </p>
                        )}
                </div>
            )}

            <style jsx global>{`
                .styles-49490316 {
                }
                .${prefixCls}__avatar {
                    margin: 0 0.04rem 0.12rem;
                    border: 0.01rem solid ${Styles.color_border};
                }
            `}</style>
            <style jsx>{`
                .styles-49490316 {
                }
                .wrap {
                    display: inline-block;
                    position: relative;
                }
                .badge {
                    position: absolute;
                    right: 0.04rem;
                    bottom: 0.1rem;
                    height: 0.24rem;
                    padding: 0 0.06rem;
                    lint-height: 0.24rem;
                    text-align: center;
                    font-size: ${Styles.font_xxs};
                    color: #fff;
                    background: ${Styles.color_danger};
                    border-radius: 0.16rem;
                }
            `}</style>
        </div>
    );
};

__Score.contextTypes = {
    $: PropTypes.object
};

export default observer(__Score);
