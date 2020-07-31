import React from "react";
import {BrowserRouter as Router,Route,Switch,BrowserRouter} from "react-router-dom";
import Navigators from "../../commons/Navigator";
import MovingType from "../move/component/MovingType";
import VideoUploadPage from "../videoUpload/VideoUploadPage";
import MovingDate from "../move/component/MovingDate";
import MovingStartPoint from "../move/component/movingPoint/MovingStartPoint";
import Main from "../../pages/Main";
import Esti from "../move/component/Esti";
/*import Login from "../member/Login";
import Main from "../pages/Main";
import Mypage from "../CompanyPage/Mypage";
import Payment from "../CompanyPage/Payment";
import Map from "../CompanyPage/Map";*/


const Routes = () => (
    <Router >
        <Navigators/>
        <BrowserRouter>
        {/*<Route exact path="/login" component={Login}/>
        <Route exact path="/mypage" component={Mypage}/>
        <Route exact path="/payment" component={Payment}/>
        <Route exact path="/order" component={Payment}/>
        <Route exact path="/map" component={Map}/>
        <Route exact path="/" component={Main}/>*/}
            <Switch>

                <Route exact path={"/"} component={Main}/>
                <Route path="/estimate">
                    <Esti/>
                </Route>
                <Route path={"/videoUpload"} component={VideoUploadPage}/>
                <Route path={"/movingType"} component={MovingType}/>
                <Route path={"/movingDate"} component={MovingDate}/>
                <Route path={"/startPoint"} component={MovingStartPoint}/>
            </Switch>
        </BrowserRouter>
    </Router>
)
export default Routes