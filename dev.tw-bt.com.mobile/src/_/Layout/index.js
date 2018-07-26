/**
 * const prefixCls = 'styles-50327822';
 * const images = '/static/images/src/_/Layout';
 * @Author: Jack
 * @Date:   2018-01-02 09:09:46
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-17 12:13:18
 * @Path btWap \src\_\Layout\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Page } from 'components';
import _Header from './_Header';
import _TabBar from './_TabBar';
import _UI from './_UI';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';

export default class Layout extends React.Component {
    static contextTypes = {
        asPath: PropTypes.string
    };

    renderHeader() {
        const { title, hide, hideHeader, hideBack, hideLogo } = this.props;

        if (hide) {
            return null;
        }

        if (hideHeader) {
            return (
                <div>
                    <img
                        className="img-back"
                        src={`${Const.__IMAGES__}/back.png`}
                        onClick={() => Utils.router.back()}
                    />
                    <img
                        className="img-home"
                        src={`${Const.__IMAGES__}/home.png`}
                        onClick={() => Utils.router.push('/')}
                    />

                    <style jsx>{`
                        .styles-50327822 {
                        }
                        img {
                            width: 0.64rem;
                            height: 0.64rem;
                            position: absolute;
                            z-index: ${Styles.z_layout_icon};
                            top: ${Styles.space};
                            opacity: 0.8;
                        }
                        .img-back {
                            left: ${Styles.wind};
                        }
                        .img-home {
                            right: ${Styles.wind};
                        }
                    `}</style>
                </div>
            );
        }

        return (
            <_Header title={title} hideBack={hideBack} hideLogo={hideLogo} />
        );
    }

    render() {
        const { asPath } = this.context;
        const {
            className,
            wrapClassName,
            wrapStyle,
            title,
            children
        } = this.props;

        if (title && Const.__CLIENT__) document.title = title;

        //UC浏览器需要加max-height，否则字体会被无故放大
        return (
            <Page
                className={classNames(className, {
                    uc: Utils.isUC()
                })}
            >
                {this.renderHeader()}
                <div
                    key={asPath}
                    className={wrapClassName}
                    style={{
                        position: 'relative',
                        ...wrapStyle
                    }}
                >
                    {children}
                </div>
                <_TabBar />
                <_UI />
            </Page>
        );
    }
}
