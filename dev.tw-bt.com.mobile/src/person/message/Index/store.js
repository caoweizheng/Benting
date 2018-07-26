/**
 * const prefixCls = 'styles-63177060';
 * const images = '/static/images/src/person/message/Index';
 * @Author: qizc
 * @Date:   2018-01-23 11:34:58
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-23 14:32:57
 * @Path btWap \src\person\message\Index\store.js
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
        //消息列表
        messageList: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchMessageList']
    };

    /*==================== DS ====================*/
    //消息列表
    fetchMessageList = refresh => {
        this.doClear('replyNum');
        return this.fetchListThenSetState(
            'get_message_list',
            'messageList',
            {
                _: {
                    search: {
                        msgType: [101, 102]
                    }
                }
            },
            refresh
        );
    };

    /*==================== Action ====================*/
    //清除已读
    doClear = async type => {
        await Api.P(
            'do_message_count-clear',
            {
                typesKey: type
            },
            {
                show: false
            }
        );

        //全局更新提醒数
        G.fetchMessageCount();
    };
}
