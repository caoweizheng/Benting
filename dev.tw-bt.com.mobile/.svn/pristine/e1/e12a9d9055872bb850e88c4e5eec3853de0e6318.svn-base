/**
 * 
 * @Author: Jack
 * @Date:   2017-05-10 10:53:29
 * @Last Modified by:   Jack
 * @Last Modified time: 2017-12-31 00:59:02
 */
'use strict';

import classNames from 'classnames';
import Styles from 'styles';

const prefixCls = 'c-page';

const Page = ({ className, children, ...other }) => (
    <div className={classNames(prefixCls, className)} {...other}>
        {children}

        <style jsx global>{`
            .c-page {
            }
            .${prefixCls} {
                position: relative;
                min-height: 90vh;
                padding-bottom: 1.6rem;
                overflow: hidden;
            }
        `}</style>
    </div>
);

export default Page;
