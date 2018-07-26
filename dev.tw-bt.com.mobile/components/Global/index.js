/**
 * const prefixCls = 'styles-19820819';
 * const images = '/static/images/components/Global';
 * @Author: Jack
 * @Date:   2017-10-12 10:10:29
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-28 10:14:02
 * @Path nidosport@next \components\Global\index.js
 */
'use strict';

import Styles from 'styles';
import Utils from 'utils';

const images = Utils.cdn('/static/images/components/Global');

export default () => (
    <div>
        {/*reset*/}
        <style jsx global>{`
            * {
                padding: 0;
                margin: 0;
                outline: 0;
                box-sizing: border-box;
                -webkit-overflow-scrolling: touch;
                -webkit-font-smoothing: antialiased;
            }
            html,
            body,
            font,
            input,
            select,
            button,
            p,
            textarea {
                font-family: ${Styles.font_family};
                font-size: ${Styles.font_md};
            }
            html,
            body {
                width: 100%;
            }
            body {
                color: #333;
                overflow-x: hidden;
                background: ${Styles.color_bg};
                -webkit-touch-callout: none;
                -webkit-text-size-adjust: none;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-user-select: none;
            }
            a {
                color: inherit;
            }
            /* 在X5新内核Blink中，在排版页面的时候，会主动对字体进行放大，会检测页面中的主字体，
               当某一块字体在我们的判断规则中，认为字号较小，并且是页面中的主要字体，并且是页面中的主要字体，
               就会采取主动放大的操作。然而这不是我们想要的，可以采取给最大高度解决。*/
            .uc div,
            .uc p,
            .uc span,
            .uc a,
            .uc button,
            .uc input,
            .uc textarea,
            .uc img,
            .uc i,
            .uc ul,
            .uc li,
            .uc form,
            .uc label {
                max-height: 10000000px;
            }
        `}</style>

        {/*antd reset*/}
        <style jsx global>{`
            /*==================== antd global reset ====================*/
            /*========== Button ==========*/
            //171231
            .am-button {
                border-radius: 0;
            }

            /*========== Toast ==========*/
            //170527 偏上一点
            .am-toast:not(.am-toast-nomask) .am-toast-notice {
                margin-top: -2.2rem;
            }
            .am-toast:not(.am-toast-nomask) .am-toast-notice .am-toast-text {
                padding: 0.4rem 0.64rem;
                background-color: rgba(58, 58, 58, 0.8);
            }

            //170718 无遮罩轻提示
            .am-toast.am-toast-nomask {
                position: fixed;
                top: 86%;
            }
            .am-toast.am-toast-nomask .am-toast-text {
                background-color: rgba(58, 58, 58, 0.8);
            }

            /*========== List ==========*/
            //170517 取消点击效果
            .am-list-item-active {
                background-color: #fff !important;
            }

            //180112 renderHeader
            .am-list-header {
                padding: 0.22rem 0.3rem 0.22rem 0.2rem;
                background: transparent;
            }
            .am-list-footer {
                padding: 0.22rem 0.3rem 0.22rem 0.2rem;
                background: ${Styles.color_bg};
            }

            //171231 List.Item
            .am-list-body:before,
            .am-list-body:after {
                display: none !important;
            }
            .am-list-item {
                padding-left: ${Styles.wind} !important;
            }
            .am-list-line:after {
                display: none !important;
            }
            .am-list-line {
                padding-right: ${Styles.wind} !important;
                border-bottom: 0.01rem solid ${Styles.color_border} !important;
            }
            .am-list-body > .am-list-item:nth-last-child(1) .am-list-line {
                border-bottom: 0 !important;
            }
            .am-list-content {
                padding-top: 0.24rem !important;
                padding-bottom: 0.24rem !important;
            }

            /*========== ActionSheet ==========*/
            //170628 Android 7.0风格
            .am-action-sheet {
                padding: ${Styles.sm};
                background-color: transparent;
            }
            .am-action-sheet-button-list-item {
                background-color: #fff;
            }
            .am-action-sheet-button-list-item:first-child {
                border-top-left-radius: ${Styles.radius_xs};
                border-top-right-radius: ${Styles.radius_xs};
            }
            .am-action-sheet-button-list-item:nth-last-child(2) {
                border-bottom-left-radius: ${Styles.radius_xs};
                border-bottom-right-radius: ${Styles.radius_xs};
            }
            .am-action-sheet-button-list-item:last-child {
                border-radius: ${Styles.radius_xs};
            }
            .am-action-sheet-cancel-button-mask {
                display: none;
            }

            //170709 ShareActionSheet
            .am-action-sheet.am-action-sheet-share {
                padding: ${Styles.sm};
                background-color: transparent;
            }
            .am-action-sheet.am-action-sheet-share .am-action-sheet-message {
                margin: 0;
                padding: 0.32rem;
                background-color: ${Styles.color_bg};
                border-top-left-radius: ${Styles.radius_xs};
                border-top-right-radius: ${Styles.radius_xs};
            }
            .am-action-sheet.am-action-sheet-share .am-action-sheet-share-list {
                border-top: 0.01rem solid ${Styles.color_border};
                background-color: ${Styles.color_bg};
                border-bottom-left-radius: ${Styles.radius_xs};
                border-bottom-right-radius: ${Styles.radius_xs};
            }
            .am-action-sheet.am-action-sheet-share
                .am-action-sheet-share-list-item:last-child {
                opacity: 0;
                width: 0.08px;
                overflow: hidden;
            }
            .am-action-sheet.am-action-sheet-share
                .am-action-sheet-share-cancel-button {
                margin-top: ${Styles.sm};
                border-radius: ${Styles.radius_xs};
            }

            /*========== InputItem ==========*/
            //170711 金额键盘动画统一
            .am-number-keyboard-wrapper {
                transition-duration: 0.3s;
                transition-timing-function: ease-in-out;
            }

            /*========== Modal ==========*/
            //170802 全屏modal
            .am-modal-wrap {
                z-index: ${Styles.z_modal_wrap};
            }
            //180104 confirm好的按钮
            .am-modal-button-group-h .am-modal-button {
                color: ${Styles.color_primary};
            }
            .am-modal-input input {
                border-radius: 0.04rem;
            }

            /*========== Search ==========*/
            //170829
            .am-search {
                background-color: #fff !important;
            }
            .am-search-input {
                background-color: ${Styles.color_bg} !important;
            }
            .am-search-input-start .am-search-input-synthetic-ph {
                width: 2.56rem !important;
                padding-left: ${Styles.wind} !important;
            }
            .am-search-clear-show {
                margin-top: 0.12rem;
                margin-right: ${Styles.wind};
            }

            /*========== Badge ==========*/
            .am-badge-text {
                background: ${Styles.color_danger};
            }
        `}</style>

        {/*utils*/}
        <style jsx global>{`
            /*========== other ==========*/
            .user-select {
                -webkit-user-select: text !important;
            }

            /*========== layout ==========*/
            .pull-right {
                float: right;
            }

            /*========== padding ==========*/
            .p-sw {
                padding: ${Styles.space} ${Styles.wind} !important;
            }
            .p-w {
                padding: 0 ${Styles.wind} !important;
            }

            /*========== margin ==========*/
            .mt-d {
                margin-top: ${Styles.distance} !important;
            }
            .mt-xs {
                margin-top: ${Styles.xs} !important;
            }
            .mt-sm {
                margin-top: ${Styles.sm} !important;
            }
            .mt-md {
                margin-top: ${Styles.md} !important;
            }
            .mt-lg {
                margin-top: ${Styles.lg} !important;
            }

            .mr-xs {
                margin-right: ${Styles.xs} !important;
            }
            .mr-sm {
                margin-right: ${Styles.sm} !important;
            }

            .mb-d {
                margin-bottom: ${Styles.distance} !important;
            }
            .mb-xs {
                margin-bottom: ${Styles.xs} !important;
            }
            .mb-sm {
                margin-bottom: ${Styles.sm} !important;
            }
            .mb-md {
                margin-bottom: ${Styles.md} !important;
            }
            .mb-lg {
                margin-bottom: ${Styles.lg} !important;
            }

            .ml-xxs {
                margin-left: ${Styles.xxs} !important;
            }
            .ml-xs {
                margin-left: ${Styles.xs} !important;
            }
            .ml-sm {
                margin-left: ${Styles.sm} !important;
            }
            .ml-md {
                margin-left: ${Styles.md} !important;
            }
            .ml-lg {
                margin-left: ${Styles.lg} !important;
            }

            /*========== text ==========*/
            .text-center {
                text-align: center !important;
            }
            .text-right {
                text-align: right !important;
            }
            .text-xxs {
                font-size: ${Styles.font_xxs} !important;
            }
            .text-xs {
                font-size: ${Styles.font_xs} !important;
            }
            .text-sm {
                font-size: ${Styles.font_sm} !important;
            }
            .text-md {
                font-size: ${Styles.font_md} !important;
            }
            .text-lg {
                font-size: ${Styles.font_lg} !important;
            }
            .text-xl {
                font-size: ${Styles.font_xl} !important;
            }
            .text-xxl {
                font-size: ${Styles.font_xxl} !important;
            }
            .text-main {
                color: ${Styles.color_main};
            }
            .text-primary {
                color: ${Styles.color_primary};
            }
            .text-success {
                color: ${Styles.color_success};
            }
            .text-warning {
                color: ${Styles.color_warning};
            }
            .text-danger {
                color: ${Styles.color_danger};
            }
            .text-info-danger {
                color: ${Styles.color_info_danger};
            }
            .text-title {
                color: ${Styles.color_font_title};
            }
            .text-desc {
                color: ${Styles.color_font_desc};
            }
            .text-sub {
                color: ${Styles.color_font_sub};
            }
            .text-light {
                color: #aaa;
            }
            .text-void {
                color: #fff;
            }
            .text-bold {
                font-weight: ${Styles.font_bold};
            }
            .text-clamp-1 {
                line-height: 1.4;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                word-wrap: break-word;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
            .text-clamp-2 {
                line-height: 1.4;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                word-wrap: break-word;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .text-del {
                text-decoration: line-through;
            }

            .btn-primary {
                color: #fff;
                background-color: ${Styles.color_primary};
            }
            .btn-primary.am-button-active {
                background-color: #4362d6 !important;
            }
        `}</style>

        {/*tool*/}
        <style jsx global>{`
            //180626
            .t-label_required {
                display: inline-block;
                position: relative;
            }
            .t-label_required:after {
                content: '*';
                display: inline-block;
                position: absolute;
                top: 50%;
                margin-left: .08rem;
                margin-top: -.2rem;
                font-family: SimSun;
                font-size: .24rem;
                line-height: .34rem;
                color: ${Styles.color_info_danger};
            }

            //180202 组ListView
            .t-list-view-section .am-list-body {
                background: transparent;
            }
            .t-list-view-section .list-view-section-body:not(:last-child) {
                margin-bottom: ${Styles.distance};
            }
            .t-list-view-section .list-view-section-body .am-list-item:last-child .am-list-line:after {
                display: none;
            }

            //180528
            .t-hide {
                display: none;
            }

            //180202
            .t-disabled {
                color: #ccc !important;
            }

            //171229 间隔线
            .t-line {
                width: 94%;
                margin-left: 3%;
                margin-top: 0.56rem;
                margin-bottom: 0.4rem;
                border-bottom: 0.01rem solid ${Styles.color_border};
            }

            //170918 图片
            .t-img {
                display: inline-block;
                vertical-align: top;
                outline-width: 0;
            }

            //171020 背景
            .t-bg {
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
            }

            //170602 使元素有点击效果
            .t-active {
                transition: all 0.1s ease-in-out;
            }
            .t-active:active {
                opacity: 0.68;
            }

            //170524 Emoji样式
            .t-emoji {
                width: .44rem !important;
                height: .44rem !important;
                vertical-align: bottom !important;
            }

            //170620 qq表情样式
            .t-qq {
                width: .48rem !important;
                height: .48rem !important;
                vertical-align: bottom !important;
            }

            //170620 老虎洋葱样式
            .t-emoji-bbs {
                min-width: 1rem;
                min-height: 1rem;
                margin-top: ${Styles.xs};
                margin-right: .02rem;
                vertical-align: bottom !important;
            }

            //170531 页面偏上居中
            .t-center {
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
            }

            //170609 表单项Label必填样式
            .t-required {
                display: inline-block;
                position: relative;
            }
            .t-required:after {
                content: '*';
                display: inline-block;
                position: absolute;
                top: 50%;
                margin-left: 0.08rem;
                margin-top: -0.2rem;
                font-family: SimSun;
                font-size: 0.24rem;
                line-height: 0.34rem;
                color: ${Styles.color_info_danger};
            }

            //170601 仿表单项的错误图标
            .t-error {
                height: 0.42rem;
                width: 0.42rem;
                margin-left: 0.12rem;
                background-image: url('${images}/error.png');
                background-size: 0.42rem auto;
            }

            //170625 模态框的Input样式
            .t-modal-input {
                width: 98%;
                padding: ${Styles.xs} ${Styles.sm};
                margin: 0;
                font-size: ${Styles.font_sm};
                border: 0.01rem solid ${Styles.color_border};
                border-radius: ${Styles.radius_xs};
            }

            //170914 fixed底按钮
            .t-fixed-btn {
                position: fixed !important;
                bottom: 0;
                left: 0;
                right: 0;
                border-radius: 0;
            }

            //180106 圆角小按钮
            .t-btn-sm {
                padding: 0 .24rem;
                height: .48rem;
                line-height: .48rem;
                font-size: ${Styles.font_xs};
            }
            .t-btn-round {
                min-width: 1.6rem;
                font-size: ${Styles.font_sm};
                border-radius: 0.4rem;
            }
            .t-btn-round-sm {
                padding: 0 .24rem;
                height: .48rem;
                line-height: .48rem;
                font-size: ${Styles.font_xs};
                border-radius: 0.4rem;
            }

            //170918 列表项间隔
            .t-antd-list-split .am-list-body {
                background-color: transparent;
                border-top: 0;
            }
            .t-antd-list-split .am-list-body:after {
                border-bottom: 0;
            }
            .t-antd-list-split .am-list-body:first-child {
                margin-top: ${Styles.distance};
            }
            .t-antd-list-split .am-list-item {
                margin-top: ${Styles.distance};
                border-top: 0.01rem solid ${Styles.color_border} !important;
                border-bottom: 0.01rem solid ${Styles.color_border} !important;
            }
            .t-antd-list-split .am-list-item:first-child {
                margin-top: 0;
            }
            .t-antd-list-split .am-list-body div:not(:last-child) .am-list-line:after {
                content: initial;
                border-bottom: 0;
            }
            .t-antd-list-split .am-list-line.am-list-line-wrap {
                border-bottom: 0 !important;
            }

            //180102
            .t-antd-list-md .am-list-content {
                padding-top: .36rem !important;
                padding-bottom: .36rem !important;
            }
        `}</style>
    </div>
);
