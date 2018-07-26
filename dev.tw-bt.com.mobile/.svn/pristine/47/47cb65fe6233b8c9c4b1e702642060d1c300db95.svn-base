/**
 * const prefixCls = 'styles-14504589';
 * const images = '/static/images/src/video/Add';
 * @Author: qizc
 * @Date:   2017-12-26 12:02:44
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-03-23 17:09:40
 * @Path btWap \src\video\Add\store.js
 */
'use strict';

import React from 'react';
import { useStrict, observable } from 'mobx';
import Api from 'api';
import Const from 'const';
import common from 'stores/common';
import G from 'stores/g';

useStrict(true);

//防止ActionSheet二次render触发getQiniuKey
let gettingKey = false;
let defaultState = {
    con: '', //textarea内容
    files: [], //选择的文件
    uploading: false, //是否上传中
    percent: 0, //正在上传百分比
    size: 0, //正在上传文件大小

    tags: [],

    /*七牛*/
    qiniuKey: ''
};

class store extends common {
    @observable
    state = this.initState({
        state: {
            ...defaultState,
            _filter: true
        },

        //视频标签
        videoLabel: Const.__EMPTY__
    });

    initFetch = {
        update: ['fetchVideoLabel']
    };

    /*==================== DS ====================*/
    //视频标签
    fetchVideoLabel = () => {
        return this.fetchThenSetState('get_video_label', 'videoLabel', {
            _: {
                limit: 0,
                search: {
                    labelType: 2
                }
            }
        });
    };

    /*==================== Action ====================*/
    doSubmit = async values => {
        const { tags, files } = this.getState();

        await Api.P('do_video-v2_add', {
            fileId: files[0].fileId,
            ...values,
            tag: tags.join(',')
        });

        if (Stores['/video']) {
            Stores['/video'].setRefresh();
        }

        Utils.light('发布成功');
        Utils.router.back();
    };

    /*==================== Page ====================*/
    //文件上传过程
    onUploadProgress = (step, file) => {
        const percent = Math.round(step.percent);

        this.setState({
            uploading: true,
            percent,
            size: file.size
        });
    };

    //上传视频要获取key
    getQiniuKey = async () => {
        if (!gettingKey) {
            gettingKey = true;

            const res = Api.P('get_qiniu_key');

            const data = await res;

            this.setState({
                qiniuFileKey: data
            });

            gettingKey = false;

            return res;
        }
    };

    onUploadVideoSuccess = async (result, file) => {
        if (result.ret !== 'success') {
            this.setState({
                files: [],
                percent: 0,
                size: 0,
                uploading: false
            });

            Utils.light('视频上传失败，请重试。');

            return false;
        }

        const { qiniuFileKey } = this.getState();

        const data = await Api.P('get_qiniu_file-info', {
            key: qiniuFileKey
        });

        //视频
        this.setState({
            files: [
                {
                    fileId: qiniuFileKey,
                    name: data.hash,
                    play_time: data.playTime,
                    size: data.fsize,
                    surface: data.surImg,
                    targetPath: data.filePath,
                    type: 'mp4'
                }
            ],
            type: 'video',
            percent: 0,
            size: 0,
            uploading: false
        });
    };

    //标签点击
    onTagClick = labelId => {
        const { tags } = this.getState();
        let _tags;

        if (tags.find(item => item === labelId)) {
            _tags = tags.filter(item => item !== labelId);
        } else {
            _tags = [...tags, labelId];
        }

        this.setState({ tags: _tags });
    };
}

export default store;
