import React,{Component} from 'react'
import {Link} from 'react-router-dom'
export  default class Header extends Component{
    render(){
        let{menu,back,login} = this.props;
        return(
            <header id='header'>
                {menu?<a href="javascript:;" className='header-btn-left iconfont icon-caidan'>
                </a>:""}
                {login?<Link to="/login" className = 'header-btn-right iconfont icon-denglu'/>:""}

                <a href="javascript:;" className='header-logo iconfont icon-school'>
                </a>
                {back?<a href="javascript:;" className='header-btn-left iconfont icon-fanhui '>
                </a>:""}


        </header>)
    }
}