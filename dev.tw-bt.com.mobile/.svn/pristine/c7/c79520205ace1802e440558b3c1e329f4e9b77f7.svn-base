/**
 * const prefixCls = 'styles-89572613';
 * const images = '/static/images/src/event/floor/Index';
 * @Author: Jack
 * @Date:   2018-01-13 18:04:55
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-04-12 10:19:04
 * @Path btWap \src\event\floor\Index\_List.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { AffixTabs, ListView } from 'components';
import __Item from './__Item';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-89572613';

const _List = (props, { $ }) => {
    const { className } = props;
    const { time = 0 } = $.getState('time');
    const bbsLikeAndFavorList = $.getState('bbsLikeAndFavorList');
    const floorList = $.getState('floorList');

    return (
        <div className={classNames(prefixCls, className)}>
            <ListView
                data={floorList}
                renderRow={data => (
                    <__Item
                        isLike={
                            bbsLikeAndFavorList.list &&
                            bbsLikeAndFavorList.list.like &&
                            bbsLikeAndFavorList.list.like.findIndex(
                                item => item == data.threadId
                            ) !== -1
                        }
                        isProcessing={data.endTime > time}
                        onDoLike={$.doLike}
                        {...data}
                    />
                )}
                onEndReached={$.fetchFloorList}
            />

            <style jsx>{`
                .styles-89572613 {
                    background: #fff;
                }
                .tags {
                    padding: 0.28rem;
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
                .tag-wrap {
                    display: inline-block;
                    width: 25%;
                    padding: 0 2%;
                }
                .tag-wrap-distance {
                    margin-top: 0.24rem;
                }
                .tag {
                    padding: 0.12rem 0;
                    text-align: center;
                    font-size: 0.24rem;
                    color: ${Styles.color_main};
                    background: #fff;
                    border: 0.01rem solid ${Styles.color_main};
                    border-radius: 0.32rem;
                    transition: all 0.3s;
                }
                .tag-active {
                    color: #fff;
                    background: ${Styles.color_main};
                }
            `}</style>
        </div>
    );
};

_List.contextTypes = {
    $: PropTypes.object
};

export default observer(_List);
