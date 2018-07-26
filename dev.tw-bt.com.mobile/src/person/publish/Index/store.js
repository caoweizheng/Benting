/**
 * const prefixCls = 'styles-16180408';
 * const images = '/static/images/src/person/publist/Index';
 * @Author: qizc
 * @Date:   2018-01-22 14:17:21
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-03-03 17:10:50
 * @Path btWap \src\person\publist\Index\store.js
 */
'use strict';

import { observable, computed } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';

export default class Store extends common {
    @observable
    state = this.initState({
        _tab: {
            initialPage: 0,
            _filter: true
        },

        //我的贴子
        postList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchPostList']
    };

    @computed
    get section() {
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

    /*==================== DS ====================*/
    //我的贴子
    fetchPostList = refresh => {
        return this.fetchListThenSetState(
            'get_bbs_my-post-list',
            'postList',
            {},
            refresh
        );
    };

    /*==================== Action ====================*/
    //删除贴子
    doDeletePost = async postId => {
        await Api.P('do_bbs_delete-post', { postId });

        Utils.light('删除成功');
        this.fetchPostList(true);
    };

    /*==================== Page ====================*/
    //Tabs切换
    onTabClick = (tab, index) => {

        switch (parseInt(index)) {
            case 0:
                this.setState(
                    {
                        initialPage: '0'
                    },
                    '_tab'
                );
                break;

            case 1:
                this.setState(
                    {
                        initialPage: '1'
                    },
                    '_tab'
                );
                break;

            default:
                break;
        }
       
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    };
}
