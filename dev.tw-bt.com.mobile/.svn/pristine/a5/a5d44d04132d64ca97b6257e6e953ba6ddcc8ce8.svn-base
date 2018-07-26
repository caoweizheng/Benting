/**
 * const prefixCls = 'styles-26770965';
 * const images = '/static/images/src/index/Contact';
 * @Author: Jack
 * @Date:   2018-02-26 15:33:09
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-26 17:13:09
 * @Path btWap \src\index\Contact\store.js
 */
'use strict';

import { observable } from 'mobx';
import common from 'stores/common';
import debounce from 'lodash.debounce';
import Utils from 'utils';

const prefixCls = 'styles-80641455';

export default class Store extends common {
    @observable
    state = this.initState({
        state: {
            index: 0
        }
    });

    /*==================== DS ====================*/

    /*==================== Action ====================*/

    /*==================== Page ====================*/
    tabHeight = [];
    addListenScroll = () => {
        this.refreshTabHeight();

        window.addEventListener('scroll', this.checkHeight);
    };

    removeListenScroll = () => {
        window.removeEventListener('scroll', this.checkHeight);
    };

    checkHeight = debounce(() => {
        const { index } = this.getState();

        const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop < this.tabHeight[1] && index !== 0) {
            this.setState({ index: 0 });
        } else if (
            scrollTop >= this.tabHeight[1] &&
            scrollTop < this.tabHeight[2] &&
            index !== 1
        ) {
            this.setState({ index: 1 });
        } else if (scrollTop >= this.tabHeight[2] && index !== 2) {
            this.setState({ index: 2 });
        }
    }, 20);

    refreshTabHeight = () => {
        this.tabHeight[0] = 0;
        this.tabHeight[1] =
            document.querySelector(`.${prefixCls}__img-thumb-4`).offsetTop - 95;
        this.tabHeight[2] =
            document.querySelector(`.${prefixCls}__img-thumb-6`).offsetTop - 95;
    };

    onTabClick = index => {
        Utils.scrollTo(this.tabHeight[index]);
        this.refreshTabHeight();
    };
}
