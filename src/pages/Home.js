import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import '../assets/css/main.css'

import {Main, Contacts, Write, Review, Market, Community, Notice, NoticeDetail, Admin, Charts} from './index'
import MovingDate from "../components/move/component/MovingDate";
import {Navigator, Footer} from "../commons/index";
import { VideoUploadPage} from "../components";
import MovingType from "../components/move/component/MovingType";
import {MovingEstimateForm} from "../components/move/component";
import {MovingStartPoint} from '../components/move/component/movingPoint/index'


import {CustomerInfo, Mypage, Order, Payment, Statistics,GoogleMapClass} from "./CompanyPage";
import {Signup,Login} from "./Account";
const Home = () => {
    return(
        <>
            <Navigator/>
            <Switch>
                <Route exact path={"/"}>
                    <Main/>
                </Route>
                <Route path={"/notice"} component={Notice}/>
                <Route path={"/noticedetail"} component={NoticeDetail}/>
                <Route path={"/community"} component={Community}/>
                <Route path={"/review"} component={Review}/>
                <Route path={"/market"} component={Market}/>
                <Route path={"/contacts"} component={Contacts}/>
                <Route path={"/admin"} component={Admin}/>
                <Route path={"/charts"} component={Charts}/>
                <Route path={"/write"} component={Write}/>
                <Route path={"/video"} component={VideoUploadPage}/>
                <Route path={"/type"} component={MovingType}/>
                <Route path={"/estimate"} component={MovingEstimateForm}/>
                <Route path={"/movingDate"} component={MovingDate}/>
                <Route path={"/startPoint"} component={MovingStartPoint}/>

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
                <Route path={"/community"} component={Community}/>
                <Route path={"/contacts"} component={Contacts}/>


            </Switch>
            <Footer/>
        </>
    )
}

export default Home;
