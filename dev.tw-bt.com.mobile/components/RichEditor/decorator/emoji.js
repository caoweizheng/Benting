/**
 * const prefixCls = 'styles-62814803';
 * const images = '/static/images/components/RichEditor/decorator';
 * @Author: Jack
 * @Date:   2017-12-26 14:16:27
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-28 10:16:22
 * @Path btWap \components\RichEditor\decorator\emoji.js
 */
'use strict';

import React from 'react';
import { Entity } from 'draft-js';
import Const from 'const';
import Styles from 'styles';

const prefixCls = 'styles-62814803';

const Emoji = props => {
    const { offsetKey, entityKey } = props;
    const { value } = Entity.get(entityKey).getData();

    let cls, filename;
    if (value.indexOf('[') !== -1) {
        cls = `${prefixCls} ${prefixCls}_sm`;
        filename = value.replace('[', '').replace(']', '.png');
    } else if (value.indexOf('5_') !== -1) {
        cls = `${prefixCls} ${prefixCls}_sm`;
        filename = value.replace('{:', '').replace(':}', '.gif');
    } else {
        cls = `${prefixCls} ${prefixCls}_lg`;
        filename = value.replace('{:', '').replace(':}', '.gif');
    }

    return (
        <span
            className={cls}
            data-offset-key={offsetKey}
            style={{
                backgroundImage: `url(${Const.__EMOJI_PATH__}/${filename})`
            }}
        >
            {value}

            <style jsx global>{`
                .styles-62814803 {}
                .${prefixCls} {
                    display: inline-block;
                    width: 0;
                    height: 0;
                    margin-right: ${Styles.xs};
                    vertical-align: bottom !important;
                    color: transparent !important;
                    overflow: hidden;
                    pointer-events: none;
                    ${Styles._bg};
                }
                .${prefixCls}_sm {
                    padding: 0.24rem;
                }
                .${prefixCls}_lg {
                    padding: 0.5rem;
                }
            `}</style>
        </span>
    );
};

export default {
    strategy: (contentBlock, callback) => {
        contentBlock.findEntityRanges(character => {
            const entityKey = character.getEntity();

            return (
                entityKey !== null &&
                Entity.get(entityKey).getType() === 'emoji'
            );
        }, callback);
    },
    component: Emoji
};
