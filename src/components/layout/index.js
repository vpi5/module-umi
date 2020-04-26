import React from 'react';
import * as styles from './style.less';
import Scroll from 'react-bscroll';
import 'react-bscroll/lib/react-scroll.css';


/**
 *
 *  @param LayoutApp
 *
*/

export class LayoutApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){}

    componentWillReceiveProps(){}

    componentWillUnmount(){}

    handleGo = () => {
        if(this.props.btnFun){
            this.props.btnFun();
            return;
        }
        window.history.back(-1);
    };

    render(){
        let {title, children, scroll, ifBtnBtm} = this.props;
        return (
            <div className={styles.LayoutApp}>
                <div className={styles.LayoutApp_top}>
                    <div onClick={()=>{this.handleGo()}}>
                        <svg t="1566267108519" className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="16223" width="200" height="200">
                            <path
                                d="M356.51594248 512.33968684l403.41955066-403.42645486c16.95396363-16.9429169 16.95396364-44.44374273 0-61.38804047-16.9429169-16.95396363-44.44374273-16.95396364-61.38804047 0l-434.11840383 434.12116552c-16.95810615 16.9429169-16.95810615 44.44374273 0 61.38804047l434.11978467 434.11978467c8.47422013 8.47836265 19.58446539 12.71892482 30.69332982 12.71892482s22.22049052-4.24056217 30.69332982-12.71892482c16.95810615-16.9429169 16.95810615-44.44374273 0-61.38804047l-403.42231235-403.4278357z"
                                p-id="16224" fill="#FFFFFF"/>
                        </svg>
                    </div>
                    <div>
                        {title}
                        {/*<span style={{display : !title && title === '' ? 'none' : 'initial'}}>{'模拟'}</span>*/}
                    </div>
                </div>
                <div className={styles.LayoutApp_center}>
                    {
                        scroll ?
                            <Scroll click={true}>
                                <div>
                                    {children}
                                </div>
                            </Scroll>
                            :
                            <div style={{height: ifBtnBtm ? 'calc(100% - 50px)' : '100%'}}>
                                {children}
                            </div>
                    }
                </div>
            </div>
        )
    }
}
