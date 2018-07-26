/**
 * const prefixCls = 'styles-20611418';
 * const images = '/static/images/common/utils';
 * @Author: Jack
 * @Date:   2017-04-17 11:52:27
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-16 18:10:53
 * @Path btWap \common\utils\index.js
 */
'use strict';

import React from 'react';
import Router from 'next/router';
import { isObservableArray } from 'mobx';
import {
    Toast,
    Modal,
    Flex,
    ActivityIndicator,
    ActionSheet
} from 'antd-mobile';
import Api from 'api';
import Const from '../const';
import G from 'stores/g';

/*==================== app 本项目才用到，其他项目切勿搬运 ====================*/
/**
 * 本汀会员等级
 * @version 180108 1.0
 * @param  {Int} *level 本汀等级
 * @return {String}
 */
const getBTLevel = level => {
    switch (parseInt(level)) {
        case 1:
            return '一星会员';

        case 2:
            return '二星会员';

        case 3:
            return '三星会员';

        case 4:
            return '四星会员';

        case 5:
            return '五星会员';

        case 6:
            return '黄金会员';

        case 7:
            return '铂金会员';

        case 8:
            return '钻石会员';

        case 9:
            return '至尊会员';

        default:
            return '初始会员';
    }
};

/**
 * 统一跳转到充值页面
 * @version 180125 1.0
 * @return {Void}
 */
const goToPay = () => {
    if (Const.__WX__) {
        const url = Api.getRequestUrl('do_pay_bind-wx', {
            path: `${window.location.origin}/pay/do`
        });
        window.location = url;
    } else {
        Router.push('/pay/do');
    }
};

/*==================== addOn 最近添加 ====================*/
const getUrlArgObject = () => {
    var args = new Object();
    var query = location.search.substring(1); //获取查询串
    var pairs = query.split(','); //在逗号处断开
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('='); //查找name=value
        if (pos == -1) {
            //如果没有找到就跳过
            continue;
        }
        var argname = pairs[i].substring(0, pos); //提取name
        var value = pairs[i].substring(pos + 1); //提取value
        args[argname] = unescape(value); //存为属性
    }
    return args; //返回对象
};

/**
 * 项目图片切换七牛静态CDN地址
 * @version 180524 1.0
 * @param  {String} *path
 * @return {String}
 */
const cdn = path =>
    Const.__CDN_USED__ ? `${path.replace('/static', Const.__CDN_URL__)}` : path;

/**
 * 睡眠函数
 * @version 180417 1.0
 * @return {Promise}
 */
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * 取消高清方案
 * @version 180201 1.0
 * @return {Void}
 */
const removeHD = () => {
    var r = window.document;
    var m = r.querySelector('meta[name="viewport"]');
    m ||
        ((m = r.createElement('meta')),
        m.setAttribute('name', 'viewport'),
        r.head.appendChild(m)),
        m.setAttribute(
            'content',
            'width=device-width,user-scalable=no,initial-scale=' +
                1 +
                ',maximum-scale=' +
                1 +
                ',minimum-scale=' +
                1
        ),
        (r.documentElement.style.fontSize = 50 + 'px');
};

/**
 * 启用高清方案
 * @version 180201 1.0
 * @return {Void}
 */
const setHD = () => {
    !(function(e) {
        function t(a) {
            if (i[a]) return i[a].exports;
            var n = (i[a] = { exports: {}, id: a, loaded: !1 });
            return (
                e[a].call(n.exports, n, n.exports, t),
                (n.loaded = !0),
                n.exports
            );
        }
        var i = {};
        return (t.m = e), (t.c = i), (t.p = ''), t(0);
    })([
        function(e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var i = window;
            (t['default'] = i.flex = function(e, t) {
                var a = e || 100,
                    n = t || 1,
                    r = i.document,
                    o = navigator.userAgent,
                    d = o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
                    l = o.match(/U3\/((\d+|\.){5,})/i),
                    c = l && parseInt(l[1].split('.').join(''), 10) >= 80,
                    p = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
                    s = i.devicePixelRatio || 1;
                p || (d && d[1] > 534) || c || (s = 1);
                var u = 1 / s,
                    m = r.querySelector('meta[name="viewport"]');
                m ||
                    ((m = r.createElement('meta')),
                    m.setAttribute('name', 'viewport'),
                    r.head.appendChild(m)),
                    m.setAttribute(
                        'content',
                        'width=device-width,user-scalable=no,initial-scale=' +
                            u +
                            ',maximum-scale=' +
                            u +
                            ',minimum-scale=' +
                            u
                    ),
                    (r.documentElement.style.fontSize = (a / 2) * s * n + 'px');
            }),
                (e.exports = t['default']);
        }
    ]);
    flex(100, 1);
};

/**
 * 统一取Label
 * @version 170925 1.0
 * @param  {Array}  *ds    检测数组 Array<{ label: string, value: string }>
 * @param  {String} *value 查找值
 * @return {String}
 */
const getLabel = (ds, value) => {
    if (!ds) return false;

    const find = ds.find(item => item.value == value);

    if (find) return find.label;

    return false;
};

/**
 * 统一取Value
 * @version 170925 1.0
 * @param  {Array}  *ds    检测数组 Array<{ label: string, value: string }>
 * @param  {String} *label 查找名字
 * @return {String}
 */
