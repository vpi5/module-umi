
export default {
    // umi config
    publicPath : "./",
    history: 'hash',
    targets:{ios:8},
    autoprefixer:{
        flexbox: true,
    },

    externals : {
        "jquery" : "jQuery" ,
        "echarts" : "echarts" ,
        "moment" : "moment" ,
        "react" : "React" ,
        "react-dom" : "ReactDOM"
    },

    chainWebpack(config, { webpack }) {
        /*--- 开始配置项目工程文件 --------------------------*/
        let argvFun = require('./script/argv');
        argvFun();
        /*--- 配置项目工程文件结束 --------------------------*/
        config.optimization.splitChunks({
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -20
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        });
    },
    plugins : [
        ["umi-plugin-react",{
            pwa : {
                disableServiceWorker : true ,
            },
            dynamicImport : {
                webpackChunkName : true ,
                loadingComponent : "./pages/loading"
            },
            antd : true ,
            hardSource : true ,
            dll : false
        }]
    ],

    extraBabelPlugins: [
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]
    ],

    //配置的 evn 选项
    define: {
        "process.env.homePage" : "homePage", // 当前指定的启动页面
    }
}
