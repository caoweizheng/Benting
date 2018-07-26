/**
 * const prefixCls = 'styles-60562866';
 * const images = '/static/images/components/Reward';
 * @Author: qizc
 * @Date:   2018-02-25 15:51:33
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-29 12:16:22
 * @Path btWap \components\Reward\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, Button, Flex } from 'antd-mobile';
import { Animate } from 'components';
import G from 'stores/g';

const prefixCls = 'c-reward';

export default class Reward extends React.Component {
	static propsTypes = {
		show: PropTypes.bool,
		onSuccess: PropTypes.func,
		onCancel: PropTypes.func
	};

	static defaultProps = {
		show: false,
		onSuccess: Function.prototype,
		onCancel: Function.prototype
	};

	state = {
		active: undefined,
		money: '0.00',
		gid: undefined
	};

	componentDidMount() {
		this.fetchAmount(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.fetchAmount(nextProps);
	}

	fetchAmount = async props => {
		const { show } = props;

		if (show) {
			await G.fetchWalletInfo();
			this.forceUpdate();
		}
	};

	renderModal() {
		const { onSuccess, onCancel, list } = this.props;
		const { active, money, gid } = this.state;
		const walletInfo = G.getState('walletInfo');
		const { btAmount = 0, sysAmount = 0 } = walletInfo;
		const myMoney = sysAmount;
		const notEnough = parseFloat(money) > parseFloat(myMoney);

		return (
			<div className="modal">
				<List>
					<List.Item
						extra={
							<span
								className="text-danger text-sm"
								onClick={onCancel}
							>
								残忍拒绝
							</span>
						}
					>
						<span className="text-md">打赏礼物（金币）</span>
					</List.Item>
				</List>
				<Flex className={`${prefixCls}__wrap`} wrap="wrap">
					{list[0] &&
						list.map((item, index) => {
							const price = parseFloat(item.price * 1000 / 100);

							return (
								<div
									key={index}
									className={classNames('item text-center', {
										active: index === active
									})}
									onClick={() => {
										this.setState({
											active: index,
											money: price,
											gid: item.gid
										});
									}}
								>
									<img
										className="ds_img mt-sm"
										src={Utils.getImgUrl(item.imgs)}
									/>
									<div className="text-clamp-1 text-sm text-title">
										{item.title}
									</div>
									<div className="text-clamp-1 mt-xs text-primary text-xs">
										{price}金币
									</div>
									{active === index && (
										<img
											className="active_img"
											src={`${Const.__IMAGES__}/active.png`}
										/>
									)}
								</div>
							);
						})}
					{!list[0] && (
						<Flex.Item className="p-sw text-sub text-sm text-center">
							暂无礼物
						</Flex.Item>
					)}
				</Flex>
				<List className={`${prefixCls}__bottom`}>
					<List.Item
						extra={
							notEnough ? (
								<Button
									style={{
										verticalAlign: 'middle'
									}}
									inline
									size="small"
									type="primary"
									onClick={() =>
										Utils.router.push(
											'/person/wallet/coin_buy'
										)}
								>
									去兑换
								</Button>
							) : (
								<Button
									style={{
										verticalAlign: 'middle'
									}}
									inline
									size="small"
									type="primary"
									onClick={() =>
										Utils.onConfirm('确定打赏?', () =>
											onSuccess(gid)
										)}
									disabled={active === undefined}
								>
									打赏
								</Button>
							)
						}
					>
						<div className="text-desc text-sm">
							<span>我的金币：</span>
							<span
								className={classNames({
									'text-danger': notEnough,
									'text-primary': !notEnough
								})}
							>
								{myMoney}
							</span>
							<span className="ml-xs">枚</span>
							{notEnough && (
								<span>
									(<span className="text-danger">金币不足</span>)
								</span>
							)}
						</div>
					</List.Item>
				</List>

				<style jsx global>{`
					.c-reward {
					}
					.${prefixCls}__bottom .am-list-body:after {
						content: initial;
					}
					.${prefixCls}__bottom .am-list-extra {
						flex-basis: 30% !important;
					}
					.${prefixCls}__wrap {
						border-top: 0.01rem solid ${Styles.color_border};
					}
				`}</style>
				<style jsx>{`
					.c-reward {
					}
					.modal {
						position: fixed;
						z-index: ${Styles.z_mask};
						right: 0;
						bottom: 0;
						left: 0;
						width: 100%;
						background: #fff;
					}
					.item {
						position: relative;
						display: inline-block;
						width: 25%;
						height: 2.2rem;
						vertical-align: top;
						overflow: hidden;
					}
					.item:before,
					.item:after {
						content: '';
						display: block;
						position: absolute;
					}
					.item:before {
						top: auto;
						left: 0;
						bottom: 0;
						right: auto;
						width: 100%;
						border-bottom: 0.01rem solid ${Styles.color_border};
					}
					.item:after {
						top: 0;
						right: 0;
						bottom: auto;
						left: auto;
						width: 0.01rem;
						height: 100%;
						background-color: ${Styles.color_border};
					}
					.item.active .active_img {
						position: absolute;
						top: 0.1rem;
						right: 0.15rem;
						width: 0.27rem;
						height: 0.27rem;
					}
					.ds_img {
						width: auto;
						height: 0.98rem;
					}
				`}</style>
			</div>
		);
	}

	renderMask() {
		return <div className="am-modal-mask" />;
	}

	render() {
		const { show, className } = this.props;

		return (
			<div className={classNames(prefixCls, className)}>
				<Animate type="fade">{show && this.renderMask()}</Animate>
				<Animate type="bottom">{show && this.renderModal()}</Animate>
			</div>
		);
	}
}
