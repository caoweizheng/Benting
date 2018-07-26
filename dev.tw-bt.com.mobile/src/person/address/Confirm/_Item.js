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
import { Flex, List, Radio } from 'antd-mobile';
import { Img } from 'components';
import Const from 'const';
import Styles from 'styles';
import Utils from 'utils';

const prefixCls = 'styles-12788843';

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
        <List.Item
            className={prefixCls}
            onClick={() =>
                Utils.onConfirm('确认选择该地址？', () => $.onChange(addressId))}
        >
            <Flex justify="between">
                <div>{recName}</div>
                <div>{phone.replace(/\s+/g, '')}</div>
            </Flex>
            <div className="text-sub text-md mt-md">
                {`${province}${city}${district}${address}`}
            </div>
        </List.Item>
    );
};

_Item.contextTypes = {
    $: PropTypes.object
};
export default observer(_Item);
