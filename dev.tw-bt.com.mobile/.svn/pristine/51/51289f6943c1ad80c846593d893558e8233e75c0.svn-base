/**
 * const prefixCls = 'styles-09199114';
 * const images = '/static/images/src/information/Index';
 * @Author: qizc
 * @Date:   2017-12-25 14:45:40
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:07:29
 * @Path btWap \src\information\Index\__Row.js
 */
'use strict';

import React from 'react';
import { observer } from '@';
import classNames from 'classnames';
import Styles from 'styles';
import { Flex, List } from 'antd-mobile';
import Utils from 'utils';
import Tag from 'src/video/_/Tag';

const prefixCls = 'styles-09199114';

const __Row = props => {
    const {
        tbId,
        fileinfo,
        userName,
        createTime,
        tit,
        tag,
        from,
        className,
        ...other
    } = props;

    return (
        <List.Item
            className={classNames(prefixCls, className)}
            onClick={() =>
                Utils.router.push(
                    `/video/detail?id=${tbId}`,
                    `/video/detail/${tbId}`
                )}
        >
            <Flex>
                <Flex.Item>
                    <div className="top">
                        <p className="text-clamp-2 text-md text-title">
                            {tit}
                        </p>
                    </div>
                    <Flex justify="between" className="text-xs text-sub">
                        <Flex.Item className="text-primary">
                            {userName}
                        </Flex.Item>
                        <span>{Utils.date('m月d号', createTime)}发布</span>
                    </Flex>
                </Flex.Item>
                <div
                    className="thumb ml-sm"
                    style={{
                        backgroundImage: `url(${Utils.getAppImgUrl(
                            fileinfo.surface,
                            'scale'
                        )})`
                    }}
                >
                    {/*from == 0 && <Tag className="gf text-xxs" type="gf" />*/}
                    <Tag
                        className="time text-xxs"
                        text={Utils.getPlayTime(fileinfo.play_time)}
                    />
                    <img
                        className="play"
                        src={`${Const.__IMAGES__}/play.png`}
                    />
                </div>
            </Flex>
            <style jsx>{`
                .thumb {
                    position: relative;
                    height: 1.46rem;
                    width: 2.12rem;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    overflow: hidden;
                    background-color: ${Styles.color_bg};
                }
            `}</style>
            <style jsx global>{`
                .${prefixCls} .gf {
                    position: absolute;
                    top: ${Styles.xs};
                    right: ${Styles.xs};
                }
                .${prefixCls} .time {
                    position: absolute;
                    right: ${Styles.xs};
                    bottom: ${Styles.xs};
                }
                .${prefixCls} .top {
                    height: 1.1rem;
                    width: 100%;
                    white-space: normal;
                }
                .${prefixCls} .play {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    height: 0.5rem;
                    width: 0.5rem;
                    transform: translate(-50%, -50%);
                }
            `}</style>
        </List.Item>
    );
};

export default observer(__Row);
