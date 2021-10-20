import React, {useContext} from 'react';
import Header from "./Header/Header";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Notice from "./Notice/Notice";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";
import ServiceDetails from "./ServiceDetails/ServiceDetails";
import {AuthContext} from "../context/AuthState";

const Routes = () => {
    const {currentUser} = useContext(AuthContext)

    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>

                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/aboutus">
                    {currentUser.isAuthenticated ? <AboutUs/> : <Redirect to="/login/?next=/aboutus/"/>}
                </Route>
                <Route exact path="/notice">
                    {currentUser.isAuthenticated ? <Notice/> : <Redirect to="/login/?next=/notice/"/>}
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/service_details/:id">
                    <ServiceDetails/>
                </Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default Routes