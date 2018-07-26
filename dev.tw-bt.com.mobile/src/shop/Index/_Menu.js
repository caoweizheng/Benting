/**
 * const prefixCls = 'styles-92442838';
 * const images = '/static/images/src/shop/Index';
 * @Author: Jack
 * @Date:   2017-12-28 11:25:52
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:56:20
 * @Path btWap \src\shop\Index\_Menu.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import __MaskMenu from './__MaskMenu';
import Styles from 'styles';
import Utils from 'utils';
import UI from 'stores/ui';
import { images } from './ds';

const prefixCls = 'styles-92442838';
const tree = (ds, parId = 1) => {
    var data = [...ds],
        result = [],
        temp;

    for (var i = 0; i < data.length; i++) {
        if (data[i].parId == parId) {
            var obj = {
                ...data[i]
            };

            temp = tree(data, data[i].typeId);
            if (temp.length > 0) {
                obj.children = temp;
            }
            result.push(obj);
        }
    }
    return result;
};

const _Menu = (props, { $ }) => {
    const { className } = props;
    const id = $.getParams().params.id || $.getParams().initId;
    const typeList = $.getState('typeList');
    const treeList = tree(typeList.list);

    let parId;
    treeList.forEach(item => {
        const subIds = item.childIds.split(',');
        subIds.push(item.typeId);

        if (subIds.includes(id)) {
            parId = item.typeId;
        }
    });

    return (
        <div className={prefixCls}>
            <div
                className="top t-bg"
                style={{ backgroundImage: `url(${images}/top.jpg)` }}
            />
            <div className="menu">
                {treeList.map(item => (
                    <div
                        key={item.typeId}
                        className={classNames('menu-item', {
                            'menu-item-active': item.typeId === parId
                        })}
                        onClick={() => {
                            if (item.children) {
                                UI.showMask({
                                    children: (
                                        <__MaskMenu data={item.children} />
                                    )
                                });
                            } else {
                                Utils.router.push(
                                    `/shop?id=${item.typeId}`,
                                    `/shop/${item.typeId}`
                                );
                            }
                        }}
                    >
                        <img
                            className="t-img img-type"
                            src={`${images}/${item.typeName}.png`}
                        />
                        {item.children ? (
                            <img
                                className="img-extra"
                                src={`${images}/down.png`}
                            />
                        ) : (
                            <img
                                className="img-extra"
                                src={`${images}/line.png`}
                            />
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
                .styles-92442838 {
                }
                .top {
                    padding-bottom: 60%;
                    background-color: #fff;
                }
                .menu {
                    min-height: 2.38rem;
                    padding: 0 ${Styles.wind};
                    margin-top: -6%;
                }
                .menu-item {
                    display: inline-block;
                    position: relative;
                    width: 24%;
                    padding: 0.24rem 0 0.36rem;
                    margin-top: 1.33333%;
                    margin-right: 1.33333%;
                    font-size: 0.24rem;
                    color: ${Styles.color_main};
                    text-align: center;
                    background: #fff;
                    border-radius: 0.04rem;
                    box-shadow: -0.04rem 0.01rem 0.12rem 0.02rem rgba(51, 51, 51, 0.2);
                }
                .menu-item:nth-of-type(4n) {
                    margin-right: 0;
                }
                .menu-item-active {
                    background: #eee;
                }
                .img-type {
                    height: 0.5rem;
                }
                .img-extra {
                    position: absolute;
                    left: 50%;
                    bottom: 0.16rem;
                    transform: translateX(-50%);
                }
            `}</style>
        </div>
    );
};

_Menu.contextTypes = {
    $: PropTypes.object
};

export default observer(_Menu);
