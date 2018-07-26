/**
 * const prefixCls = 'styles-53359383';
 * const images = '/static/images/common/utils';
 * @Author: Jack
 * @Date:   2018-05-28 11:03:41
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-28 11:04:09
 * @Path btWap \common\utils\offline.js
 */
'use strict';

if (
    process.env.NODE_ENV === 'production' &&
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator
) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function(reg) {
            console.log('Service worker registered (0-0) ');
        })
        .catch(function(e) {
            console.error('Error during service worker registration:', e);
        });
}
