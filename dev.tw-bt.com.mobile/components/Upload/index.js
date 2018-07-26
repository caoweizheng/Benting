/**
 * const prefixCls = 'styles-12360285';
 * const images = '/static/images/components/Upload';
 * @Author: Jack
 * @Date:   2018-01-03 16:04:58
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-03-29 15:19:11
 * @Path btWap \components\Upload\index.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import Upload from 'rc-upload';
import Api from 'api';
import Const from 'const';
import G from 'stores/g';

const prefixCls = 'c-upload';
const qiniuConfig = {
    token: '',
    isFetching: false,
    cbToken: '',
    isCbFetching: false
};

export default class _Upload extends React.Component {
    componentDidMount() {
        const { needCb, qiniu } = this.props;

        if (needCb) {
            if (qiniu && !qiniuConfig.cbToken) {
                qiniuConfig.isCbFetching = true;
                this.getCbToken();
            }
        } else {
            if (qiniu && !qiniuConfig.token) {
                if (!qiniuConfig.isFetching) {
                    qiniuConfig.isFetching = true;
                    this.getToken();
                }
            }
        }
    }

    getToken = async () => {
        const data = await Api.P('get_qiniu_token');

        qiniuConfig.token = data;
        qiniuConfig.isFetching = false;
    };

    getCbToken = async () => {
        const data = await Api.P('get_qiniu_token', {
            notify: 2
        });

        qiniuConfig.cbToken = data;
        qiniuConfig.isCbFetching = false;
    };

    render() {
        const {
            accept = 'image/jpeg,image/jpg,image/png,image/gif,image/*',
            data,
            qiniu,
            qiniuFileKey,
            needCb,
            className,
            children,
            ...other
        } = this.props;

        if (qiniu) {
            return (
                <Upload
                    className={classNames(prefixCls, className)}
                    name="file"
                    data={
                        needCb
                            ? {
                                  key: qiniuFileKey,
                                  token: qiniuConfig.cbToken
                              }
                            : {
                                  key: qiniuFileKey,
                                  token: qiniuConfig.token
                              }
                    }
                    action={
                        window.location.protocol === 'https:'
                            ? 'https://upload-z2.qbox.me'
                            : 'http://upload-z2.qiniu.com'
                    }
                    multiple={false}
                    accept={accept}
                    {...other}
                >
                    {children}

                    <style jsx global>{`
                        .c-upload {
                            display: inline-block;
                        }
                    `}</style>
                </Upload>
            );
        }

        return (
            <Upload
                className={classNames(prefixCls, className)}
                name="data"
                data={{
                    ...data,
                    tk: G.getState('tk')
                }}
                action={`${Const.__API__}/file/upload/`}
                multiple={false}
                accept={accept}
                {...other}
            >
                {children}

                <style jsx global>{`
                    .c-upload {
                        display: inline-block;
                    }
                `}</style>
            </Upload>
        );
    }
}
