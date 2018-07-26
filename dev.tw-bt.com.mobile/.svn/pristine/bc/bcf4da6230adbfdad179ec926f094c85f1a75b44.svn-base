/**
 * const prefixCls = 'styles-91162547';
 * const images = '/static/images/src/shop/auction/Detail';
 * @Author: Jack
 * @Date:   2018-01-24 18:21:28
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 12:34:22
 * @Path btWap \src\shop\auction\Detail\_Carousel.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Carousel, ImgView } from 'components';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'styles-91162547';

const _Carousel = (props, { $ }) => {
    const { type, children } = props;
    const { showImgView, imgViewIndex } = $.getState();
    const { goodsImg = '' } = $.getState('auctionDetail');

    const data = String(goodsImg)
        .split(',')
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
            <div className="children">{children}</div>
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
                .styles-91162547 {
                }
                .${prefixCls} .slider-decorator-0 {
                    bottom: 0.88rem !important;
                }
            `}</style>
            <style jsx>{`
                .styles-91162547 {
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
