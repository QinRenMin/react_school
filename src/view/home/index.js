import React,{Component} from 'react';
import Header from "../../common/component/header";
import Footer from "../../common/component/footer";
import Menu from "../../common/component/menu";
import Slights from "./slights";

let imgs = [
    require('../../common/img/main3.jpg'),
    require('../../common/img/main1.png'),
    require('../../common/img/main2.jpg'),
    require('../../common/img/main4.jpg'),
];

export default  class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            width:1000,
            i:0
        }

    }

    render(){
        const {width} = this.state;
        let {i} = this.state;
        // (function () {
        //     alert(1)
        // })();
        return(
            <div >
                <Header
                    login={true}
                    menu={true}

                />
                <div id='menu'>
                    <Menu/>
                </div>
                <div className='imgList'>
                   <ul style={{width:width* imgs.length}} id='Ul'>
                       {

                           imgs.map((item,index) => {
                               return(
                                   <li>
                                       <img src={item} alt="" key={index} style={{width:width}} id={index}/>
                                   </li>
                               )
                           })
                       }
                   </ul>
                    <nav className='imgList-span'>
                        {
                            imgs.map(() =>{

                                return(

                                    <a href="javascript:;">
                                     <span key={i}
                                           className={i === 0 ?'active':'demo'}> </span>
                                    </a>


                            )
                        })
                        }
                    </nav>
                </div>
                <div className='page-slight'>
                    <Slights/>
                </div>
                <div className='page-footer'>
                    <Footer/>
                </div>

            </div>

        )
    }
}