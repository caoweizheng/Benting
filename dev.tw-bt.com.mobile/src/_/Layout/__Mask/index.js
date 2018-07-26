/**
 * const prefixCls = 'styles-67041390';
 * const images = '/static/images/src/_/Layout/__Mask';
 * @Author: Jack
 * @Date:   2017-12-06 11:13:58
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-06 11:45:09
 * @Path nidosport@next \src\_\Layout\__Mask\index.js
 */
'use strict';

import React from 'react';
import { Animate } from 'components';
import { observer } from '@';
import Styles from 'styles';
import UI from 'stores/ui';

const prefixCls = 'styles-67041390';

const __Mask = props => {
    const { show, children } = UI.getState('mask');

    return (
        <div className={prefixCls}>
            <Animate type="fade">
                {show && (
                    <div className="mask am-modal-mask flex-center">
                        {children}
                    </div>
                )}
            </Animate>
            <style jsx>{`
                .mask {
                    z-index: ${Styles.z_mask};
                }
            `}</style>
        </div>
    );
};

export default observer(__Mask);
