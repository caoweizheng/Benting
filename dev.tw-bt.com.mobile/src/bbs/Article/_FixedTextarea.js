/**
 * const prefixCls = 'styles-75846668';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2017-12-29 13:47:17
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-29 14:57:13
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

    return (
        <div className={classNames(prefixCls, className)}>
            <FixedTextarea
                show={show}
                placeholder={placeholder}
                showUploadPicButton
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
