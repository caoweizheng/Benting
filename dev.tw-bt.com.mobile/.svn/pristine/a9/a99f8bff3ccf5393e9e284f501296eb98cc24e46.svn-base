/**
 * 
 * @Author: Jack
 * @Date:   2017-10-18 15:26:24
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 16:13:04
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import ReactPlayer from 'react-player';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'c-video';

export default class Video extends React.Component {
    state = {
        playing: false
    };
    played = false;

    renderControl() {
        const { fileSize, playSecond } = this.props;
        const { playing } = this.state;

        //播放中
        if (playing) return null;

        //微信环境 播放过后不再显示
        if (Const.__WX__ && this.played) return null;

        return (
            <div
                onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();

                    this.setState({
                        playing: !playing
                    });
                }}
            >
                {/*IOS 自带播放按钮；开发环境是PC模拟IOS，需要显示按钮*/}
                {(!Const.__IOS__ || Const.__DEV__) && (
                        <img src={`${images}/play.png`} />
                    )}
                {/*视频信息播放过后不再显示*/}
                {!this.played && (
                    <p>
                        <span>{fileSize ? Utils.getMB(fileSize) : '-'} MB</span>
                        <span className="pull-right">
                            {playSecond
                                ? Utils.getPlayTime(playSecond)
                                : '00:00'}
                        </span>
                    </p>
                )}

                <style jsx>{`
                    div {
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                    }
                    img {
                        position: absolute;
                        top: 48%;
                        left: 50%;
                        width: 0.96rem !important;
                        height: 0.96rem !important;
                        transform: translate(-50%, -50%);
                        opacity: 0.64;
                    }
                    p {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        padding: ${Styles.xs} ${Styles.wind};
                        font-size: 0.3rem;
                        color: #fff;
                        background-color: rgba(0, 0, 0, 0.3);
                    }
                `}</style>
            </div>
        );
    }

    render() {
        const {
            visibleInActive,
            src,
            poster,
            height = '57.5vw',
            fileSize,
            playSecond,
            placeholderPublish,
            className,
            ...other
        } = this.props;
        const { playing } = this.state;

        let _poster;
        if (poster === '') {
            _poster = placeholderPublish
                ? `${images}/1.png`
                : `${images}/2.png`;
        } else {
            _poster = Utils.getImgUrl(poster);

            if (
                _poster ===
                'https://api.nidosport.com/static/uploads/png/20170519/591e5f9e2c2bc_thumb.png'
            ) {
                _poster = placeholderPublish
                    ? `${images}/1.png`
                    : `${images}/2.png`;
            }
        }

        //通过class去控制是否显示-webkit-media-controls
        return (
            <div
                className={classNames(prefixCls, className, {
                    [`${prefixCls}_pause`]: !playing
                })}
            >
                <ReactPlayer
                    url={Utils.getImgUrl(src)}
                    playing={playing}
                    controls
                    playsinline
                    width="100%"
                    height={height}
                    fileConfig={{
                        attributes: {
                            poster: _poster,
                            preload: 'none'
                        }
                    }}
                    onPlay={() => {
                        this.played = true;
                        this.setState({ playing: true });
                    }}
                    onPause={() => this.setState({ playing: false })}
                    {...other}
                />
                {this.renderControl()}

                <style jsx global>{`
                    .c-video {
                    }
                    .${prefixCls} {
                        position: relative;
                        overflow: hidden;
                    }
                    .${prefixCls} video {
                        vertical-align: top;
                        background: #000;
                    }
                    .${prefixCls}_pause video::-webkit-media-controls {
                        display: none !important;
                    }
                `}</style>
            </div>
        );
    }
}
