/**
 * const prefixCls = 'styles-16083636';
 * const images = '/static/images/src/bbs/Block';
 * @Author: Jack
 * @Date:   2017-12-27 15:23:50
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 14:36:56
 * @Path btWap \src\bbs\Block\_Info.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import Styles from 'styles';

const prefixCls = 'styles-16083636';
import { images } from './ds';

const _Info = (props, { $ }) => {
    const { className } = props;
    const blockStatistic = $.getState('blockStatistic');
    const postList = $.getState('postList');
    const forumName = postList.list[0] && postList.list[0].forumName;

    return (
        <Flex className={classNames(prefixCls, className)}>
            <Img
                src={`${images}/${forumName}.jpg`}
                size="0.88rem"
                circle
            />
            <div className="ml-sm">
                <p className="text-bold">{forumName || '　'}</p>
                <p className="text-xs text-sub mt-xs">
                    <span>主题：{blockStatistic.threadNum}</span>
                    <span className="ml-sm">帖数：{blockStatistic.postNum}</span>
                </p>
            </div>

            <style jsx global>{`
                .styles-16083636 {
                }
                .${prefixCls} {
                    padding: ${Styles.space} ${Styles.wind};
                    background: #fff;
                }
            `}</style>
        </Flex>
    );
};

_Info.contextTypes = {
    $: PropTypes.object
};

export default observer(_Info);
