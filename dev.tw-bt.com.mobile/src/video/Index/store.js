/**
 * const prefixCls = 'styles-16024453';
 * const images = '/static/images/src/video/Index';
 * @Author: qizc
 * @Date:   2017-12-25 16:30:05
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-21 15:06:07
 * @Path btWap \src\video\Index\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Const from 'const';

export default class Store extends common {
    @observable
    state = this.initState({
        state: {
            type: 0,
            _from: 0,
            loading: false,
            _filter: true
        },
        videoList: Const.__EMPTY__,
        topTyleList: Const.__EMPTY__
    });

    initFetch = {
        one: ['fetchTopTyleList'],
        update: ['fetchVideoList']
    };

    /*==================== DS ====================*/
    //置顶分类列表
    fetchTopTyleList = () => {
        return this.fetchThenSetState(
            'get_video-v2_type_id-list',
            'topTyleList',
            {
                class: 2,
                parId: 25
            }
        );
    };

    //视频列表
    fetchVideoList = async refresh => {
        const { type, _from } = this.getState('state');
        let search = {};

        switch (parseInt(_from)) {
            case 1:
                search = {
                    from: 0
                };
                break;

            case 2:
                search = {
                    'from[!]': 0
                };
                break;

            default:
                break;
        }

        if (type > 0) {
            search = {
                ...search,
                typeId: type
            };
        }

        return this.fetchListThenSetState(
            'get_video_list-list',
            'videoList',
            {
                _: {
                    limit: Const.__LIMIT__,
                    search
                }
            },
            refresh
        );
    };

    /*==================== Page ====================*/
    //切换来源
    onChangeFrom = _from => {
        this.setState({
            _from
        });
        this.fetchVideoList(true);
    };
}
