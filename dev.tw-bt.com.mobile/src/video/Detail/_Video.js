/**
 * const prefixCls = 'styles-23159321';
 * const images = '/static/images/src/video/Detail';
 * @Author: qizc
 * @Date:   2017-12-25 18:27:49
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\video\Detail\_Video.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import classNames from 'classnames';
import { Video } from 'components';
import Utils from 'utils';

const prefixCls = 'styles-23159321';

const _Video = (props, { $ }) => {
    const { className } = props;
    const { tbId, fileinfo = {} } = $.getState('videosDetail');
    return (
        <div>
            <Video
                key={tbId}
                className={`${prefixCls}_video`}
                src={fileinfo.path}
                poster={fileinfo.surface}
                fileSize={fileinfo.size}
                playSecond={fileinfo.play_time}
                height="62.3vw"
            />
            <style jsx global>{`
                .${prefixCls}_video {
                    border-radius: 0;
                }
            `}</style>
        </div>
    );
};

_Video.contextTypes = {
    $: PropTypes.object
};

export default observer(_Video);
