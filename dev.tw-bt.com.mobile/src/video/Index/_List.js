/**
 * const prefixCls = 'styles-18938658';
 * const images = '/static/images/src/video/Index';
 * @Author: qizc
 * @Date:   2017-12-25 16:30:05
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 16:04:26
 * @Path btWap \src\video\Index\_List.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { ListView } from 'components';
import __Row from './__Row';
import __Select from './__Select';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-18938658';

const _List = (props, { $ }) => {
    const { className } = props;
    const videoList = $.getState('videoList');
    return (
        <div className={classNames(prefixCls, className)}>
            <__Select />
            <ListView
                data={videoList}
                renderRow={rowData => <__Row {...rowData} />}
                onEndReached={$.fetchVideoList}
            />
            <style jsx global>{`
                .${prefixCls} .am-list-body {
                    background-color: ${Styles.color_bg} !important;
                }
            `}</style>
            <style jsx>{`
                .t-img {
                    height: 0.26rem;
                }
            `}</style>
        </div>
    );
};

_List.contextTypes = {
    $: PropTypes.object
};

export default observer(_List);
