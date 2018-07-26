/**
 * const prefixCls = 'styles-12784082';
 * const images = '/static/images/src/video/Add';
 * @Author: qizc
 * @Date:   2017-12-26 12:02:44
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 16:02:55
 * @Path btWap \src\video\Add\_Upload.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Flex, Progress } from 'antd-mobile';
import { Upload, Video } from 'components';
import Const from 'const';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'styles-12784082';

const _Upload = (props, { $ }) => {
    const { files, uploading, qiniuFileKey, percent, size } = $.getState();

    if (files.length) {
        return (
            <div className={`${prefixCls}__btn-upload p-sw`}>
                <Video
                    src={files[0].targetPath}
                    poster={Utils.getImgUrl(files[0].surface)}
                    fileSize={files[0].size}
                    playSecond={files[0].play_time}
                    placeholderPublish
                    height="62.3vw"
                />
            </div>
        );
    }

    return (
        <div>
            {uploading ? (
                <div
                    className={`${prefixCls}__btn-upload p-sw text-sm text-sub`}
                >
                    <Flex
                        justify="center"
                        direction="column"
                        className={`${prefixCls}_box text-center p-sw`}
                    >
                        <div className="progress">
                            <Progress
                                className="mt-md"
                                position="normal"
                                percent={percent}
                            />
                            <Flex justify="between" className="mt-sm">
                                <span>正在上传...</span>
                                <div>
                                    <span>{percent}%</span>
                                    <span className="ml-sm">
                                        ({Utils.getMB(size * (percent / 100))}MB/{Utils.getMB(size)}MB)
                                    </span>
                                </div>
                            </Flex>
                        </div>
                    </Flex>
                </div>
            ) : (
                <div className={`${prefixCls}__btn-upload p-sw`}>
                    <Flex
                        justify="center"
                        direction="column"
                        className={`${prefixCls}_box text-center p-sw`}
                    >
                        <img
                            className="btn"
                            src={`${images}/btn.png`}
                            onClick={() => {
                                $.getQiniuKey();

                                document
                                    .querySelector(
                                        `.${prefixCls}__upload > input`
                                    )
                                    .click();
                            }}
                        />
                        <p className="text-sub text-sm mt-md">
                            支持mp4，qt，mov等常用格式，最大支持200M视频
                        </p>
                    </Flex>
                </div>
            )}

            {Const.__CLIENT__ && (
                <Upload
                    className={`${prefixCls}__upload`}
                    qiniu
                    qiniuFileKey={qiniuFileKey}
                    accept="video/mp4,video/quicktime,video/*"
                    disabled={uploading}
                    beforeUpload={file => {
                        if (file.size / 1024 / 1024 > 200) {
                            Utils.light('视频不能超过200M');
                            return false;
                        }

                        return true;
                    }}
                    style={{ display: 'none' }}
                    onProgress={$.onUploadProgress}
                    onSuccess={$.onUploadVideoSuccess}
                />
            )}
            <style jsx>{`
                .btn {
                    height: 1rem;
                }
                .progress {
                    width: 100%;
                }
            `}</style>
            <style jsx global>{`
                .${prefixCls}__btn-upload {
                    height: 50vw;
                }
                .${prefixCls}_box {
                    background: #fff;
                    width: 100%;
                    height: 100%;
                    border: 2px dotted ${Styles.color_border};
                }
                .${prefixCls}_box .am-progress-outer {
                    border-radius: ${Styles.radius_sm};
                }
                .${prefixCls}_box .am-progress-bar {
                    border: 0.06rem solid #476dd9;
                    border-radius: ${Styles.radius_sm};
                }
            `}</style>
        </div>
    );
};

_Upload.contextTypes = {
    $: PropTypes.object
};

export default observer(_Upload);
