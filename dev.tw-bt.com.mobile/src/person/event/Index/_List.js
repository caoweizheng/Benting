/**
 * const prefixCls = 'styles-13586309';
 * const images = '/static/images/src/person/event/Index';
 * @Author: qizc
 * @Date:   2018-01-24 14:52:27
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-27 12:13:01
 * @Path btWap \src\person\event\Index\_List.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { observer } from '@';
import { Img } from 'components';
import { Header } from 'src/_';
import Styles from 'styles';
import Utils from 'utils';
import { images, listData, listData2, listData3 } from './ds';

const prefixCls = 'styles-13586309';

const _Item = props => {
    const { img, title, href } = props;

    return (
        <div
            className="text-center item"
            style={!href ? { opacity: 0.32 } : {}}
            onClick={() => {
                if (href) {
                    Utils.router.push(href);
                } else {
                    Utils.light('即将开放');
                }
            }}
        >
            <Img
                src={`${images}/${img}.png`}
                size=".64rem"
                style={{ backgroundColor: 'transparent' }}
            />
            <p className="mt-sm text-sm">{title}</p>
            <style jsx>{`
                .item {
                    display: inline-block;
                    width: 25%;
                    padding: ${Styles.sm};
                }
            `}</style>
        </div>
    );
};

const _List = props => {
    const { className } = props;

    return (
        <div className={classNames(prefixCls, className)}>
            <Header>汀吧专区</Header>
            <div className="box">
                {listData3.map((item, index) => (
                    <_Item key={index} {...item} />
                ))}
            </div>
            <Header className="mt-md">金币专区</Header>
            <div className="box">
                {listData.map((item, index) => <_Item key={index} {...item} />)}
            </div>
            <Header className="mt-md">积分专区</Header>
            <div className="box">
                {listData2.map((item, index) => (
                    <_Item key={index} {...item} />
                ))}
            </div>

            <style jsx global>{`
                .styles-13586309 {
                }
                .box {
                    padding: ${Styles.sm} 0;
                    background: #fff;
                    border-top: 0.01rem solid ${Styles.color_border};
                }
            `}</style>
        </div>
    );
};

export default observer(_List);
