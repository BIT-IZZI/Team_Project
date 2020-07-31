import React from 'react';
import '../assets/css/main.css'

const SideBar = () => {
    return (
        <>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-category">게시판</li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">첫번째</span>
                    </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                        <span className="menu-title">두번째</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">세번째</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">네번째</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">다섯째</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span className="menu-title">여섯째</span>
                    </a>
                </li>
            </ul>
        </nav>
        </>
    );
};

export default SideBar;