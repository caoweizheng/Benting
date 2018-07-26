/**
 * const prefixCls = 'styles-35779682';
 * const images = '/static/images/src/information/Detail';
 * @Author: qizc
 * @Date:   2017-12-27 16:34:47
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:07:29
 * @Path btWap \src\information\Detail\_Con.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { DiscuzContent, RichEditor } from 'components';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-35779682';

const _Con = (props, { $ }) => {
    const { className } = props;
    const {
        tbId,
        tit,
        createTime,
        con = '',
        json,
        up = {},
        next = {}
    } = $.getState('articleDetail');

    return (
        <div className={classNames(prefixCls, className, 'p-sw')}>
            <div className="text-title">{tit}</div>
            <div className="mt-sm text-sm text-sub">
                发布时间：{Utils.date('Y-m-d H:i', createTime)}
            </div>
            <div className="mt-md con">
                {json ? (
                    <RichEditor
                        key={tbId}
                        className={`${prefixCls}_con`}
                        data={json}
                        readOnly
                    />
                ) : (
                    <DiscuzContent
                        key={tbId}
                        className={`${prefixCls}_con`}
                        html={{ __html: con }}
                    />
                )}
            </div>
            <div className="mt-lg">
                <div>
                    <span>上一篇： </span>
                    {up.tbId ? (
                        <span
                            className="text-primary"
                            onClick={() =>
                                Utils.router.push(
                                    `/information/detail?id=${up.tbId}`,
                                    `/information/detail/${up.tbId}`
                                )}
                        >
                            {up.tit}
                        </span>
                    ) : (
                        <span className="text-primary">无</span>
                    )}
                </div>
                <div className="mt-sm">
                    <span>下一篇： </span>
                    {next.tbId ? (
                        <span
                            className="text-primary"
                            onClick={() =>
                                Utils.router.push(
                                    `/information/detail?id=${next.tbId}`,
                                    `/information/detail/${next.tbId}`
                                )}
                        >
                            {next.tit}
                        </span>
                    ) : (
                        <span className="text-primary">无</span>
                    )}
                </div>
            </div>

            <style jsx>{`
                .styles-35779682 {
                    background-color: #fff;
                }
                .t-img {
                    height: 0.26rem;
                }
                .con {
                    min-height: 5rem;
                }
            `}</style>
        </div>
    );
};

_Con.contextTypes = {
    $: PropTypes.object
};

export default observer(_Con);
