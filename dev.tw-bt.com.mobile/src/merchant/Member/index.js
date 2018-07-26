/**
 * const prefixCls = 'styles-20831698';
 * const images = '/static/images/src/merchant/Member';
 * @Author: Jack
 * @Date:   2018-05-09 15:36:43
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-12 10:04:35
 * @Path btWap \src\merchant\Member\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { List } from 'antd-mobile';
import { ListView, Empty, Img } from 'components';
import { Layout } from 'src/_';
import _SectionHeader from './_SectionHeader';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-20831698';

@inject(store)
@observer
export default class Member extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const memberList = $.getState('memberList');

        return (
            <Layout title="汀友会会员">
                {memberList._loaded ? (
                    <ListView
                        className="mt-d"
                        hideFooter
                        data={memberList}
                        section={$.section}
                        renderSectionHeader={sectionData => (
                            <_SectionHeader sectionData={sectionData} />
                        )}
                        renderRow={data => (
                            <List.Item
                                thumb={
                                    <Img
                                        src={Utils.getAppImgUrl(data.faceImg)}
                                        size="0.64rem"
                                        onClick={() =>
                                            Utils.router.push(
                                                `/person/zone?id=${data.userId}`,
                                                `/person/zone/${data.userId}`
                                            )}
                                    />
                                }
                            >
                                <span>{data.userName}</span>
                            </List.Item>
                        )}
                    />
                ) : (
                    <Empty>数据加载中...</Empty>
                )}
            </Layout>
        );
    }
}
