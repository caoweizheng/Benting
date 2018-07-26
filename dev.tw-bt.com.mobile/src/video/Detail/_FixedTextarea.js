/**
 * const prefixCls = 'styles-399740';
 * @Author: Jack
 * @Date:   2017-10-30 17:56:10
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-03 13:50:27
 * @Path nidosport \src\pages\videos\Detail\_FixedTextarea\index.js
 */
'use strict';

import React from 'react';
import { observer } from '@';
import PropTypes from 'prop-types';
import Const from 'const';
import { FixedTextarea, FixedInput, Animate } from 'components';

const _FixedTextarea = (props, { $ }) => {
    const { className } = props;
    const { show, placeholder, onSubmit } = $.getState();

    return (
        <div className={className}>
            <FixedTextarea
                show={show}
                placeholder={placeholder}
                onSubmit={onSubmit}
                onClose={$.onTextareaClose}
            />
            <Animate type="bottom">
                {!show && (
                    <FixedInput onInputClick={$.onCommentClick}>
                        <img
                            className="ml-sm"
                            onClick={e => {
                                e.stopPropagation();
                                Utils.checkLogin(() => {
                                    $.fetchRewardGoodsList();
                                });
                            }}
                            style={{ width: '.4rem', height: '.4rem' }}
                            src={`${Const.__IMAGES__}/reward.png`}
                        />
                    </FixedInput>
                )}
            </Animate>
        </div>
    );
};

_FixedTextarea.contextTypes = {
    $: PropTypes.object
};

export default observer(_FixedTextarea);
