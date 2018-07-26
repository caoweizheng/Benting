/**
 * const prefixCls = 'styles-18086510';
 * const images = '/static/images/src/video/Detail';
 * @Author: qizc
 * @Date:   2017-12-25 18:27:49
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:07:29
 * @Path btWap \src\video\Detail\_List.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Styles from 'styles';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Header } from 'src/_';
import Utils from 'utils';
import Tag from 'src/video/_/Tag';

const prefixCls = 'styles-18086510';

const _Item = props => {
    const { activeTbId, tbId, fileinfo, createTime, tit } = props;
    return (
        <div
            className="item"
            onClick={() =>
                Utils.router.push(
                    `/video/detail?id=${tbId}`,
                    `/video/detail/${tbId}`
                )}
        >
            <div
                className={classNames('bg t-bg', {
                    active: tbId == activeTbId
                })}
                style={{
                    backgroundImage: `url(${Utils.getAppImgUrl(
                        fileinfo.surface,
                        'scale'
                    )})`
                }}
            >
                <Tag
                    className="tag text-xs"
                    text={Utils.date('y-m-d', createTime)}
                />
            </div>
            <div className="text-clamp-1 tit mb-sm mt-xs text-sm">{tit}</div>
            <style jsx>{`
                .styles-18086510 {
                }
                .item {
                    display: inline-block;
                    width: 2.6rem;
                    margin-left: ${Styles.wind};
                    overflow: hidden;
                    vertical-align: top;
                    box-sizing: border-box;
                }
                .tit {
                    white-space: initial;
                }
                .bg {
                    height: 1.6rem;
                    position: relative;
                }
                .bg.active {
                    border: 4px solid ${Styles.color_primary};
                }
            `}</style>
        </div>
    );
};
const _List = (props, { $ }) => {
    const { className } = props;
    const videoList = $.getState('videoList');
    const { tbId } = $.getState('videosDetail');
    return (
        <div className={classNames(prefixCls, className)}>
            <Header>播放列表</Header>
            <div className="wrap">
                {videoList.list.map(function(elem, index) {
                    return <_Item key={index} activeTbId={tbId} {...elem} />;
                })}
            </div>
            <style jsx global>{`
                .styles-18086510 {
                    background: #fff;
                }
                .${prefixCls} .tag {
                    position: absolute;
                    right: ${Styles.xs};
                    bottom: ${Styles.xs};
                }
            `}</style>
            <style jsx>{`
                .styles-18086510 { 
                }
                .wrap {
                    min-height: 2.71rem;
                    padding-top: ${Styles.md};
                    padding-bottom: ${Styles.sm};
                    overflow-x: scroll;
                    overflow-y: hidden;
                    white-space: nowrap;
                }
            `}</style>
        </div>
    );
};

_List.contextTypes = {
    $: PropTypes.object
};

export default observer(_List);
