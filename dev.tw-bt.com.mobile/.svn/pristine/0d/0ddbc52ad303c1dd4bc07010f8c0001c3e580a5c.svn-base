/**
 * const prefixCls = 'style-281946';
 * const images = '/static/images/src/auth/Baidu';
 * @Author: czy0729
 * @Date: 2018-07-17 11:15:11
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-17 11:39:20
 * @Path dev.tw-bt.com.mobile /src/auth/Baidu/_History.js
 */
import React from 'react';
import classNames from 'classnames';
import { observer } from '@';
import { List } from 'antd-mobile';
import _List from './_List';

const prefixCls = 'style-281946';
import { images } from './ds';

const _History = props => {
    const { queryList, queryCode, className } = props;

    return (
        <div className={classNames(prefixCls, className)}>
            {!!queryList.list.length && (
                <List className={`${prefixCls}__jl`}>
                    <List.Item
                        thumb={<img src={`${images}/jl.png`} />}
                        extra={
                            queryList.list.length > 1 && (
                                <span className="text-danger">
                                    此商品已经多次查询
                                </span>
                            )
                        }
                    >
                        <span className="text-md">查询记录</span>
                    </List.Item>
                </List>
            )}
            {queryCode === '成功' && <_List queryList={queryList} />}

            <style jsx global>{`
                .style-281946 {
                }
                .${prefixCls}__jl .am-list-extra {
                    flex-basis: 60% !important;
                }
                .${prefixCls} .am-list-content {
                    white-space: initial !important;
                }
            `}</style>
        </div>
    );
};

export default observer(_History);
