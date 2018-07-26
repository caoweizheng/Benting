/**
 * const prefixCls = 'styles-21885292';
 * const images = '/static/images/src/_/AuthorInfo';
 * @Author: Jack
 * @Date:   2017-12-22 09:34:13
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-29 12:01:19
 * @Path btWap \src\_\AuthorInfo\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import Utils from 'utils';

const prefixCls = 'styles-21885292';

const AuthorInfo = props => {
    const {
        userId,
        img,
        name = '-',
        date,
        dateExtra,
        className,
        ...other
    } = props;

    return (
        <Flex className={classNames(prefixCls, className)} {...other}>
            <Img
                src={img}
                size="0.8rem"
                circle
                onClick={e => {
                    if (userId) {
                        e.stopPropagation();
                        Utils.router.push(
                            `/person/zone?id=${userId}`,
                            `/person/zone/${userId}`
                        );
                    }
                }}
            />
            <Flex className="ml-sm" direction="column" align="start">
                <Flex className={`${prefixCls}__name text-main text-sm`}>
                    <span>{name}</span>
                </Flex>
                <p className="text-xxs text-sub">
                    <span>{Utils.lastDate(date)}</span>
                    {dateExtra && <span>{dateExtra}</span>}
                </p>
            </Flex>

            <style jsx global>{`
                .styles-21885292 {
                }
                .${prefixCls}__name {
                    height: 0.48rem;
                }
            `}</style>
        </Flex>
    );
};

export default AuthorInfo;
