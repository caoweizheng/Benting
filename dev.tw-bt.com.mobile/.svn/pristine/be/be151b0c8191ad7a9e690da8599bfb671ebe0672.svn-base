/**
 * const prefixCls = 'styles-95327509';
 * const images = '/static/images/components/AffixTabs';
 * @Author: Jack
 * @Date:   2017-12-06 17:23:56
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-04 14:25:18
 * @Path nidosport@next \components\AffixTabs\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { StickyContainer, Sticky } from 'react-sticky';
import { Tabs } from 'antd-mobile';
import Styles from 'styles';

const prefixCls = 'c-affix-tabs';

const AffixTabs = props => {
    const { tabs = [], className, children, ...other } = props;

    return (
        <StickyContainer
            className={classNames(prefixCls, {
                [`${prefixCls}_2`]: tabs.length === 2,
                [`${prefixCls}_3`]: tabs.length === 3,
                [`${prefixCls}_4`]: tabs.length === 4,
                [`${prefixCls}_5`]: tabs.length === 5
            })}
        >
            <Tabs
                tabs={tabs}
                renderTabBar={props => (
                    <Sticky>
                        {({ style }) => (
                            <div style={{ ...style, zIndex: 1 }}>
                                <Tabs.DefaultTabBar {...props} />
                            </div>
                        )}
                    </Sticky>
                )}
                destroyInactiveTab
                animated={false}
                swipeable={false}
                prerenderingSiblingsNumber={0}
                {...other}
            >
                {children}
            </Tabs>

            <style jsx global>{`
                .c-affix-tabs {
                }
                .${prefixCls} .am-tabs-default-bar-tab {
                    height: 0.96rem;
                    line-height: 0.96rem;
                    color: ${Styles.color_font_sub};
                    transition: color 0.3s cubic-bezier(0.86, 0, 0.07, 1);
                }
                .${prefixCls} .am-tabs-default-bar-tab-active {
                    color: ${Styles.color_main};
                }
                .${prefixCls} .am-tabs-default-bar-underline {
                    width: 6% !important;
                    height: 0.06rem;
                    margin-bottom: 0.16rem;
                    background-color: ${Styles.color_primary};
                    border: 0;
                    border-radius: ${Styles.radius_xs};
                }
                .${prefixCls} .am-tabs-default-bar-content {
                    border-bottom: 0.01rem solid ${Styles.color_border};
                }
                .${prefixCls}_2 .am-tabs-default-bar-underline {
                    margin-left: 22%;
                }
                .${prefixCls}_3 .am-tabs-default-bar-underline {
                    margin-left: 13.66667%;
                }
                .${prefixCls}_4 .am-tabs-default-bar-underline {
                    margin-left: 9.5%;
                }
                .${prefixCls}_5 .am-tabs-default-bar-underline {
                    margin-left: 7%;
                }
            `}</style>
        </StickyContainer>
    );
};

export default AffixTabs;
