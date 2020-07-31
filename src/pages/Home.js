import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import '../assets/css/main.css'

import {Main, Notice, Events, Community, Contacts} from '../pages/index'
import {Navigator, Footer} from "../commons/index";
import {CustomerInfo, Mypage, Order, Payment, Statistics,GoogleMapClass} from "./CompanyPage";
import {Signup,Login} from "./Account";

const Home = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                    <Navigator/>
                    <Main/>
                    <Footer/>
                    </Route>
                    <Route path="/googlemapclass" >
                        <Navigator/>
                        <GoogleMapClass/>
                    </Route>


                    <Route path="/login" >
                        <Navigator/>
                        <Login/>
                        <Footer/>
                    </Route>

                    <Route path="/signup" >
                        <Navigator/>
                        <Signup/>
                        <Footer/>
                    </Route>

                      <Route path="/mypage" >
                        <Navigator/>
                        <Mypage/>
                        <Footer/>
                    </Route>

                    <Route path="/order" >
                        <Navigator/>
                        <Order/>
                    </Route>

                    <Route path="/payment">
                        <Navigator/>
                        <Payment/>
                    </Route>

                     <Route path="/statistics">
                        <Navigator/>
                        <Statistics/>
                    </Route>

                    <Route path="/customerinfo">
                        <Navigator/>
                        <CustomerInfo/>
                    </Route>
                    <Route path={"/notice"} component={Notice}/>
                    <Route path={"/events"} component={Events}/>
                    <Route path={"/community"} component={Community}/>
                    <Route path={"/contacts"} component={Contacts}/>
                </Switch>
        </BrowserRouter>
    );
}

export default Home;
