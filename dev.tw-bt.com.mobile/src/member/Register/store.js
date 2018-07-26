/**
 * const prefixCls = 'styles-77208779';
 * const images = '/static/images/src/member/Register';
 * @Author: Jack
 * @Date:   2018-02-24 14:58:30
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:13:17
 * @Path btWap \src\member\Register\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';

export default class Store extends common {
    @observable
    state = this.initState({
        state: {
            address: '',
            lng: '',
            lat: '',
            status: null,
            registered: true,
            _filter: true
        },

        //用户信息
        userInfo: {},

        //汀友会信息
        allianceInfo: {}
    });

    initFetch = {
        static: [['fetchUserInfo', 'userInfo']],
        one: ['fetchAllianceInfo']
    };

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };

    //汀友会信息
    fetchAllianceInfo = () => {
        const { id } = this.getParams().params;

        return this.fetchThenSetState('get_alliance_info', 'allianceInfo', {
            allianceId: id
        });
    };

    /*==================== Action ====================*/
    doAutoLogin = async values => {
        await G.doLoginByPwd({
            account: values.mobile,
            pwd: values.pwd
        });

        Utils.router.push('/person');
    };

    //180423 v1.1
    doRegister = async values => {
        const { id } = this.getParams().params;
        const { lng, lat, status, registered } = this.getState();

        if (!status) {
            Utils.light('请先定位');
            return;
        }

        const _values = { ...values };
        if (registered) {
            _values.pwd = '';
        } else {
            if (_values.pwd.length < 8 || _values.pwd.length > 16) {
                Utils.light('请输入8-16位的密码');
                return;
            }
        }

        await Api.P('do_register_alliance', {
            ..._values,
            allianceId: id,
            lon: lng,
            lat
        });
        Utils.light('加入汀友会成功');

        setTimeout(() => {
            if (_values.pwd) {
                this.doAutoLogin(values);
            } else {
                Utils.router.push('/person');
            }
        }, 200);
    };

    /*==================== Page ====================*/
    map;
    geolocation;
    geo = () => {
        this.map = new AMap.Map('amap');

        this.map.plugin('AMap.Geolocation', () => {
            this.geolocation = new AMap.Geolocation({
                enableHighAccuracy: true, //是否使用高精度定位，默认:true
                timeout: 10000, //超过10秒后停止定位，默认：无穷大
                maximumAge: 60000 //定位结果缓存0毫秒，默认：0
            });
            this.geolocation.getCurrentPosition();

            this.map.addControl(this.geolocation);
        });

        AMap.event.addListener(this.geolocation, 'complete', res => {
            const { addressComponent, position } = res;

            this.setState({
                address: `${addressComponent.province}${addressComponent.city}${addressComponent.district}${addressComponent.township}`,
                lng: position.lng,
                lat: position.lat,
                status: true
            });
        });
        AMap.event.addListener(this.geolocation, 'error', res => {
            this.setState({
                address: '',
                lng: '',
                lat: '',
                status: false
            });
            Utils.light('定位失败');
        });
    };

    regeo = () => {
        const { status } = this.getState();

        if (status === null) {
            return;
        }

        this.setState({
            address: '',
            lng: '',
            lat: '',
            status: null
        });
        this.geolocation.getCurrentPosition();
    };

    checkMobile = async mobile => {
        const data = await Api.PP('get_mobile_check-exist', { mobile });

        const registered = data.code === 0 ? false : true;

        this.setState({ registered });
    };
}
