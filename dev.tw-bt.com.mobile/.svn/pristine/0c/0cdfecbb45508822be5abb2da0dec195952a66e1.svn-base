/**
 * const prefixCls = 'styles-76715636';
 * const images = '/static/images/src/information/Index';
 * @Author: qizc
 * @Date:   2017-12-25 14:45:40
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:09:42
 * @Path btWap \src\information\Index\_List.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { ListView } from 'components';
import __Row from './__Row';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-76715636';

const _List = (props, { $ }) => {
    const { className } = props;
    const articleList = $.getState('articleList');
    return (
        <div className={className}>
            <div className="p-sw">
                <img className="t-img" src={`${images}/information.png`} />
            </div>
            <ListView
                data={articleList}
                renderRow={rowData => <__Row {...rowData} />}
                onEndReached={$.fetchArticleList}
            />
            <style jsx>{`
                div {
                    background-color: #fff;
                }
                .t-img{
                    height: .26rem;
                }
            `}</style>
        </div>
    );
};

_List.contextTypes = {
    $: PropTypes.object
};

export default observer(_List);
