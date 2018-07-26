/**
 * const prefixCls = 'styles-95721327';
 * const images = '/static/images/src/shop/miaosha/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 13:46:56
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 12:27:20
 * @Path btWap \src\shop\miaosha\Detail\_Carousel.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Carousel, ImgView } from 'components';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-95721327';

const _Carousel = (props, { $ }) => {
    const { type, children } = props;
    const { showImgView, imgViewIndex } = $.getState();
    const { imgs = '', imglist = '' } = $.getState('miaoshaDetail');

    const imgArr = [imgs, ...imglist.split(',')];
    const data = imgArr
        .filter(item => item !== '')
        .map(item => Utils.getImgUrl(item));

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
            <div className="children">
                {children}
            </div>
            {!!data.length && (
                <ImgView
                    show={showImgView}
                    current={imgViewIndex}
                    data={data}
                    hideOrigin
                    onClose={() =>
                        $.setState({
                            showImgView: false
                        })}
                />
            )}

            <style jsx global>{`
                .styles-95721327 {
                }
                .${prefixCls} .slider-decorator-0 {
                    bottom: 0.88rem !important;
                }
            `}</style>
            <style jsx>{`
                .styles-95721327 {
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
