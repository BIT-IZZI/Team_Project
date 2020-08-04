import React from 'react';
import '../assets/css/main.css'
import {MDBInput} from 'mdbreact'

const SideBar = () => {
    return (
        <>
        <nav className="sidebar sidebar-offcanvas">
            <ul className="nav">
                <li className="nav-item nav-category"><h1>게시판</h1></li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">전체 글 보기</span>
                    </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                        <span className="menu-title">서비스 소개</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">이사 정보</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">생활 정보</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">자유 게시판</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/application">
                        <span className="menu-title">App</span>
                    </a>
                </li>
                <li>
                    <MDBInput label="Search" size="sm" />
                </li>
            </ul>
        </nav>
        </>
    );
};

export default SideBar;