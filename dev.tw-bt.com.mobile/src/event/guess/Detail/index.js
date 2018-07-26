/**
 * const prefixCls = 'styles-89814383';
 * const images = '/static/images/src/event/guess/Detail';
 * @Author: qizc
 * @Date:   2018-02-03 11:51:59
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-30 14:18:59
 * @Path btWap \src\event\guess\Detail\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer, form } from '@';
import { PayConfirm } from 'components';
import { Layout, Rule } from 'src/_';
import _Carousel from './_Carousel';
import _Info from './_Info';
import _Detail from './_Detail';
import _Winner from './_Winner';
import _Record from './_Record';
import _Btn from './_Btn';
import store from './store';

@inject(store)
@form
@observer
export default class Detail extends React.Component {
  static contextTypes = {
    $: PropTypes.object
  };

  componentWillUnmount() {
    const { $ } = this.context;

    $.closeModal();
  }

  render() {
    const { $ } = this.context;
    const { form, onSubmit } = this.props;
    const { show } = $.getState();
    const {
      dataType,
      guessType,
      rules = '',
      endTime,
      panUrl = '',
      key = '',
      perPrice
    } = $.getState('guessDetail');
    const { time } = $.getState('time');

    const isEnd = time > endTime;

    let type;
    if (guessType == 2) {
      type = 'coin';
    }
    if (guessType == 1) {
      if (dataType == 2) type = 'bt';
      if (dataType == 1) type = 'nido';
    }
    let _rules = rules.split('\n');

    return (
      <Layout title="竞猜详情" hideHeader>
        <_Carousel>
          <_Info />
        </_Carousel>
        <_Detail isEnd={isEnd} />
        {rules && (
          <Rule
            open
            className="mt-d"
            title="竞猜规则"
            showNum
            content={
              panUrl
                ? [
                    ..._rules,
                    <div>
                      <p className="text-sm">鱼获重量压缩包已上传至百度，链接：</p>
                      <a
                        className="text-primary text-sm"
                        style={{
                          textDecoration: 'underline'
                        }}
                        href={panUrl}
                      >
                        {panUrl}
                      </a>
                      <p className="text-sm">
                        解压密码：{isEnd && key ? key : '猜渔结束后将自动显示解压密码'}
                      </p>
                    </div>
                  ]
                : _rules
            }
          />
        )}
        {isEnd && <_Winner className="mt-d" />}
        <_Record className="mt-d" form={form} isEnd={isEnd} />
        {!isEnd && <_Btn form={form} />}
        {!isEnd &&
          type && (
            <PayConfirm
              type={type}
              show={show}
              amount={perPrice}
              onClose={$.closeModal}
              onConfirm={() => {
                onSubmit(form, $.doGuessing);
                form.setFieldsValue({
                  information: ''
                });
              }}
            />
          )}
      </Layout>
    );
  }
}
