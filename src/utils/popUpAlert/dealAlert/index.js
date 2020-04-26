import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from './style.less';
import succeed from '../../../assets/utils/succeed.png';
import error from '../../../assets/utils/error.png';


class DealAlert extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alertStatus : false,
            alertTip : {},
            closeAlert : function () {},
        };
    }

    // 关闭弹框的方法
    confirm = () => {
        this.setState({
            alertStatus:false
        });
        if(this.state.closeAlert){
            this.state.closeAlert('close');
        }
    };

    // 打开弹框的方法
    open =(options)=>{
        options = options || {};
        options.alertStatus = true;
        this.setState({
            closeAlert : options.closeAlert,
            ...options
        });
        this.timer = setTimeout(() => {
            this.confirm();
        }, 2000)
    };

    render(){
        let {alertStatus, alertTip} = this.state;
        return (
            alertStatus ?
                <div className={`${styles.dealAlert}`}>
                    <div className={alertTip.type === "Y" ? styles.succeedAlertBody : styles.errorAlertBody}>
                        <img src={alertTip.type === "Y" ? succeed : error} alt=""/>
                        <span>{alertTip.content}</span>
                    </div>
                </div>
                :
                ''
        );
    }
}

let div = document.createElement('div');

document.body.appendChild(div);

div.setAttribute('id', 'dealAlert');

let Box = ReactDOM.render(React.createElement(
    DealAlert
),div);

export default Box;
