/**
 * const prefixCls = 'styles-14606691';
 * const images = '/static/images/src/person/welfare/_';
 * @Author: Jack
 * @Date:   2018-01-06 11:36:27
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:44:02
 * @Path btWap \src\person\welfare\_\ListWrap.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import Styles from 'styles';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-14606691';

const ListWrap = props => {
    const { title, className, children } = props;

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="title">
                <img className="img-line img-line-left" src={`${images}/line_left.png`} />
                <span className="text-title">{title}</span>
                <img className="img-line img-line-right" src={`${images}/line_right.png`} />
            </div>
            <div className="content">
                {children}
            </div>

            <style jsx>{`
                .styles-14606691 {
                    background: #fff;
                }
                .title {
                    position: relative;
                    padding: 0.4rem 0;
                    text-align: center;
                    overflow: hidden;
                }
                .text-title {
                    position: relative;
                }
                .text-title:after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 100%;
                    width: 64%;
                    height: 0.06rem;
                    margin-top: 0.04rem;
                    background: ${Styles.color_primary};
                    border-radius: 0.04rem;
                    transform: translateX(-50%);
                }
                .img-line {
                    position: absolute;
                    top: 50%;
                    height: 0.01rem;
                    transform: translate(-50%, -50%);
                }
                .img-line-left {
                    margin-left: -1.52rem;
                }
                .img-line-right {
                    margin-left: 1.52rem;
                }
                .content {
                    padding: ${Styles.sm} ${Styles.wind} ${Styles.bottom};
                }
            `}</style>
        </div>
    );
};

export default ListWrap;
