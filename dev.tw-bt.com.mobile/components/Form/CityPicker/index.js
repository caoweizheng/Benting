/**
 *
 * @Author: Jack
 * @Date:   2017-06-17 10:17:42
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-27 11:12:52
 */
'use strict';

import React from 'react';
import classNames from 'classnames';
import Picker from '../Picker';
import province from './province';
import city from './city';
import area from './area';

const prefixCls = 'components-form__city-picker';
const ds = province.map(p => {
    p = p.name;

    const citys = [];
    if (city[p]) {
        city[p].forEach(c => {
            const areas = [];

            if (c == p) c = '市辖区';

            if (area[p][c]) {
                area[p][c].forEach(a => {
                    areas.push({
                        label: a,
                        value: a
                    });
                });
            }

            citys.push({
                label: c,
                value: c,
                children: areas
            });
        });
    }

    return {
        label: p,
        value: p,
        children: citys
    };
});

const CityPicker = props => {
    const { className, cols = 3, ...other } = props;

    return (
        <Picker
            className={classNames(prefixCls, className)}
            cols={cols}
            data={ds}
            format={values => {
                return values
                    .filter(
                        item =>
                            item !== '市辖区' && item !== '省直辖县级行政区划'
                    )
                    .join(' ');
            }}
            {...other}
        />
    );
};

export default CityPicker;
