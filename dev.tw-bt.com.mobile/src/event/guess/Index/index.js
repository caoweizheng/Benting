/**
 * const prefixCls = 'styles-12157171';
 * const images = '/static/images/src/event/guess/Index';
 * @Author: qizc
 * @Date:   2018-02-03 11:51:59
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 14:56:22
 * @Path btWap \src\event\guess\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { AffixTabs, ListView } from 'components';
import { Layout } from 'src/_';
import _Item from './_Item';
import Styles from 'styles';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-12157171';

@inject(store)
@observer
export default class Auction extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { initialPage } = $.getState();
        const guessList = $.getState('guessList');
        const scoreGuessList = $.getState('scoreGuessList');

        return (
            <Layout hideHeader title="欢乐猜鱼">
                <div className="banner" />
                <AffixTabs
                    tabs={[{ title: '金币猜鱼' }, { title: '积分猜鱼' }]}
                    animated
                    destroyInactiveTab={false}
                    page={initialPage}
                    onTabClick={(tab, initialPage) =>
                        $.setState({ initialPage, selectedIndex: initialPage })}
                >
                    <ListView
                        className="mt-d"
                        data={guessList}
                        renderRow={data => <_Item {...data} />}
                        onEndReached={$.fetchGuessList}
                    />
                    <ListView
                        className="mt-d"
                        data={scoreGuessList}
                        renderRow={data => <_Item {...data} />}
                        onEndReached={$.fetchScoreGuessList}
                    />
                </AffixTabs>

                <style jsx>{`
                    .styles-12157171 {
                    }
                    .banner {
                        padding-bottom: 40%;
                        .${Styles._bg};
                        background-image: url(${images}/banner.jpg);
                    }
                `}</style>
            </Layout>
        );
    }
}
