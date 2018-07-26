/**
 * const prefixCls = 'styles-86639974';
 * const images = '/static/images/src/index';
 * @Author: qizc
 * @Date:   2017-12-25 11:22:47
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:25:46
 * @Path btWap \src\index\__MenuItem.js
 */
'use strict';

import React from 'react';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Img } from 'components';
import Styles from 'styles';

const prefixCls = 'styles-86639974';

const __MenuItem = props => {
    const { img, text, active, className, ...other } = props;

    return (
        <div className={className}>
            <Flex className="flex" direction="column" {...other}>
                <Img size="0.8rem" src={img} style={{ backgroundColor: 'transparent' }} />
                <p className="text-xs text-desc mt-sm">{text}</p>
                {active && <span className="active text-xxs text-void">进行中</span>}
            </Flex>

            <style jsx>{`
                .styles-86639974 {
                }
                div {
                    display: inline-block;
                    width: 20%;
                }
                div :global(.flex) {
                    position: relative;
                }
                .num {
                    position: absolute;
                    top: 11%;
                    left: 50%;
                    margin-top: 0.3rem;
                    color: #fff;
                    transform: translate(-50%, -50%);
                }
                .active {
                    position: absolute;
                    top: 0.54rem;
                    right: 0.2rem;
                    display: inline-block;
                    padding: 0.04rem 0.08rem;
                    color: #fff;
                    font-size: ${Styles.font_xxs};
                    border-radius: 0.04rem;
                    background-image: linear-gradient(to right, #4d6eeb, #9855de);
                }
            `}</style>
        </div>
    );
};

export default observer(__MenuItem);
