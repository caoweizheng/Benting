/**
 * const prefixCls = 'styles-28202031';
 * const images = '/static/images/src/person/wallet/Index';
 * @Author: Jack
 * @Date:   2018-01-13 12:05:10
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:42:28
 * @Path btWap \src\person\wallet\Index\_List.js
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

const prefixCls = 'styles-17548351';

const _List = (props, { $ }) => {
    const { className } = props;
    const walletLogs = $.getState('walletLogs');

    if (!walletLogs._loaded) return null;

    return (
        <div className={classNames(prefixCls, className)}>
            <ListView
                data={walletLogs}
                section={$.section}
                renderSectionHeader={sectionData => <__SectionHeader sectionData={sectionData} />}
                renderRow={data => <__Row {...data} />}
                onEndReached={$.fetchWalletLogs}
            />
        </div>
    );
};

_List.contextTypes = {
    $: PropTypes.object
};

export default observer(_List);
