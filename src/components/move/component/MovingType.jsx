import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap'
import {MDBBtn, MDBCol, MDBView, MDBMask, MDBContainer, MDBRow} from "mdbreact";
import './MovingType.css'
import {ThemeProvider} from "styled-components";
import {DatePicker, theme} from "react-trip-date";
import {Link} from "react-router-dom";
import {
    MovingBusan, MovingChungbuk, MovingChungnam,
    MovingDaegu,
    MovingDaejeon, MovingGangwon,
    MovingGwangju, MovingGyeongbuk,
    MovingGyeonggi, MovingGyeongnam,
    MovingIncheon, MovingJeju, MovingJeonbuk, MovingJeonnam, MovingSejong,
    MovingSeoul, MovingUlsan
} from "./movingPoint/movingLocal";
/*달력*/
const handleResponsive = setNumberOfMonth => {
    let width = document.querySelector('.tp-calendar').clientWidth;
    if (width > 900) {
        setNumberOfMonth(3);
    } else if (width < 900 && width > 580) {
        setNumberOfMonth(2);
    } else if (width < 580) {
        setNumberOfMonth(1);
    }
};
const Day = ({day}) => {
    return (
        <>
            <p className="date">{day.format('DD')}</p>
        </>
    );
};
const MovingType = (props) => {
    const [showDate, setShowDate] = useState(false)
    const [showType, setShowType] = useState(false)
    const [showStart, setShowStart] = useState(false)
    const [showLocal, setShowLocal] = useState(false)
    const [showEnd, setShowEnd] = useState(false)
    const [showKind, setShowKind] = useState(false)

    const onClickType= e => {
        e.preventDefault()

        setShowType(!showType)

    }
    const onClickDate = e => {
        e.preventDefault()
        setShowDate(false)
        setShowType(false)
        setShowStart(!showStart)
        setShowLocal(false)
        setShowKind(!showKind)
        setShowEnd(false)
    }
    const onClickStart = e => {
        e.preventDefault()
        setShowDate(false)
        setShowType(false)
        setShowStart(false)
        setShowLocal(!showLocal)
        setShowKind(!showKind)
        setShowEnd(false)
    }
    const onClickLocal = e => {
        e.preventDefault()
        setShowDate(!setShowEnd)
        setShowType(false)
        setShowStart(false)
        setShowLocal(false)
        setShowKind(!showKind)
        setShowEnd(false)
    }
    const onClickEnd = e => {
        e.preventDefault()
        setShowDate(false)
        setShowType(false)
        setShowStart(false)
        setShowLocal(!showLocal)
        setShowKind(!showKind)
        setShowEnd(false)
    }
    const [show, setShow] = useState(false);
    const onClickShow = e => {
        setShow(!show)
    }
    /*달력*/
    const [pickDate, setPickDate] = useState('')
    const onChangeDate = date => {
        console.log(date)
    }
    const onClickPickDate = e => {
        setPickDate(e.target.value)

    }
    const [Title, setTitle] = useState("")

    return (
        <>
            <MDBContainer onClick={onClickType}>
                <MDBRow>
                    <MDBCol md="3">
                        <MDBView hover zoom onClick={onClickShow}>
                            <img
                                src="https://image.flaticon.com/icons/svg/2024/2024825.svg"
                                className="img-fluid"
                                alt=""
                            /><h2>이사종류</h2>
                            <MDBMask className="flex-center">
                                <h1 className="white-text">이사종류</h1>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="3">
                        <MDBView hover zoom>
                            <img
                                src="https://image.flaticon.com/icons/svg/2738/2738372.svg"
                                className="img-fluid"
                                alt=""
                            /> <h2>이사날짜</h2>
                            <MDBMask className="flex-center">
                                <h1 className="white-text">이사날짜</h1>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="3">
                        <MDBView hover zoom>
                            <img
                                src="https://image.flaticon.com/icons/svg/754/754852.svg"
                                className="img-fluid"
                                alt=""
                            /><h2>출발지</h2>
                            <MDBMask className="flex-center">
                                <h1 className="white-text">출발지</h1>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                    <MDBCol md="3">
                        <MDBView hover zoom>
                            <img
                                src="https://image.flaticon.com/icons/svg/1513/1513983.svg"
                                className="img-fluid"
                                alt=""
                            /><h2>도착지</h2>
                            <MDBMask className="flex-center">
                                <h1 className="blue-grey-text">도착지</h1>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBBtn color="amber" onClick={onClickShow}>
                무료 견적 신청하기
            </MDBBtn><br/>

            {/*이사종류를 눌렀을때*/}
            <Modal
                size={"lg"}
                show={show}
                onHide={() => setShow(false)}
                onClick={onClickType}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                {showType &&
                <div >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            이사종류
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <MDBRow>
                            <MDBCol md="5">
                                <MDBView hover>
                                    <img
                                        src="https://image.flaticon.com/icons/svg/888/888448.svg"
                                        className="img-fluid"
                                        alt=""

                                    /><h3>보관이사</h3><p>국내 최대 규모의 보관창고운영<br/>안전하고 깔끔한 보관서비스</p>
                                    <MDBMask className="flex-center" overlay="red-strong">
                                        <p className="white-text">보관이사</p>
                                    </MDBMask>
                                </MDBView>
                            </MDBCol>
                            <MDBCol md="5">
                                <MDBView hover>
                                    <img
                                        src="https://image.flaticon.com/icons/svg/1625/1625514.svg"
                                        className="img-fluid"
                                        alt=""
                                    /><h3>사무실이사</h3><p>회사,공장,병원,관공서,학교,학원 등의 이사</p>
                                    <MDBMask className="flex-center" overlay="red-strong">
                                        <p className="white-text">사무실이사</p>
                                    </MDBMask>
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="5">
                                <MDBView hover>
                                    <img
                                        src="https://image.flaticon.com/icons/svg/3023/3023392.svg"
                                        className="img-fluid"
                                        alt=""
                                    /><h3>집이사</h3><p>이삿짐이 1톤 이상의 짐</p>
                                    <MDBMask className="flex-center" overlay="red-strong">
                                        <p className="white-text">집이사</p>
                                    </MDBMask>
                                </MDBView>
                            </MDBCol>
                            <MDBCol md="5">
                                <MDBView hover>
                                    <img
                                        src="https://image.flaticon.com/icons/svg/948/948615.svg"
                                        className="img-fluid"
                                        alt=""
                                    /><h3>소형이사</h3><p>이삿짐이 1톤 이하의 짐</p>
                                    <MDBMask className="flex-center" overlay="red-strong">
                                        <p className="white-text">소형이사</p>
                                    </MDBMask>
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                    </Modal.Body>
                </div>
                }
                {!showType &&

                    <div>
                    <Modal.Header closeButton>
                    <Modal.Title>이사날짜</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <ThemeProvider theme={theme}>
                    <DatePicker
                    pickDate={pickDate}
                    onClick={onClickPickDate}
                    handleChange={onChangeDate}
                    selectedDays={""} //initial selected days
                    numberOfMonths={2}
                    numberOfSelectableDays={2} // number of days you need
                    disabledDays={""} //disabeld days
                    responsive={handleResponsive} // custom responsive, when using it, `numberOfMonths` props not working
                    disabledBeforToday={true}
                    disabled={false} // disable calendar
                    dayComponent={Day} //custom day component
                    titleComponent={Title} // custom title of days
                    />
                    </ThemeProvider>

                    </Modal.Body>
                    </div>

                }


                <Modal.Footer>
                    <Button href={"/startPoint"} variant="secondary">다음</Button>
                </Modal.Footer>
            </Modal>


        </>
    );
}


export default MovingType;