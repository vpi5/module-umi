import {createStore} from 'redux'; //导入redux ， 从 redux 引入一个方法 createStore
import reducer from "./reducer"; //导入库reducer，

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //创建一个store，并把库里得内容传递进去

export default store; //导出暴露出store
