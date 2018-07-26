/**
 * const prefixCls = 'styles-32829561';
 * const images = '/static/images/src/person/publist/Index';
 * @Author: qizc
 * @Date:   2018-01-22 14:17:21
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\publist\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import { AffixTabs, ListView } from 'components';
import { SectionHeader } from 'src/_';
import _Row from './_Row';
import Styles from 'styles';
import store from './store';

@inject(store)
@observer
export default class Goods extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { initialPage = 0 } = $.getState('_tab');
        const postList = $.getState('postList');

        return (
            <Layout title="我的发布">
                <AffixTabs
                    tabs={[{ title: '我的贴子' }, { title: '我的视频' }]}
                    initialPage={initialPage}
                    page={0}
                    onTabClick={(tab, index) => {
                        if (index == 1) {
                            Utils.light('即将开放');
                        }
                    }}
                >
                    {postList._loaded && (
                        <ListView
                            className="mt-d"
                            data={postList}
                            section={$.section}
                            renderSectionHeader={sectionData => (
                                <SectionHeader sectionData={sectionData} />
                            )}
                            renderRow={data => <_Row hideAvatar {...data} />}
                            onEndReached={$.fetchPostList}
                        />
                    )}
                </AffixTabs>
            </Layout>
        );
    }
}
