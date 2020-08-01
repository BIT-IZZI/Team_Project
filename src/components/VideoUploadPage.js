import React, {useState} from 'react';
import Dropzone from "react-dropzone";
import {MDBBtn, MDBIcon, MDBTypography} from 'mdbreact'
import Drag from "./videoUpload/Drag";
import Card from "./videoUpload/Card";
import Axios from "axios";

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

const VideoUploadPage = () => {
    const [videoTitle,setVideoTitle]=useState("")
    const [description,setDescription]=useState("")
    const [filePath,setFilePath]=useState("")
    const [duration,setDureation]=useState("")
    const [thumbnailPath,setThumbnailPath]=useState("")
    const [privates,setPrivates]=useState(0)
    const [category,setCategory]=useState("영상")
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
    const onDrop=(files)=>{
        let formDate=new FormData;
        const config={
            header:{'content-type':'multipart/form-date'}
        }
        formDate.append("file",files[0])
        Axios.post('/video',formDate,config)
            .then(response=>{
            if(response.data.success){
                console.log(response.data)
                let variable={
                    url:response.data.url,
                    filename:response.data.filename
                }
                setFilePath(response.data.url)

                Axios.post('/upload/video/thumbnail',variable)
                    .then(response=>{
                        if(response.data.success){

                            setDureation(response.data.fileDuration)

                        }else{
                            alert('썸네일 업로드 실패!')
                        }
                    })

            }else{
                alert('비디오 업로드 실패')
            }

        })
        console.log(files)
    }
    return (
        <div style={{maxWidth:'700px',margin:'2rem auto'}}>
            <div style={{textAlign:'center',marginButton:'2rem'}}>
                <Drag id={"drag-1"} className={"drag"} >
                    <Card id={"card-1"} className={"card"} draggable={"true"}>
                        <p>카드 한개</p>
                    </Card>
                </Drag>
                <Drag id={"drag-2"} className={"drag"} >
                    <Card id={"card-2"} className={"card"} draggable={"true"}>
                        <p>카드 둘</p>
                    </Card>
                </Drag>
                <MDBTypography>
                    업로드 비디오
                </MDBTypography>
            </div>
            <div onSubmit>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    {/*드랍존*/}
                    <Dropzone onDrop={onDrop} multiple={true} maxSize={10000000}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()}  size={"100px"} />
                                    <MDBIcon icon={"folder-plus"} size={"10x"}/>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    {/*썸네일존*/}
                    <div>
                        <img src alt/>
                    </div>
                </div>
                <br/>
                <br/>
                <label>타이틀</label>
                <input onChange={onChangeTitle} value={videoTitle}/>
                <br/>
                <br/>
                <textarea onChange={onChangeDescription} value={description}/>
                <br/>
                <br/>
                <p>공개여부</p>
                <select onChange={onChangePrivates}>
                    {PrivateOptions.map((item,index)=>(
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
                <br/>
                <br/>
                <a>방 구분</a>
                <select onChange={onChangeCategory}>
                    {CategoryOptions.map((item,index)=>(
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
                <br/>
                <br/>
                <MDBBtn type={"primary"} onClick>
                    submit
                </MDBBtn>
            </div>
        </div>
    );
};

export default VideoUploadPage;