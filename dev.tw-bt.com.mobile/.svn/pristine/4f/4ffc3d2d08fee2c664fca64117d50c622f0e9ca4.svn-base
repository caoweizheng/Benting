/**
 * const prefixCls = 'styles-24802493';
 * const images = '/static/images/src/person/wallet/CoinBuy';
 * @Author: Jack
 * @Date:   2018-05-25 15:38:36
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 15:41:31
 * @Path btWap \src\person\wallet\CoinBuy\_Input.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer, form } from '@';
import { Flex } from 'antd-mobile';
import { Form } from 'components';
import Const from 'const';
import Styles from 'styles';
import { images } from './ds';

const prefixCls = 'styles-55114428';

@form
@observer
export default class _Input extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    state = {
        focused: true
    };

    render() {
        const { $ } = this.context;
        const { form, onSubmit, className } = this.props;
        const { focused } = this.state;

        return (
            <div className={classNames(prefixCls, className)}>
                <Form
                    form={form}
                    renderHeader={() => (
                        <p className="text-md text-title">其他数量</p>
                    )}
                >
                    <Form.MoneyInput
                        name="price"
                        label={<img src={`${images}/coin.png`} />}
                        option={Const.rules.required}
                        focused={focused}
                        thumb={`${images}/coin.png`}
                        placeholder="请输入兑换金币数量"
                        format="int"
                        extra={<span className="text-desc">枚</span>}
                        onBlur={() => this.setState({ focused: false })}
                        onFocus={() => {
                            this.setState({ focused: true });
                            Utils.scrollTo(1000);
                        }}
                    />
                </Form>
                <div className="p-w text-sub text-sm mt-d">
                    <Flex>
                        <img src={`${Const.__IMAGES__}/prompt.png`} />
                        <span className="ml-xs">金币一经兑换将无法退款，请确认后再兑换。</span>
                    </Flex>
                    <Flex className="mt-xs">
                        <img src={`${Const.__IMAGES__}/prompt.png`} />
                        <span className="ml-xs">兑换数量须为整数。</span>
                    </Flex>
                </div>
                <Form.Button
                    onClick={() =>
                        onSubmit(form, values =>
                            $.onConfirm(values.price / 10)
                        )}
                >
                    确认兑换
                </Form.Button>

                <style jsx>{`
                    .styles-55114428 {
                    }
                    img {
                        width: 0.44rem;
                        height: 0.44rem;
                    }
                `}</style>
            </div>
        );
    }
}
