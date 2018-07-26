/**
 * const prefixCls = 'styles-19300288';
 * const images = '/static/images/src/shop/Coupon';
 * @Author: Jack
 * @Date:   2018-01-04 15:22:03
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:52:12
 * @Path btWap \src\shop\Coupon\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Flex, Button } from 'antd-mobile';
import { ListView } from 'components';
import { Layout, Header } from 'src/_';
import _Item from './_Item';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-19300288';

@inject(store)
@observer
export default class Coupon extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const lotteryList = $.getState('lotteryList');

        return (
            <Layout title="领券专区">
                <img className="t-img thumb" src={`${images}/thumb.png`} />
                <Flex className={`${prefixCls}__tips`}>
                    <img className="img-notice" src={`${images}/gonggao.png`} />
                    <span className="ml-sm text-sub">使用优惠券需发送条码到店铺客服</span>
                </Flex>
                <Header className="mt-d">可领取的券</Header>
                <div className="list">
                    <ListView
                        hideFooter
                        data={lotteryList}
                        renderRow={data => <_Item {...data} />}
                        onEndReached={$.fetchLotteryList}
                    />
                </div>
                <Button
                    className="t-fixed-btn"
                    type="primary"
                    onClick={() =>
                        Utils.checkLogin(() =>
                            Utils.router.push('/person/goods')
                        )}
                >
                    进入我的礼单
                </Button>
                <style jsx global>{`
                    .styles-19300288 {
                    }
                    .${prefixCls}__tips {
                        padding: ${Styles.wind};
                        background: #fff;
                    }
                `}</style>
                <style jsx>{`
                    .styles-19300288 {
                    }
                    .thumb {
                        width: 100%;
                        min-height: 2.43rem;
                    }
                    .img-notice {
                        width: 0.44rem;
                        height: 0.44rem;
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
