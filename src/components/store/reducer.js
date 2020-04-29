import { DELETE_TODO_ITEM } from './actionTypes' //导入 actionTypes 常量
//库默认数据
const defaultState = {
    classDemoList : ['我是郭靖','我是黄老邪','我是黄蓉'],
    data : ['1', '2', '3']
};

//返回数据
export default (state = defaultState, action) => {
    //state 只可以接收，但是绝对不可以修改，所以我们要拷贝一份state做修改，并返回回去
    const newState = JSON.parse(JSON.stringify(state));
    // 监听 值为 DELETE_TODO_ITEM 则在指定 下标位置 删除 1 个
    if(action.type && action.type === DELETE_TODO_ITEM){
        newState.data.splice(action.index, 1);
        return newState;
    }
    // 监听 callback 存在 使用 callback 处理数据
    if(action.callback){
        return {
            ...action.callback(newState)
        };
    }
    // 原样返回 数据
    return state;
};
