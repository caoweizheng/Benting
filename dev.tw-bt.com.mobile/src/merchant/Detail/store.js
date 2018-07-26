/**
 * const prefixCls = 'styles-54834981';
 * const images = '/static/images/src/merchant/Detail';
 * @Author: Jack
 * @Date:   2018-01-31 14:08:47
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-24 11:55:12
 * @Path btWap \src\merchant\Detail\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';

const prefixCls = 'styles-81442335';

export default class Store extends common {
    @observable
    state = {
        //商铺详情
        shopDetail: {}
    };

    /*==================== DS ====================*/
    //商铺列表
    fetchShopDetail = async () => {
        let shopDetail = this.getState('shopDetail');

        let res;
        if (!shopDetail.allianceId) {
            const { id } = this.getParams().params;

            const res = this.fetchThenSetState(
                'get_merchant_shop-detail',
                'shopDetail',
                {
                    allianceId: id
                }
            );
            shopDetail = await res;
        }

        this.initMap(shopDetail.lon, shopDetail.lat);

        return res;
    };

    /*==================== Page ====================*/
    initMap = (lng, lat) => {
        this.map = new AMap.Map('amap', {
            center: new AMap.LngLat(lng, lat),
            zoom: 13,
            features: ['bg', 'road', 'point']
        });

        const plugin = () => {
            this.map.addControl(new AMap.ToolBar());
            this.map.addControl(new AMap.Scale());
            this.map.addControl(new AMap.OverView({ isOpen: false }));
        };
        AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView'], () =>
            plugin()
        );

        AMapUI.loadUI(['overlay/SimpleMarker'], SimpleMarker => {
            new SimpleMarker({
                map: this.map,
                containerClassNames: `${prefixCls}__marker`,
                iconTheme: 'numv1',
                iconStyle: 'red',
                position: [lng, lat]
            });
        });
    };

    doNavigate = () => {
        const shopDetail = this.getState('shopDetail');

        if (Const.__WX__) {
            wx.openLocation({
                latitude: parseFloat(shopDetail.lat), //纬度，浮点数，范围为90 ~ -90
                longitude: parseFloat(shopDetail.lon), //经度，浮点数，范围为180 ~ -180。
                name: shopDetail.shopName, //位置名
                address: shopDetail.address, //地址详情说明
                scale: 12 //地图缩放级别,整形值,范围从1~28。默认为最大
                //infoUrl: '' //在查看位置界面底部显示的超链接,可点击跳转
            });
        } else {
            window.location = `https://m.amap.com/navigation/index/daddr=${shopDetail.lon},${shopDetail.lat},${shopDetail.shopName}`;
        }
    };
}
