/**
 * const prefixCls = 'styles-75846668';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2017-12-29 13:47:17
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-15 18:11:49
 * @Path btWap \src\bbs\Article\_FixedTextarea.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { FixedTextarea, FixedInput } from 'components';
import __FixedExtra from './__FixedExtra';

const prefixCls = 'styles-75846668';

const _FixedTextarea = (props, { $ }) => {
    const { className } = props;
    const { show, placeholder, onSubmit } = $.getState();
    const { replayDefContent } = $.getState('postDetail');

    return (
        <div className={classNames(prefixCls, className)}>
            <FixedTextarea
                show={show}
                placeholder={placeholder}
                showEmoji={false}
                showCoin
                value={replayDefContent}
                onSubmit={onSubmit}
                onClose={$.onTextareaClose}
            />
            {!show && (
                <FixedInput onInputClick={$.onCommentClick}>
                    <__FixedExtra />
                </FixedInput>
            )}
        </div>
    );
};

_FixedTextarea.contextTypes = {
    $: PropTypes.object
};

export default observer(_FixedTextarea);
