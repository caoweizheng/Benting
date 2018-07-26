/**
 * const prefixCls = 'styles-66316483';
 * const images = '/static/images/components/ListView';
 * ListView 长列表
 * @Doc: https://mobile.ant.design/components/list-view-cn/
 * @Author: Jack
 * @Date:   2017-12-22 09:34:12
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-08 15:14:07
 * @Path btWap \components\ListView\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex, ListView, RefreshControl, ActivityIndicator } from 'antd-mobile';
import Icon from '../Icon';
import Empty from '../Empty';
import Const from 'const';
import Styles from 'styles';

const prefixCls = 'c-list-view';

export default class _ListView extends React.Component {
    static propsTypes = {
        hideFooter: PropTypes.bool,
        data: PropTypes.object,
        section: PropTypes.array,
        refresh: PropTypes.bool,
        scrollTop: PropTypes.Number,
        renderEmpty: PropTypes.any,
        onEndReached: PropTypes.func,
        onRefresh: PropTypes.func,
        onUnmount: PropTypes.func
    };

    static defaultProps = {
        hideFooter: false,
        data: Const.__EMPTY_LIST__,
        section: [],
        refresh: false,
        scrollTop: 0,
        renderEmpty: <Empty />,
        onEndReached: Function.prototype,
        onRefresh: Function.prototype,
        onUnmount: Function.prototype //scrollTop => {}
    };

    ref;
    dataSource;
    getSectionData;
    getRowData;
    createDS;

    constructor(props) {
        super(props);

        const { data, section } = props;

        //构造有section的dataSource
        if (section.length) {
            this.getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
            this.getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
            this.dataSource = new ListView.DataSource({
                getRowData: this.getRowData,
                getSectionHeaderData: this.getSectionHeaderData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            });
            this.createDS = (data, section) => {
                const dataBlob = {};
                const sectionIDs = [];
                const rowIDs = [];

                section.forEach((item, index) => {
                    sectionIDs.push(item.title);
                    dataBlob[item.title] = item.title;
                    rowIDs[index] = [];
                });

                data.forEach((item, index) => {
                    dataBlob[index] = item;

                    section.forEach((i, idx) => {
                        if (i.filter(item)) {
                            rowIDs[idx].push(index);
                            return false;
                        }
                    });
                });

                return this.dataSource.cloneWithRowsAndSections(
                    dataBlob,
                    sectionIDs,
                    rowIDs
                );
            };

            //没有section，构造普通dataSource
        } else {
            this.dataSource = new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            });
            this.createDS = data => {
                return this.dataSource.cloneWithRows(data);
            };
        }

        this.state = {
            dataSource: section.length
                ? this.createDS(data.list.slice(), section)
                : this.createDS(data.list.slice()),

            hasMore: data.pageinfo.pagetotal > data.pageinfo.page, //数据是否还有更多
            isLoading: false, //数据是否请求中
            refreshing: false //是否下拉刷新中
        };
    }

    componentDidMount() {
        const { scrollTop } = this.props;

        //当props存在scrollTop，就设置初始滚动高度
        if (scrollTop) {
            this.ref.refs.listview.scrollTo(0, scrollTop);
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('data' in nextProps) {
            const { data, section } = nextProps;
            const { dataSource } = this.state;

            this.setState({
                dataSource: section.length
                    ? this.createDS(data.list.slice(), section)
                    : this.createDS(data.list.slice()),

                hasMore: data.pageinfo.pagetotal > data.pageinfo.page,
                isLoading: false,
                refreshing: false
            });
        }
    }

    componentWillUnmount() {
        const { refresh, onUnmount } = this.props;

        //zScroller容器
        //回调domScroller的滚动高度
        if (refresh) {
            onUnmount(
                Math.floor(
                    this.ref.refs.listview.refs.listviewscroll.domScroller
                        .scroller.__scrollTop
                )
            );

            //body容器
        } else {
            onUnmount(Math.floor(document.body.scrollTop));
        }
    }

    onEndReached = () => {
        const { onEndReached } = this.props;
        const { hasMore, isLoading } = this.state;

        if (!hasMore || isLoading) return;

        this.setState(
            {
                isLoading: true
            },
            () => onEndReached()
        );
    };

    onRefresh = () => {
        const { onRefresh } = this.props;

        this.setState(
            {
                isLoading: true,
                refreshing: true
            },
            () => onRefresh()
        );
    };

    renderFooter() {
        const { refresh } = this.props;
        const { hasMore, isLoading } = this.state;

        let text = '往下加载更多';
        if (isLoading) {
            text = '内容加载中';
        } else if (!hasMore) {
            text = '已经没有更多内容啦';
        }

        return (
            <Flex
                className={classNames({
                    [`${prefixCls}__footer`]: true,
                    [`${prefixCls}__footer_refresh`]: refresh
                })}
                justify="center"
            >
                <Icon type={require('svg/smile.svg')} size="xxs" />
                <span className="ml-xs text-xs">{text}</span>
            </Flex>
        );
    }

    render() {
        const {
            hideFooter,
            data,
            section,
            renderEmpty,
            renderBodyComponent,
            renderRow,
            renderSectionHeader,
            refresh,
            onEndReached,
            className,
            ...other
        } = this.props;
        const { dataSource, refreshing } = this.state;

        //没有数据显示Empty
        if (data.list.length === 0) {
            if (data._loaded) {
                return (
                    <div className={classNames(prefixCls, className)}>
                        {renderEmpty}
                    </div>
                );
            } else {
                return (
                    <div className={classNames(prefixCls, className)}>
                        <Empty>数据加载中...</Empty>
                    </div>
                );
            }
        }

        //170527 对ListView首次渲染表现进行优化
        //假如初始数据少于8条，initialListSize和pageSize都为8
        let initialListSize, pageSize;
        if (data.list.slice().length < Const.__LIMIT__ + 1 && !data._hasMore) {
            initialListSize = Const.__LIMIT__;
            pageSize = Const.__LIMIT__;

            //假如初始数据等于或多于8条，initialListSize应比pageSize小，不然会导致无限调用onEndReached
        } else {
            initialListSize = data.list.slice().length - 1;
            pageSize = data.list.slice().length;
        }

        return (
            <div>
                <ListView
                    ref={ref => (this.ref = ref)}
                    className={classNames(prefixCls, className, {
                        [`${prefixCls}_hide-footer`]: hideFooter,
                        ['t-list-view-section']: !!section.length
                    })}
                    dataSource={dataSource}
                    initialListSize={initialListSize}
                    pageSize={pageSize}
                    renderBodyComponent={renderBodyComponent}
                    renderFooter={() => this.renderFooter()}
                    renderRow={renderRow}
                    renderSectionHeader={
                        section.length ? renderSectionHeader : undefined
                    }
                    scrollEventThrottle={50}
                    scrollRenderAheadDistance={0}
                    style={refresh ? { height: '100vh' } : undefined}
                    useBodyScroll={refresh ? undefined : true}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={200}
                />

                <style jsx global>{`
                    .c-list-view {
                    }
                    .${prefixCls} .am-list-view-scrollview-content {
                        width: 100vw;
                    }
                    .${prefixCls} .am-list-footer {
                        padding: 0;
                    }
                    .${prefixCls} .am-refresh-control-ptr {
                        transform: translateY(-40%);
                    }
                    .${prefixCls}__footer {
                        padding: ${Styles.md} 0 0;
                        text-align: center;
                        font-size: ${Styles.font_xs};
                        color: #b8b8b8;
                        //background-color: ${Styles.color_bg};
                    }
                    .${prefixCls}__footer.${prefixCls}__footer_refresh {
                        margin-bottom: 1.4rem;
                    }
                    .${prefixCls}__footer svg {
                        width: ${Styles.font_xs};
                        height: ${Styles.font_xs};
                        margin-right: ${Styles.xs};
                    }
                    .${prefixCls}_hide-footer .c-list-view__footer {
                        display: none;
                    }
                    .${prefixCls} .am-list-item:last-child .am-list-line {
                        border-bottom: 0 !important;
                    }
                `}</style>
            </div>
        );
    }
}
