/**
 * const prefixCls = 'styles-76207405';
 * const images = '/static/images/src/index/Chat';
 * @Author: Jack
 * @Date:   2018-05-03 12:28:37
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:01:26
 * @Path btWap \src\index\Chat\__Extra.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Flex } from 'antd-mobile';
import { Upload } from 'components';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-76207405';

const __Extra = (props, { $ }) => {
    const { onUploadImageSuccess = Function.prototype, className } = props;

    return (
        <Flex className={className} justify="center">
            <img
                src={`${images}/pic.png`}
                style={{
                    width: '0.64rem',
                    height: '0.64rem'
                }}
                onClick={() => {
                    document
                        .querySelector(`.${prefixCls}__upload-image > input`)
                        .click();
                }}
            />
            <Upload
                className={`${prefixCls}__upload-image`}
                data={{
                    iswatermark: 1
                }}
                beforeUpload={() => Utils.loading('上传中...')}
                style={{ display: 'none' }}
                onSuccess={(result, file) => {
                    const { code, data } = result;

                    Utils.hideToast();

                    if (code !== 0) {
                        Utils.light(`文件上传失败, ${result.err}`);
                        return;
                    }

                    onUploadImageSuccess(`${data.targetPath}/${data.name}`);
                }}
            />
        </Flex>
    );
};

__Extra.contextTypes = {
    $: PropTypes.object
};

export default observer(__Extra);
