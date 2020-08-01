import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import '../assets/css/main.css'

import {Main, Contacts, Write} from './index'
import {Review, Market, Community} from './community/index'
import {Notice,NoticeDetail} from "./notice/index";
import {Navigator, Footer} from "../commons/index";
import Mypage from "./myPage/MyPage";
import {VideoUploadPage} from "../components";



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
                <Route path={"/write"} component={Write}/>
                <Route path={"/my"} component={Mypage}/>
                <Route path={"/video"} component={VideoUploadPage}/>

            </Switch>
            <Footer/>
        </>
    )
}

export default Home;
