/**
 * const prefixCls = 'styles-29079502';
 * const images = '/static/images/src/auth/Index';
 * @Author: qizc
 * @Date:   2017-12-29 15:30:32
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-03 10:32:43
 * @Path btWap \src\auth\Index\_History.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { observer } from '@';
import { List } from 'antd-mobile';
import _List from './_List';

const prefixCls = 'styles-29079502';
import { images } from './ds';

const _History = props => {
	const { queryList, queryCode, className } = props;

	return (
		<div className={classNames(prefixCls, className)}>
			{!!queryList.list.length && (
				<List className={`${prefixCls}__jl`}>
					<List.Item
						thumb={<img src={`${images}/jl.png`} />}
						extra={
							queryList.list.length > 1 && (
								<span className="text-danger">此商品已经多次查询</span>
							)
						}
					>
						<span className="text-md">查询记录</span>
					</List.Item>
				</List>
			)}
			{queryCode === '成功' && <_List queryList={queryList} />}
			<List>
				<List.Item
					arrow="horizontal"
					thumb={<img src={`${images}/dd.jpg`} />}
					onClick={() => {
						Utils.checkLogin(Utils.router.push('/person/order/add'));
					}}
				>
					<div className="text-md">本汀售后服务中心 </div>
					<div className="text-sub text-xs">
						提交订单，享受售后保障！还可获取现金券、积分、金币、抽奖礼品、晋升等级、会员特权、生日礼物等
					</div>
				</List.Item>
				<List.Item
					arrow="horizontal"
					thumb={<img src={`${images}/cj.png`} />}
					onClick={() => Utils.router.push('/auth/luck_draw')}
				>
					<div className="text-md">防伪码幸运大抽奖</div>
					<div className="text-sub text-xs">每个正确的防伪码拥有一次抽奖机会</div>
				</List.Item>
				<List.Item
					arrow="horizontal"
					thumb={<img src={`${images}/old.jpg`} />}
					onClick={() => open('http://fwei.now315.com/f.php?a=a')}
				>
					<div className="text-md">旧版防伪中心</div>
					<div className="text-sub text-xs">如果您的防伪码超过14位。请前往旧版防伪中心</div>
				</List.Item>
				<List.Item
					arrow="horizontal"
					thumb={
						<img
							src={`${images}/md.png`}
							style={{
								width: '0.28rem',
								height: '0.28rem',
								marginLeft: '0.08rem'
							}}
						/>
					}
					onClick={() => Utils.router.push('/merchant')}
				>
					<div className="text-md">离您最近的本汀专卖店</div>
					<div className="text-sub text-xs">点击查看离您最近的本汀专卖店，到店可享受更多服务</div>
				</List.Item>
			</List>

			<style jsx global>{`
				.styles-29079502 {
				}
				.${prefixCls}__jl .am-list-extra {
					flex-basis: 60% !important;
				}
				.${prefixCls} .am-list-content {
					white-space: initial !important;
				}
			`}</style>
		</div>
	);
};

export default observer(_History);
