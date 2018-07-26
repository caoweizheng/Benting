/**
 * const prefixCls = 'styles-75393347';
 * const images = '/static/images/src/_/DiscoveryRow';
 * @Author: Jack
 * @Date:   2018-03-03 11:09:22
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-04 09:40:22
 * @Path btWap \src\_\DiscoveryRow\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { List, Flex } from 'antd-mobile';
import _Media from './_Media';

const prefixCls = 'styles-75393347';

const DiscoveryRow = props => {
    const {
        className,
        infoId,
        infoType,
        con,
        fileList,
        commentCount,
        likeCount
    } = props;

    return (
        <List.Item
            className={classNames(prefixCls, className)}
            wrap={true}
            onClick={() =>
                (window.location = `https://www.nidosport.com/discovery/detail/${infoId}`)}
        >
            <_Media
                id={infoId}
                type={infoType}
                content={con}
                files={fileList}
                params={{
                    article: {
                        style: {
                            minHeight: '.6rem',
                            marginRight: '.64rem'
                        }
                    }
                }}
            />
            <Flex className="text-sm mt-sm">
                <Flex.Item />
                <img
                    className="img-praise t-img"
                    src={`${Const.__IMAGES__}/praise.png`}
                />
                <span className="text-sub ml-sm">{props.likeCount}</span>
                <img
                    className="img-interactive t-img"
                    src={`${Const.__IMAGES__}/interactive.png`}
                />
                <span className="text-sub ml-sm">{props.commentCount}</span>
            </Flex>

            <style jsx>{`
                .styles-75393347 {
                }
                .img-praise {
                    width: 0.4rem;
                    height: 0.4rem;
                }
                .img-interactive {
                    width: 0.4rem;
                    height: 0.4rem;
                    margin-left: 0.44rem;
                }
            `}</style>
        </List.Item>
    );
};

DiscoveryRow.contextTypes = {
    $: PropTypes.object
};

export default observer(DiscoveryRow);
