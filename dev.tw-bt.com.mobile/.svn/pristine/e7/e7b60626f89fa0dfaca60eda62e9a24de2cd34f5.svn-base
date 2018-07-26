/**
 * const prefixCls = 'styles-56980339';
 * const images = '/static/images/src/index/RewardRank';
 * @Author: qizc
 * @Date:   2018-02-25 16:52:56
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-06-04 09:40:52
 * @Path btWap \src\index\RewardRank\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout } from 'src/_';
import { ListView, AffixTabs } from 'components';
import _Row from './_Row';
import store from './store';

const prefixCls = 'styles-56980339';

@inject(store)
@observer
export default class RewardRank extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const rewardRankList = $.getState('rewardRankList');
        const rewardList = $.getState('rewardList');

        return (
            <Layout className={prefixCls} title="打赏排行">
                <AffixTabs
                    tabs={[{ title: '全部打赏' }, { title: '打赏排行' }]}
                    animated
                    destroyInactiveTab={false}
                >
                    <ListView
                        data={rewardList}
                        renderRow={(rowData, rowID, sectionID) => (
                            <_Row
                                key={rowData.videoId}
                                {...rowData}
                                index={sectionID}
                                all
                            />
                        )}
                        onEndReached={$.fetchRewardList}
                    />
                    <ListView
                        data={rewardRankList}
                        renderRow={(rowData, rowID, sectionID) => (
                            <_Row
                                key={rowData.videoId}
                                {...rowData}
                                index={sectionID}
                            />
                        )}
                        onEndReached={$.fetchRewardRankList}
                    />
                </AffixTabs>
            </Layout>
        );
    }
}
