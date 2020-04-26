

export function render(oldRender) {
    oldRender();
}


// 监听路由 每次发生路由变化 即进入
export function onRouteChange({ location, routes, action }) {
    // location 当前页面
    // routes 全部路由
    // action 记录当前状态
}

// 监听 props 每个页面生命周期中 只进入一次
export function modifyRouteProps(props, { route }) {
    // props 当前 props
    // route 当前 props 所在的页面级 路由
    // 埋点统计
    return { ...props };
}
