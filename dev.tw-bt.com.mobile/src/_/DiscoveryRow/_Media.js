/**
 * const prefixCls = 'styles-13589840';
 * const images = '/static/images/src/_/DiscoveryRow';
 * @Author: Jack
 * @Date:   2018-03-03 11:10:15
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-04 09:40:17
 * @Path btWap \src\_\DiscoveryRow\_Media.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import { Video, Content } from 'components';
import __Imgs from './__Imgs';

const prefixCls = 'styles-13589840';

const _Media = props => {
    const { id, type, content, files, params = {}, className } = props;

    let El;
    switch (parseInt(type)) {
        case 1:
            El = (
                <Video
                    className="mt-sm"
                    src={files.length && files[0].filePath}
                    poster={files.length ? files[0].sfPath : undefined}
                    fileSize={files.length && files[0].fileSize}
                    playSecond={files.length && files[0].playSeconds}
                    borderRadius
                    onClick={e => e.preventDefault()}
                    {...params.video}
                />
            );
            break;

        case 2:
            //列表项
            El = (
                <__Imgs
                    className="mt-sm"
                    data={
                        files
                            ? files.map(item => ({
                                  src: item.filePath
                              }))
                            : []
                    }
                    onClick={() =>
                        (window.location = `https://www.nidosport.com/discovery/detail/${id}`)}
                    {...params.image}
                />
            );
            break;

        default:
            break;
    }

    return (
        <div className={classNames(prefixCls, className)}>
            {El}
            <Content
                className={classNames('text-md text-desc user-select', {
                    'mt-sm': !!El
                })}
                onClick={() =>
                    (window.location = `https://www.nidosport.com/discovery/detail/${id}`)}
                {...params.article}
            >
                {content}
            </Content>
        </div>
    );
};

export default _Media;
