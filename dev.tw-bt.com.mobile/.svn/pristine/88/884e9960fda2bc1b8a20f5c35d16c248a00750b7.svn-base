/**
 * const prefixCls = 'styles-13987500';
 * const images = '/static/images/src/event/guess/Detail';
 * @Author: qizc
 * @Date:   2018-02-03 11:51:59
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\event\guess\Detail\_Btn.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Button, Flex } from 'antd-mobile';
import { Form } from 'components';
import Const from 'const';
import Styles from 'styles';

const prefixCls = 'styles-13987500';

const sumType = (start, end, current) => {
    //1.预告中 2.进行中 3.已结束
    if (current <= start) return 1;

    if (!!end && current > end) return 3;

    return 2;
};

const _Btn = (props, { $ }) => {
    const { form } = props;
    const { startTime, endTime } = $.getState('guessDetail');
    const { time } = $.getState('time');
    const type = sumType(startTime, endTime, time);
    const _information = form.getFieldValue('information');

    if (type === 1) {
        return (
            <Button className="t-fixed-btn" type="primary">
                未开始
            </Button>
        );
    }

    if (type === 2) {
        return (
            <Flex className={prefixCls} align="center">
                <Flex.Item className="text-center">
                    <Form form={form}>
                        <Form.MoneyInput
                            name="information"
                            option={Const.rules.required}
                            maxLength={8}
                            placeholder="请输入您要猜的重量"
                        />
                    </Form>
                </Flex.Item>
                <Button
                    className={`${prefixCls}__btn`}
                    type="primary"
                    disabled={!_information}
                    onClick={() => Utils.checkLogin($.onConfirm)}
                >
                    竞猜
                </Button>

                <style jsx global>{`
                    .styles-13987500 {
                    }
                    .${prefixCls} {
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: #fff;
                        border-top: 0.01rem solid ${Styles.color_border};
                        z-index: 2;
                    }
                    .${prefixCls} .c-form {
                        margin-top: 0 !important;
                    }
                    .${prefixCls}__btn {
                        width: 40%;
                    }
                `}</style>
            </Flex>
        );
    }

    return null;
};

_Btn.contextTypes = {
    $: PropTypes.object
};

export default observer(_Btn);
