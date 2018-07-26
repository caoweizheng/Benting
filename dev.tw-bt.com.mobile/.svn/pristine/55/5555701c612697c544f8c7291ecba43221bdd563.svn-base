/**
 * 项目Ui弹出层数据，全局管理UI层各种数据，主体src/_/Layout/_UI.js
 * const prefixCls = 'styles-97662159';
 * const images = '/static/images/stores';
 * @Author: Jack
 * @Date:   2018-01-03 16:04:58
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-12 12:21:28
 * @Path btWap \stores\ui.js
 */
'use strict';

import React from 'react';
import { observable, action } from 'mobx';
import common from './common';
import Const from 'const';

const namespace = `${Const.__LS_PREFIX__}UI`;
const defaultFixedTextarea = {
    show: false,
    length: 0,
    value: '',
    placeholder: '',
    focus: false,
    showTextarea: false,
    showEmojiPicker: false,
    onSubmit: Function.prototype,
    initSubmit: Function.prototype
};
const defaultHeader = {
    show: true,
    hd: undefined,
    bd: undefined,
    ft: undefined
};

class store extends common {
    config = {
        namespace,
        cache: false
    };

    @observable
    state = this.initState({
        fixed: {}, //页面外容器
        fixed_input: {}, //页低固定Input
        fixed_textarea: defaultFixedTextarea, //全页文本域
        modal: {},
        header: defaultHeader,
        mask: { show: false }
    });

    /**
     * Header
     * @version 170630 1.0
     * @version 180512 1.1 排除SERVER端
     */
    header = props => {
        if (Const.__SERVER__) return;
        this.setState({ show: true, ...props }, 'header');
    };
    resetHeader = () => {
        if (Const.__SERVER__) return;
        this.setState(defaultHeader, 'header');
    };

    /**
     * Mask
     * @version 171206 1.0
     */
    showMask = props => this.setState({ show: true, ...props }, 'mask');
    hideMask = () => this.setState({ show: false }, 'mask');

    /**
     * Fixed
     * @version 170518 1.0
     */
    fixed = props => this.setState(props, 'fixed');
    hideFixed = () => this.setState({}, 'fixed');

    /**
     * FixedInput
     * @version 170516 1.0
     */
    fixedInput = props => this.setState(props, 'fixed_input');

    /**
     * FixedTextarea
     * @version 170523 1.0
     */
    fixedTextarea = props => this.setState(props, 'fixed_textarea');
    hideFiexedTextarea = () => this.fixedTextarea(defaultFixedTextarea);

    /**
     * Modal
     * @version 170625 1.0
     */
    showModal = ({ body, className }) =>
        this.setState({ show: true, body, className }, 'modal');
}

export default new store();
