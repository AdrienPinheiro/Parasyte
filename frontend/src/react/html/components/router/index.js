import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../../pages/home";
import Navbar from "../Navbar";



const index = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Switch>
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default index;