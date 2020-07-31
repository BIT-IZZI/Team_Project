import React from 'react';
import '../assets/css/main.css'
import ReactPlayer from "react-player";

const Main = () => {

    return (
        <div>
            <main className="masthead">
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">방 안에서 이사를</div>
                        <div className="intro-heading text-uppercase">Welcome To IZZI!</div>
                        <div className="intro-lead-in">방 안에서 이사를</div>
                        <div className="intro-heading text-uppercase">Welcome To IZZI!</div>
                        <div className="intro-lead-in">방 안에서 이사를</div>
                        <div className="intro-heading text-uppercase">Welcome To IZZI!</div>
                        <div className="intro-lead-in">방 안에서 이사를</div>
                        <div className="intro-heading text-uppercase">Welcome To IZZI!</div>
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="../components/Estimate.js">이사하러 가기
                        </a>
                    </div>
                </div>
            </main>
            <div className="video-bg">
            <ReactPlayer
                className="video"
                url = 'https://www.youtube.com/watch?v=fKBYdv4s20k'
                width = '900px'
                height = '650px'
                playing controls/>
            </div>
        </div>
    );
};

export default Main;