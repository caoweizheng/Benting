/**
 * const prefixCls = 'styles-35235461';
 * const images = '/static/images/src/person/goods/Detail';
 * @Author: Jack
 * @Date:   2018-01-05 15:52:57
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-28 12:33:30
 * @Path btWap \src\person\goods\Detail\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import ClipboardButton from 'react-clipboard.js';
import QRCode from 'qrcode.react';
import { Flex } from 'antd-mobile';
import { ListView, Img } from 'components';
import { Layout, Header } from 'src/_';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';
import store from './store';

const prefixCls = 'styles-35235461';

@inject(store)
@observer
export default class Detail extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const myLotteryDetail = $.getState('myLotteryDetail');

        if (!myLotteryDetail._loaded) return null;

        const isReal = myLotteryDetail.prizeType == 1;

        return (
            <Layout title="我的物品">
                <div className={prefixCls}>
                    <div className="coupon">
                        <div className="title text-lg text-main">本汀会员尊享礼品券</div>
                        <Flex className={`${prefixCls}__flex`}>
                            {isReal ? (
                                <Img src={Utils.getAppImgUrl(myLotteryDetail.imgId)} size="1rem" />
                            ) : (
                                <div className="amount">
                                    <p className="text-xxl text-primary text-bold text-center">
                                        ¥ {myLotteryDetail.prizeVal}
                                    </p>
                                    {myLotteryDetail.limitPrize && (
                                        <p className="text-xs text-sub mt-xs">
                                            满 {parseInt(myLotteryDetail.limitPrize)} 可用
                                        </p>
                                    )}
                                </div>
                            )}
                            <Flex.Item className="ml-sm">
                                <p className="text-primary text-sm">{myLotteryDetail.prizeName}</p>
                                <p className="text-xxs text-sub mt-sm">
                                    <span>使用时间：</span>
                                    <span>
                                        {Utils.date('y.m.d H:i', myLotteryDetail.expdatebegin)}
                                    </span>
                                    <span> - </span>
                                    <span>{Utils.date('y.m.d H:i', myLotteryDetail.expdateend)}</span>
                                </p>
                            </Flex.Item>
                        </Flex>
                    </div>
                    <Flex className={`${prefixCls}__code mt-d`}>
                        <span className="code-main user-select">{myLotteryDetail.prizeNo}</span>
                        {Const.__WX__ ? (
                            <span
                                className="text-primary text-sm ml-sm"
                                onClick={() => Utils.light('微信不支持复制，请手动选择复制')}
                            >
                                复制奖品口令
                            </span>
                        ) : (
                            <ClipboardButton
                                className={`${prefixCls}__clipboard text-primary text-sm ml-sm`}
                                data-clipboard-text={myLotteryDetail.prizeNo}
                                onSuccess={() => Utils.light('已复制')}
                            >
                                复制奖品口令
                            </ClipboardButton>
                        )}
                    </Flex>
                    <div className="text-sm mt-d">
                        {myLotteryDetail.rule.split('\n').map((item, index) => (
                            <Flex key={index} className="mb-sm" align="start">
                                <span className={`${prefixCls}__label`}>{index + 1}</span>
                                <Flex.Item className={`${prefixCls}__p ml-sm`}>
                                    {Utils.stringSplitToArray(
                                        item,
                                        /\[b\]([\s\S]+?)\[\/b\]/g,
                                        /(\[b\])|(\[\/b\])/g,
                                        `${prefixCls}__p-highlight`
                                    )}
                                </Flex.Item>
                            </Flex>
                        ))}
                    </div>
                    {isReal && (
                        <div className="mt-lg">
                            <p>商家实物发放专用二维码</p>
                            <div className="mt-d">
                                {myLotteryDetail.prizeNo && (
                                    <QRCode value={myLotteryDetail.prizeNo} size={240} level="H" />
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <style jsx global>{`
                    .styles-35235461 {
                    }
                    .${prefixCls}__flex {
                        padding: ${Styles.md};
                    }
                    .${prefixCls}__code {
                        padding: ${Styles.lg} 0;
                    }
                    .${prefixCls}__clipboard {
                        background: transparent;
                        border: 0;
                    }
                `}</style>
                <style jsx>{`
                    .styles-35235461 {
                        padding: ${Styles.space} ${Styles.wind};
                    }
                    .coupon {
                        position: relative;
                        background: #fff;
                        border-radius: 0.08rem;
                        box-shadow: 0.04rem 0.04rem 0.16rem rgba(0, 0, 0, 0.16);
                    }
                    .amount {
                        padding-right: ${Styles.sm};
                        border-right: 0.01rem solid ${Styles.color_border};
                    }
                    .title {
                        padding: ${Styles.md};
                        border-bottom: 0.01rem dashed ${Styles.color_border};
                    }
                    .code-main {
                        padding: ${Styles.sm};
                        font-size: 0.4rem;
                        letter-spacing: 0.02rem;
                        color: #fff;
                        background: ${Styles.color_main};
                        border-radius: 0.08rem;
                    }
                `}</style>
            </Layout>
        );
    }
}
