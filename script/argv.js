
/*
*
*
*   启动配置
*
*/

function argvFun () {
    // 判断 配置文件是否存在
    if(process.argv.length < 4){
        throw new Error('启动参数不正确!');
    }
    // 添加配置文件写入
    if(process.argv.length >= 4){
        let configKey = process.argv[3];
        try {
            let path = require('path');
            let configFile = require(`../src/utils/shellConfig/config.${configKey}.js`);
            let writeConfigFun = require('./upDateItems');
            // 路径开头的/不会影响拼接，..代表上一级文件，拼接出来的结果是：E:/webpack-react/public/config.js
            writeConfigFun(configFile, path.join(__dirname,'..', 'public/config/config.js'));
        }catch (e) {
            throw new Error('启动的配置文件不存在!');
        }
    }

}

module.exports = argvFun;
