##### 项目集成 react16 umi集成路由 dayjs时间插件

# 安装依赖

    npm install || yarn install

# 启动本地开发环境服务

    npm start [启动环境] || yarn start [启动环境]    ==> 启动项目
    npm start test || yarn start test ==> 例子
    
    ps:默认端口为8000，可在.env文件中进行自行修改
    
# 打包测试代码

    npm build     ==> 打包项目
    
    
# 按需打包配置

    1、新建文件 例示： .umirc.xxx.js
    2、在创建的文件中添加所要抛弃的文件夹或文件  例示：查看.umirc.prod.js
    3、在启动项中添加 cross-env UMI_ENV=xxx umi dev 例示：查看package.json中的script
    
# 如需配置启动项和打包项 请按照以下要求写入
    
    1、添加 Protobuf 的后缀为 .proto 转义 json 文件 例示：node script/proto.js
    
    ps: 详细配置方式 请移步查看 package.json文件 和 script文件夹

## webpack config 等配置写在.umirc.js中

## 所有公共组件创建在src/components中

# 必要的规范：
#### css module解决方案

    多人协作开发为了有效避免less转换css时发成class类名发生冲突问题
    所以采用了css module的方式
    调用  import * as styles from './style.less';
    使用  className={styles.class}

#### 所有className,id,文件名以及方法名请使用小驼峰命名
    例如： className='myCompnent' myUtil.js
          
#### 组件文件夹和组件名称请使用小驼峰命名

    例如： myComponent

#### 所有有属性请使用单引号

    例如: className={'myComponent'}
    
#### 对于JSX语法，props少的可以一行，多的遵循下面的对齐风格。
    
    1、let {name, age} = this.state;
    2、let {data, id} = this.props;


#### src路径表

    src  components(公共组件)  pages(默认index路径)
    .umi            临时文件 不进行打包
    index           首页（自选）
    market          行情
    transaction     交易
    manage          理财 
    information     资讯
    mainIndex       按钮头部变换组件区
    loading         加载动画页
    404             404页面

#### 打包需要抛弃的配置

    externals : {
        "jquery" : "jQuery" ,
        "echarts" : "echarts" ,
        "moment" : "moment" ,
        "react" : "React" ,
        "react-dom" : "ReactDOM"
    },
    
#### 是否兼容到 IE 9
    
    .umirc.js中添加 targets: {ie: 9},
    
#### 是否兼容到 IOS8

    targets:{ios:8},
        autoprefixer:{
            flexbox: true,
        },

#### 主题样式控制文件

    src/utils/theme 文件夹中
    命名格式：`theme-${启动名称}-config.js`
    对应的启动文件名称为： `.umirc.${启动名称}.js`
    改相应的问题时 应将启动名称与主题样式文件对应。
