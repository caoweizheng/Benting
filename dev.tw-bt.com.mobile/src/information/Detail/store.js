/**
 * const prefixCls = 'styles-16283117';
 * const images = '/static/images/src/information/Detail';
 * @Author: qizc
 * @Date:   2017-12-27 16:34:47
 * @Last Modified by:   qizc
 * @Last Modified time: 2017-12-27 16:36:44
 * @Path btWap \src\information\Detail\store.js
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
        // 资讯详情
        articleDetail: {}
    });

    initFetch = {
        update: ['fetchArticleDetail']
    };

    //资讯详情
    fetchArticleDetail = () => {
        const { id } = this.getParams().params;
        return this.fetchThenSetState('get_article_detail', 'articleDetail', {
            tbId: id,
            isUpNext: 1
        });
    };
}
