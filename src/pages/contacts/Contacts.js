import React from 'react';

import {Navigator, SideBar, Footer} from "../../commons/index";
import logo from '../../assets/img/logo3.png'

import '../../assets/css/sb-admin-2.css'
import {Navbar} from "react-bootstrap";

const Market = () => {
    return (
        <>
            <Navigator/>
            <SideBar/>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12"><br/>
                            <h2 className="page-header">고객 지원</h2><br/>
                            <img
                                alt=""
                                src = {logo}
                                width="75"
                                height="75"
                                className="d-inline-block align-top"
                            />
                        </div>
                    </div>

                </div>
                {/* /#page-wrapper */}
            </div>
            <Footer/>
        </>
    );
};

export default Market;