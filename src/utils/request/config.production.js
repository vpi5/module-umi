/*
*
*
*   生产地址
*
*
*/

let wssBase = 'https://quotetest.xinyusoft.com'; // 行情 请求地址

let wssOption = ''; // /quote  option 配置项

module.exports = {
    marketHttp : `${wssBase}/secuInfo/`,   // 行情http请求 [码表等]
    classifySocket : {
        url : `${wssBase}/stock`,
        options : {
            path :`${wssOption}/classify`,
        }
    },  //  行情 classifySocket 请求地址
    defaultSocket : {
        url : `${wssBase}/stock`,
        options : {
            path : `${wssOption}/socket.io`,
        },
    },  // 行情 default socket 请求地址
};
