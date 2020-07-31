import React from 'react';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import '../assets/css/main.css'
import logo from '../assets/img/logo2.png'

export const Navigator = () => (
    <div>
        <Navbar className="navbar-collapse" variant="dark">
            <Navbar.Brand href="#">
                <img
                    alt=""
                    src = {logo}
                    width="75"
                    height="75"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Link to="/"><Navbar.Brand>HOME</Navbar.Brand></Link>
                <Link to="/notice"><Navbar.Brand>공지사항</Navbar.Brand></Link>
                <Link to="/events"><Navbar.Brand>이벤트</Navbar.Brand></Link>
                <Link to ="/community"><Navbar.Brand>커뮤니티</Navbar.Brand></Link>
                <Link to="/contacts"><Navbar.Brand>고객지원</Navbar.Brand></Link>
            </Nav>
            <Form inline className="ml-auto">
                <Link to="/login"><Navbar.Brand>로그인</Navbar.Brand></Link>
                <Link to="/signup"><Navbar.Brand>회원가입</Navbar.Brand></Link>
                <Link to="/googlemapclass"><Navbar.Brand>Map</Navbar.Brand></Link>
                <Link to="/payment"><Navbar.Brand>주소연습용</Navbar.Brand></Link>
                
            </Form>
        </Navbar>
    </div>
)
export default Navigator