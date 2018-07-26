/**
 * const prefixCls = 'styles-35310529';
 * const images = '/static/images/src/star/Index';
 * @Author: qizc
 * @Date:   2018-01-20 11:08:39
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-24 10:38:52
 * @Path btWap \src\star\Index\_List.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import classNames from 'classnames';
import Utils from 'utils';
import Styles from 'styles';
import { Data } from '../_/ds';

const prefixCls = 'styles-35310529';

const _Item = props => {
    const { id, img, title } = props;
    return (
        <div
            className="item"
            onClick={() =>
                Utils.router.push(
                    `/star/detail?id=${id}`,
                    `/star/detail/${id}`
                )}
        >
            <div
                className="thumb"
                style={{
                    backgroundImage: `url(${img})`
                }}
            />
            <p className="mt-xs text-sm text-center">{title}</p>
            <style jsx>{`
                .item {
                    display: inline-block;
                    vertical-align: top;
                    width: 45.5%;
                    margin-bottom: 5%;
                    margin-left: 3%;
                }
                .thumb {
                    width: 100%;
                    padding-bottom: 100%;
                    ${Styles._bg};
                    background-color: ${Styles.color_bg};
                    overflow: hidden;
                }
                .item:first-child {
                    width: 100%;
                    margin-left: 0;
                    padding: 0 3%;
                }
                .item:first-child .thumb {
                    padding-bottom: 50%;
                }
            `}</style>
        </div>
    );
};
const _List = (props, { $ }) => {
    const { className } = props;
    return (
        <div className={classNames(prefixCls, className)}>
            {Data.map((elem, index) => {
                return <_Item key={index} {...elem} />;
            })}
        </div>
    );
};

_List.contextTypes = {
    $: PropTypes.object
};

export default observer(_List);
