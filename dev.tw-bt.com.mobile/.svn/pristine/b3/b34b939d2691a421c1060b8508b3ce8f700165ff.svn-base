/**
 * const prefixCls = 'styles-21046899';
 * const images = '/static/images/pages';
 * @Author: Jack
 * @Date:   2018-05-07 10:56:15
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 16:14:34
 * @Path btWap \pages\_error.js
 */
'use strict';

import React from 'react';
import { Layout } from 'src/_';
import Utils from 'utils';

const prefixCls = 'styles-21046899';
const images = Utils.cdn('/static/images/src/_error');

export default class Error extends React.Component {
    render() {
        return (
            <Layout title="发生错误" hide>
                <div className="text-center">
                    <img
                        src={`${images}/404.png`}
                        onClick={() =>
                            (window.location = 'https://www.tw-bt.com')}
                    />
                </div>

                <style jsx>{`
                    .styles-21046899 {
                    }
                    img {
                        width: 5.19rem;
                        height: 4.33rem;
                        margin-top: 32%;
                    }
                `}</style>
            </Layout>
        );
    }
}
