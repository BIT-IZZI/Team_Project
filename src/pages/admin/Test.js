import React from 'react';
import {SideBar, Pagination} from "../../commons";
import {Table} from "react-bootstrap";

import '../../assets/css/sb-admin-2.css'

const Test = () => {
    return (
        <>
            <SideBar/>
                    <div id="wrapper">
                    <div id="page-wrapper">
                    <div className="row">
                    <div className="col-lg-12"><br/>
                    <h2 className="page-header">테스트</h2><br/>
                </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <div className="panel panel-default">

            <div className="panel-body">
                <Table responsive hover style={{ textAlign: "center" }}>
                    <thead >
                    <tr>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <th>테스트</th>
                            <th>하는</th>
                            <th>중</th>
                            <th>입니다.</th>
                        </tr>
                        <tr>
                            <th>테스트</th>
                            <th>하는</th>
                            <th>중</th>
                            <th>입니다.</th>
                        </tr>
                    </tbody>
                </Table>
                     <Pagination/>
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

export default Test;