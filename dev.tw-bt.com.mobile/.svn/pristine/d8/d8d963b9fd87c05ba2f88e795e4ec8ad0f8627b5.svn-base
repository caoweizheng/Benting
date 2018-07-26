/**
 * const prefixCls = 'styles-0593573';
 * const images = '/static/images/src/shop/auction/Index';
 * @Author: Jack
 * @Date:   2018-01-24 17:36:58
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:51:06
 * @Path btWap \src\shop\auction\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Carousel, AffixTabs, ListView } from 'components';
import { Layout } from 'src/_';
import _Item from './_Item';
import Styles from 'styles';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-0593573';

@inject(store)
@observer
export default class Auction extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { initialPage, selectedIndex } = $.getState();
        const auctionList = $.getState('auctionList');
        const scoreAuctionList = $.getState('scoreAuctionList');

        return (
            <Layout hideHeader title="竞拍">
                <Carousel
                    data={[
                        { src: `${images}/banner.jpg` },
                        { src: `${images}/banner2.jpg` }
                    ]}
                    height="40vw"
                    selectedIndex={selectedIndex}
                    autoplay={false}
                    dots={false}
                />
                <AffixTabs
                    tabs={[{ title: '金币' }, { title: '积分' }]}
                    animated
                    destroyInactiveTab={false}
                    page={initialPage}
                    onTabClick={(tab, initialPage) =>
                        $.setState({ initialPage, selectedIndex: initialPage })}
                >
                    <ListView
                        className="mt-d"
                        data={auctionList}
                        renderRow={data => <_Item {...data} />}
                        onEndReached={$.fetchAuctionList}
                    />
                    <ListView
                        className="mt-d"
                        data={scoreAuctionList}
                        renderRow={data => <_Item {...data} />}
                        onEndReached={$.fetchScoreAuctionList}
                    />
                </AffixTabs>

                <style jsx>{`
                    .styles-0593573 {
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
