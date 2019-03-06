import React from 'react';
import {Link} from 'react-router-dom'
export default function Menu() {
    return(
       <nav className='header-menu'>
           <Link to='/home' className = 'iconfont icon-index'>首页</Link>
           <Link to='/teacher' className = 'iconfont icon-jiaoshi'>教师</Link>
           <Link to='/course' className = 'iconfont icon-kecheng'>课程</Link>
           <Link to='/activity' className = 'iconfont icon-shetuanhuodong'>社团</Link>
       </nav>
    )
}
