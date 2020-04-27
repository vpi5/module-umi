import axios from 'axios';
import qs from 'qs';
import DealAlert from "../popUpAlert/dealAlert";

let baseURL = webConfig;

// 封装axios
async function apiAxios (module, method, url, params) {
    let headers = {};
    params.timestamp = new Date().getTime();
    let httpDefault = {
        method: method,
        baseURL: baseURL[module],  // 用于区分 模拟交易和行情数据接口
        url: url,
        headers : headers,
        // `params` 是即将与请求一起发送的 URL 参数
        // `data` 是作为请求主体被发送的数据
        params: method === 'GET' || method === 'DELETE' ? params : null,
        data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
        timeout: 10000
    };

    return await axios(httpDefault);
}

function gat(module, method, url, params) {

    return new Promise(callback =>{

        apiAxios(module, method, url, params).then(data =>{

            callback(data.data);

        }).catch(err => {
            DealAlert.open({
                alertStatus : true,
                alertTip : {
                    type : 'N',
                    content : '网络错误'
                },
            });
        });

    }) ;

}

// 行情接口使用的
export function stockRequest(method, url, data = {}) {
    return gat('market', method , url, data) ;
}

// 模拟交易接口使用的
export function baseRequest(method, url, data = {}) {
    return gat('base', method , url, data) ;
}
