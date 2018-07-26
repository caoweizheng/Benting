/**
 * const prefixCls = 'styles-58878865';
 * const images = '/static/images/src/person/message/Group';
 * @Author: Jack
 * @Date:   2018-06-03 14:38:58
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-04 12:18:06
 * @Path btWap \src\person\message\Group\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Const from 'const';
import G from 'stores/g';

class store extends common {
    @observable
    state = this.initState({
        //提醒数
        messageCount: G.toJS('messageCount'),

        //聊天记录
        privateNotice: Const.__EMPTY__
    });

    initFetch = {
        static: [['fetchMessageCount', 'messageCount']],
        update: ['fetchPrivateNotice']
    };

    /*==================== DS ====================*/
    //消息提示数
    fetchMessageCount = async () => {
        const res = await G.fetchMessageCount();

        this.setState(await res, 'messageCount');

        return res;
    };

    //提醒列表
    fetchPrivateNotice = refresh => {
        return this.fetchListThenSetState(
            'get_chat_private-notice',
            'privateNotice',
            {
                _: {
                    limit: Const.__LIMIT__ * 2
                }
            },
            refresh
        );
    };
}

export default store;
