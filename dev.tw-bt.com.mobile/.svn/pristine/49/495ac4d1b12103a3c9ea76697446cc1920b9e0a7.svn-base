/**
 * const prefixCls = 'styles-82288074';
 * const images = '/static/images/src/person/welfare/_';
 * @Author: Jack
 * @Date:   2018-01-06 09:57:14
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:44:10
 * @Path btWap \src\person\welfare\_\Top.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import Styles from 'styles';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-82288074';

const Top = props => {
    const { title, desc, content, className } = props;

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="main">
                <img src={`${images}/${title}.png`} />
                <p className="text-md text-main mt-sm">{title}</p>
                <p className="p-desc text-sm text-sub mt-xs">{desc}</p>
            </div>
            <div className="content">
                <p className="text-title text-bold">特权详情：</p>
                {content.map((item, index) => (
                    <p
                        key={index}
                        className={classNames('text-content text-sm', {
                            'mt-sm': index > 0,
                            'mt-md': index === 0
                        })}
                    >
                        {item}
                    </p>
                ))}
            </div>

            <style jsx>{`
                .styles-82288074 {
                }
                .main {
                    padding: 0.4rem;
                    text-align: center;
                    background: #fff;
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
                img {
                    width: 1.2rem;
                    height: 1.05rem;
                }
                .p-desc {
                    letter-spacing: 0.04rem;
                }
                .content {
                    ${Styles._padding};
                    padding-bottom: ${Styles.bottom};
                    background: #f9f9f9;
                }
                .text-content {
                    color: #666;
                }
            `}</style>
        </div>
    );
};

export default Top;
