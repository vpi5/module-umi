import React from 'react';
import * as styles from './style.less';
import loading from '../../assets/loading/clickLoading.gif';

export default class Loading extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return <div className={styles.loading_body}>
            <div className={styles.loading_img}>
                <img src={loading} alt=""/>
            </div>
        </div>
    }
}
