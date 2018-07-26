/**
 * const prefixCls = 'styles-37187827';
 * const images = '/static/images/src/person/score/Index';
 * @Author: qizc
 * @Date:   2018-01-31 10:18:56
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\score\Index\_List.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { ListView } from 'components';
import __SectionHeader from './__SectionHeader';
import __Row from './__Row';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-37187827';

const _List = (props, { $ }) => {
    const { className } = props;
    const scoreLogs = $.getState('scoreLogs');

    if (!scoreLogs._loaded) return null;

    return (
        <div className={classNames(prefixCls, className)}>
            <ListView
                data={scoreLogs}
                section={$.section}
                renderSectionHeader={sectionData => (
                    <__SectionHeader sectionData={sectionData} />
                )}
                renderRow={data => <__Row {...data} />}
                onEndReached={$.fetchScoreLogs}
            />
        </div>
    );
};

_List.contextTypes = {
    $: PropTypes.object
};

export default observer(_List);
