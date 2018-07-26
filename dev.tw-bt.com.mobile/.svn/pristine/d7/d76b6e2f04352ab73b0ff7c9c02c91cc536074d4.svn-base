/**
 * const prefixCls = 'styles-09436845';
 * const images = '/static/images/src/person/goods/Index';
 * @Author: Jack
 * @Date:   2018-01-05 15:04:05
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-01-22 16:04:59
 * @Path btWap \src\person\goods\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Flex } from 'antd-mobile';
import { ListView } from 'components';
import { Layout, Header } from 'src/_';
import _Item from './_Item';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-09436845';

@inject(store)
@observer
export default class Goods extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const myLotteryList = $.getState('myLotteryList');

        return (
            <Layout title="我的礼单">
                <div className="list">
                    <ListView
                        hideFooter
                        data={myLotteryList}
                        renderRow={data => <_Item {...data} />}
                        onEndReached={$.fetchMyLotteryList}
                    />
                </div>

                <style jsx>{`
                    .styles-09436845 {
                    }
                    .list {
                        padding: ${Styles.space} ${Styles.wind};
                        background: #fff;
                    }
                `}</style>
            </Layout>
        );
    }
}
