/**
 * const prefixCls = 'style-171593';
 * const images = '/static/images/src/auth/Baidu';
 * @Author: czy0729
 * @Date: 2018-07-17 11:13:03
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-07-17 12:01:24
 * @Path dev.tw-bt.com.mobile /src/auth/Baidu/store.js
 */
import { observable } from 'mobx';
import common from 'stores/common';
import Api from 'api';
import Const from 'const';

class store extends common {
    @observable
    state = this.initState({
        state: {
            queryCode: false,
            queryList: Const.__EMPTY__,
            _loaded: false,
            _filter: true
        }
    });

    /*==================== Action ====================*/
    //查询
    doCodeQuery = async value => {
        const code = value.code;

        if (!/^\d{12}$/.test(code) && !/^[A-Z]{2}\d{12}$/.test(code)) {
            Utils.light('防伪码为12位数字或2位大写字母加12位数字', 3000);
            return false;
        }

        this.setState({
            _loaded: true
        });

        const data = await Api.P('get_code_query', {
            _: {
                search: {
                    codeNo: code
                }
            }
        });

        const qlist = await Api.P('get_code_query_list', {
            _: {
                limit: 0,
                search: {
                    codeNo: code
                }
            }
        });

        this.setState({
            queryList: qlist,
            queryCode: data,
            _loaded: false
        });
    };
}

export default store;
