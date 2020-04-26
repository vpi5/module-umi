/*
*
*
*   根据当前 配置环境 导出指定 ajax 访问地址
*
*
*/

let config = process.env.config;

let requestUrl;

if(config.indexOf('window') !== -1){
    requestUrl = window[config.split('.')[1]];
}else {
    requestUrl = require(`./config.${config}.js`);
}

module.exports = requestUrl;
