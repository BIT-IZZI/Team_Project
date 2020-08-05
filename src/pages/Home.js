import React from 'react';
import { Route, Switch } from 'react-router-dom'
import '../assets/css/main.css'

import {Main, Contacts, Reports, Write, Review, Market, Community, Notice, NoticeDetail, Admin, Charts, Users, Test, Application} from './index'

import {Navigator, Footer} from "../commons/index";

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
                <Route path={"/reports"} component={Reports}/>
                <Route path={"/admin"} component={Admin}/>
                <Route path={"/charts"} component={Charts}/>
                <Route path={"/users"} component={Users}/>
                <Route path={"/Test"} component={Test}/>
                <Route path={"/write"} component={Write}/>
                <Route path={"/application"} component={Application}/>
            </Switch>
            <Footer/>
        </>
    )
}

export default Home;
