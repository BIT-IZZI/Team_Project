import React from 'react';
import {Route, Switch} from 'react-router-dom'
import '../assets/css/main.css'

import {Main, Contacts, Write, Review, Market, Community, Notice, NoticeDetail, Admin, Charts} from './index'
import MovingDate from "../components/move/component/MovingDate";
import {Navigator, Footer} from "../commons/index";
import {VideoUploadPage} from "../components";
import MovingType from "../components/move/component/MovingType";
import {MovingEstimateForm} from "../components/move/component";
import {MovingStartPoint} from '../components/move/component/movingPoint/index'
import {CustomerInfo, Mypage, Order, Payment, Statistics} from "./CompanyPage";
import {Signup, Login} from "./Account";
import ModalTest from "../components/modalTest/ModalTest";
import VideoTest from "../components/videoUpload/VideoTest";

const Home = () => {
    return (
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
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/mypage" component={Mypage}/>
                <Route path="/order" component={Order}/>
                <Route path="/payment" component={Payment}/>
                <Route path="/statistics" component={Statistics}/>
                <Route path="/customerinfo" component={CustomerInfo}/>
                <Route path={"/notice"} component={Notice}/>
                <Route path={"/community"} component={Community}/>
                <Route path={"/contacts"} component={Contacts}/>
                <Route path={"/test"} component={ModalTest}/>
                <Route path={"/videotest"} component={VideoTest}/>
            </Switch>
            <Footer/>
        </>
    )
}

export default Home;
