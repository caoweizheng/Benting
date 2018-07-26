/**
 * const prefixCls = 'styles-37854783';
 * const images = '/static/images/src/person/grade/Index';
 * @Author: Jack
 * @Date:   2018-01-12 18:55:57
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:27:25
 * @Path btWap \src\person\grade\Index\_Upgrade.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Img } from 'components';
import Styles from 'styles';
import { gradeDS } from 'ds/grade';
import { images, upgradeDS, upgradeTopDS } from './ds';

const prefixCls = 'styles-37854783';

const _Upgrade = (props, { $ }) => {
    const { className } = props;
    const { faceImg, btexp = 0, btlevel = 0 } = $.getState('userInfo');

    const leftPoint = gradeDS[parseInt(btlevel) + 1].point - btexp;
    const percent = leftPoint / upgradeDS[btlevel];
    const marginLeft = parseInt(btlevel) * 11.11 + percent;
    const marginTop = upgradeTopDS[parseInt(btlevel)];

    return (
        <div className={classNames(prefixCls, className)}>
            <img className="img-default" src={`${images}/default.png`} />
            <div
                className="clip"
                style={{
                    right: `${96 - marginLeft.toFixed(2)}%`,
                    backgroundImage: `url(${images}/active.png)`
                }}
            />
            <Img
                className={`${prefixCls}__avatar`}
                src={faceImg}
                size="0.5rem"
                circle
                style={{
                    marginTop: `${marginTop.toFixed(2)}%`,
                    marginLeft: `${(marginLeft < 11.2
                        ? marginLeft
                        : marginLeft + 4
                    ).toFixed(2)}%`
                }}
            />

            <style jsx global>{`
                .styles-37854783 {
                }
                .${prefixCls}__avatar {
                    position: absolute;
                    z-index: 999;
                    top: 0;
                    left: 0;
                    margin-top: 40%;
                    border: 0.04rem solid ${Styles.color_primary};
                    overflow: visible;
                    transform: translateX(-25%);
                    transition: all 0.8s ease-in-out;
                }
                .${prefixCls}__avatar:before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    border-top: 0.16rem solid ${Styles.color_primary};
                    border-right: 0.16rem solid transparent;
                    border-left: 0.16rem solid transparent;
                    transform: translate(-50%, 90%);
                }
            `}</style>
            <style jsx>{`
                .styles-37854783 {
                    position: relative;
                    margin: 0 ${Styles.wind};
                }
                .img-default {
                    width: 100%;
                    vertical-align: top;
                }
                .clip {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-repeat: no-repeat;
                    background-position: top left;
                    background-size: auto 100%;
                    background-origin: content-box;
                    transition: all 0.8s ease-in-out;
                }
            `}</style>
        </div>
    );
};

_Upgrade.contextTypes = {
    $: PropTypes.object
};

export default observer(_Upgrade);
