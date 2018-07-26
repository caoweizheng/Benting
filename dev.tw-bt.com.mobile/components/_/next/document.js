/**
 * const prefixCls = 'styles-213775';
 * @Author: Jack
 * @Date:   2017-10-31 11:49:53
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-06 10:08:40
 * @Path nidosport@next \components\_\next\document.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export class Head extends React.Component {
    static contextTypes = {
        _documentProps: PropTypes.any
    };

    getChunkPreloadLink(filename) {
        const { __NEXT_DATA__ } = this.context._documentProps;
        let { buildStats, assetPrefix, buildId } = __NEXT_DATA__;
        const hash = buildStats ? buildStats[filename].hash : buildId;

        return (
            <link
                key={filename}
                rel="preload"
                href={`${assetPrefix}/_next/${hash}/${filename}`}
                as="script"
            />
        );
    }

    getPreloadMainLinks() {
        const { dev } = this.context._documentProps;
        if (dev) {
            return [
                this.getChunkPreloadLink('manifest.js'),
                this.getChunkPreloadLink('commons.js'),
                this.getChunkPreloadLink('main.js')
            ];
        }

        // In the production mode, we have a single asset with all the JS content.
        return [this.getChunkPreloadLink('app.js')];
    }

    getPreloadDynamicChunks() {
        const { chunks, __NEXT_DATA__ } = this.context._documentProps;
        let { assetPrefix, buildId } = __NEXT_DATA__;
        return chunks.map(chunk => (
            <link
                key={chunk}
                rel="preload"
                href={`${assetPrefix}/_next/${buildId}/webpack/chunks/${chunk}`}
                as="script"
            />
        ));
    }

    render() {
        const { head, styles, __NEXT_DATA__ } = this.context._documentProps;
        const { pathname, buildId, assetPrefix, nextExport } = __NEXT_DATA__;
        const pagePathname = getPagePathname(pathname, nextExport);

        return (
            <head {...this.props}>
                <link
                    rel="preload"
                    href={`${assetPrefix}/_next/${buildId}/page${pagePathname}`}
                    as="script"
                />
                <link
                    rel="preload"
                    href={`${assetPrefix}/_next/${buildId}/page/_error/index.js`}
                    as="script"
                />
                {this.getPreloadDynamicChunks()}
                {this.getPreloadMainLinks()}
                {(head || []).map((h, i) => React.cloneElement(h, { key: i }))}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/static/css/antd-mobile.min.css"
                />
                {styles || null}
                {this.props.children}
            </head>
        );
    }
}

function getPagePathname(pathname, nextExport) {
    if (!nextExport) return pathname;
    if (pathname === '/') return '/index.js';
    return `${pathname}/index.js`;
}
