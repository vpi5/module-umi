import React from "react";
import Redirect from 'umi/redirect';

export default class extends React.Component{
    componentDidMount(){
    }
    toLoadPage (){
        let homePage = process.env.homePage;
        return <Redirect to={`${homePage}`}/>
    }

    render(){
        return this.toLoadPage();
    }
}
