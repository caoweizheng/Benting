/**
 * const prefixCls = 'styles-89178428';
 * const images = '/static/images/src/person/_';
 * @Author: Jack
 * @Date:   2018-01-12 17:51:39
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:18:26
 * @Path btWap \src\person\_\ds.js
 */
'use strict';

import Const from 'const';
import Utils from 'utils';

export const images = Utils.cdn('/static/images/src/person/Index');
export const gradeData = [
    {
        id: 0,
        img: `${Const.__IMAGES__}/grade/0.png`,
        title: '初始会员',
        point: 0
    },
    {
        id: 1,
        img: `${Const.__IMAGES__}/grade/1.png`,
        title: '一星会员',
        point: 200
    },
    {
        id: 2,
        img: `${Const.__IMAGES__}/grade/2.png`,
        title: '二星会员',
        point: 600
    },
    {
        id: 3,
        img: `${Const.__IMAGES__}/grade/3.png`,
        title: '三星会员',
        point: 1200
    },
    {
        id: 4,
        img: `${Const.__IMAGES__}/grade/4.png`,
        title: '四星会员',
        point: 2000
    },
    {
        id: 5,
        img: `${Const.__IMAGES__}/grade/5.png`,
        title: '五星会员',
        point: 3000
    },
    {
        id: 6,
        img: `${Const.__IMAGES__}/grade/6.png`,
        title: '黄金会员',
        point: 4000
    },
    {
        id: 7,
        img: `${Const.__IMAGES__}/grade/7.png`,
        title: '白金会员',
        point: 6000
    },
    {
        id: 8,
        img: `${Const.__IMAGES__}/grade/8.png`,
        title: '钻石会员',
        point: 8000
    },
    {
        id: 9,
        img: `${Const.__IMAGES__}/grade/9.png`,
        title: '至尊会员',
        point: 10000
    }
];
export const userData = [
    {
        img: `${images}/my.png`,
        tit: '个人信息',
        href: '/person/user/info'
    },
    {
        img: `${images}/wp.png`,
        tit: '我的物品',
        href: '/person/goods'
    },
    {
        img: `${images}/gwc.png`,
        tit: '我的购物车'
    },
    {
        img: `${images}/fb.png`,
        tit: '我的发布'
    },
    {
        img: `${images}/dd.png`,
        tit: '我的订单',
        href: '/person/order'
    },
    {
        img: `${images}/xx.png`,
        tit: '我的消息'
    },
    {
        img: `${images}/sh.png`,
        tit: '我的售后',
        href: '/person/customer'
    }
];
export const powerData = [
    {
        img: `${images}/见面有礼_bg.jpg`,
        power: [],
        tit: '每个新用户仅一次领取机会',
        href: '/person/welfare/meet'
    },
    {
        img: `${images}/生日尊享_bg.jpg`,
        power: [
            {
                img: `${images}/l.png`,
                tit: '生日礼品'
            },
            {
                img: `${images}/j.png`,
                tit: '生日礼券'
            }
        ],
        href: '/person/welfare/birthday'
    },
    {
        img: `${images}/升级尊享_bg.jpg`,
        power: [
            {
                img: `${images}/l.png`,
                tit: '会员礼品'
            },
            {
                img: `${images}/j.png`,
                tit: '现金礼券'
            },
            {
                img: `${images}/y.png`,
                tit: '包邮卡'
            }
        ],
        href: '/person/welfare/rank_up'
    },
    {
        img: `${images}/超爽积分_bg.jpg`,
        power: [
            {
                img: `${images}/g.png`,
                tit: '积分购物'
            },
            {
                img: `${images}/j.png`,
                tit: '积分抽奖'
            },
            {
                img: `${images}/LV.png`,
                tit: '积分升级'
            }
        ],
        href: '/person/welfare/point'
    }
];
export const otherPowerData = [
    {
        img: `${images}/会员福利日_bg.jpg`,
        href: '/person/welfare/special'
    },
    {
        img: `${images}/尊享优先_bg.jpg`,
        href: '/person/welfare/event'
    },
    {
        img: `${images}/金牌客服_bg.jpg`,
        href: '/person/welfare/service'
    }
];
