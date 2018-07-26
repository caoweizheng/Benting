/**
 * const prefixCls = 'styles-75947914';
 * const images = '/static/images/src/shop/Goods';
 * @Author: qizc
 * @Date:   2017-12-28 14:25:41
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-20 11:32:52
 * @Path btWap \src\shop\Goods\store.js
 */
'use strict';

import { useStrict, observable } from 'mobx';
import common from 'stores/common';
import Utils from 'utils';
import Api from 'api';
import Const from 'const';

useStrict(true);

const imagesShop = '/static/images/pages/shop';

export default class Store extends common {
    @observable
    state = this.initState({
        state: {
            carouselIndex: 0,
            num: 1,
            tagIndex: null,
            showAttr: false,
            showTag: false,
            showVideo: false,

            //ImgView
            showImgView: false,
            imgViewIndex: 0,

            _filter: true
        },

        // 商品详情
        recommendDetails: {},
        //推荐商品列表
        recommendList: Const.__EMPTY__
    });

    initFetch = {
        one: ['fetchRecommendDetails', 'fetchRecommendList']
    };

    //商品详情
    fetchRecommendDetails = async () => {
        const { id } = this.getParams().params;
        return this.fetchThenSetState(
            'get_recommend-details',
            'recommendDetails',
            {
                gid: id
            }
        );
    };

    //推荐商品列表
    fetchRecommendList = refresh => {
        return this.fetchListThenSetState(
            'get_goods_random-List',
            'recommendList',
            {},
            refresh
        );
    };

    onTagClick = tagIndex => {
        this.setState({
            tagIndex
        });
    };

    doAddOrderUser = async value => {
        const { id } = this.getParams().params;
        const { userName, phone } = value;

        if (userName == '') {
            Utils.lignt('姓名不能为空！');
            return;
        }

        if (!Utils.validate(phone, 'mobile')) {
            Utils.lignt('手机号格式不正确！');
            return;
        }

        await Api.P('do_add_orderuser', {
            ...value,
            gid: id
        });
        this.setState({
            showMask: 2
        });
    };
}
