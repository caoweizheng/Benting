/**
 * const prefixCls = 'styles-19270227';
 * const images = '/static/images/src/video/Index';
 * @Author: qizc
 * @Date:   2017-12-28 09:43:12
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 16:03:20
 * @Path btWap \src\video\Index\__Select.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-19270227';
const lyList = [
    {
        name: '综合',
        value: 0
    },
    {
        name: '官方',
        value: 1
    },
    {
        name: '钓友',
        value: 2
    }
];

const __Select = (props, { $ }) => {
    const { className } = props;
    const tyleList = $.getState('tyleList');
    const { _from } = $.getState('state');

    return (
        <div className={classNames(prefixCls, className, 'p-w')}>
            {lyList.map(function(elem, index) {
                return (
                    <span
                        key={index}
                        className={classNames('type_item text-md', {
                            active: elem.value == _from
                        })}
                        onClick={() => {
                            $.onChangeFrom(elem.value);
                        }}
                    >
                        {elem.name}
                    </span>
                );
            })}
            <style jsx global>{`
                .styles-19270227 {
                    padding-top: ${Styles.sm} !important;
                    padding-bottom: ${Styles.xs} !important;
                    background: #fff;
                }
            `}</style>
            <style jsx>{`
                .styles-19270227 {
                }
                .type_item {
                    display: inline-block;
                    position: relative;
                    margin: 0 ${Styles.md} ${Styles.sm} 0;
                    padding: ${Styles.sm} 0;
                }
                .type_item.active {
                    color: ${Styles.color_primary};
                }
                .type_item.active:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 25%;
                    height: 0.04rem;
                    width: 50%;
                    background: ${Styles.color_primary};
                    border-radius: ${Styles.radius_xs};
                }
            `}</style>
        </div>
    );
};

__Select.contextTypes = {
    $: PropTypes.object
};

export default observer(__Select);
