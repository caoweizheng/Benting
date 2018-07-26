/**
 * const prefixCls = 'styles-48035438';
 * const images = '/static/images/src/person/grade/Rule';
 * @Author: Jack
 * @Date:   2018-01-12 17:35:53
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:27:44
 * @Path btWap \src\person\grade\Rule\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { Button } from 'antd-mobile';
import { Layout } from 'src/_';
import _Grade from 'src/person/_/Grade';
import _Upgrade from './_Upgrade';
import Const from 'const';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';
import { images } from './ds';

const prefixCls = 'styles-48035438';

@inject(store)
@observer
export default class Grade extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;

        return (
            <Layout hideHeader title="会员升级">
                <img className="t-img img-thumb" src={`${images}/thumb.png`} />
                <_Grade />
                <p className="text-main text-bold text-center mt-md">会员升级体系</p>
                <p className="p-w text-sm text-sub mt-sm">
                    本汀官网2018年1月1日改版后，消费订单金额进行审核后可累计消费金额，每累计消费金额1元可获1个本汀积分，累计消费金额满足下列条件将升级到该等级。
                </p>

                <_Upgrade className="mt-lg" />
                <Button
                    className="t-fixed-btn"
                    type="primary"
                    onClick={() => Utils.router.push('/person/order/add')}
                >
                    添加消费订单
                </Button>

                <style jsx>{`
                    .styles-48035438 {
                    }
                    .img-thumb {
                        width: 100%;
                        min-height: 2.46rem;
                        margin-top: -0.01rem;
                    }
                `}</style>
            </Layout>
        );
    }
}
