/**
 * const prefixCls = 'styles-82573981';
 * const images = '/static/images/components/Img';
 * @Author: Jack
 * @Date:   2018-01-03 16:04:58
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-01 11:21:40
 * @Path btWap \components\Img\index.js
 */
'use strict';

import classNames from 'classnames';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';

const prefixCls = 'c-img';

const Img = props => {
    const { src, size, circle, style, className, ...other } = props;

    let _src = Utils.getAppImgUrl(src);
    //灵动默认图改成本汀默认图
    if (~_src.indexOf('591e5f9e2c2bc')) {
        _src = `${Const.__IMAGES__}/logo_default.png`;
    }

    let _style;
    if (circle) {
        _style = {
            borderRadius: '50%'
        };
    }

    return (
        <div
            className={classNames(prefixCls, className, 't-bg')}
            style={
                size
                    ? {
                          width: size,
                          height: size,
                          backgroundImage: `url(${_src})`,
                          ..._style,
                          ...style
                      }
                    : {
                          backgroundImage: `url(${_src})`,
                          ..._style,
                          ...style
                      }
            }
            {...other}
        >
            <style jsx global>{`
                .c-img {
                    display: inline-block;
                    position: relative;
                    width: 0.8rem;
                    height: 0.8rem;
                    vertical-align: top;
                    background-color: ${Styles.color_bg};
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default Img;
