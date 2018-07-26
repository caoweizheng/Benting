/**
 * const prefixCls = 'styles-38456296';
 * const images = '/static/images/src/person/message/Index';
 * @Author: qizc
 * @Date:   2018-01-23 11:34:58
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-06-04 09:41:11
 * @Path btWap \src\person\message\Index\_BbsItem.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List } from 'antd-mobile';
import { AuthorInfo } from 'src/_';
import { Content } from 'components';
import Styles from 'styles';
import Utils from 'utils';
import Const from 'const';

const prefixCls = 'styles-38456296';

const _BbsItem = (props, { $ }) => {
    const { userId, facePath, niname, createTime, con, relevId, className } = props;

    return (
        <List.Item className={className} wrap={true}>
            <Flex>
                <Flex.Item>
                    <AuthorInfo
                        userId={userId}
                        img={facePath}
                        name={niname}
                        date={createTime}
                    />
                    <Content
                        className="text-md mt-sm text-title"
                        onClick={() =>
                            Utils.router.push(
                                `/bbs/article?id=${relevId}`,
                                `/bbs/article/${relevId}`
                            )}
                    >
                        {con}
                    </Content>
                </Flex.Item>
                <Flex
                    className={`${prefixCls}_media ml-md`}
                    justify="center"
                    onClick={() =>
                        Utils.router.push(
                            `/bbs/article?id=${relevId}`,
                            `/bbs/article/${relevId}`
                        )}
                >
                    <span className="text-xs text-desc">[贴子]</span>
                </Flex>
            </Flex>
            <style jsx global>{`
                .${prefixCls}_media {
                    width: 1.6rem;
                    height: 1.5rem;
                    padding: ${Styles.xs} ${Styles._image};
                    background-color: ${Styles.color_bg};
                    overflow: hidden;
                }
            `}</style>
        </List.Item>
    );
};

_BbsItem.contextTypes = {
    $: PropTypes.object
};
export default observer(_BbsItem);