const getValue = (ds, label) => {
    if (!ds) return false;

    const find = ds.find(item => item.label == label);

    if (find) return find.value;

    return false;
};

/**
 * 首尾去空格
 * @version 171025 1.0
 * @param  {String} *str
 * @return {String}
 */
const trim = str => {
    return String(str).replace(/^\s+|\s+$/gm, '');
};

/**
 * 去除HTML
 * @version 170905 1.0
 * @param  {String} *str
 * @return {String}
 */
const removeHTMLTag = str => {
    str = String(str);

    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
    str = str.replace(/\n[\s| | ]*\r/g, '\n'); //去除多余空行
    str = str.replace(/ /gi, ''); //去掉

    return str;
};

/**
 * 字符串去除系统表情
 * @version 170905 1.0
 */
function getCharFilterEmoji(str = '') {
    var flag = 0,
        length = 0,
        temp = '';

    for (var i = 0, t = 0, len = str.length; i < len; i++) {
        if (~'[{<'.indexOf(str[i])) {
            flag = 1;
        } else if (~'}]>'.indexOf(str[i])) {
            if (flag == 1) {
                flag = 0;
            }
        } else if (flag == 0) {
            length++;
            temp += str[i];
        }
    }
    return temp;
}

/**
 * 是否UC浏览器
 * @version 180102 0.1
 */
const isUC = () => {
    if (Const.__SERVER__) return false;

    var ua = navigator.userAgent;
    var matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);
    var UCversion = ua.match(/U3\/((\d+|\.){5,})/i);

    return !!UCversion;
};

/**
 * 系统log
 * @version 171024 0.1
 */
const log = (a, b, c) => {
    console.log(
        date('H:i:s', new Date().valueOf() / 1000),
        '|',
        a,
        '|',
        fill(b),
        '|',
        c
    );
};

/**
 * 字符串填充
 * @version 171011 1.0
 */
const fill = (str, len = 28) => {
    if (str.length > len) return str;

    for (let i = str.length; i < len; i++) {
        str += ' ';
    }

    return str;
};

/**
 * 数组中随机取出几项
 * @version 170928 1.0
 * @return {String} *str
 */
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        temp,
        index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

/**
 * 返回当前timestamp
 * @version 170814 1.0
 * @return {Int} 时间戳
 */
function getTimestamp() {
    return Math.floor(new Date().valueOf() / 1000);
}

/**
 * 判断地址是否视频截屏
 * @version 170807 1.0
 * @param  {String}  *str
 * @return {Boolean}
 */
function isPoster(str) {
    str = str.toString();

    return /static\/uploads\/(mp4|mov|qt|avi|3gp)/g.test(str);
}

/**
 * 字符串根据规则分割替换并生成数组
 * @version 170727 1.0
 * @param  {String} *string
 * @param  {Reg}    *regSplit
 * @param  {Reg}    *regItemReplace
 * @param  {String} itemSpanCls
 * @return {Array}
 */
function stringSplitToArray(
    string,
    regSplit,
    regItemReplace,
    itemSpanCls,
    spanOther
) {
    if (!string) return [];

    const splitMark = '^^';
    const bMark = '^*^';

    return string
        .replace(
            regSplit,
            match =>
                `${splitMark}${bMark}${match.replace(
                    regItemReplace,
                    ''
                )}${splitMark}`
        )
        .split(splitMark)
        .filter(item => item !== '')
        .map((item, index) => {
            if (~item.indexOf(bMark)) {
                const realItem = item.replace(bMark, '');
                let other = {};
                if (spanOther) {
                    other = spanOther(realItem);
                }

                return (
                    <span key={index} className={itemSpanCls} {...other}>
                        {realItem}
                    </span>
                );
            }

            return <span key={index}>{item}</span>;
        });
}

/**
 * 对象是否完全相同
 * @version 170727 1.0
 * @param  {Object} a
 * @param  {Object} b
 * @return {Boolean}
 */
function isObjectValueEqual(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a == b;
    }

    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (
            Object.prototype.toString(a[propName]) == '[Object Object]' ||
            Object.prototype.toString(b[propName]) == '[Object Object]'
        ) {
            isObjectValueEqual(a[propName], b[propName]);
        }
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

/**
 * 获取query
 * @version 170717 1.0
 * @version 171007 1.1 兼容服务器端
 * @param {String} *name
 */
