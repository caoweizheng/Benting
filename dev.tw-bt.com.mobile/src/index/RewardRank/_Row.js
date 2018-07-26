/**
 * const prefixCls = 'styles-18041698';
 * const images = '/static/images/src/index/RewardRank';
 * @Author: qizc
 * @Date:   2018-02-25 16:52:56
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-14 15:03:24
 * @Path btWap \src\index\RewardRank\_Row.js
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List } from 'antd-mobile';
import { Img } from 'components';
import Const from 'const';
import Utils from 'utils';

const prefixCls = 'styles-18041698';

const _Row = props => {
	const {
		all,
		createTime,
		faceImg,
		fanAuth,
		goodsImg,
		index,
		title,
		total,
		userId,
		userName
	} = props;

	let _index = parseInt(index);
	if (_index === 0)
		_index = (
			<img
				className={`${prefixCls}__item-count_img`}
				src={`${Const.__IMAGES__}/rank/1.png`}
			/>
		);
	if (_index === 1)
		_index = (
			<img
				className={`${prefixCls}__item-count_img`}
				src={`${Const.__IMAGES__}/rank/2.png`}
			/>
		);
	if (_index === 2)
		_index = (
			<img
				className={`${prefixCls}__item-count_img`}
				src={`${Const.__IMAGES__}/rank/3.png`}
			/>
		);
	const _total = parseFloat(total * 100 / 100);

	return (
		<List.Item className={`${prefixCls}__item`}>
			<Flex>
				<Flex.Item>
					<Flex>
						{!all && (
							<Flex
								className={`${prefixCls}__item-count text-sm`}
								justify="center"
							>
								{_index}
							</Flex>
						)}
						<Img
							className={`${prefixCls}__item-img ${all
								? 'ml-xs'
								: 'ml-md'}`}
							src={Utils.getAppImgUrl(faceImg)}
							size=".8rem"
							onClick={() =>
								Utils.router.push(
									`/person/zone?id=${userId}`,
									`/person/zone/${userId}`
								)}
						/>
						<Flex.Item className="ml-md">
							<div className="text-desc text-md">
								{userName.substr(0, 6)}
							</div>
							{all && (
								<div className="text-xs text-sub">
									{Utils.lastDate(createTime)}
								</div>
							)}
							{!all && (
								<div className="text-sm">
									<span>打赏金额</span>
									<span className="text-danger">
										{_total}
									</span>
									<span>金币</span>
								</div>
							)}
						</Flex.Item>
						{all && (
							<Flex justify="end">
								<img
									className="ds_img"
									src={Utils.getImgUrl(goodsImg)}
								/>
								<div className="text-sm text-clamp-1 ml-xs title">
									打赏<span className="text-primary">
										{title}
									</span>x1
								</div>
							</Flex>
						)}
					</Flex>
				</Flex.Item>
			</Flex>

			<style jsx global>{`
				.styles-18041698 {
				}
				.${prefixCls}__item-count {
					width: 0.44rem;
				}
				.${prefixCls}__item-count_img {
					width: 0.44rem !important;
					height: 0.6rem !important;
				}
				.${prefixCls}__item-img {
					margin-top: 0.08rem;
					margin-bottom: 0.08rem;
					border-radius: 50%;
					box-shadow: 0.02rem 0.02rem 0.16rem rgba(0, 0, 0, 0.32);
				}
			`}</style>
			<style jsx>{`
				.styles-18041698 {
				}
				.ds_img {
					height: 0.5rem;
					width: auto;
				}
			`}</style>
		</List.Item>
	);
};

export default observer(_Row);
