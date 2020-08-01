import React from 'react';

import {Navigator, SideBar, Footer} from "../../commons/index";

import '../../assets/css/sb-admin-2.css'

const Admin = () => {
    return (
        <>
            <nav className="sidebar sidebar-offcanvas">
                <ul className="nav">
                    <li className="nav-item nav-category"><h1>Dashboard</h1></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="menu-title">사용자 관리</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="menu-title">주문 관리</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/charts">
                            <span className="menu-title">통 계</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="menu-title">일정 관리</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="menu-title">환경 설정</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12"><br/>
                            <h2 className="page-header">관리자 페이지</h2><br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
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

export default Admin;