/**
 * 正文容器，处理换行和行高
 * @Version: 1.1 加入@逻辑
 * const prefixCls = 'styles-20498530';
 * const images = '/static/images/components/Content';
 * @Author: Jack
 * @Date:   2017-12-22 09:34:12
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-08 15:17:33
 * @Path btWap \components\Content\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import Utils from 'utils';

const prefixCls = 'c-content';

const Content = props => {
    const { left, atList = [], className, children, ...other } = props;

    let content;
    const formatAtFn = str => {
        let match = [];

        atList &&
            atList.forEach(item => {
                if (~str.indexOf(item.name)) match.push(`@${item.name}`);
            });

        if (match.length) {
            const reg = new RegExp(`${match.join('|')}`, 'g');

            str = Utils.stringSplitToArray(str, reg, '', 'text-main', name => ({
                onClick: e => {
                    e.stopPropagation();
                    Utils.router.push(
                        `/person/zone/${atList.find(
                            item => `@${item.name}` === name
                        ).id}`
                    );
                }
            }));
        }

        return str;
    };

    if (typeof children !== 'string' || children.indexOf('\n') === -1) {
        content = Utils.emojify(children, formatAtFn);
    } else {
        const temp = [];

        children.split('\n').forEach((item, index) => {
            if (index === 0) {
                item !== '' && temp.push(Utils.emojify(item, formatAtFn));
            } else {
                temp.push(<br key={index} />);
                item !== '' && temp.push(Utils.emojify(item, formatAtFn));
            }
        });

        content = temp;
    }

    return (
        <div className={classNames(prefixCls, className)} {...other}>
            {left}
            {content}

            <style jsx global>{`
                .c-content {
                }
                .${prefixCls} {
                    line-height: 1.5;
                    word-wrap: break-word;
                }
                .${prefixCls} br + br + br {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default Content;
