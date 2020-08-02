import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import '../assets/css/main.css'

import {Main, Contacts, Write, Review, Market, Community, Notice, NoticeDetail, Admin, Charts} from './index'

import {Navigator, Footer} from "../commons/index";
import { VideoUploadPage} from "../components";
import MovingType from "../components/move/component/MovingType";
import {MovingEstimateForm} from "../components/move/component";

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


            </Switch>
            <Footer/>
        </>
    )
}

export default Home;
