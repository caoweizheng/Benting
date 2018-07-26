/**
 * const prefixCls = 'styles-18377098';
 * const images = '/static/images/src/person/zone/Index';
 * @Author: Jack
 * @Date:   2018-03-02 18:17:39
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-28 09:55:37
 * @Path btWap \src\person\zone\Index\_List.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { AffixTabs, ListView } from 'components';
import { SectionHeader, DiscoveryRow } from 'src/_';
import PostItem from 'src/bbs/_/List/_Item';

const _List = (props, { $ }) => {
    const { initialPage } = $.getState();
    const postList = $.getState('postList');
    const publishList = $.getState('publishList');

    return (
        <AffixTabs
            tabs={[{ title: '贴子' }, { title: '发现' }]}
            initialPage={initialPage}
            onTabClick={$.onTabsChange}
        >
            {postList._loaded && (
                <ListView
                    className="mt-d"
                    data={postList}
                    section={$.sectionPostList}
                    renderSectionHeader={sectionData => (
                        <SectionHeader
                            showSum={false}
                            sectionData={sectionData}
                        />
                    )}
                    renderRow={data => <PostItem hideAvatar {...data} />}
                    onEndReached={$.fetchPostList}
                />
            )}
            {publishList._loaded && (
                <ListView
                    className="mt-d"
                    data={publishList}
                    section={$.sectionPublishList}
                    renderSectionHeader={sectionData => (
                        <SectionHeader
                            showSum={false}
                            sectionData={sectionData}
                        />
                    )}
                    renderRow={data => <DiscoveryRow {...data} />}
                    onEndReached={$.fetchPublishList}
                />
            )}
        </AffixTabs>
    );
};

_List.contextTypes = {
    $: PropTypes.object
};

export default observer(_List);
