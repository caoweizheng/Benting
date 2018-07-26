/**
 * const prefixCls = 'styles-20933512';
 * const images = '/static/images/src/index/Home';
 * @Author: Jack
 * @Date:   2018-04-20 16:57:56
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:31:45
 * @Path btWap \src\index\Home\_Fish_v2.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import { goodsDS } from './ds';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-01187993';
import { images } from './ds';

@observer
export default class _Header extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { className } = this.props;
        const dev = Const.__API__ === 'https://dev.nidosport.com';
        const url = dev ? 'https://wap.nidosport.com' : 'https://www.nidosport.com';

        return (
            <div className={classNames(prefixCls, className)}>
                <img
                    className="img-thumb"
                    src={`${images}/thumb.png`}
                    onClick={() => (window.location = `${url}/discovery/fish`)}
                />
                <div id={`${prefixCls}__wrap-goods`} className="wrap-goods">
                    {goodsDS.map((item, index) => (
                        <div
                            key={index}
                            className="item-goods"
                            onClick={() =>
                                (window.location = `${url}/discovery/fish_category/${item.value}`)}
                        >
                            <Img
                                src={`${images}/${item.label}.jpg`}
                                size="2rem"
                                style={{
                                    border: `0.01rem solid ${Styles.color_border}`
                                }}
                            />
                            <p className="p-title text-xs text-center text-clamp-1 mt-sm">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                <style jsx>{`
                    .styles-01187993 {
                        position: relative;
                        background: #fff;
                    }
                    .img-thumb {
                        position: inline-block;
                        vertical-align: top;
                        height: 0.54rem;
                    }
                    .wrap-category {
                        padding-left: 1.62rem;
                        overflow-x: scroll;
                        overflow-y: hidden;
                        white-space: nowrap;
                    }
                    .img-category {
                        display: inline-block;
                        vertical-align: top;
                        height: 0.54rem;
                    }
                    .wrap-goods {
                        min-height: 3.14rem;
                        padding: ${Styles.space} ${Styles.wind} ${Styles.wind};
                        background: #fff;
                        border-top: 0.01rem solid ${Styles.color_border};
                        overflow-x: scroll;
                        overflow-y: hidden;
                        white-space: nowrap;
                    }
                    .item-goods {
                        display: inline-block;
                        width: 2rem;
                        margin-right: ${Styles.sm};
                    }
                    .item-goods:last-child {
                        margin-right: 0;
                    }
                    .p-title {
                        padding: 0 ${Styles.xs};
                    }
                `}</style>
            </div>
        );
    }
}
