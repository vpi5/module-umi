

//操作redux方法，这样写提高代码可维护性，并对自动化测试有好处
//导入 actionTypes 常量
import { DELETE_TODO_ITEM } from './actionTypes';


export const getDeleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});
