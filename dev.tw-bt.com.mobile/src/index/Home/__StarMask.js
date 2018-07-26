/**
 * const prefixCls = 'styles-02525476';
 * const images = '/static/images/src/index/Home';
 * @Author: qizc
 * @Date:   2017-12-27 15:49:16
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\index\Home\__StarMask.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { observer } from '@';
import { Icon, Flex } from 'antd-mobile';
import { Img } from 'components';
import Utils from 'utils';
import Styles from 'styles';
import UI from 'stores/ui';

const prefixCls = 'styles-02525476';

const __StarMask = props => {
    const { className, data } = props;

    return (
        <div className={classNames(prefixCls, className)}>
            <div className="scroll">
                {data.map((item, index) => (
                    <div
                        key={item.gid}
                        className="text-sm item"
                        onClick={() => {
                            item.gid
                                ? Utils.router.push(
                                      `/shop/goods?id=${item.gid}`,
                                      `/shop/goods/${item.gid}`
                                  )
                                : Utils.router.push('/shop');
                            UI.hideMask();
                        }}
                    >
                        {item.tit}
                    </div>
                ))}
            </div>
            <Flex className={`${prefixCls}__logo`} direction="column" onClick={() => UI.hideMask()}>
                <Icon type="cross" size="lg" />
                <img className="t-img img-logo mt-sm" src={`${Const.__IMAGES__}/logo_bottom.png`} />
            </Flex>

            <style jsx global>{`
                .styles-02525476 {
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
                .styles-02525476 {
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
};

export default observer(__StarMask);
