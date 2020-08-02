import React, { useState} from 'react';
import {Modal,Button} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";
import { BrowserRouter, Switch,Link } from 'react-router-dom'
import {MovingBusan,MovingSeoul,MovingUlsan,MovingGyeonggi,MovingChungbuk,MovingChungnam,
MovingDaegu,MovingDaejeon,MovingGangwon,MovingGwangju,MovingGyeongbuk,
MovingGyeongnam,MovingIncheon,MovingJeju,MovingJeonbuk,MovingJeonnam,MovingSejong} from './movingLocal'


const MovingStartPoint= () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Modal.Dialog size={"lg"}>
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">출발지역</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                            <a className="list">
                                <Link to='/moving/seoul' component={MovingSeoul} onClick={show}>서울</Link>
                                <Link to={"/moving/gyeonggi"} component={MovingGyeonggi}>경기</Link>
                                <Link to={"/moving/incheon"} component={MovingIncheon}>인천</Link>
                                <Link to={"/moving/daejeon"} component={MovingDaejeon}>대전</Link>
                                <Link to={"/moving/gwangju"} component={MovingGwangju}>광주</Link>
                                <Link to={"/moving/daegu"} component={MovingDaegu}>대구</Link>
                                <Link to={"/moving/busan"} component={MovingBusan}>부산</Link>
                                <Link to={"/moving/ulsan"} component={MovingUlsan}>울산</Link>
                                <Link to={"/moving/chungbuk"} component={MovingChungbuk}>충북</Link>
                                <Link to={"/moving/chungnam"} component={MovingChungnam}>충남</Link>
                                <Link to={"/moving/jeonbuk"} component={MovingJeonbuk}>전북</Link>
                                <Link to={"/moving/jeonnam"} component={MovingJeonnam}>전남</Link>
                                <Link to={"/moving/gyeongbuk"} component={MovingGyeongbuk}>경북</Link>
                                <Link to={"/moving/gyeongnam"} component={MovingGyeongnam}>경남</Link>
                                <Link to={"/moving/gangwon"} component={MovingGangwon}>강원</Link>
                                <Link to={"/moving/jeju"} component={MovingJeju}>제주</Link>
                                <Link to={"/moving/sejong"} component={MovingSejong}>세종</Link>
                            </a>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>

        </>
    );
}


export default MovingStartPoint;