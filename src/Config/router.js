import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Facebook from './../Component/Home/facebook'
import Home from './../Component/Home/index'

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Route exact path="/" component={Facebook} />
                    <Route path="/home" component={Home} />
                </Router>
            </div>
        )
    }
}

export default AppRouter;