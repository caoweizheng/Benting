/**
 * const prefixCls = 'styles-02142558';
 * const images = '/static/images/src/video/Detail';
 * @Author: qizc
 * @Date:   2017-12-26 09:24:45
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 16:03:13
 * @Path btWap \src\video\Detail\_Info.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import classNames from 'classnames';
import Styles from 'styles';
import Const from 'const';
import { Video } from 'components';
import Tag from 'src/video/_/Tag';
import Utils from 'utils';

const prefixCls = 'styles-02142558';

const _Info = (props, { $ }) => {
    const { className } = props;
    const {
        tit = '',
        introCon = '',
        from = '0',
        isLike = 0,
        likeCount = 0,
        userinfo = {},
        userId = '0',
        createTime
    } = $.getState('videosDetail');
    return (
        <div className={classNames(prefixCls, className, 'p-sw')}>
            <div className="p-title text-md text-bold text-title">{tit}</div>
            {from == 0 && <Tag className="gf text-xs mt-xs" type="gf" />}
            {introCon && (
                <div className="mt-md mb-sm intro">
                    <div className="text-md text-title mt-md">视频详情</div>
                    <div className="text-sm mt-sm">{introCon}</div>
                </div>
            )}
            <Flex justify="between" align="center" className="text-xs mt-xs">
                <Flex.Item>
                    <span className="text-primary">
                        {userinfo && userinfo.userName}
                    </span>
                    <span className="text-sub text-xs">
                        {' '}
                        ▪ 发布于{Utils.date(
                            'm月d号',
                            createTime ? createTime : Utils.getTimestamp()
                        )}
                    </span>
                </Flex.Item>
                <Flex align="center" className="text-sub icon">
                    <Flex>
                        <div>
                            <img
                                className="ml-md mr-xs _img"
                                src={`${Const.__IMAGES__}/collection.png`}
                            />
                        </div>
                        <span>收藏</span>
                    </Flex>
                    <Flex
                        onClick={() => Utils.checkLogin(() => $.toggleLike())}
                    >
                        <div>
                            {!!isLike ? (
                                <img
                                    className="ml-md mr-xs _img"
                                    src={`${Const.__IMAGES__}/praise_a.png`}
                                />
                            ) : (
                                <img
                                    className="ml-md mr-xs _img"
                                    src={`${Const.__IMAGES__}/praise.png`}
                                />
                            )}
                        </div>
                        {likeCount > 0 ? (
                            <span>{likeCount}</span>
                        ) : (
                            <span>点赞</span>
                        )}
                    </Flex>
                </Flex>
            </Flex>
            <style jsx global>{`
                .styles-02142558 {
                    background: #fff;
                }
                .${prefixCls} .icon {
                    line-height: 1;
                }
            `}</style>
            <style jsx>{`
                .styles-02142558 {
                }
                .p-title {
                    min-height: 0.36rem;
                }
                .intro {
                    border-top: 0.01rem solid ${Styles.color_border};
                }
                ._img {
                    width: 0.4rem;
                    height: 0.4rem;
                }
            `}</style>
        </div>
    );
};

_Info.contextTypes = {
    $: PropTypes.object
};

export default observer(_Info);
