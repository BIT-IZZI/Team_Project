import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import '../assets/css/main.css'
import VideoUploadPage from "../components/VideoUploadPage";
import {Main, Notice, Events, Community, Contacts} from '../pages/index'
import {Navigator, Footer} from "../commons";
import {GoogleMapClass,Statistics,CustomerInfo,Order,Payment,Mypage} from './CompanyPage'
import {Login,Signup} from './Account'

const Home = () => {
    return (
        <>
            <Navigator/>
            <Switch>
                <Route exact path={"/"}>
                    <Main/>
                </Route>
                <Route path="/googlemapclass" >
                    <GoogleMapClass/>
                </Route>
                <Route path="/login" >
                    <Login/>
                </Route>
                <Route path="/signup" >
                    <Signup/>
                </Route>
                <Route path="/mypage" >
                    <Mypage/>

                </Route>

                <Route path="/order" >
                    <Order/>
                </Route>
                <Route path="/payment">
                    <Payment/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>

                <Route path="/customerinfo">
                    <CustomerInfo/>
                </Route>
                <Route path={"/notice"} component={Notice}/>
                <Route path={"/events"} component={Events}/>
                <Route path={"/community"} component={Community}/>
                <Route path={"/contacts"} component={Contacts}/>
                <Route path={"/video"} component={VideoUploadPage}/>
            </Switch>

            <Footer/>
        </>
    );
}

export default Home;

