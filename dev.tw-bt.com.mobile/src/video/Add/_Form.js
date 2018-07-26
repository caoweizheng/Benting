/**
 * const prefixCls = 'styles-71541201';
 * const images = '/static/images/src/video/Add';
 * @Author: qizc
 * @Date:   2017-12-26 12:29:50
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\video\Add\_Form.js
 */
'use strict';

import React from 'react';
import { observer } from '@';
import PropTypes from 'prop-types';
import Const from 'const';
import Styles from 'styles';
import classNames from 'classnames';
import { Flex, List } from 'antd-mobile';
import { Form } from 'components';
import { Header } from 'src/_';

const prefixCls = 'styles-71541201';

const _Form = (props, { $ }) => {
    const { form } = props;
    const { tags } = $.getState();
    const videoLabel = $.getState('videoLabel');

    return (
        <div>
            <Form form={form}>
                <Header>完善基本信息</Header>
                <Form.Input
                    name="tit"
                    option={Const.rules.required}
                    placeholder="视频标题"
                />
                <Form.Picker
                    name="from"
                    option={Const.rules.required}
                    data={[
                        {
                            label: '原创',
                            value: '1'
                        },
                        {
                            label: '转载',
                            value: '2'
                        }
                    ]}
                    title="视频来源"
                    extra="视频来源"
                />
                <Form.Textarea
                    name="introCon"
                    placeholder="视频描述（选填）"
                    rows={4}
                />
            </Form>
            <List className={`${prefixCls}__tags mt-d`}>
                <List.Item>
                    <p style={{ color: '#666' }}>选择标签</p>
                    <Flex className="mt-d" wrap="wrap">
                        {videoLabel.list.map((item, index) => (
                            <div
                                key={item.labelId}
                                className={classNames('tag text-sm', {
                                    'tag-active': !!tags.find(
                                        id => id === item.labelId
                                    )
                                })}
                                onClick={() => $.onTagClick(item.labelId)}
                            >
                                {item.labelvalue}
                            </div>
                        ))}
                    </Flex>
                </List.Item>
            </List>

            <style jsx>{`
                .tag {
                    padding: 0.08rem 0.28rem;
                    margin: 0.12rem;
                    color: #666;
                    border-radius: 0.28rem;
                    border: 0.01rem solid ${Styles.color_border};
                }
                .tag-active {
                    color: #68a4ff;
                    border: 0.01rem solid #68a4ff;
                }
            `}</style>
            <style jsx global>{`
                .${prefixCls}__tags .am-list-content {
                    padding-top: 0.32rem !important;
                    padding-bottom: 0.48rem !important;
                }
            `}</style>
        </div>
    );
};

_Form.contextTypes = {
    $: PropTypes.object
};

export default observer(_Form);
