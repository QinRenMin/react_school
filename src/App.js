import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './view/login/index'
import Home from "./view/home/index";
import Course from "./view/course/index";
import Teacher from "./view/teacher";
import Show from "./view/showCourse";
import Message from "./view/comment";
import Activity from "./view/activity/showActivity";
import "./common/css/style.css"

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path = '/home' component = {Home}/>
                <Route path = '/course' component ={Course}/>
                <Route path = '/teacher' component ={Teacher}/>
                <Route path = '/login' component ={Login}/>
                <Route path = '/showCourse' component ={Show}/>
                <Route path = '/activity' component = {Activity}/>
                <Route path = '/comment' component ={Message}/>
            </Switch>
        );
    }
}

export default App;