/**
 * const prefixCls = 'styles-17377079';
 * const images = '/static/images/src/bbs/Index';
 * @Author: Jack
 * @Date:   2017-12-25 11:13:58
 * @Last Modified by:   Jack
 * @Last Modified time: 2018-06-01 10:01:39
 * @Path btWap \src\bbs\Index\index.js
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from '@';
import { ListView } from 'components';
import { Layout } from 'src/_';
import _Menu from './_Menu';
import _TopicFixed from './_TopicFixed';
import _FixedTextarea from './_FixedTextarea';
import _List from './_List';
import Utils from 'utils';
import G from 'stores/g';
import UI from 'stores/ui';
import store from './store';
import { images, imagesHome } from './ds';

@inject(store)
@observer
export default class BBS extends React.Component {
    static contextTypes = {
        $: PropTypes.object
    };

    componentDidMount() {
        const { $ } = this.context;

        $.setHeader();
    }

    componentWillUnmount() {
        UI.resetHeader();
    }

    render() {
        const mounted = G.getState('mounted');

        return (
            <Layout title="汀吧">
                <_Menu />
                <img
                    className="img-floor t-img mt-d"
                    src={`${imagesHome}/floor.jpg`}
                    onClick={() => Utils.router.push('/event/floor')}
                />
                <_List className="mt-d" />
                <_TopicFixed />
                {mounted && <_FixedTextarea />}

                <style jsx>{`
                    .styles-17377079 {
                    }
                    .img-floor {
                        width: 100%;
                        min-height: 0.85rem;
                    }
                `}</style>
            </Layout>
        );
    }
}
