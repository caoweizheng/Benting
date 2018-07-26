/**
 * const prefixCls = 'styles-19943158';
 * const images = '/static/images/src/shop/Index';
 * @Author: Jack
 * @Date:   2017-12-28 16:17:55
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-29 09:53:07
 * @Path btWap \src\shop\Index\__MaskMenu.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { observer } from '@';
import { Icon, Flex } from 'antd-mobile';
import { Img } from 'components';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import UI from 'stores/ui';

const prefixCls = 'styles-19943158';

@observer
export default class __MaskMenu extends React.Component {
    componentWillUnmount() {
        UI.hideMask();
    }

    render() {
        const { data, className } = this.props;

        return (
            <div className={classNames(prefixCls, className)}>
                <div className="scroll">
                    {data.map(item => (
                        <div
                            key={item.typeId}
                            className="text-sm item"
                            onClick={() => {
                                Utils.router.push(
                                    `/shop?id=${item.typeId}`,
                                    `/shop/${item.typeId}`
                                );
                                UI.hideMask();
                            }}
                        >
                            {item.typeName}
                        </div>
                    ))}
                </div>
                <Flex
                    className={`${prefixCls}__logo`}
                    direction="column"
                    onClick={UI.hideMask}
                >
                    <Icon type="cross" size="lg" />
                    <img
                        className="t-img img-logo mt-sm"
                        src={`${Const.__IMAGES__}/logo_bottom.png`}
                    />
                </Flex>

                <style jsx global>{`
                    .styles-19943158 {
                        position: relative;
                        height: 100%;
                        padding-left: ${Styles.md};
                        color: #fff;
                        background: rgba(37, 39, 44, 0.98);
                    }
                    .${prefixCls}__logo {
                        position: absolute;
                        bottom: ${Styles.md};
                        left: 50%;
                        transform: translate3d(-50%, 0, 0);
                    }
                `}</style>
                <style jsx>{`
                    .styles-19943158 {
                    }
                    .item {
                        padding: ${Styles.md} 0;
                    }
                    .item + .item {
                        border-top: 0.01rem solid ${Styles.color_border};
                    }
                    .img-logo {
                        height: 1.6rem;
                    }
                    .scroll {
                        overflow-x: hidden;
                        overflow-y: scroll;
                        max-height: 70vh;
                    }
                `}</style>
            </div>
        );
    }
}
