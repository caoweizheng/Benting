/**
 * const prefixCls = 'styles-81651808';
 * const images = '/static/images/src/bbs/Article';
 * @Author: Jack
 * @Date:   2017-12-27 16:06:19
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-04-12 10:05:01
 * @Path btWap \src\bbs\Article\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Layout, AuthorInfo } from 'src/_';
import _Content from './_Content';
import _FloorInfo from './_FloorInfo';
import _Comment from './_Comment';
import _FixedTextarea from './_FixedTextarea';
import Const from 'const';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-81651808';

@inject(store)
@observer
export default class Article extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentWillUnmount() {
        const { $ } = this.context;

        $.onTextareaClose();
    }

    render() {
        const { $ } = this.context;
        const postDetail = $.getState('postDetail');

        return (
            <Layout title="帖子详情">
                <div className="post">
                    <p className="text-title text-bold">{postDetail.title}</p>
                    <AuthorInfo
                        className="mt-md"
                        userId={postDetail.userId}
                        img={
                            postDetail.faceImg ===
                            'static/uploads/png/20170519/591e5f9e2c2bc.png'
                                ? `${Const.__IMAGES__}/bbs_avatar.png`
                                : postDetail.faceImg
                        }
                        name={postDetail.niname}
                        date={postDetail.createTime}
                        dateExtra="发布"
                    />
                    <_Content className="mt-md" />
                </div>
                <_FloorInfo className="mt-d" />
                <_Comment className="mt-d" />
                <_FixedTextarea />

                <style jsx>{`
                    .styles-81651808 {
                    }
                    .post {
                        padding: ${Styles.space} ${Styles.wind};
                        background: #fff;
                    }
                    .text-title {
                        min-height: 0.36rem;
                    }
                `}</style>
            </Layout>
        );
    }
}
