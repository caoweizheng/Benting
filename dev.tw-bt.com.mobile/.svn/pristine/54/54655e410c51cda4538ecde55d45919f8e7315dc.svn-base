/**
 * const prefixCls = 'styles-22854794';
 * const images = '/static/images/src/auth/Index';
 * @Author: qizc
 * @Date:   2017-12-26 16:08:58
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 14:31:48
 * @Path btWap \src\auth\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inject, observer, form } from '@';
import { Flex } from 'antd-mobile';
import { Form } from 'components';
import { Layout } from 'src/_';
import _Title from './_Title';
import _History from './_History';
import Utils from 'utils';
import Styles from 'styles';
import store from './store';

const prefixCls = 'styles-22854794';
import { images } from './ds';

@inject(store)
@form
@observer
export default class Auth extends React.Component {
	static contextTypes = {
		$: PropTypes.object
	};

	render() {
		const { $ } = this.context;
		const { form, onSubmit } = this.props;
		const { queryCode, queryList } = $.getState();

		return (
			<Layout hideHeader title="本汀防伪认证中心">
				<div className="search text-center">
					<div className="go" onClick={() => Utils.router.push('/')} />
					<Flex className={`${prefixCls}__box`} align="center">
						<Flex.Item>
							<Form form={form} className={`${prefixCls}__form`}>
								<Form.Input
									name="code"
									className={`${prefixCls}__input-in`}
									maxLength={14}
									placeholder={'输入您的防伪码'}
									label={<img src={`${images}/search.png`} />}
								/>
							</Form>
						</Flex.Item>
						<div
							className="btn"
							onClick={() => {
								onSubmit(form, $.doCodeQuery);
								form.setFieldsValue({
									code: ''
								});
							}}
						>
							查询
						</div>
					</Flex>
					{queryCode != false && <_Title queryCode={queryCode} />}
					<span className="p-home text-void" onClick={() => Utils.router.push('/')}>
						前往官网首页
					</span>
				</div>
				<_History queryList={queryList} queryCode={queryCode} />

				<style jsx>{`
					.styles-22854794 {
					}
					.go {
						height: 25vw;
						width: 100%;
					}
					.search {
						position: relative;
						height: 75vw;
						padding: 0.24rem 0.6rem;
						${Styles._bg};
						background-image: url(${images}/bg.jpg);
						overflow: hidden;
					}
					.btn {
						height: 0.88rem;
						padding: 0 ${Styles.md} !important;
						line-height: 0.88rem;
						color: #fff;
						background-color: ${Styles.color_primary};
					}
					.p-home {
						position: absolute;
						bottom: ${Styles.space};
						left: 50%;
						transform: translateX(-50%);
					}
				`}</style>
				<style jsx global>{`
					.styles-22854794 {
					}
					.${prefixCls}__input-in {
						background: #fff !important;
					}
					.${prefixCls}__box {
						margin-top: 15%;
					}
					.${prefixCls}__form {
						margin-top: 0;
					}
				`}</style>
			</Layout>
		);
	}
}
