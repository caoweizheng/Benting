/**
 * const prefixCls = 'styles-13894466';
 * const images = '/static/images/src/shop/Index';
 * @Author: Jack
 * @Date:   2017-12-28 11:08:21
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-01 02:39:44
 * @Path btWap \src\shop\Index\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';

export default class Store extends common {
    @observable
    state = this.initState({
        //产品标签
        typeList: Const.__EMPTY__,

        //推荐列表
        recommendList: Const.__EMPTY__,

        //商品列表
        goodsList: Const.__EMPTY__
    });

    initFetch = {
        one: ['fetchTypeList']
    };

    /*==================== DS ====================*/
    //商品类型列表
    fetchTypeList = async () => {
        const data = await this.fetchThenSetState(
            'get_product_type-tree',
            'typeList',
            {
                parId: 1
            }
        );

        const initId = data.list[0].typeId;
        this.setParams({ initId });

        return Promise.all([
            this.fetchRecommendList(initId),
            this.fetchGoodsList(initId)
        ]);
    };

    //推荐列表
    fetchRecommendList = initId => {
        const { id } = this.getParams().params;

        return this.fetchThenSetState('get_recommend-list', 'recommendList', {
            _: {
                order: {
                    sortNo: 'desc'
                },
                search: {
                    sourceTypeId: id || initId
                }
            }
        });
    };

    //商品列表
    fetchGoodsList = initId => {
        const { id } = this.getParams().params;

        return this.fetchListThenSetState('get_goods-list', 'goodsList', {
            _: {
                limit: 5,
                search: {
                    goodsType: id || initId,
                    disable: 0
                }
            }
        });
    };
}
