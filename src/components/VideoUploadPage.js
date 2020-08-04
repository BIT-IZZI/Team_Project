import React, {useState} from 'react';

import {MDBBtn, MDBIcon, MDBTypography} from 'mdbreact'
import { Upload, message, Button } from 'antd';
import QRcode from '../assets/img/QRcode.png'
import {Modal} from "react-bootstrap";
const PrivateOptions=[
    {value:0,label:"Private"},
    {value:1,label:"Public"},
]
const CategoryOptions=[
    {value:0,label:"안방"},
    {value:1,label:"작은 방"},
    {value:2,label:"기타 방"},
    {value:3,label:"거실"},
    {value:4,label:"부엌"},
    {value:5,label:"화장실"},
]
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const VideoUploadPage = () => {
    const [videoTitle,setVideoTitle]=useState("")
    const [description,setDescription]=useState("")
    const [privates,setPrivates]=useState(0)
    const [category,setCategory]=useState("영상")
    const [show,setShow]=useState(false)
    const onClickShow=e=>{
        e.preventDefault()
        setShow(!show)
    }
    const onChangeTitle=e=>{
        setVideoTitle(e.currentTarget.value)
    }
    const onChangeDescription=e=>{
        setDescription(e.currentTarget.value)
    }
    const onChangePrivates=e=>{
        setPrivates(e.currentTarget.value)
    }
    const onChangeCategory=e=>{
        setCategory(e.currentTarget.value)
    }
    return (
        <div style={{maxWidth:'700px',margin:'2rem auto'}}>
            <div style={{textAlign:'center',marginButton:'2rem'}}>
                <h1>비디오 올리기</h1>
            </div>
            <div>
                <Upload {...props}>
                    <Button type={"file"}>
                        Click to Upload
                    </Button>
                </Upload>
            </div>
            <div onSubmit>
                <br/>
                <br/>
                <label>타이틀</label>
                <input onChange={onChangeTitle} value={videoTitle}/>
                <br/>
                <br/>
                <label>방 설명</label>
                <textarea onChange={onChangeDescription} value={description}/>
                <br/>
                <br/>
                <label>공개여부</label>
                <select onChange={onChangePrivates}>
                    {PrivateOptions.map((item,index)=>(
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>

                <a>방 구분</a>
                <select onChange={onChangeCategory}>
                    {CategoryOptions.map((item,index)=>(
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
                <br/>
                <br/>
                <Button  onClick={onClickShow}>
                    어플
                    <Modal show={show} size={"lg"}
                    onClick={onClickShow}
                    onHide={()=>false}>
                        <img src={QRcode}/>
                    </Modal>
                </Button>
                <MDBBtn type={"primary"} onClick href={"/videotest"}>
                    submit
                </MDBBtn>
            </div>
        </div>
    );
};

export default VideoUploadPage;