/**
 * const prefixCls = 'styles-11144612';
 * const images = '/static/images/src/shop/Goods';
 * @Author: qizc
 * @Date:   2017-12-28 14:42:02
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:54:25
 * @Path btWap \src\shop\Goods\_Guess.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { ListView } from 'components';
import __Row from './__Row';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-11144612';

const _Guess = (props, { $ }) => {
    const { className } = props;
    const recommendList = $.getState('recommendList');
    
    return (
        <div className={classNames(prefixCls, className)}>
            <div className="text-title text-sm text-sub">您可能还喜欢</div>
            <ListView
                data={recommendList}
                renderRow={rowData => <__Row {...rowData} />}
                hideFooter
            />

            <style jsx>{`
                .styles-11144612 {
                    padding: 0 3% ${Styles.space};
                    background: #fff;
                }
                .text-title {
                    padding: ${Styles.space} 0;
                }
            `}</style>
        </div>
    );
};

_Guess.contextTypes = {
    $: PropTypes.object
};

export default observer(_Guess);
