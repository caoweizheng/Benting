/**
 * const prefixCls = 'styles-12818905';
 * const images = '/static/images/src/video/Detail';
 * @Author: qizc
 * @Date:   2017-12-25 18:27:49
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-29 12:16:44
 * @Path btWap \src\video\Detail\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout, RewardList } from 'src/_';
import { Reward } from 'components';
import Const from 'const';
import Utils from 'utils';
import _Video from './_Video';
import _Info from './_Info';
import _List from './_List';
import _HotList from './_HotList';
import _Comment from './_Comment';
import _FixedTextarea from './_FixedTextarea';
import Styles from 'styles';
import store from './store';

@inject(store)
@observer
export default class Index extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { showReward } = $.getState('state');
        const rewardList = $.getState('rewardList');
        const { list = [] } = $.getState('rewardGoodsList');
        const { id } = $.getParams().params;

        return (
            <Layout title="视讯详情">
                <_Video />
                <_Info />
                {rewardList.list[0] && (
                    <RewardList
                        className="mt-d"
                        rewardList={rewardList}
                        id={id}
                        type={1}
                    />
                )}
                <_List className="mt-d"/>
                <_HotList className="mt-d" />
                <_Comment className="mt-d" />
                <_FixedTextarea />
                <Reward
                    show={showReward}
                    list={list}
                    onCancel={() => {
                        $.setState({
                            showReward: false
                        });
                    }}
                    onSuccess={value => {
                        $.doReward(value);
                    }}
                />
            </Layout>
        );
    }
}
