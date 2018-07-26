/**
 * const prefixCls = 'styles-30455320';
 * const images = '/static/images/static/js';
 * @Author: Jack
 * @Date:   2017-10-06 11:46:25
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-24 12:33:28
 * @Path nidosport@next \static\js\init.js
 */
'use strict';

/*if ('addEventListener' in document) {
    document.addEventListener(
        'DOMContentLoaded',
        function() {
            FastClick.attach(document.body);
        },
        false
    );
}*/

if (!window.Promise) {
    document.writeln(
        '<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"' +
            '>' +
            '<' +
            '/' +
            'script>'
    );
}

//baidu
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?77f4d18175e1d55e6d87415f5e2ffeeb';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
})();

(function() {
    function getQuery(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }

    //wx
    if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
        document.writeln(
            '<script src="https://res.wx.qq.com/open/js/jweixin-1.3.0.js"' +
                '>' +
                '<' +
                '/' +
                'script>'
        );
    }

    //dev
    if (getQuery('dev') === 'true') {
        document.writeln(
            '<script src="/static/js/vconsole.min.js"' +
                '>' +
                '<' +
                '/' +
                'script>'
        );
    }
})();

//google
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-92309684-2');
