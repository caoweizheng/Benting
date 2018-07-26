/**
 * const prefixCls = 'styles-2634125';
 * const images = '/static/images/src/event/floor/Index';
 * @Author: Jack
 * @Date:   2018-01-16 11:23:37
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 14:43:32
 * @Path btWap \src\event\floor\Index\_Info.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'styles-2634125';

const _Info = (props, { $ }) => {
    const { className } = props;
    const blockStatistic = $.getState('blockStatistic');
    const forumName = '欢乐踩楼';

    return (
        <Flex className={classNames(prefixCls, className)}>
            <Img src={`${images}/${forumName}.png`} size="0.88rem" circle />
            <div className="ml-sm">
                <p className="text-bold">{forumName}</p>
                <p className="text-xs text-sub mt-xs">
                    <span>主题：{blockStatistic.threadNum}</span>
                    <span className="ml-sm">帖数：{blockStatistic.postNum}</span>
                </p>
            </div>

            <style jsx global>{`
                .styles-2634125 {
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
