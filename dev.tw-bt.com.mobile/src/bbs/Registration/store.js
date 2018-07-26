/**
 * const prefixCls = 'style-104163';
 * const images = '/static/images/src/bbs/Registration';
 * @Author: czy0729
 * @Date: 2018-06-26 15:38:09
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-11 09:23:08
 * @Path dev.tw-bt.com.mobile /src/bbs/Registration/store.js
 */
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import G from 'stores/g';

export default class Store extends common {
    @observable
    state = this.initState({
        //用户信息
        userInfo: G.toJS('userInfo'),

        //报名
        registration: {},

        //银行信息
        bankInfo: {}
    });

    initFetch = {
        static: [['fetchUserInfo', 'userInfo']],
        every: ['fetchRegistration', 'fetchBankInfo']
    };

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };

    //报名信息
    fetchRegistration = async () => {
        const { id } = this.getParams().params;

        const res = Api.PP('get_registration_detail', {
            thread_id: id
        });
        const data = await res;

        if (data.code === '0') {
            this.setState(data.data, 'registration');
        } else {
            this.setState({}, 'registration');
        }

        return res;
    };

    //银行信息
    fetchBankInfo = () =>
        this.fetchThenSetState('get_user_bank_info', 'bankInfo');

    /*==================== Action ====================*/
    //报名
    doRegist = async values => {
        const { id } = this.getParams().params;
        const _values = {
            ...values
        };

        const { area } = _values;
        delete _values.area;

        const areas = area.split(',');
        await Api.P('do_registration_register', {
            thread_id: id,
            ..._values,
            province: areas[0],
            city: areas[1],
            county: areas[2]
        });

        await this.doComment({
            content: '#已报名#',
            commentImg: '',
            threadId: id
        });

        Utils.success();
        G.setLastPageRefresh();
        Utils.router.back();
    };

    doComment = query =>
        Api.P('do_bbs_posted', {
            ...query,
            type: 2
        });

    //提交订单
    doSubmit = async values => {
        const { id } = this.getParams().params;

        await Api.P('do_registration_submit-order', {
            thread_id: id,
            ...values
        });

        Utils.success();
        G.setLastPageRefresh();
        Utils.router.back();
    };

    //重新提交订单
    doUpdate = async values => {
        const { id } = this.getParams().params;

        await Api.P('do_registration_submit-order', {
            thread_id: id,
            ...values
        });

        Utils.success();
        G.setLastPageRefresh();
        Utils.router.back();
    };
}
