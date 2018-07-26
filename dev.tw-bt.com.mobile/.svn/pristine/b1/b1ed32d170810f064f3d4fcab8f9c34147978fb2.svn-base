/**
 * const prefixCls = 'styles-85221191';
 * const images = '/static/images/src/star/Detail';
 * @Author: qizc
 * @Date:   2018-01-20 11:56:39
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 16:01:03
 * @Path btWap \src\star\Detail\_Info.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Flex, Button } from 'antd-mobile';
import { Img } from 'components';
import classNames from 'classnames';
import Utils from 'utils';
import Styles from 'styles';
import { Data } from '../_/ds';

const prefixCls = 'styles-85221191';

const _Info = (props, { $ }) => {
    const { className } = props;
    const { id } = $.getParams().params;
    const info =
        Data.filter(elem => {
            return elem.id == id;
        })[0] || {};

    if (!info.id) return null;

    const { img, bg = '1', title, content } = info;
    return (
        <div className={classNames(prefixCls, className)}>
            {bg && <img className="top" src={bg} />}
            <div className="con text-md">
                <p className="text-title">{title}个人简介</p>
                {content.map((elem, index) => {
                    if (typeof elem === 'object') {
                        return (
                            <img
                                key={index}
                                className="_img mt-md"
                                src={elem.img}
                            />
                        );
                    }
                    return (
                        <p className="mt-md p" key={index}>
                            {elem}
                        </p>
                    );
                })}
            </div>
            <style jsx global>{`
                .styles-85221191 {
                    line-height: 1.4;
                }
            `}</style>
            <style jsx>{`
                .top {
                    width: 100%;
                    height: auto;
                    overflow: hidden;
                    vertical-align: top;
                }
                .con {
                    padding: ${Styles.md};
                }
                .con .p {
                    text-indent: 2em;
                }
                ._img {
                    width: 100%;
                    vertical-align: top;
                }
            `}</style>
        </div>
    );
};

_Info.contextTypes = {
    $: PropTypes.object
};

export default observer(_Info);
