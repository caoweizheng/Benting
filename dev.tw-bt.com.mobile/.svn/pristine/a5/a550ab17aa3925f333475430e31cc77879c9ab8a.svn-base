/**
 * const prefixCls = 'styles-55979827';
 * const images = '/static/images/src/bbs/Block';
 * @Author: Jack
 * @Date:   2017-12-27 14:31:04
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 14:36:51
 * @Path btWap \src\bbs\Block\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { ListView } from 'components';
import { Flex, Button } from 'antd-mobile';
import { Layout } from 'src/_';
import List from '../Index/_List';
import _Info from './_Info';
import Utils from 'utils';
import UI from 'stores/ui';
import store from './store';

import { images } from './ds';

@inject(store)
@observer
export default class Block extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentDidMount() {
        const { $ } = this.context;
        const { id } = $.getParams().params;

        // 如果是首页跳过来的再请求一次
        if (Utils.getQuery('type') === 'new') {
            $.onTabClick(undefined, 1);
        }

        UI.header({
            ft: (
                <Flex>
                    <img
                        className="t-active t-img"
                        src={`${images}/btn_post.png`}
                        style={{
                            width: '1.2rem',
                            height: '0.42rem',
                            borderRadius: '0.04rem'
                        }}
                        onClick={() =>
                            Utils.checkLogin(() => {
                                Utils.router.push(
                                    `/bbs/post?id=${id}`,
                                    `/bbs/post/${id}`
                                );
                            })}
                    />
                </Flex>
            )
        });
    }

    componentWillUnmount() {
        UI.resetHeader();
    }

    render() {
        const { $ } = this.context;

        return (
            <Layout title="汀吧">
                <_Info />
                <List className="mt-d" />
            </Layout>
        );
    }
}
