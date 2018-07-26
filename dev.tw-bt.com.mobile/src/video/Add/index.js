/**
 * const prefixCls = 'styles-69217716';
 * const images = '/static/images/src/video/Add';
 * @Author: qizc
 * @Date:   2017-12-26 12:02:44
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-02-27 10:04:44
 * @Path btWap \src\video\Add\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, form, observer } from '@';
import { Button } from 'antd-mobile';
import { Layout } from 'src/_';
import Const from 'const';
import Utils from 'utils';
import _Upload from './_Upload';
import _Form from './_Form';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-69217716';

@inject(store)
@form
@observer
export default class Index extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };
    render() {
        const { $ } = this.context;
        const { form, onValidate } = this.props;
        return (
            <Layout className={prefixCls} title="添加视讯">
                <_Upload />
                <_Form form={form} />
                <div className="fixed text-center">
                    <Button
                        className="tool-active tool-img"
                        type="primary"
                        onClick={e =>
                            onValidate(
                                form,
                                values => {
                                    const { files } = $.getState();
                                    if (!files.length) {
                                        Utils.light('请先上传视频');
                                        return false;
                                    }

                                    $.doSubmit(values);
                                },
                                e,
                                () => Utils.light('请先完善上述资料')
                            )}
                    >
                        发布
                    </Button>
                </div>
                <style jsx global>{`
                    .${prefixCls} {
                        padding-bottom: 1.4rem;
                    }
                    .${prefixCls} .tool-active {
                        border-radius: 0 !important;
                    }
                `}</style>
                <style jsx>{`
                    .fixed {
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: #fff;
                        border-top: 0.01rem solid ${Styles.color_border};
                        z-index: 10
                    }
                `}</style>
            </Layout>
        );
    }
}
