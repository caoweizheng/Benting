/**
 * const prefixCls = 'styles-19076679';
 * const images = '/static/images/src/merchant/Member';
 * @Author: Jack
 * @Date:   2018-05-09 15:42:25
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-10 09:56:47
 * @Path btWap \src\merchant\Member\store.js
 */
'use strict';

import React from 'react';
import { observable, computed } from 'mobx';
import common from 'stores/common';
import pinyinUtil from './pinyinUtil';
import Api from 'api';
import Const from 'const';
import G from 'stores/g';

class store extends common {
    @observable
    state = this.initState({
        //会员列表
        memberList: Const.__EMPTY__
    });

    initFetch = {
        //one: ['fetchQRCode'],
        update: ['fetchMemberList']
    };

    @computed
    get section() {
        const memberList = this.getState('memberList');

        if (!memberList._loaded) return [];

        const map = {};
        memberList.list.forEach(item => {
            if (!(item._letter in map)) {
                map[item._letter] = true;
            }
        });

        return Object.keys(map).map(item => ({
            title: item,
            filter: i => i._letter === item
        }));
    }

    /*==================== DS ====================*/
    //会员列表
    fetchMemberList = async () => {
        const res = this.fetchListThenSetState(
            'get_merchant_member-list',
            'memberList',
            {
                _: {
                    limit: 2
                }
            }
        );
        const data = await res;

        const mapStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        data.list.forEach((item, index) => {
            const letter = pinyinUtil.getFirstLetter(
                item.userName.substr(0, 1)
            );

            if (item.userName && ~mapStr.indexOf(letter)) {
                data.list[index]._letter = letter;
            } else {
                data.list[index]._letter = '#';
            }
        });
        data.list = data.list.sort(
            (a, b) => mapStr.indexOf(a._letter) - mapStr.indexOf(b._letter)
        );

        this.setState(data, 'memberList');

        return res;
    };

    fetchQRCode = () => {
        this.fetchThenSetState('do_merchant_qrcode', 'qr', {
            url: 'https://dev.tw-bt.com/member/register/26'
        });
    };
}

export default store;
