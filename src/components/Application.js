import React from 'react';
import {Link} from 'react-router-dom'
import {SideBar} from "../commons";
import app from '../assets/img/app.jpg'

import '../assets/css/sb-admin-2.css'

const Application = () => {
    return (
        <>
            <SideBar/>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12"><br/>
                            <h2 className="page-header">Appication</h2><br/>
                        </div>
                    </div>
                    <h3>어플리케이션으로 만나보세요!</h3>
                    <img src={app}
                         width="350"
                         height="350"
                         />
                </div>
                {/* /#page-wrapper */}
            </div>
        </>
    );
};

export default Application;