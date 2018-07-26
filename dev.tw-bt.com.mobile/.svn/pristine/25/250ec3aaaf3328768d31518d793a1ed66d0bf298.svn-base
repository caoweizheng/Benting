/**
 * const prefixCls = 'styles-78646141';
 * const images = '/static/images/components/EmojiPicker';
 * @Author: Jack
 * @Date:   2017-12-22 09:34:12
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 16:06:55
 * @Path btWap \components\EmojiPicker\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex } from 'antd-mobile';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';
import { images, emojiDS, qqDS, tigerDS, onionDS } from './ds';

const prefixCls = 'c-emoji-picker';
const lsKey = `${Const.__LS_PREFIX__}${prefixCls}`;

export default class EmojiPicker extends React.Component {
    static propTypes = {
        onPick: PropTypes.func
    };

    static defaultProps = {
        onPick: Function.prototype //emoji => {}
    };

    state = {
        type: Utils.lsGet(lsKey, []).length === 0 ? 'emoji' : 'favor',
        favors: Utils.lsGet(lsKey, [])
    };

    pick = item => {
        const { onPick } = this.props;

        onPick(`[${item}]`);
        this.lsFavorSet(item);
    };

    pickBBS = item => {
        const { onPick } = this.props;

        onPick(`{:${item}:}`);
        this.lsFavorSet(item);
    };

    lsFavorSet = emoji => {
        const { type } = this.state;
        let favors = [...this.state.favors];

        if (favors.includes(emoji)) {
            if (favors.indexOf(emoji) === 0) return;

            favors = favors.filter(item => item !== emoji);
        }

        favors.unshift(emoji);

        //不多于24个，4排
        if (favors.length > 24) {
            favors.length = 24;
        }

        Utils.lsSet(lsKey, favors);

        //在喜爱里面选择时不更新排序
        if (type !== 'favor') {
            this.setState({ favors });
        }
    };

    onTabClick = type => {
        this.setState({ type });
    };

    renderFavorPage() {
        const { favors } = this.state;

        return (
            <Flex className={`${prefixCls}__items`} wrap="wrap">
                {favors.map(item => {
                    const ext = item.indexOf('_') === -1 ? 'png' : 'gif';
                    const isLg =
                        item.indexOf('6_') !== -1 || item.indexOf('7_') !== -1;

                    return (
                        <Flex
                            key={item}
                            className={classNames(`${prefixCls}__item`, {
                                [`${prefixCls}__item_lg`]: isLg
                            })}
                            onClick={() => {
                                if (ext === 'png') {
                                    this.pick(item);
                                } else {
                                    this.pickBBS(item);
                                }
                            }}
                        >
                            <img
                                src={`${Const.__EMOJI_PATH__}/${item}.${ext}`}
                            />
                        </Flex>
                    );
                })}

                <style jsx global>{`
                    .c-emoji-picker {
                    }
                    .${prefixCls}__items {
                        padding: ${Styles.sm} 0;
                    }
                    .${prefixCls}__item {
                        display: inline-block;
                        width: 16.66666%;
                        padding: ${Styles.xs} 0;
                        text-align: center;
                    }
                    .${prefixCls}__item img {
                        width: 0.48rem;
                        height: 0.48rem;
                        vertical-align: top;
                    }
                    .${prefixCls}__item_lg img {
                        width: 0.8rem;
                        height: 0.8rem;
                    }
                `}</style>
            </Flex>
        );
    }

    renderPage(data, type) {
        const isLg = type === 'tiger' || type === 'onion';
        const isEmoji = type === 'emoji';
        const ext = isEmoji ? 'png' : 'gif';

        return (
            <Flex className={`${prefixCls}__items`} wrap="wrap">
                {data.map(item => (
                    <span
                        key={item}
                        onClick={() =>
                            isEmoji ? this.pick(item) : this.pickBBS(item)}
                    >
                        <img
                            className={isLg ? 'lg' : ''}
                            src={`${Const.__EMOJI_PATH__}/${item}.${ext}`}
                        />
                    </span>
                ))}

                <style jsx>{`
                    .c-emoji-picker {
                    }
                    span {
                        display: inline-block;
                        width: 16.66666%;
                        padding: ${Styles.xs} 0;
                        text-align: center;
                    }
                    img {
                        width: 0.48rem;
                        height: 0.48rem;
                    }
                    .lg {
                        width: 0.8rem;
                        height: 0.8rem;
                    }
                `}</style>
                <style jsx global>{`
                    .c-emoji-picker {
                    }
                    .${prefixCls}__items {
                        padding: ${Styles.sm} 0;
                    }
                `}</style>
            </Flex>
        );
    }

    renderTab() {
        const { type } = this.state;
        const cls = `${prefixCls}__tab-item`;

        return (
            <Flex className={`${prefixCls}__tab`}>
                <div
                    className={classNames(cls, {
                        [`${cls}_active`]: type === 'favor'
                    })}
                    onClick={() => this.onTabClick('favor')}
                >
                    <img src={`${images}/favor.png`} />
                </div>
                <div
                    className={classNames(cls, {
                        [`${cls}_active`]: type === 'emoji'
                    })}
                    onClick={() => this.onTabClick('emoji')}
                >
                    <img src={`${images}/emoji.png`} />
                </div>
                <div
                    className={classNames(cls, {
                        [`${cls}_active`]: type === 'qq'
                    })}
                    onClick={() => this.onTabClick('qq')}
                >
                    <img src={`${images}/qq.png`} />
                </div>
                <div
                    className={classNames(cls, {
                        [`${cls}_active`]: type === 'tiger'
                    })}
                    onClick={() => this.onTabClick('tiger')}
                >
                    <img src={`${images}/tiger.png`} />
                </div>
                <div
                    className={classNames(cls, {
                        [`${cls}_active`]: type === 'onion'
                    })}
                    onClick={() => this.onTabClick('onion')}
                >
                    <img src={`${images}/onion.png`} />
                </div>

                <style jsx>{`
                    .c-emoji-picker {
                    }
                    img {
                        width: 0.48rem;
                        height: 0.48rem;
                    }
                `}</style>
                <style jsx global>{`
                    .c-emoji-picker {
                    }
                    .${prefixCls}__tab {
                        border-top: 0.01rem solid ${Styles.color_border};
                    }
                    .${prefixCls}__tab-item {
                        display: inline-block;
                        padding: ${Styles.sm} ${Styles.md};
                    }
                    .${prefixCls}__tab-item_active {
                        background-color: ${Styles.color_bg};
                    }
                `}</style>
            </Flex>
        );
    }

    render() {
        const { onPick, className, ...other } = this.props;
        const { type } = this.state;

        return (
            <div className={classNames(prefixCls, className)} {...other}>
                <div className="wrap">
                    {(() => {
                        if (type === 'favor') return this.renderFavorPage();
                        if (type === 'emoji')
                            return this.renderPage(emojiDS, 'emoji');
                        if (type === 'qq') return this.renderPage(qqDS, 'qq');
                        if (type === 'tiger')
                            return this.renderPage(tigerDS, 'tiger');
                        if (type === 'onion')
                            return this.renderPage(onionDS, 'onion');
                    })()}
                </div>
                {this.renderTab()}

                <style jsx>{`
                    .c-emoji-picker {
                    }
                    .wrap {
                        height: 3.28rem !important;
                        overflow-y: scroll;
                    }
                `}</style>
                <style jsx global>{`
                    .c-emoji-picker {
                        background-color: #fff;
                    }
                `}</style>
            </div>
        );
    }
}
