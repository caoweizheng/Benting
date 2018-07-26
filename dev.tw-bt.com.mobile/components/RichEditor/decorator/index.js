/**
 * const prefixCls = 'styles-51405550';
 * const images = '/static/images/components/RichEditor/decorator';
 * @Author: Jack
 * @Date:   2017-12-26 14:16:06
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-26 14:18:50
 * @Path btWap \components\RichEditor\decorator\index.js
 */
'use strict';

import { CompositeDecorator } from 'draft-js';
import emoji from './emoji';
import link from './link';

export default new CompositeDecorator([emoji, link]);