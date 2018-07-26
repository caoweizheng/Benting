/**
 * const prefixCls = 'styles-28910795';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2017-12-29 13:48:51
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-27 18:16:31
 * @Path btWap \src\bbs\Article\__FixedExtra.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import Const from 'const';

const prefixCls = 'styles-28910795';

const __FixedExtra = (props, { $ }) => {
    const { className } = props;
    const { isFavor, isLike } = $;
    const { likeAdd, ensNum } = $.getState('postDetail');

    return (
        <Flex className={classNames(prefixCls, className)}>
            <img
                className="icon"
                src={
                    isFavor
                        ? `${Const.__IMAGES__}/collection_a.png`
                        : `${Const.__IMAGES__}/collection.png`
                }
                onClick={() => Utils.checkLogin($.doFavor)}
            />
            {!!parseInt(ensNum) && (
                <span className="text-sm text-sub ml-xs">{ensNum}</span>
            )}
            <img
                className="icon ml-sm"
                src={
                    isLike
                        ? `${Const.__IMAGES__}/praise_a.png`
                        : `${Const.__IMAGES__}/praise.png`
                }
                onClick={() => Utils.checkLogin($.doLike)}
            />
            {!!parseInt(likeAdd) && (
                <span className="text-sm text-sub ml-xs">{likeAdd}</span>
            )}
            <img
                className="img-reward ml-sm"
                src={`${Const.__IMAGES__}/reward.png`}
                onClick={e => {
                    e.stopPropagation();
                    Utils.checkLogin(() => {
                        $.fetchRewardGoodsList();
                    });
                }}
            />
            <style jsx>{`
                .styles-28910795 {
                }
                .icon {
                    width: 0.4rem;
                    height: 0.4rem;
                }
                .img-reward {
                    width: 0.44rem;
                    height: 0.44rem;
                    opacity: 0.8;
                }
            `}</style>
        </Flex>
    );
};

__FixedExtra.contextTypes = {
    $: PropTypes.object
};

export default observer(__FixedExtra);
