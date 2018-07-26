/**
 * 
 * @Author: Jack
 * @Date:   2017-06-26 14:08:47
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-29 12:05:54
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import Animate from 'rc-animate';

const prefixCls = 'c-animate';

const _Animate = props => {
    const { type = 'fade', className, children } = props;

    return (
        <div>
            <Animate
                className={classNames(prefixCls, className)}
                transitionName={type}
            >
                {children}
            </Animate>

            <style jsx global>{`
                .c-animate {
                }
                
                /*==================== top ====================*/
                .${prefixCls} .top-enter,
                .${prefixCls} .top-appear,
                .${prefixCls} .top-leave {
                    animation-duration: 0.3s;
                    animation-fill-mode: both;
                    animation-timing-function: ease-in-out;
                    animation-play-state: paused;
                }
                .${prefixCls} .top-enter,
                .${prefixCls} .top-appear {
                    transform: translate3d(0, -100%, 0);
                }
                .${prefixCls} .top-leave {
                    transform: translate3d(0, 0, 0);
                }
                .${prefixCls} .top-enter.top-enter-active,
                .${prefixCls} .top-appear.top-appear-active {
                    animation-name: topin;
                    animation-play-state: running;
                }
                .${prefixCls} .top-leave.top-leave-active {
                    animation-name: topout;
                    animation-play-state: running;
                }
                @keyframes topin {
                    0% {
                        transform: translate3d(0, -100%, 0);
                    }
                    100% {
                        transform: translate3d(0, 0, 0);
                    }
                }
                @keyframes topout {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(0, -100%, 0);
                    }
                }

                /*==================== bottom ====================*/
                .${prefixCls} .bottom-enter,
                .${prefixCls} .bottom-appear,
                .${prefixCls} .bottom-leave {
                    animation-duration: 0.3s;
                    animation-fill-mode: both;
                    animation-timing-function: ease-in-out;
                    animation-play-state: paused;
                }
                .${prefixCls} .bottom-enter,
                .${prefixCls} .bottom-appear {
                    transform: translate3d(0, 100%, 0);
                }
                .${prefixCls} .bottom-leave {
                    transform: translate3d(0, 0, 0);
                }
                .${prefixCls} .bottom-enter.bottom-enter-active,
                .${prefixCls} .bottom-appear.bottom-appear-active {
                    animation-name: bottomin;
                    animation-play-state: running;
                }
                .${prefixCls} .bottom-leave.bottom-leave-active {
                    animation-name: bottomout;
                    animation-play-state: running;
                }
                @keyframes bottomin {
                    0% {
                        transform: translate3d(0, 100%, 0);
                    }
                    100% {
                        transform: translate3d(0, 0, 0);
                    }
                }
                @keyframes bottomout {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(0, 100%, 0);
                    }
                }

                /*==================== left ====================*/
                .${prefixCls} .left-enter,
                .${prefixCls} .left-appear,
                .${prefixCls} .left-leave {
                    animation-duration: 0.3s;
                    animation-fill-mode: both;
                    animation-timing-function: ease-in-out;
                    animation-play-state: paused;
                }
                .${prefixCls} .left-enter,
                .${prefixCls} .left-appear {
                    transform: translate3d(100%, 0, 0);
                }
                .${prefixCls} .left-leave {
                    transform: translate3d(0, 0, 0);
                }
                .${prefixCls} .left-enter.left-enter-active,
                .${prefixCls} .left-appear.left-appear-active {
                    animation-name: leftin;
                    animation-play-state: running;
                }
                .${prefixCls} .left-leave.left-leave-active {
                    animation-name: leftout;
                    animation-play-state: running;
                }
                @keyframes leftin {
                    0% {
                        transform: translate3d(100%, 0, 0);
                    }
                    100% {
                        transform: translate3d(0, 0, 0);
                    }
                }
                @keyframes leftout {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(100%, 0, 0);
                    }
                }

                /*==================== fade ====================*/
                .${prefixCls} .fade-enter,
                .${prefixCls} .fade-appear,
                .${prefixCls} .fade-leave {
                    animation-duration: 0.3s;
                    animation-fill-mode: both;
                    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
                    animation-play-state: paused;
                }
                .${prefixCls} .fade-enter,
                .${prefixCls} .fade-appear {
                    opacity: 0;
                }
                .${prefixCls} .fade-enter.fade-enter-active,
                .${prefixCls} .fade-appear.fade-appear-active {
                    animation-name: fadein;
                    animation-play-state: running;
                }
                .${prefixCls} .fade-leave.fade-leave-active {
                    animation-name: fadeout;
                    animation-play-state: running;
                }
                @keyframes fadein {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
                @keyframes fadeout {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default _Animate;
