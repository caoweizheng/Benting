/**
 * const prefixCls = 'style-191368';
 * const images = '/static/images/src/auth/Baidu';
 * @Author: czy0729
 * @Date: 2018-07-17 11:13:46
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-17 11:15:48
 * @Path dev.tw-bt.com.mobile /src/auth/Baidu/_Title.js
 */
import React from 'react';
import { observer } from '@';

const _Title = props => {
    const { queryCode } = props;

    return (
        <div className="text-center text-void mt-md">
            <p className="text-sm mt-sm">
                {queryCode == '成功'
                    ? '经核实认证：您购买的是本汀正品商品'
                    : '您输入的防伪验证码不存在，请谨防假冒！'}
            </p>

            <style jsx>{`
                .style-191368 {
                }
                .query {
                    max-width: 100%;
                }
            `}</style>
        </div>
    );
};

export default observer(_Title);
