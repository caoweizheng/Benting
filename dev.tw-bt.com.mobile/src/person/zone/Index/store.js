/**
 * const prefixCls = 'styles-98727683';
 * const images = '/static/images/src/person/zone/Index';
 * @Author: Jack
 * @Date:   2018-03-02 17:30:11
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-03 11:57:32
 * @Path btWap \src\person\zone\Index\store.js
 */
'use strict';

import { observable, computed } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';

export default class Store extends common {
    @observable
    state = this.initState({
        //用户信息
        personInfo: {},

        //用户发布列表
        publishList: Const.__EMPTY__,

        //贴子列表
        postList: Const.__EMPTY__
    });

    initFetch = {
        one: ['fetchPersonInfo', 'fetchPublishList', 'fetchPostList']
    };

    @computed
    get sectionPostList() {
        const { id } = this.getParams().params;
        const postList = this.getState('postList');

        //根据发布时间构造section
        const dateMap = {};
        postList.list.forEach(
            item => (dateMap[Utils.date('y,m,d', item.createTime)] = true)
        );

        return Object.keys(dateMap).map(item => ({
            title: item,
            filter: i => Utils.date('y,m,d', i.createTime) === item
        }));
    }

    @computed
    get sectionPublishList() {
        const { id } = this.getParams().params;
        const publishList = this.getState('publishList');

        //根据发布时间构造section
        const dateMap = {};
        publishList.list.forEach(
            item => (dateMap[Utils.date('y,m,d', item.publishTime)] = true)
        );

        return Object.keys(dateMap).map(item => ({
            title: item,
            filter: i => Utils.date('y,m,d', i.publishTime) === item
        }));
    }

    /*==================== DS ====================*/
    //用户信息
    fetchPersonInfo = () => {
        const { id } = this.getParams().params;

        return this.fetchThenSetState('get_person_info-more', 'personInfo', {
            userId: id
        });
    };

    //用户发布列表
    fetchPublishList = refresh => {
        const { id } = this.getParams().params;

        return this.fetchListThenSetState(
            'get_person_discovery_list',
            'publishList',
            {
                _: {
                    limit: Const.__LIMIT__,
                    search: {
                        userId: id
                    }
                }
            },
            refresh
        );
    };

    //贴子列表
    fetchPostList = refresh => {
        const { id } = this.getParams().params;

        return this.fetchListThenSetState(
            'get_bbs_list',
            'postList',
            {
                _: {
                    limit: Const.__LIMIT__,
                    search: {
                        userId: id
                    }
                }
            },
            refresh
        );
    };

    /*==================== Action ====================*/
    //关注
    toggleFollow = async () => {
        const { userId } = this.getState('personInfo');

        await Api.P('do_add_follow', {
            concernId: userId
        });

        this.fetchPersonInfo();
    };

    /*==================== Page ====================*/
    //Tabs切换
    onTabsChange = key => {
        switch (parseInt(key)) {
            case 0:
                this.setState({
                    tabsId: '0'
                });
                break;

            case 1:
                this.setState({
                    tabsId: '1'
                });
                break;

            default:
                break;
        }

        document.documentElement.scrollTop = document.body.scrollTop = 0;
    };
}
