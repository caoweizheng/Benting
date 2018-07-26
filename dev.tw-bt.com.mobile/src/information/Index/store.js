/**
 * const prefixCls = 'styles-50376246';
 * const images = '/static/images/src/information';
 * @Author: qizc
 * @Date:   2017-12-25 14:41:52
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-16 11:19:39
 * @Path btWap \src\information\store.js
 */
'use strict';

import { useStrict, observable } from 'mobx';
import Const from 'const';
import common from 'stores/common';
import Utils from 'utils';

useStrict(true);

export default class Store extends common {
    @observable
    state = this.initState({
        //资讯列表
        articleList: Const.__EMPTY__,

        //资讯置顶列表
        articleTopList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchArticleList', 'fetchArticleTopList']
    };

    //资讯列表
    fetchArticleList = (refresh) => {
        return this.fetchListThenSetState('get_article_list', 'articleList', {
            _: {
                limit: 8,
            }
        },refresh);
    };

    //资讯置顶列表
    fetchArticleTopList = () => {
        return this.fetchThenSetState('get_article_list', 'articleTopList', {
            _: {
                limit: 4,
                search: {
                    top: 1,
                    'imgId[>]': '0'
                }
            }
        });
    };
}
