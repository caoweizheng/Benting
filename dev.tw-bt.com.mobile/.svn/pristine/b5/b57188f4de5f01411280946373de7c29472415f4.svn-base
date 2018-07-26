/**
 * const prefixCls = 'styles-31728086';
 * const images = '/static/images/src/_/Layout/_TabBar';
 * @Author: Jack
 * @Date:   2017-12-29 09:23:43
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 14:25:54
 * @Path btWap \src\_\Layout\_TabBar\index.js
 */
'use strict';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { TabBar } from 'antd-mobile';
import { Img } from 'components';
import Utils from 'utils';
import Styles from 'styles';
const Item = TabBar.Item;

const prefixCls = 'styles-31728086';
const images = Utils.cdn('/static/images/common/tabBar');

export default class _TabBar extends React.Component {
    static contextTypes = {
        pathname: PropTypes.string
    };

    renderItem(item) {
        const { pathname } = this.context;
        const { title, icon, selectedIcon, path, needLogin, ...other } = item;

        let selected = pathname === path;
        if (pathname === '/index') {
            selected = path === '/';
        }

        return (
            <Item
                key={title}
                title={
                    <span className={selected ? '' : `${prefixCls}__item_initial`}>{title}</span>
                }
                icon={icon}
                selectedIcon={selectedIcon}
                selected={selected}
                onPress={() => {
                    if (needLogin && !Utils.checkLogin()) {
                        Utils.router.push('/login');
                    } else {
                        Utils.router.push(path);
                    }
                }}
                {...other}
            />
        );
    }

    render() {
        const { pathname } = this.context;
        const hidden = ![
            '/',
            'https://www.nidosport.com/discovery',
            '/bbs',
            '/video',
            '/person'
        ].includes(pathname);

        if (hidden) return null;

        const iconConfig = {
            size: '0.44rem',
            style: {
                backgroundColor: 'transparent'
            }
        };
        const menuDS = [
            {
                title: '本汀',
                icon: <Img src={`${images}/index.png`} {...iconConfig} />,
                selectedIcon: <Img size=".44rem" src={`${images}/index_a.png`} {...iconConfig} />,
                path: '/'
            },
            {
                title: '发现',
                icon: <Img src={`${images}/discovery.png`} {...iconConfig} />,
                selectedIcon: <Img src={`${images}/discovery_a.png`} {...iconConfig} />,
                path: 'https://www.nidosport.com/discovery'
            },
            {
                title: '汀吧',
                icon: <Img src={`${images}/bbs.png`} {...iconConfig} />,
                selectedIcon: <Img src={`${images}/bbs_a.png`} {...iconConfig} />,
                path: '/bbs'
            },
            {
                title: '视讯',
                icon: <Img src={`${images}/video.png`} {...iconConfig} />,
                selectedIcon: <Img src={`${images}/video_a.png`} {...iconConfig} />,
                path: '/video'
            },
            {
                title: '我的',
                icon: <Img src={`${images}/my.png`} {...iconConfig} />,
                selectedIcon: <Img src={`${images}/my_a.png`} {...iconConfig} />,
                path: '/person',
                needLogin: true
            }
        ];

        return (
            <div className={prefixCls}>
                <TabBar
                    unselectedTintColor="#d1d1d1"
                    tintColor={Styles.color_main_active}
                    hidden={hidden}
                >
                    {menuDS.map(item => this.renderItem(item))}
                </TabBar>

                <style jsx global>{`
                    .styles-31728086 {
                        position: fixed;
                        bottom: 0;
                        width: 100%;
                        height: 1rem;
                        transform: translateZ(0px);
                        z-index: ${Styles.z_tabbar};
                        overflow: hidden;
                    }
                    .${prefixCls}__item_initial {
                        color: #bbb !important;
                    }
                    .${prefixCls} .am-tab-bar-bar {
                        background-color: #f7f7f7 !important;
                        transform: translateZ(0);
                        transition: bottom 0.2s ease-in-out;
                    }
                    .${prefixCls} .am-tab-bar-tab {
                        background-color: #f7f7f7;
                    }
                    .${prefixCls} .am-tab-bar-tab-title {
                        font-size: ${Styles.font_xs};
                        color: #bbb;
                    }
                    .${prefixCls} .am-tab-bar-tab-badge.tab-dot {
                        height: 0.56rem;
                    }
                    .${prefixCls} .am-badge-dot {
                        background: ${Styles.color_info_danger};
                    }
                `}</style>
            </div>
        );
    }
}
