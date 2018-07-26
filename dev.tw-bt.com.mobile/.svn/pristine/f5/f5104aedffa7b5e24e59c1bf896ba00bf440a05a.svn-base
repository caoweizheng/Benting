/**
 * const prefixCls = 'styles-56765148';
 * const images = '/static/images/src/video/Detail';
 * @Author: qizc
 * @Date:   2017-12-26 10:38:27
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:07:29
 * @Path btWap \src\video\Detail\_HotList.js
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

const prefixCls = 'styles-56765148';

const _Item = props => {
    const { tbId, fileinfo, from, tit, userName, viewCount } = props;
    return (
        <Flex
            className={`${prefixCls}_item`}
            onClick={() =>
                Utils.router.push(
                    `/video/detail?id=${tbId}`,
                    `/video/detail/${tbId}`
                )}
        >
            <div
                className="l t-bg"
                style={{
                    backgroundImage: `url(${Utils.getAppImgUrl(
                        fileinfo.surface,
                        'scale'
                    )})`
                }}
            />
            <Flex.Item>
                <div className="title">
                    <div className="text-clamp-2 text-sm">{tit}</div>
                    {from == 0 && (
                        <Tag className="gf text-xs mt-xs" type="gf" />
                    )}
                </div>
                <p className="text-xs">
                    <span className="text-primary">{userName}</span>
                    <span className="pull-right text-sub">{viewCount}人观看</span>
                </p>
            </Flex.Item>
            <style jsx global>{`
                .${prefixCls}_item {
                    padding: ${Styles.xs} 0;
                }
            `}</style>
            <style jsx>{`
                .l {
                    height: 1.77rem;
                    width: 2.8rem;
                }
                .title {
                    height: 1.5rem;
                }
            `}</style>
        </Flex>
    );
};

const _HotList = (props, { $ }) => {
    const { className } = props;
    const hotVideoList = $.getState('hotVideoList');
    return (
        <div className={classNames(prefixCls, className)}>
            <Header>热门视频</Header>
            <div className="list">
                {hotVideoList.list.map(function(elem, index) {
                    return <_Item key={index} {...elem} />;
                })}
            </div>
            <style jsx global>{`
                .styles-56765148 {
                    background: #fff;
                }
                .list {
                    min-height: 2rem;
                    padding: ${Styles.sm} ${Styles.wind};
                }
            `}</style>
        </div>
    );
};

_HotList.contextTypes = {
    $: PropTypes.object
};

export default observer(_HotList);
