/**
 * const prefixCls = 'styles-27355776';
 * const images = '/static/images/src/video/Index';
 * @Author: qizc
 * @Date:   2017-12-25 16:43:27
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 16:03:52
 * @Path btWap \src\video\Index\_BtVideo.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { ListView } from 'components';
import __Row from './__Row';
import Styles from 'styles';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-76715636';

const _Item = props => {
    const { imgId, name, explain, videoId } = props;
    return (
        <div
            className="item t-bg"
            style={{
                backgroundImage: `url(${Utils.getImgUrl(imgId)})`
            }}
            onClick={() => {
                videoId > 0
                    ? Utils.router.push(
                          `/video/detail?id=${videoId}`,
                          `/video/detail/${videoId}`
                      )
                    : undefined;
            }}
        >
            <div className="mask" />
            <div className="con text-center text-void">
                <div className="text-sm title">{name}</div>
                {explain && (
                    <div className="text-xs sub mt-xs text-clamp-1">
                        {explain}
                    </div>
                )}
                <img className="mt-xs r" src={`${images}/r.png`} />
            </div>
            <style jsx>{`
                .item {
                    position: relative;
                    display: inline-block;
                    vertical-align: top;
                    width: 45.5%;
                    padding-bottom: 16%;
                    margin-left: 3%;
                    margin-top: 3%;
                    overflow: hidden;
                    float: left;
                }
                .item:first-child {
                    padding-bottom: 35%;
                }
                .mask {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                }
                .con {
                    padding: ${Styles.wind};
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    transform: translate(-50%, -50%);
                }
                .r {
                    height: 0.28rem;
                    width: 0.28rem;
                }
                .item:first-child .r {
                    height: 0.4rem;
                    width: 0.4rem;
                }
                .item:first-child .title {
                    font-size: ${Styles.font_lg} !important;
                }
            `}</style>
        </div>
    );
};
const _BtVideo = (props, { $ }) => {
    const { className } = props;
    const topTyleList = $.getState('topTyleList');

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="p-w">
                <img className="t-img" src={`${images}/bt.png`} />
            </div>
            <div className="list">
                {topTyleList.list.map(function(elem, index) {
                    return <_Item key={index} {...elem} index={index} />;
                })}
            </div>
            <style jsx global>{`
                .styles-76715636 {
                }
                .${prefixCls} {
                    background: #fff;
                    padding: ${Styles.md} 0;
                }
            `}</style>
            <style jsx>{`
                .list {
                    overflow: hidden;
                    min-height: 2.24rem;
                }
                .t-img {
                    height: 0.26rem;
                }
            `}</style>
        </div>
    );
};

_BtVideo.contextTypes = {
    $: PropTypes.object
};

export default observer(_BtVideo);
