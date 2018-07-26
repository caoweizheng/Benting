/**
 * const prefixCls = 'style-128596';
 * const images = '/static/images/src/person/event/Registration/Index';
 * @Author: czy0729
 * @Date: 2018-06-27 12:25:47
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-28 10:11:41
 * @Path dev.tw-bt.com.mobile /src/person/event/Registration/Index/store.js
 */
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';

class store extends common {
    @observable
    state = this.initState({
        //活动记录
        registration: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchRegistration']
    };

    /*==================== DS ====================*/
    //活动记录
    fetchRegistration = refresh => {
        return this.fetchListThenSetState(
            'get_registration_records',
            'registration',
            {},
            refresh
        );
    };

    /*==================== Action ====================*/
    //取消报名
    doCancel = async id => {
        await Api.P('do_registration_cancel', {
            registration_id: id
        });

        Utils.success();
        this.fetchRegistration(true);
    };
}

export default store;
