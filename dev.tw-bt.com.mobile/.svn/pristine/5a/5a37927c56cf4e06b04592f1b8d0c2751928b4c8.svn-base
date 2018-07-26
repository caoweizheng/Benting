/**
 * const prefixCls = 'style-158446';
 * const images = '/static/images/src/bbs/Registration';
 * @Author: czy0729
 * @Date: 2018-06-27 15:26:25
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-27 15:29:06
 * @Path dev.tw-bt.com.mobile /src/bbs/Registration/index.js
 */
import { observable } from 'mobx';
import common from 'stores/common';

export default class Store extends common {
    @observable
    state = this.initState({
        //报名
        registrationDetail: {}
    });

    initFetch = {
        update: ['fetchRegistrationDetail']
    };

    /*==================== DS ====================*/
    //报名信息
    fetchRegistrationDetail = async () => {
        const { id } = this.getParams().params;

        return this.fetchThenSetState(
            'get_registration_record-detail',
            'registrationDetail',
            {
                registration_id: id
            }
        );
    };
}
