/**
 * const prefixCls = 'styles-62950856';
 * const images = '/static/images/src/event/guess/Detail';
 * @Author: qizc
 * @Date:   2018-02-03 11:51:59
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-30 14:18:24
 * @Path btWap \src\event\guess\Detail\_Carousel.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Carousel, ImgView } from 'components';
import Utils from 'utils';

const prefixCls = 'styles-62950856';

const _Carousel = (props, { $ }) => {
    const { type, children } = props;
    const { showImgView, imgViewIndex } = $.getState();
    const { image = '' } = $.getState('guessDetail');

    const data = String(image)
        .split(',')
        .filter(item => item !== '')
        .map(item => Utils.getAppImgUrl(item, 'scale'));

    return (
        <div className={prefixCls}>
            <Carousel
                data={data.map(item => ({
                    src: item
                }))}
                height="100vw"
                onImgClick={current =>
                    $.setState({
                        showImgView: true,
                        imgViewIndex: current
                    })}
            />
            <div className="children">{children}</div>
            {!!data.length && (
                <ImgView
                    show={showImgView}
                    current={imgViewIndex}
                    data={data}
                    onClose={() =>
                        $.setState({
                            showImgView: false
                        })}
                />
            )}

            <style jsx>{`
                .styles-62950856 {
                    position: relative;
                }
                .children {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }
            `}</style>
        </div>
    );
};

_Carousel.contextTypes = {
    $: PropTypes.object
};

export default observer(_Carousel);
