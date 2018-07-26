/**
 * const prefixCls = 'style-511795';
 * const images = '/static/images/src/auth/Baidu';
 * @Author: czy0729
 * @Date: 2018-07-17 11:14:22
 * @Last Modified by:   czy0729
 * @Last Modified time: 2018-07-17 11:14:22
 * @Path dev.tw-bt.com.mobile /src/auth/Baidu/_List.js
 */
import React from 'react';
import classNames from 'classnames';
import { observer } from '@';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'style-511795';

const _List = props => {
    const { queryList, className } = props;

    return (
        <div className={classNames(prefixCls, className, 'p-w')}>
            {queryList.list.length > 0 &&
                queryList.list.map((v, index) => (
                    <div className="group p-sw text-sm mt-sm" key={index}>
                        <div className="item">
                            <span className="label">查询时间:</span>
                            <span className="ml-sm">
                                {Utils.date('Y年m月d日 H:i', v.createTime)}
                                {`${index === 0 ? '(当前)' : ''}`}
                            </span>
                        </div>
                        <div className="item">
                            <span className="label">查询设备:</span>
                            <span className="text-primary ml-sm">
                                {v.system}
                            </span>
                        </div>
                        <div className="item">
                            <span className="label">IP地址:</span>
                            <span className="ml-sm">
                                {v.IP} {v.IPArea}
                            </span>
                        </div>
                        <div className="item">
                            <span className="label">查询工具:</span>
                            <span className="text-primary ml-sm">
                                {v.userDevice}
                            </span>
                        </div>
                    </div>
                ))}
            <div className="p-sw text-xs text-center text-sub">
                已经没有更多记录了
            </div>

            <style jsx>{`
                .style-511795 {
                }
                .group {
                    color: #4c4c4c;
                    background-color: #fff;
                }
                .item + .item {
                    margin-top: ${Styles.sm};
                }
                .text {
                    margin-left: 0.16rem;
                }
            `}</style>
        </div>
    );
};

export default observer(_List);
