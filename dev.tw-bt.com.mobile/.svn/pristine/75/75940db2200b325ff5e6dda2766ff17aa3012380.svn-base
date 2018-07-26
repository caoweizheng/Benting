/**
 * const prefixCls = 'styles-16547927';
 * const images = '/static/images/code/btWap/src/bbs/Index';
 * @Author: Jack
 * @Date:   2018-03-24 18:16:14
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-01 09:58:06
 * @Path nidosport E:\code\btWap\src\bbs\Index\_List.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { AffixTabs, ListView } from 'components';
import _Item from 'src/bbs/_/List/_Item';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-10996476';
import { images } from './ds';

const List = (props, { $ }) => {
    const { className } = props;
    const { initialPage, tag } = $.getState();
    const bbsLikeAndFavorList = $.getState('bbsLikeAndFavorList');
    const labelList = $.getState('labelList');
    const postList = $.getState('postList');

    return (
        <div className={classNames(prefixCls, className)}>
            {!!labelList.list.length && (
                <div className="tags">
                    {labelList.list.map((item, index) => (
                        <div
                            key={item.labelId}
                            className={classNames('tag-wrap', {
                                'tag-wrap-distance': index >= 4
                            })}
                        >
                            <div
                                className={classNames('tag', {
                                    'tag-active': tag === item.labelId
                                })}
                                onClick={() => $.onTagClick(item.labelId)}
                            >
                                {item.labelvalue}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <AffixTabs
                tabs={[
                    { title: '全部' },
                    { title: '最新' },
                    { title: '热门' },
                    { title: '话题' },
                    { title: '精华' }
                ]}
                initialPage={initialPage}
                onTabClick={$.onTabClick}
            >
                <ListView
                    data={postList}
                    renderRow={data => (
                        <_Item
                            isLike={
                                bbsLikeAndFavorList.list &&
                                bbsLikeAndFavorList.list.like &&
                                bbsLikeAndFavorList.list.like.findIndex(
                                    item => item == data.threadId
                                ) !== -1
                            }
                            isHideDetail={
                                initialPage === 0 && !!data.displayState
                            }
                            onDoLike={$.doLike}
                            onTopicClick={$.onTopicClick}
                            {...data}
                        />
                    )}
                    onEndReached={$.fetchPostList}
                />
            </AffixTabs>

            <style jsx>{`
                .styles-10996476 {
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

List.contextTypes = {
    $: PropTypes.object
};

export default observer(List);
