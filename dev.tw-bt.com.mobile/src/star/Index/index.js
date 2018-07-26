/**
 * const prefixCls = 'styles-61567177';
 * const images = '/static/images/src/star/Index';
 * @Author: qizc
 * @Date:   2018-01-20 11:08:39
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 16:01:35
 * @Path btWap \src\star\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import Layout from 'src/_/Layout';
import _List from './_List';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-61567177';

@inject(store)
@observer
export default class Index extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        return (
            <Layout className={prefixCls} title="名人堂">
                <img className="top_img" src={`${images}/bg.jpg`} />
                <div className="text-center mt-md star">
                    <img src={`${images}/star.png`} />
                </div>
                <_List className="mt-md" />
                <style jsx>{`
                    .top_img {
                        height: 50vw;
                        width: 100%;
                    }
                    .star {
                        height: 0.5rem;
                    }
                `}</style>
                <style jsx global>{`
                    .styles-61567177 {
                        background: #fff;
                    }
                `}</style>
            </Layout>
        );
    }
}
