/**
 * 
 * @Author: Jack
 * @Date: 2017-05-30 15:25:50
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-28 12:25:25
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import Utils from 'utils';
import Styles from 'styles';

const Comment = props => {
    const {
        id,
        data = [],
        max = 5,
        total = 0,
        href,
        onMaxClick = Function.prototype,
        onCommentClick = Function.prototype,
        className
    } = props;

    if (data.length === 0) return null;

    return (
        <div className={classNames(className, 'root')}>
            {data.filter((item, index) => index < max).map((item, index) => {
                //需要显示回复者与被回复者的关系
                const needToShowRelation = id != item.parId && item.parId != 0;

                return (
                    <div
                        key={index}
                        className={classNames({
                            item: true,
                            'text-sm text-desc': true,
                            'mt-xs': index !== 0
                        })}
                        onClick={e => {
                            e.stopPropagation();
                            onCommentClick(item);
                        }}
                    >
                        <span
                            className="text-main"
                            // onClick={() =>
                            //     Utils.router.push(
                            //         `/person/zone/${item.userId}`
                            //     )}
                        >
                            {item.name}
                            {needToShowRelation ? '' : '：'}
                        </span>

                        {/*第二楼的不显示回复者关系*/}
                        {needToShowRelation && (
                            <span className="ml-xs">回复</span>
                        )}
                        {needToShowRelation && (
                            <span
                                className="text-main ml-xs"
                                // onClick={() =>
                                //     Utils.router.push(
                                //         `/person/zone/${item.parUserId}`
                                //     )}
                            >
                                {item.parNiname}：
                            </span>
                        )}
                        <span>{Utils.emojify(item.text)}</span>
                    </div>
                );
            })}
            {total > max && (
                <div className="text-sm text-sub ml-xs mt-xs">
                    <span>更多精彩回复</span>
                    <a className="text-main ml-xs" onClick={onMaxClick}>
                        点击查看
                    </a>
                </div>
            )}

            <style jsx>{`
                .root {
                    padding: ${Styles.xs};
                    margin-bottom: ${Styles.xs};
                    background: ${Styles.color_bg};
                    border-radius: ${Styles.radius_xs};
                }
                .item {
                    padding: 0 ${Styles.xs};
                    word-break: break-all;
                    border-radius: ${Styles.radius_xs};
                }
                .item:active {
                    background-color: rgba(0, 0, 0, 0.08);
                }
            `}</style>
        </div>
    );
};

export default Comment;
