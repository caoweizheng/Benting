/**
 * const prefixCls = 'styles-19851541';
 * const images = '/static/images/src/person/event/Index';
 * @Author: qizc
 * @Date:   2018-01-24 14:47:33
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-01-24 17:02:04
 * @Path btWap \src\person\event\Index\store.js
 */
'use strict';

import React from 'react';
import { observable } from 'mobx';
import common from 'stores/common';

class store extends common {
    @observable state = this.initState({});
}

export default store;
