/**
 * 容器头
 * @Author: Jack
 * @Date:   2017-05-20 18:01:32
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-05-25 12:27:50
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from '@';
import { Header } from 'components';
import UI from 'stores/ui';

const _Header = (props, { pathname }) => {
    const { title, hideBack, hideLogo } = props;
    const header = UI.getState('header');

    return (
        <Header
            title={title}
            pathname={pathname}
            hideBack={hideBack}
            hideLogo={hideLogo}
            {...header}
        />
    );
};

_Header.contextTypes = {
    pathname: PropTypes.string
};

export default observer(_Header);
