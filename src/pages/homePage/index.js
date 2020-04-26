import React from 'react';
import * as styles from './style.less';


/**
 *
 *  @param HomePage
 *
*/

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        console.log(webConfig)
    }

    componentWillReceiveProps(){}

    componentWillUnmount(){}

    render(){
        return (
            <div className={styles.HomePage}>
                homePage
            </div>
        )
    }
}