function getQuery(name) {
    if (Const.__SERVER__) return null;

    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

/**
 * 深拷贝
 * @version 170714 1.0
 * @param {Object} *src
 */
function deepCopy(src) {
    if (!src && typeof src !== 'object') {
        return;
    }

    var dst = src.constructor === Array ? [] : {};
    for (var key in src) {
        if (src.hasOwnProperty(key)) {
            if (src[key] && typeof src[key] === 'object') {
                if (isObservableArray(src[key])) {
                    dst[key] = [];
                    dst[key] = deepCopy(src[key].slice());
                } else {
                    dst[key] = src[key].constructor === Array ? [] : {};
                    dst[key] = deepCopy(src[key]); //递归
                }
            } else {
                dst[key] = src[key];
            }
        }
    }

    return dst;
}

/**
 * Draft.js的entityMap存在所有历史操作的atomic，需要从blocks里面验证到底实际上存不存在该图片
 * @version 170710 1.0
 * @version 170714 1.1 fixed bug
 * @version 171024 1.2 七牛视频截图返回id
 * @params {Object}  *draftJson draft
 * @params {Boolean} all        是否取视频截图
 */
function getRealDraftEntityMap(draftJson, all = false) {
    const { blocks, entityMap } = draftJson;
    if (!blocks || !entityMap) return [];

    const realImages = [];
    blocks.forEach(item => {
        if (item.type === 'atomic') {
            const { key } = item.entityRanges[0];

            if (
                entityMap[key].type === 'image' ||
                entityMap[key].type === 'link-image'
            ) {
                realImages.push(entityMap[key].data.src);
            }

            //v1.2
            if (all && entityMap[key].type === 'video') {
                const temp = entityMap[key].data.src.split('/');

                realImages.push(temp[temp.length - 1]);
            }
        }
    });

    return realImages;
}

/**
 * 查看字符串中文字数，排除表情
 * @version 170624 1.0
 */
function getCharLength(str) {
    var flag = 0,
        length = 0;

    for (var i = 0, t = 0, len = str.length; i < len; i++) {
        if (~'[{<'.indexOf(str[i])) {
            flag = 1;
        } else if (~'}]>'.indexOf(str[i])) {
            if (flag == 1) {
                flag = 0;
            }
        } else if (flag == 0) {
            length++;
        }
    }
    return length;
}

/**
 * [待废弃]
 */
function getPathname(currentPathname) {
    const parts = currentPathname.split('/');

    if (parts.length < 3) return currentPathname;

    return `/${parts[1]}/${parts[2]}`;
}

/**
 * 检测是否登录并提示
 * @version 170519 1.0
 * @version 170712 1.1 引入回调地址机制
 * @version 180102 1.2 不传nextFn，返回boolean
 */
function checkLogin(nextFn) {
    const tk = G.getState('tk');

    if (!nextFn) {
        return !!tk;
    }

    if (tk) {
        nextFn();
    } else {
        onConfirm('该操作需要登录，前往登录?', () => {
            G.setJump();
            Router.push('/login');
        });
    }
}

/**
 * 格式化MB
 * @version 170519 1.0
 */
function getMB(number = 0) {
    return (number / 1024 / 1024).toFixed(2);
}

/**
 * 格式化播放时间
 * @version 170519 1.0
 */
function getPlayTime(number = 0) {
    let h = 0,
        i = 0,
        s = parseInt(number);

    if (s > 60) {
        i = parseInt(s / 60);
        s = parseInt(s % 60);

        if (i > 60) {
            h = parseInt(i / 60);
            i = parseInt(i % 60);
        }
    }

    //补零
    const zero = v => {
        return v >> 0 < 10 ? '0' + v : v;
    };

    //return [zero(h), zero(i), zero(s)].join(':');
    return [zero(i), zero(s)].join(':');
}

/**
 * [待优化] 生成搜索参数
 * @version 170517 1.0
 */
function genSearch(page = 1, limit = 10, search = {}, obj = {}) {
    return Object.assign({}, obj, {
        _: {
            page,
            limit,
            search
        }
    });
}

/**
 * 根据项目页面data规则，检查数据源是否全部加载完毕，加载完毕返回true
 * @version 170428 1.1
 * @version 170525 1.2
 * @param  {Object}  *data
 * @return {Boolean}
 */
function loaded(data = {}) {
    const keys = Object.keys(data);

    if (keys.length === 0) return true; //data没有字段返回true

    let bool = true;
    Object.keys(data).forEach(item => {
        if (typeof data[item] === 'object') {
            if (!data[item]._loaded) bool = false;
        } else {
            if (!data[item]) bool = false;
        }
    });

    return bool;
}

/**
 * 自动匹配图片地址，用于处理视频截图和旧论坛图片
 * @version 170816 1.0
 * @param  {String} *str 图片地址
 * @return {String} str
 */
function getAutoImgUrl(str) {
    str = String(str);

    //视频截图没有thumb，直接拿原图
    if (
        ~str.indexOf('static/uploads/mp4/') ||
        ~str.indexOf('static/uploads/qt/')
    ) {
        return getImgUrl(str);
    }

    if (
        validate(str, 'number') ||
        ~str.indexOf('http://') ||
        ~str.indexOf('https://') ||
        ~str.indexOf('static/uploads/')
    ) {
        return str;
    }

    return `http://bbs.tw-bt.com/data/attachment/forum/${str}`;
}

/**
 * 确认后端返回的图片地址是否路径地址
 * @version 161026 1.0
 * @version 161206 1.1 当str为空时默认返回app默认图
 * @param  {String} *str 图片地址
 * @return {String}
 */
function getImgUrl(str) {
    if (!str) {
        return Const.__IMG_DEFAULT__;
    }

    //防止非字符串类型
    str = String(str);

    //Id类型的图片
    if (validate(str, 'number')) {
        return `${Const.__API__}/file/getimg/${str}`;
    }

    //旧系统图片字段是`static/uploads/`开头
    //非旧系统类型图片的多数为网络图片，直接返回
    if (str.indexOf('static/uploads/') !== 0) {
        return str;
    }

    return `${Const.__IMG_API__}/${str}`;
}

/**
 * getImgUrl()后，并返回thumb图片地址
 * @version 161026 1.0
 * @version 161206 1.1 当str为空时默认返回app默认图
 * @version 170522 1.2 添加一个参数，可以领后缀是gif的图直接拿原图
 * @version 180530 1.3 适应OSS地址
 * @param  {String} *str 图片字段值
 * @param  {String} sn 插入的字符串
 * @return {String}
 */
function getAppImgUrl(str, sn = 'thumb', getGif = false) {
    if (!str) {
        return Const.__IMG_DEFAULT__;
    }

    //防止非字符串类型
    str = String(str);

    //Id类型的图片
    if (validate(str, 'number')) {
        return `${Const.__API__}/file/getimg/${str}/${sn}`;
    }

    //旧系统图片字段是`static/uploads/`开头
    //非旧系统类型图片的多数为网络图片，直接返回
    if (str.indexOf('static/uploads/') !== 0) {
        return str;
    }

    //旧系统gif类型图片可以取到动图
    if (getGif && str.indexOf('.gif') !== -1) {
        return getImgUrl(str);
    }

    //旧系统类型图片
    const lastIndex = str.lastIndexOf('.');
    const left = str.substring(0, lastIndex);
    const right = str.substring(lastIndex);

    return `${Const.__IMG_API__}/${left}_${sn}${right}`;
}

/**
 * 数字分割加逗号
 * @version 160811 1.0
 * @version 160902 1.1 添加保留多少位小数
 * @version 160907 1.2 代码优化，金额少于1000时直接返回
 * @version 170103 1.3 判断n为0的情况
 * @param {Number} s 数字
 * @param {Int} n 保留多少位小数
 * @return {String}
 */
function formatNumber(s, n = 2) {
    if (s === '') return Number(s).toFixed(n);

    if (typeof s === 'undefined') return Number(0).toFixed(n);

    s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';

    if (s == 0) return Number(s).toFixed(n);

    if (s < 1000) return Number(s).toFixed(n);

    let l = s
            .split('.')[0]
            .split('')
            .reverse(),
        r = s.split('.')[1];

    let t = '';

    for (let i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '');
    }

    if (typeof r === 'undefined') {
        return t
            .split('')
            .reverse()
            .join('');
    }

    return (
        t
            .split('')
            .reverse()
            .join('') +
        '.' +
        r
    );
}

