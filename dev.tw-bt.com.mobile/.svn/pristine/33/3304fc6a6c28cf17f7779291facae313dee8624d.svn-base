/**
 * const prefixCls = 'styles-72348554';
 * const images = '/static/images/src/person/address/Index';
 * @Author: qizc
 * @Date:   2018-01-19 09:22:12
 * @Last Modified by:   qizc
 * @Last Modified time: 2018-05-25 12:27:50
 * @Path btWap \src\person\address\Index\_Item.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from '@';
import { Flex, List, Button } from 'antd-mobile';
import { Img } from 'components';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-72348554';

const _Item = (props, { $ }) => {
    const {
        address,
        addressId,
        city,
        district,
        phone = '',
        province,
        recName
    } = props;
    const _default = props.default || 0;

    return (
        <List.Item className={prefixCls}>
            <Flex justify="between">
                <div>{recName}</div>
                <div>{phone.replace(/\s+/g, '')}</div>
            </Flex>
            <div className="text-sub text-md mt-md address">
                {`${province}${city}${district}${address}`}
            </div>
            <Flex justify="between" className="text-sm mt-sm text-sub">
                <Button
                    inline
                    size="small"
                    type={_default == 1 ? 'primary' : 'ghost'}
                    onClick={() =>
                        Utils.onConfirm('确认更改默认状态？', () =>
                            $.doUpdate(addressId, _default)
                        )}
                >
                    {_default == 1 ? '取消默认' : '设为默认'}
                </Button>
                <Flex>
                    <Button
                        inline
                        size="small"
                        type="ghost"
                        onClick={e => {
                            Utils.router.push(
                                `/person/address/update?id=${addressId}`,
                                `/person/address/update/${addressId}`
                            );
                        }}
                    >
                        编辑
                    </Button>
                    <Button
                        className="ml-md"
                        inline
                        size="small"
                        type="ghost"
                        onClick={() =>
                            Utils.onConfirm('确认删除该地址？', () =>
                                $.doDelete(addressId)
                            )}
                    >
                        删除
                    </Button>
                </Flex>
            </Flex>
            <style jsx>{`
                .styles-72348554 {
                }
                .address {
                    white-space: normal;
                }
            `}</style>
        </List.Item>
    );
};

_Item.contextTypes = {
    $: PropTypes.object
};
export default observer(_Item);
