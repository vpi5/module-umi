import axios from 'axios';
import qs from 'qs';
import DealAlert from "../popUpAlert/dealAlert";


let baseURL = webConfig;
/*
// 添加请求拦截器，在发送请求之前的拦截。
axios.interceptors.request.use(function (config) {
    // 此处是 发起请求之前的操作
    return config
}, function (error) {
    // 请求出现错误 的处理
    return Promise.reject(error)
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 此时服务端已经做出响应
    // 如果只需要返回体中数据，则如下，如果需要全部，则 return response 即可
    //console.log(response, '====')
    return response
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
});*/



// 封装axios
export const apiAxios = function (module = 'base', method, url, params) {
    let headers = {};
    // 添加动态参数
    params.timestamp = new Date().getTime();

    let httpDefault = {
        method: method,
        baseURL: baseURL[module],
        url: url,
        headers,
        // `params` 是即将与请求一起发送的 URL 参数
        // `data` 是作为请求主体被发送的数据
        params: method === 'GET' || method === 'DELETE' ? params : null,
        data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
        timeout: 10000
    };

    // 通过 Promise 进行回调参数
    return new Promise((resolve, reject) => {
        axios(httpDefault)
            .then((res) => {
                if(res.data.op && res.data.op.code === 'N'){
                    DealAlert.open({
                        alertStatus : true,
                        alertTip : {
                            type : 'N',
                            content : res.data.op.info
                        },
                    });
                }
                resolve(res.data);
            })
            .catch((response) => {
                DealAlert.open({
                    alertStatus : true,
                    alertTip : {
                        type : 'N',
                        content : '网络错误'
                    },
                });
                reject(response)
            })
    })
};

class AjaxHttp {

    POST = (url, data, callBack) => {
        apiAxios('base', 'POST', url, data)
            .then(res => {
                callBack(res);
            })
    };

    GET = (url, data, callBack) => {
        apiAxios('base', 'GET', url, data)
            .then(res => {
                callBack(res);
            })
    };

    // 行情专属 接口 Fun
    marketGET = (url, data, callBack) => {
        apiAxios('market', 'GET', url, data)
            .then(res => {
                callBack(res);
            })
    };
}
const ajaxHttp = new AjaxHttp();

export default ajaxHttp;
