/**
 * const prefixCls = 'styles-44047952';
 * const images = '/static/images/code/btWap/src/bbs/Index';
 * @Author: Jack
 * @Date:   2018-03-23 14:09:55
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-28 10:55:52
 * @Path nidosport E:\code\btWap\src\bbs\Index\_FixedTextarea.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import FixedTextarea from 'components/FixedTextarea/topic';
import Const from 'const';

const prefixCls = 'styles-44047952';

const _FixedTextarea = (props, { $ }) => {
    const { className } = props;
    const { show, topicId, topicTitle, placeholder, onSubmit } = $.getState();

    return (
        <div className={classNames(prefixCls, className)}>
            <FixedTextarea
                show={show}
                renderTop={
                    <Flex>
                        <img
                            className="img-message"
                            src={`${Const.__IMAGES__}/icon/message.png`}
                        />
                        <p className="text-void ml-sm">#{topicTitle}#</p>
                    </Flex>
                }
                placeholder={placeholder}
                showUploadPicButton={9}
                rows={5}
                count={400}
                onSubmit={onSubmit}
                onClose={$.onTextareaClose}
            />

            <style jsx>{`
                .styles-44047952 {
                }
                .img-message {
                    width: 0.56rem;
                    height: 0.56rem;
                }
            `}</style>
        </div>
    );
};

_FixedTextarea.contextTypes = {
    $: PropTypes.object
};

export default observer(_FixedTextarea);
