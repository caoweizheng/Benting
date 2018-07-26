/**
 * const prefixCls = 'styles-45032730';
 * const images = '/static/images/src/event/guess/Detail';
 * @Author: qizc
 * @Date:   2018-02-03 11:51:59
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-04-13 10:27:31
 * @Path btWap \src\event\guess\Detail\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';
import Utils from 'utils';
import G from 'stores/g';

class store extends common {
    @observable
    state = this.initState({
        state: {
            show: false,

            //ImgView
            showImgView: false,
            imgViewIndex: 0,

            _filter: true
        },

        //用户信息
        userInfo: {
            _filter: true
        },

        //竞猜详情
        guessDetail: {},

        //竞猜记录列表
        guessLogList: Const.__EMPTY__,

        //竞猜中奖列表
        guessWinnerList: Const.__EMPTY__,

        time: {}
    });

    initParams = {
        isMy: false //是否正在查看我的竞猜
    };

    initFetch = {
        static: [['fetchUserInfo', 'userInfo']],
        one: ['fetchGuessDetail'],
        update: ['fetchGuessLogList', 'fetchGuessWinnerList'],
        every: ['fetchTime']
    };

    /*==================== DS ====================*/
    //用户信息
    fetchUserInfo = async () => {
        const res = G.fetchUserInfo();

        this.setState(await res, 'userInfo');

        return res;
    };

    //竞猜详情
    fetchGuessDetail = () => {
        const { id } = this.getParams().params;
        this.fetchThenSetState('get_new_guess-everday_detail', 'guessDetail', {
            guessId: id
        });
    };

    //竞猜记录列表
    fetchGuessLogList = refresh => {
        const { isMy } = this.getParams();
        const { id } = this.getParams().params;
        const { userId } = this.getState('userInfo');

        const query = isMy
            ? {
                  guessId: id,
                  _: {
                      limit: Const.__LIMIT__,
                      order: {
                          createTime: 'desc'
                      },
                      search: {
                          userId
                      }
                  }
              }
            : {
                  guessId: id,
                  _: {
                      limit: Const.__LIMIT__,
                      order: {
                          createTime: 'desc'
                      }
                  }
              };

        this.fetchListThenSetState(
            'get_guss-everday_guessing-list',
            'guessLogList',
            query,
            refresh,
            'createTime'
        );
    };

    //竞猜中奖列表
    fetchGuessWinnerList = refresh => {
        const { id } = this.getParams().params;

        this.fetchListThenSetState(
            'get_guss-everday_guessing-list',
            'guessWinnerList',
            {
                guessId: id,
                _: {
                    limit: Const.__LIMIT__,
                    order: {
                        createTime: 'asc'
                    },
                    search: {
                        state: 2
                    }
                }
            },
            refresh
        );
    };

    //服务器时间
    fetchTime = () => {
        return this.fetchThenSetState('get_time', 'time');
    };

    /*==================== Action ====================*/
    //竞猜
    doGuessing = async value => {
        const { id } = this.getParams().params;

        await Api.P('do_guess-everday_guessing', {
            guessId: id,
            ...value
        });

        this.closeModal();
        this.fetchGuessLogList(true);
        Utils.light('竞猜成功');
    };

    /*==================== Page ====================*/
    onConfirm = () => {
        this.setState({ show: true });
    };

    closeModal = () => {
        this.setState({ show: false });
    };

    //我的竞猜开关
    switchGuessList = () => {
        const { isMy } = this.getParams();

        this.setParams({
            isMy: !isMy
        });

        this.fetchGuessLogList(true);
    };
}

export default store;
