/**
 * 
 * @Author: Jack
 * @Date:   2017-10-12 17:58:09
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-08 15:19:08
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import Const from 'const';

const prefixCls = 'c-empty';

const Empty = props => {
    const { className, children = '暂无数据' } = props;

    return (
        <Flex className={classNames(prefixCls, className)} direction="column">
            <img src={`${Const.__IMAGES__}/logo_line.png`} />
            <p className="text-sm text-sub mt-sm">{children}</p>

            <style jsx global>{`
                .c-empty {
                    padding-top: 0.76rem;
                    min-height: 50vw;
                }
                .${prefixCls} img {
                    height: 1.99rem;
                }
            `}</style>
        </Flex>
    );
};

export default Empty;
