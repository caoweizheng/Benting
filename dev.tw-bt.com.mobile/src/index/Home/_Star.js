/**
 * const prefixCls = 'styles-00819863';
 * const images = '/static/images/src/index';
 * @Author: qizc
 * @Date:   2017-12-25 11:30:06
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:33:38
 * @Path btWap \src\index\_Star.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import __StarItem from './__StarItem';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-00819863';
import { images, starList } from './ds';

const _Star = (props, { $ }) => {
    const { className } = props;

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="p-sw">
                <img className="t-img" src={`${images}/star.png`} />
            </div>
            <Flex className={`${prefixCls}__list`} wrap="wrap">
                {starList.map((item, index) => <__StarItem key={index} {...item} />)}
            </Flex>

            <style jsx global>{`
                .styles-00819863 {
                }
                .${prefixCls}__list {
                    padding: 0 ${Styles.wind} ${Styles.space};
                }
            `}</style>
            <style jsx>{`
                .styles-00819863 {
                    background-color: #fff;
                }
                .t-img {
                    height: 0.26rem;
                }
            `}</style>
        </div>
    );
};

_Star.contextTypes = {
    $: PropTypes.object
};

export default observer(_Star);
