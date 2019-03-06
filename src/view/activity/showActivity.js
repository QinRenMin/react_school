import React,{Component} from 'react'
import Header from "../../common/component/header";
import Menu from "../../common/component/menu";
import Footer from "../../common/component/footer";

export default class Activity extends Component{
    render(){
        return (
            <div>
            <Header 
                login={true}
                menu={true}
            />
            <div id='menu'>
                <Menu/>
            </div>
            <div className='page'>
                <div className='page-con'>

                </div>
                <Footer/>
            </div>

        </div>)
    }
}