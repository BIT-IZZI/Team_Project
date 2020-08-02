import React from 'react';
import { Link } from 'react-router-dom'
import {SideBar} from "../../commons";

import '../../assets/css/sb-admin-2.css'
import {MDBBtn} from "mdbreact";

const Community = () => {
        return (
         <>
            <SideBar/>
                <div id="wrapper">
                    <div id="page-wrapper">
                            <div className="row">
                                    <div className="col-lg-12"><br/>
                                            <Link to="/review"><h2 className="page-header">후기</h2><br/></Link>
                                    </div>
                            </div>
                            <div className="row">
                                    <div className="col-lg-12">
                                            <div className="panel panel-default">
                                                    {/* /.panel-heading */}
                                                    <div className="panel-body">
                                                            <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                                                    <thead>
                                                                    <tr>
                                                                            <th>Title</th>
                                                                            <th>Editor</th>
                                                                            <th>Date</th>
                                                                            <th>View</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr className="odd gradeX">
                                                                            <td>Trident</td>
                                                                            <td>Internet Explorer 4.0</td>
                                                                            <td>Win 95+</td>
                                                                            <td className="center">4</td>
                                                                    </tr>
                                                                    <tr className="even gradeC">
                                                                            <td>Trident</td>
                                                                            <td>Internet Explorer 5.0</td>
                                                                            <td>Win 95+</td>
                                                                            <td className="center">5</td>
                                                                    </tr>
                                                                    <tr className="odd gradeA">
                                                                            <td>Trident</td>
                                                                            <td>Internet Explorer 5.5</td>
                                                                            <td>Win 95+</td>
                                                                            <td className="center">5.5</td>
                                                                    </tr>
                                                                    <tr className="even gradeA">
                                                                            <td>Trident</td>
                                                                            <td>Internet Explorer 6</td>
                                                                            <td>Win 98+</td>
                                                                            <td className="center">6</td>
                                                                    </tr>
                                                                    <tr className="odd gradeA">
                                                                            <td>Trident</td>
                                                                            <td>Internet Explorer 7</td>
                                                                            <td>Win XP SP2+</td>
                                                                            <td className="center">7</td>
                                                                    </tr>
                                                                    <tr className="even gradeA">
                                                                            <td>Trident</td>
                                                                            <td>AOL browser (AOL desktop)</td>
                                                                            <td>Win XP</td>
                                                                            <td className="center">6</td>
                                                                    </tr>
                                                                    </tbody>
                                                            </table>
                                                    </div>
                                                    {/* /.panel-body */}
                                            </div>
                                            {/* /.panel */}
                                    </div>
                                    {/* /.col-lg-12 */}
                            </div>
                            <div className="row">
                                    <div className="col-lg-12"><br/>
                                            <Link to="/market"><h2 className="page-header">중고 거래</h2><br/></Link>
                                    </div>
                            </div>
                            <div className="row">
                                    <div className="col-lg-12">
                                            <div className="panel panel-default">
                                                    {/*<div className="panel-heading">
                                <h3>후기</h3>
                            </div>*/}
                                                    {/* /.panel-heading */}
                                                    <div className="panel-body">
                                                            <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                                                    <thead>
                                                                    <tr>
                                                                            <th>Title</th>
                                                                            <th>Editor</th>
                                                                            <th>Date</th>
                                                                            <th>View</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr className="odd gradeX">
                                                                            <td>Trident</td>
                                                                            <td>Internet Explorer 4.0</td>
                                                                            <td>Win 95+</td>
                                                                            <td className="center">4</td>
                                                                    </tr>
                                                                    <tr className="even gradeC">
                                                                            <td>Trident</td>
                                                                            <td>Internet Explorer 5.0</td>
                                                                            <td>Win 95+</td>
                                                                            <td className="center">5</td>
                                                                    </tr>
                                                                    <tr className="odd gradeA">
                                                                            <td>Trident</td>
                                                                            <td>Internet Explorer 5.5</td>
                                                                            <td>Win 95+</td>
                                                                            <td className="center">5.5</td>
                                                                    </tr>
                                                                    <tr className="even gradeA">
                                                                            <td>Trident</td>
                                                                            <td>Internet Explorer 6</td>
                                                                            <td>Win 98+</td>
                                                                            <td className="center">6</td>
                                                                    </tr>
                                                                    <tr className="odd gradeA">
                                                                            <td>Trident</td>
                                                                            <td>Internet Explorer 7</td>
                                                                            <td>Win XP SP2+</td>
                                                                            <td className="center">7</td>
                                                                    </tr>
                                                                    <tr className="even gradeA">
                                                                            <td>Trident</td>
                                                                            <td>AOL browser (AOL desktop)</td>
                                                                            <td>Win XP</td>
                                                                            <td className="center">6</td>
                                                                    </tr>
                                                                    </tbody>
                                                            </table>
                                                    </div>
                                                    {/* /.panel-body */}
                                            </div>
                                            {/* /.panel */}
                                    </div>
                                    {/* /.col-lg-12 */}
                            </div>
                    </div>
                    {/* /#page-wrapper */}
                </div>
         </>
        );
};

export default Community;