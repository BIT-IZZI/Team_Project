import React,{useState} from 'react';
import {Form,InputGroup,Button,Col} from 'react-bootstrap'

function MovingEstimateForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <h1>이사 견적 신청서</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>신청인 성함</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="name"
                    />
                    <Form.Control.Feedback type="invalid">
                       입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>신청인 연락처</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Phone Number"
                    />
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            입력란이 비었습니다!
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>출발지 정보</Form.Label>
                    <Form.Control type="text" placeholder="출발지 정보" required />
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>상세주소</Form.Label>
                    <Form.Control type="text" placeholder="상세주소" required />
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>도착지 정보</Form.Label>
                    <Form.Control type="text" placeholder="도착지 정보" required />
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>상세주소</Form.Label>
                    <Form.Control type="text" placeholder="상세주소" required />
                    <Form.Control.Feedback type="invalid">
                        입력란이 비었습니다!
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <div className="mb-3">
                <Form.File id="formcheck-api-regular">
                    <Form.File.Label>파일을 올려주세요</Form.File.Label>
                    <Form.File.Input />
                </Form.File>
            </div>
            <Form.Group>
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
            </>
    );
}

export default MovingEstimateForm;