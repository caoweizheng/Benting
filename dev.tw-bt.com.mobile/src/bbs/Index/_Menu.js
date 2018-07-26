/**
 * const prefixCls = 'styles-48913379';
 * const images = '/static/images/src/bbs/Index';
 * @Author: Jack
 * @Date:   2017-12-25 14:03:09
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 14:38:25
 * @Path btWap \src\bbs\Index\_Menu.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import Styles from 'styles';
import Utils from 'utils';
import { blockDS } from './ds';

const prefixCls = 'styles-48913379';
import { images } from './ds';

const _Menu = (props, { $ }) => {
    const { className } = props;
    const bbsBlock = $.getState('bbsBlock');

    return (
        <div className={prefixCls}>
            {bbsBlock.list
                .filter(item => blockDS.includes(item.forumName))
                .map(item => (
                    <div
                        key={item.forumName}
                        className="item text-center"
                        onClick={() =>
                            Utils.router.push(
                                `/bbs/block?id=${item.forumId}`,
                                `/bbs/block/${item.forumId}`
                            )}
                    >
                        <Img
                            src={`${images}/${item.forumName}.jpg`}
                            size="0.88rem"
                            circle
                        />
                        <p className="text-sm mt-sm">{item.forumName}</p>
                    </div>
                ))}

            <style jsx>{`
                .styles-48913379 {
                    min-height: 3.56rem;
                    padding: 0.14rem 0;
                    background: #fff;
                }
                .item {
                    display: inline-block;
                    width: 33.33333%;
                    padding: 0.14rem 0;
                }
            `}</style>
        </div>
    );
};

_Menu.contextTypes = {
    $: PropTypes.object
};

export default observer(_Menu);