/**
 * 简单验证
 * @version 160427 1.1
 * @version 160620 1.2 [+] 6位数字验证码
 * @version 160819 2.0 [+] {String} type
 * @version 160819 2.1 [+] 微信号 [-] {Number} type
 * @param  {Mixed}   *str  检验值
 * @param  {String}  *type 检验类型
 * @return {Boolean}
 */
function validate(str, type) {
    const patrn = {
        email: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, //邮件
        mobile: /^1\d{10}$/, //手机号
        phone: /^\d{3,4}[-]\d{7,8}$/, //固话
        number: /^\d*$/, //数字
        decimal: /^[-]{0,1}(\d+)[\.]+(\d+)$/, //带小数的数字格式，可为负数
        money: /^[0-9]+[\.][0-9]{0,2}$/, //金额格式，格式定义为带小数的正数，小数点后最多两位
        zh: /^([\u4e00-\u9fa5]){2,7}$/, //中文2-7位
        captcha: /^\d{6}$/, //6位数字验证码
        wechat: /^[a-zA-Z\d_\-]{5,}$/ //微信号
    };

    if (!type || !patrn[type]) return false;

    return patrn[type].test(str);
}

/**
 * json拼凑成url字符串
 * @version 170206 1.0
 * @version 170505 1.1 将value === undefined的值设为''
 * @param  {Obj} obj
 * @param  {String}
 * @return {String}
 */
function getQueryStr(obj = {}) {
    let query = '';

    for (let key in obj) {
        let value;

        if (typeof obj[key] === 'object') {
            value = JSON.stringify(obj[key]);
        } else {
            value = obj[key] === undefined ? '' : obj[key];
        }

        query += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
    }

    if (query) query = query.substring(0, query.length - 1);

    return query;
}

/**
 * 和PHP一样的时间戳格式化函数
 * @version 160421 1.0
 * @version 170104 1.1 变得可以省略format
 * @param  {String} format    格式化格式
 * @param  {Int}    timestamp 时间戳
 * @return {String}
 */
