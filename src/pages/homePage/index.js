import React from 'react';
import * as styles from './style.less';
// 引入redux
import Store from "../../components/store";


/**
 *
 *  @param HomePage
 *
*/

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        //订阅 Redux 的改变，只要 Redux 发生改变 storeChange方法就会自动执行一次
        Store.subscribe(this.storeChange);
    }

    componentDidMount(){
        console.log(webConfig)
        let dataList = Store.getState().classDemoList;
        console.log(dataList)
        this.setState({
            dataList
        })
    }

    storeChange = () => {
        let dataList = Store.getState().classDemoList;
        console.log('监听更新:', dataList);
        this.setState({
            dataList
        })
    };

    componentWillReceiveProps(){}

    componentWillUnmount(){}

    render(){
        return (
            <div className={styles.HomePage}>
                homePage
                <button onClick={() => {
                    //调用 dispatch 并传递参数给 Redux
                    Store.dispatch({
                        type : 'upDataClassDemoList',
                        callback : (data) => {
                            data.classDemoList.push('callback 新增');
                            return data;
                        }
                    });
                }}>
                    按钮新增
                </button>
            </div>
        )
    }
}
