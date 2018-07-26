/**
 * const prefixCls = 'styles-63360513';
 * const images = '/static/images/src/index';
 * @Author: qizc
 * @Date:   2017-12-25 11:30:22
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:32:10
 * @Path btWap \src\index\_Information.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon, Flex } from 'antd-mobile';
import { observer } from '@';
import { ListView } from 'components';
import __Row from 'src/information/Index/__Row';
import Utils from 'utils';

const prefixCls = 'styles-63360513';
import { images } from './ds';

const _Information = (props, { $ }) => {
    const { className } = props;
    const articleTopList = $.getState('articleTopList');

    return (
        <div className={classNames(prefixCls, className)}>
            <Flex className="p-sw text-sm" justify="between" align="center">
                <img className="t-img" src={`${images}/information.png`} />
                <Flex onClick={() => Utils.router.push('/information')}>
                    更多<Icon type="right" />
                </Flex>
            </Flex>
            <ListView
                data={articleTopList}
                renderRow={rowData => <__Row {...rowData} />}
                onEndReached={$.fetchArticleTopList}
            />

            <style jsx>{`
                .styles-63360513 {
                    background-color: #fff;
                }
                .t-img {
                    height: 0.26rem;
                }
            `}</style>
        </div>
    );
};

_Information.contextTypes = {
    $: PropTypes.object
};

export default observer(_Information);