function date(format, timestamp) {
    //假如第二个参数不存在，第一个参数作为timestamp
    if (!timestamp) {
        timestamp = format;
        format = Const.__DATE__ || 'Y-m-d H:i:s';
    }

    var a,
        jsdate = timestamp ? new Date(timestamp * 1000) : new Date();
    var pad = function(n, c) {
        if ((n = n + '').length < c) {
            return new Array(++c - n.length).join('0') + n;
        } else {
            return n;
        }
    };
    var txt_weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    var txt_ordin = {
        1: 'st',
        2: 'nd',
        3: 'rd',
        21: 'st',
        22: 'nd',
        23: 'rd',
        31: 'st'
    };
    var txt_months = [
        '',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    var f = {
        d: function() {
            return pad(f.j(), 2);
        },
        D: function() {
            t = f.l();
            return t.substr(0, 3);
        },
        j: function() {
            return jsdate.getDate();
        },
        l: function() {
            return txt_weekdays[f.w()];
        },
        N: function() {
            return f.w() + 1;
        },
        S: function() {
            return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th';
        },
        w: function() {
            return jsdate.getDay();
        },
        z: function() {
            return (
                ((jsdate - new Date(jsdate.getFullYear() + '/1/1')) /
                    86400000) >>
                0
            );
        },
        W: function() {
            var a = f.z(),
                b = 364 + f.L() - a;
            var nd2,
                nd =
                    (new Date(jsdate.getFullYear() + '/1/1').getDay() || 7) - 1;
            if (b <= 2 && (jsdate.getDay() || 7) - 1 <= 2 - b) {
                return 1;
            } else {
                if (a <= 2 && nd >= 4 && a >= 6 - nd) {
                    nd2 = new Date(jsdate.getFullYear() - 1 + '/12/31');
                    return date('W', Math.round(nd2.getTime() / 1000));
                } else {
                    return (
                        (1 + (nd <= 3 ? (a + nd) / 7 : (a - (7 - nd)) / 7)) >> 0
                    );
                }
            }
        },
        F: function() {
            return txt_months[f.n()];
        },
        m: function() {
            return pad(f.n(), 2);
        },
        M: function() {
            t = f.F();
            return t.substr(0, 3);
        },
        n: function() {
            return jsdate.getMonth() + 1;
        },
        t: function() {
            var n;
            if ((n = jsdate.getMonth() + 1) == 2) {
                return 28 + f.L();
            } else {
                if ((n & 1 && n < 8) || (!(n & 1) && n > 7)) {
                    return 31;
                } else {
                    return 30;
                }
            }
        },
        L: function() {
            var y = f.Y();
            return !(y & 3) && (y % 100 || !(y % 400)) ? 1 : 0;
        },
        Y: function() {
            return jsdate.getFullYear();
        },
        y: function() {
            return (jsdate.getFullYear() + '').slice(2);
        },
        a: function() {
            return jsdate.getHours() > 11 ? 'pm' : 'am';
        },
        A: function() {
            return f.a().toUpperCase();
        },
        B: function() {
            var off = (jsdate.getTimezoneOffset() + 60) * 60;
            var theSeconds =
                jsdate.getHours() * 3600 +
                jsdate.getMinutes() * 60 +
                jsdate.getSeconds() +
                off;
            var beat = Math.floor(theSeconds / 86.4);
            if (beat > 1000) {
                beat -= 1000;
            }
            if (beat < 0) {
                beat += 1000;
            }
            if (String(beat).length == 1) {
                beat = '00' + beat;
            }
            if (String(beat).length == 2) {
                beat = '0' + beat;
            }
            return beat;
        },
        g: function() {
            return jsdate.getHours() % 12 || 12;
        },
        G: function() {
            return jsdate.getHours();
        },
        h: function() {
            return pad(f.g(), 2);
        },
        H: function() {
            return pad(jsdate.getHours(), 2);
        },
        i: function() {
            return pad(jsdate.getMinutes(), 2);
        },
        s: function() {
            return pad(jsdate.getSeconds(), 2);
        },
        O: function() {
            var t = pad(Math.abs((jsdate.getTimezoneOffset() / 60) * 100), 4);
            if (jsdate.getTimezoneOffset() > 0) {
                t = '-' + t;
            } else {
                t = '+' + t;
            }
            return t;
        },
        P: function() {
            var O = f.O();
            return O.substr(0, 3) + ':' + O.substr(3, 2);
        },
        c: function() {
            return (
                f.Y() +
                '-' +
                f.m() +
                '-' +
                f.d() +
                'T' +
                f.h() +
                ':' +
                f.i() +
                ':' +
                f.s() +
                f.P()
            );
        },
        U: function() {
            return Math.round(jsdate.getTime() / 1000);
        }
    };
    return format.replace(/[\\]?([a-zA-Z])/g, function(t, s) {
        var ret = '';
        if (t != s) {
            ret = s;
        } else {
            if (f[s]) {
                ret = f[s]();
            } else {
                ret = s;
            }
        }
        return ret;
    });
}

/**
 * 银行卡号码加权验证
 * @version 160421 1.0
 * @param {String} bankno
 * @return {Boolean}
 */
function bankCheck(bankno = '') {
    if (bankno.length < 15 || bankno.length > 19) {
        return false;
    }
    var num = /^\d*$/;
    if (!num.exec(bankno)) {
        return false;
    }
    var strBin =
        '10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99';
    if (strBin.indexOf(bankno.substring(0, 2)) == -1) {
        return false;
    }
    var lastNum = bankno.substr(bankno.length - 1, 1);
    var first15Num = bankno.substr(0, bankno.length - 1);
    var newArr = new Array();
    for (var i = first15Num.length - 1; i > -1; i--) {
        newArr.push(first15Num.substr(i, 1));
    }
    var arrJiShu = new Array();
    var arrJiShu2 = new Array();
    var arrOuShu = new Array();
    for (var j = 0; j < newArr.length; j++) {
        if ((j + 1) % 2 == 1) {
            if (parseInt(newArr[j]) * 2 < 9) {
                arrJiShu.push(parseInt(newArr[j]) * 2);
            } else {
                arrJiShu2.push(parseInt(newArr[j]) * 2);
            }
        } else {
            arrOuShu.push(newArr[j]);
        }
    }
    var jishu_child1 = new Array();
    var jishu_child2 = new Array();
    for (var h = 0; h < arrJiShu2.length; h++) {
        jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
        jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
    }
    var sumJiShu = 0;
    var sumOuShu = 0;
    var sumJiShuChild1 = 0;
    var sumJiShuChild2 = 0;
    var sumTotal = 0;
    for (var m = 0; m < arrJiShu.length; m++) {
        sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
    }
    for (var n = 0; n < arrOuShu.length; n++) {
        sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
    }
    for (var p = 0; p < jishu_child1.length; p++) {
        sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
        sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
    }
    sumTotal =
        parseInt(sumJiShu) +
        parseInt(sumOuShu) +
        parseInt(sumJiShuChild1) +
        parseInt(sumJiShuChild2);
    var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
    var luhm = 10 - k;
    if (lastNum != luhm) {
        return false;
    }
    return true;
}

/**
 * 根据pid结构的数组生成树结构对象
 * @version 160428 1.0
 */
function tree(ds, parId = 0) {
    var data = [...ds],
        result = [],
        temp;

    data = data.sort((a, b) => a.pid - b.pid);

    for (var i = 0; i < data.length; i++) {
        if (data[i].parId == parId) {
            var obj = {
                ...data[i]
            };

            temp = tree(data, data[i].pid);
            if (temp.length > 0) {
                obj.children = temp;
            }
            result.push(obj);
        }
    }
    return result;
}

/**
 * 时间戳距离现在时间的描述
 * @version 170217 1.0
 * @version 170605 1.1 修复年份非常小导致的问题
 * @param  {String} timestamp 时间戳
 * @return {String}
 */
function lastDate(timestamp, overDaysToShowTime = 365) {
    const d = new Date(timestamp * 1000);
    const _date = `${d.getFullYear()}/${d.getMonth() +
        1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    const dateTime = new Date(_date);
    const currentTime = new Date();

    if (overDaysToShowTime) {
        if (
            Math.floor((currentTime - d) / 1000 / (60 * 60 * 24)) >
            overDaysToShowTime
        )
            return date(timestamp);
    }

    let totalTime = currentTime.getTime() - dateTime.getTime();
    let _, years, months, weeks, days, hours, minutes;
    const getNumber = () => Math.floor(totalTime / _);
    const modTimestamp = () => totalTime % _;

    _ = 1000 * 60 * 60 * 24 * 365;
    years = getNumber();
    totalTime = modTimestamp();

    _ = 1000 * 60 * 60 * 24 * 30;
    months = getNumber();
    totalTime = modTimestamp();

    if (years > 0) return `${years}年${months}月前`;

    _ = 1000 * 60 * 60 * 24 * 7;
    weeks = getNumber();
    totalTime = modTimestamp();

    if (months > 0) return `${months}月${weeks}周前`;

    _ = 1000 * 60 * 60 * 24;
    days = getNumber();
    totalTime = modTimestamp();

    if (weeks > 0) return `${weeks}周${days}天前`;

    _ = 1000 * 60 * 60;
    hours = getNumber();
    totalTime = modTimestamp();

    if (days > 0) return `${days}天${hours}时前`;

    _ = 1000 * 60;
    minutes = getNumber();
    totalTime = modTimestamp();

    if (hours > 0) return `${hours}时${minutes}分前`;

    if (minutes > 0) return `${minutes}分前`;

    return '刚刚';
}

/**
 * 字符串特定位置插入字符串
 * @version 170215 1.0
 * @param  {String} str 原字符串
 * @param  {String} flg 插入的字符串
 * @param  {Int}    sn  index
 * @return {String}
 */
function strInsert(str, flg, sn) {
    const left = str.substring(0, sn);
    const right = str.substring(sn);

    return `${left}${flg}${right}`;
}

/**
 * 检查机型
 * @version 170217 1.0
 * @return {String}
 */
function checkDeviceType() {
    const agent = navigator.userAgent,
        isAndroid = /(Android)/i.test(agent),
        isiOS = /(iPhone|iPad|iPod|iOS)/i.test(agent) && !isAndroid;

    if (isiOS) return 'ios';
    if (isAndroid) return 'android';
    return 'other';
}

/*==================== cache ====================*/
/**
 * localStorage set
 * @version 170213 1.0
 * @version 170709 1.1
 * @version 180326 1.2 \n
 * @param {String} key
 * @param {Mix}    data
 */
function lsSet(key, data) {
    if (typeof localStorage == 'undefined') return false;

    try {
        const value = typeof data == 'string' ? data : JSON.stringify(data);

        localStorage.setItem(key, value);

        console.log('localStorage set success: ', key);
        return true;
    } catch (err) {
        console.log('localStorage set fail: ', key, '\n', err);
        return false;
    }
}

/**
 * localStorage get
 * @version 170213 1.0
 * @version 170709 1.1
 * @param {String} key
 */
function lsGet(key, defaultDS = {}) {
    let data;

    if (typeof localStorage == 'undefined') return defaultDS;

    try {
        data = JSON.parse(localStorage.getItem(key)) || defaultDS;
    } catch (err) {
        console.log('localStorage get fail: ', key);
        return defaultDS;
    }

    return data;
}

/*==================== ui ====================*/
/**
 * 轻提示
 * @version 170718 1.0
 */
function light(content = '操作成功', second = 2.4) {
    const Content = (
        <Flex justify="center">
            <span className="text-sm">{content}</span>
        </Flex>
    );

    Toast.info(Content, second, null, false);
}

/**
 * 普通提示
 * @version 170603 1.0
 */
function info(content = '操作成功', icon, second = 1.5) {
    const Content = (
        <Flex justify="center">
            {icon}
            <span className="text-md ml-sm">{content}</span>
        </Flex>
    );

    Toast.info(Content, second);
}

/**
 * 普通请求成功后应调用此方法
 * @version 170211 1.0
 * @version 170527 1.1 改变样式
 */
function success(content = '操作成功', second = 1.5) {
    const Content = (
        <Flex justify="center">
            <img
                src={`${Const.__IMAGES__}/icon/right.png`}
                style={{
                    width: '0.64rem',
                    height: '0.64rem'
                }}
            />
            <span className="text-md ml-sm">{content}</span>
        </Flex>
    );

    Toast.info(Content, second);
}

/**
 * 请求中
 * @version 170527 1.0 改变样式
 */
function loading(content = '请求中...') {
    const Content = (
        <Flex justify="center">
            <ActivityIndicator size="large" />
            <span className="text-md ml-sm">{content}</span>
        </Flex>
    );

    Toast.info(Content, 0);
}

/**
 * 隐藏Toast
 * @version 170611 1.0
 */
function hideToast() {
    Toast.hide();
}

/**
 * 确认
 * @version 170223 1.0
 */
function onAlert(content, nextFn = () => {}, title = '温馨提示') {
    Modal.alert(title, content, [
        {
            text: '好的',
            onPress: nextFn
        }
    ]);
}

/**
 * 确认框
 * @version 170211 1.0
 */
function onConfirm(
    content,
    nextFn = () => {},
    title = '温馨提示',
    cancelFn = Function.prototype
) {
    Modal.alert(title, content, [
        {
            text: '取消',
            style: 'default',
            onPress: cancelFn
        },
        {
            text: '好的',
            onPress: nextFn
        }
    ]);
}

/**
 * 输入框
 * @version 170211 1.0
 * @version 180420 1.1 placeholders
 */
function onPrompt(
    title,
    nextFn = () => {},
    defaultValue,
    content,
    placeholders
) {
    Modal.prompt(
        title,
        content,
        [
            {
                text: '取消',
                style: 'default'
            },
            {
                text: '提交',
                onPress: value => {
                    //@issue Modal.prompt没onChange时，这个value为空
                    nextFn(value || defaultValue);
                }
            }
        ],
        'text',
        defaultValue,
        placeholders
    );
}

/**
 * 滚动到指定y轴坐标
 * @version 170312 1.0
 * @version 170605 1.1
 * @param {Int} y        文档y轴坐标
 * @param {Int} optimize 优化距离，当前scrollTop大于这个值，先去到这个点，再进行滚动
 */
function scrollTo(y = 0, optimize = 3000) {
    if (document.body.scrollTop > optimize) {
        document.body.scrollTop = optimize;
    }

    const timer = setInterval(() => {
        //获取滚动条的滚动高度
        const osTop =
            document.documentElement.scrollTop || document.body.scrollTop;

        //用于设置速度差，产生缓动的效果
        const speed = Math.floor(-osTop / 10);

        //控制新滚动高度一定不能小于y
        const limit = osTop + speed <= y ? y : osTop + speed;
        document.documentElement.scrollTop = document.body.scrollTop = limit;

        if (osTop <= y) clearInterval(timer);
    }, 10);
}

/**
 * 格式化Emoji v2
 * @version 170623 1.0
 * @version 170627 1.1 用span包裹纯文字
 * @param  {String} *content
 * @return {Object}
 */
function emojify(content, format) {
    if (!content) return null;

    const splitMark = '^^';
    const emojiMark = '^*^';

    return content
        .replace(
            /(\[|\{\:){1,2}[^[{]+(\]|\:\}){1,2}/g,
            match =>
                `${splitMark}${emojiMark}${match.replace(
                    /(\[)|(\])|(\{\:)|(\:\})/g,
                    ''
                )}${splitMark}`
        )
        .split(splitMark)
        .filter(item => item !== '')
        .map((item, index) => {
            if (item.indexOf(emojiMark) !== -1) {
                const filename = item.replace(emojiMark, '');
                let cls = 't-qq';
                let ext = 'png';

                if (filename.indexOf('_') !== -1) {
                    ext = 'gif';

                    if (
                        filename.indexOf('6_') !== -1 ||
                        filename.indexOf('7_') !== -1
                    ) {
                        cls = 't-emoji-bbs';
                    }
                }

                return (
                    <img
                        key={index}
                        className={cls}
                        src={`${Const.__EMOJI_PATH__}/${filename}.${ext}`}
                    />
                );
            }

            return <span key={index}>{format ? format(item) : item}</span>;
        });
}

/**
 * ActionSheet
 * @doc https://mobile.ant.design/components/action-sheet-cn/
 * @version 170601 1.0
 * @param  {Array}  *arrButtons 按钮组
 * @param  {Func}   *callback   回调，会根据按钮index统一调用
 * @param  {Object} other       其他参数
 */
function actionSheet(arrButtons, callback = Function.prototype, other = {}) {
    const options = [...arrButtons, '取消'];

    ActionSheet.showActionSheetWithOptions(
        {
            options,
            cancelButtonIndex: options.length - 1,
            destructiveButtonIndex: options.length - 2,
            maskClosable: true,
            ...other
        },
        buttonIndex => callback(buttonIndex)
    );
}

/**
 * 分享样式的ActionSheet
 * @version 170709 1.0
 * @param  {Array}  *arrButtons 按钮组
 * @param  {Func}   *callback   回调，会根据按钮index统一调用
 * @param  {Object} other       其他参数
 */
function shareActionSheet(
    arrButtons,
    callback = Function.prototype,
    other = {}
) {
    const options = [...arrButtons, ''];

    ActionSheet.showShareActionSheetWithOptions(
        {
            options,
            cancelButtonIndex: options.length - 1,
            destructiveButtonIndex: options.length - 2,
            maskClosable: true,
            ...other
        },
        buttonIndex => callback(buttonIndex)
    );
}

/**
 * 关闭ActionSheet
 * @version 170729 1.0
 */
function hideActionSheet() {
    ActionSheet.close();
}

/*==================== wx ====================*/
/**
 * 微信支付
 * @version 170814 1.0
 * @param {Object}   *data 后台返回的支付参数
 * @param {Function} cb
 */
function wxPay(data, cb = Function.prototype) {
    if (!Const.__WX__) return false;

    WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        {
            appId: data.appId, //公众号名称，由商户传入
            timeStamp: data.timeStamp, //时间戳，自1970年以来的秒数
            nonceStr: data.nonceStr, //随机串
            package: data.package,
            signType: 'MD5', //微信签名方式：
            paySign: data.paySign //微信签名
        },
        res => {
            //使用以上方式判断前端返回
            //微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            if (res.err_msg === 'get_brand_wcpay_request:ok') {
                cb(res);
            } else {
                console.log(res);
                light('支付取消或支付失败');
            }
        }
    );
}

/**
 * 微信更新分享信息
 * @version 180118 1.0
 * @return {Void}
 */
function wxShareUpdate(data = {}) {
    if (!Const.__WX__) return false;

    const { title, desc, imgUrl, link } = data;
    const config = {
        title: title || Const.__SHARE_TITLE__, //分享标题
        desc: desc || Const.__SHARE_DESC__,
        imgUrl: imgUrl || Const.__SHARE_IMG__, //分享图标
        link: link || window.location.href, //分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        jsApiList: Const.__JSAPI__
    };

    wx.ready(() => {
        wx.onMenuShareTimeline(config);
        wx.onMenuShareAppMessage(config);
        wx.onMenuShareQQ(config);
    });
}

/**
 * 微信关闭浏览器
 * @version 180227 1.0
 * @return {Void}
 */
function wxClose() {
    if (!Const.__WX__) return false;

    WeixinJSBridge.invoke('closeWindow', {}, res => {
        if (res.err_msg === 'close_window:error') {
            light('关闭窗口失败，请自行关闭');
        }
    });
}

/**
 * 微信隐藏分享
 * @version 180228 1.0
 * @return {Void}
 */
function wxHideMenuItems() {
    if (!Const.__WX__) return false;

    wx.ready(() => {
        wx.hideMenuItems({
            menuList: [
                'menuItem:share:appMessage',
                'menuItem:share:timeline',
                'menuItem:share:qq',
                'menuItem:share:QZone',
                'menuItem:share:weiboApp',
                'menuItem:copyUrl'
            ]
        });
    });
}

/*==================== router ====================*/
let _historyState = 'PUSH';
if (!Const.__SERVER__) {
    window.onpopstate = function(event) {
        _historyState = 'POP';
    };
}

/**
 * @version 171229 1.0
 * @return {Bool}   true为进，false为退
 */
function getPageTransition() {
    if (_historyState === 'PUSH' || _historyState === 'REPLACE') {
        return true;
    }

    return false;
}

export const Utils = {
    router: {
        ...Router,
        push: (...arg) => {
            _historyState = 'PUSH';
            Router.push(...arg);
        },
        replace: (...arg) => {
            _historyState = 'REPLACE';
            Router.replace(...arg);
        },
        back: (...arg) => {
            const lastPath = window.location.href;

            Router.back(...arg);

            setTimeout(() => {
                const currentPath = window.location.href;

                if (lastPath === currentPath) {
                    Router.push('/');
                }
            }, 0);
        }
    },

    /*==================== index ====================*/
    getUrlArgObject,
    bankCheck,
    cdn,
    checkDeviceType,
    checkLogin,
    date,
    deepCopy,
    fill,
    formatNumber,
    genSearch,
    getAppImgUrl,
    getAutoImgUrl,
    getBTLevel,
    getCharFilterEmoji,
    getCharLength,
    getImgUrl,
    getLabel,
    getMB,
    getPathname,
    getPlayTime,
    getQuery,
    getQueryStr,
    getRandomArrayElements,
    getRealDraftEntityMap,
    getTimestamp,
    getValue,
    goToPay,
    isObjectValueEqual,
    isPoster,
    isUC,
    lastDate,
    loaded,
    log,
    removeHD,
    removeHTMLTag,
    setHD,
    sleep,
    stringSplitToArray,
    strInsert,
    tree,
    trim,
    validate,

    /*==================== cache ====================*/
    lsGet,
    lsSet,

    /*==================== ui ====================*/
    actionSheet,
    emojify,
    getPageTransition,
    hideActionSheet,
    hideToast,
    info,
    light,
    loading,
    onAlert,
    onConfirm,
    onPrompt,
    scrollTo,
    shareActionSheet,
    success,

    /*==================== wx ====================*/
    wxClose,
    wxHideMenuItems,
    wxPay,
    wxShareUpdate
};
export default Utils;

if (!Const.__SERVER__) window.Utils = Utils;
