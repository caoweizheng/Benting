/**
 * const prefixCls = 'styles-28082693';
 * const images = '/static/images/src/member/Index';
 * @Author: qizc
 * @Date:   2017-12-25 15:43:53
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 15:12:05
 * @Path btWap \src\member\Index\_Join.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, Button } from 'antd-mobile';
import Styles from 'styles';
import Utils from 'utils';
import { images } from './ds';

const prefixCls = 'styles-28082693';

@observer
export default class _Join extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    render() {
        const { $ } = this.context;
        const { className } = this.props;
        const isLogin = Utils.checkLogin();
        let {
            userId = '',
            niname = '',
            assemblyName = '',
            btlevel = 0
        } = $.getState('userInfo');
        let title = '欢迎您加入汀友会';
        if (isLogin) title = '关于本汀';

        return (
            <div
                className={classNames(prefixCls, className, 't-bg')}
                style={{
                    backgroundImage: `url(${images}/bg.jpg)`
                }}
            >
                <div className="p-sw text-sm text-void">
                    <div className="text-center mt-md">
                        {userId ? (
                            <Flex align="start" justify="between">
                                <Flex.Item>
                                    <p className="text-lg">{niname}</p>
                                    <img
                                        className="line"
                                        src={`${images}/line.png`}
                                    />
                                    {assemblyName && (
                                        <p className="text-sm mt-sm">
                                            您已成功加入【{assemblyName}】汀友会
                                        </p>
                                    )}
                                    <p className="text-sm mt-sm">
                                        当前会员等级：{Utils.getBTLevel(btlevel)}
                                    </p>
                                </Flex.Item>
                                <img
                                    className="hz_small ml-sm"
                                    src={`${images}/hz.png`}
                                />
                            </Flex>
                        ) : (
                            <img className="hz" src={`${images}/hz.png`} />
                        )}
                    </div>
                    <div className="mt-md">
                        <div className="titie text-xl text-bold text-primary">
                            {title}
                        </div>
                        <div className="mt-md">
                            公元1976年，本汀由旅日华人李东尼先生创立于日本福井县。1987年起回归根植于中国宝岛台湾，2011年登陆中国大陆市场，发展迅速，现为中国独树一帜的实力台钓品牌！
                        </div>
                        <div className="mt-md">
                            “本”为木落归本之意，“汀”字由三点水加丁组成，“丁”象形鱼钩，水里有钩寓意钓鱼。创始人作为自幼旅居他乡炙爱钓鱼的中国人，“本汀”二字的名称源于其冀望木落归本，叶落归根，垂纶家乡一方乐水的夙愿，饱含一个漂泊在外的离家游子对故乡绵绵不断的思念之情以及对归乡钓鱼的眷恋！
                        </div>
                        <div>木落归本，终钓鱼！--本汀</div>
                        <div className="mt-md">
                            时至今日，本汀作品凭借扎实的功底深受众多台钓资深钓友的喜爱，品牌爱好者及经销商遍布世界各地。几乎每一支本汀出品的鱼竿背面都印有该鱼竿年份的烙印，这不单止是一个纪念，要知道，夕阳西下，每个人都将会老去，但本汀将陪伴每一位同好在寻觅心灵那一汪碧水和快乐直至永恒！
                        </div>
                    </div>
                    <div
                        className="btn mt-lg text-md mb-lg text-center"
                        onClick={() => {
                            isLogin
                                ? Utils.router.push('/person')
                                : Utils.router.push('/login');
                        }}
                    >
                        {isLogin ? '进入汀友中心' : '加入汀友会'}
                    </div>
                </div>
                <style jsx>{`
                    .hz {
                        width: 4rem;
                        height: 4rem;
                    }
                    .hz_small {
                        width: 2rem;
                        height: 2rem;
                    }
                    .line {
                        height: 0.03rem;
                        width: 80%;
                    }
                    .btn {
                        height: 0.94rem;
                        width: 100%;
                        line-height: 0.94rem;
                        background-color: ${Styles.color_primary};
                    }
                `}</style>
            </div>
        );
    }
}
