/**
 * const prefixCls = 'styles-86926038';
 * const images = '/static/images/components/RichEditor/decorator';
 * @Author: Jack
 * @Date:   2017-12-26 14:18:27
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-02-27 10:05:15
 * @Path btWap \components\RichEditor\decorator\link.js
 */
'use strict';

import React from 'react';
import { Entity } from 'draft-js';
import Styles from 'styles';

const prefixCls = 'styles-63595118';

const Link = props => {
    const { offsetKey, entityKey } = props;
    const { link, tag } = Entity.get(entityKey).getData();

    return (
        <a
            className={prefixCls}
            data-offset-key={offsetKey}
            href={link}
            target="_blank"
        >
            {tag}

            <style jsx global>{`
                .styles-63595118 {}
                .${prefixCls} {
                    position: relative;
                    color: ${Styles.color_primary};
                    word-wrap: break-word;
                }
                .${prefixCls}:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -0.02rem;
                    border-bottom: 0.01rem solid #333;
                }
            `}</style>
        </a>
    );
};

export default {
    strategy: (contentBlock, callback) => {
        contentBlock.findEntityRanges(character => {
            const entityKey = character.getEntity();

            return (
                entityKey !== null && Entity.get(entityKey).getType() === 'link'
            );
        }, callback);
    },
    component: Link
};
