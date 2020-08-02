import React, { useState,useReducer} from 'react';
import {Modal,Button} from 'react-bootstrap'
import {MDBBtn, MDBIcon} from "mdbreact";
import { DatePicker, theme } from 'react-trip-date';
import {ThemeProvider} from 'styled-components';
import './MovingType.css'


const  handleResponsive  =  setNumberOfMonth  =>  {
    let  width  =  document.querySelector('.tp-calendar').clientWidth;
    if  (width  >  900)  {
        setNumberOfMonth(3);
    }  else  if  (width  <  900  &&  width  >  580)  {
        setNumberOfMonth(2);
    }  else  if  (width  <  580)  {
        setNumberOfMonth(1);
    }
};

const  Day = ({  day  }) => {
    return  (
        <>
            <p  className="date">{day.format('DD')}</p>
        </>
    );
};

const MovingDate = () => {
    const [pickDate,setPickDate]=useState('')
    const onChangeDate = date => {
        console.log(date)
    }
    const onClickPickDate=e=>{
        setPickDate(e.target.value)

    }
    const [Title,setTitle]=useState("")
    return (
        <>
            <Modal.Dialog size={"lg"}>
                <Modal.Header closeButton>
                    <Modal.Title>이사날짜</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
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
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button href={"/startPoint"} variant="secondary">다음</Button>
                </Modal.Footer>
            </Modal.Dialog>


        </>
    );
}


export default MovingDate;