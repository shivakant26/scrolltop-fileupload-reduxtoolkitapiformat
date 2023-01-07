import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputField from "../../Common/InputField";
import { Header } from "../../Components/header";
import { addData, addImage } from "../../Redux/Reducers/crudReducer";
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

const InfoForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible , setVisible] = useState(false);
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    file: undefined,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
        ...data,
        [name]:value
    });
  };
  const handleChangeImage = (e) =>{
    const {name , files} = e.target;
    const image = URL.createObjectURL(files[0])
    setData({
      ...data,
      [name]:image
    })
  }

  const saveData = () => {
    dispatch(addData(data));
    setData({fullname:"",email:"",password:"",files:""})
    navigate("/record");   
  };

  return (
    <div>
      <Header />
      <Container>
        <div className="about-page-wr">
          <h2>User Information</h2>
          <div className="form-container">
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <InputField
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    value={data.fullname}
                    onChange={(e)=>handleChange(e)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e)=>handleChange(e)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                <div className="email-field">
                  <InputField
                    type={
                      visible ? "text":"password"
                    }
                    name="password"
                    placeholder="password"
                    value={data.password}
                    onChange={(e)=>handleChange(e)}
                  />
                  <div className="eyes-icon">
                  {
                    visible ? 
                    <AiFillEye onClick={()=>setVisible(!visible)}/>
                    : 
                    <AiFillEyeInvisible onClick={()=>setVisible(!visible)}/>    
                  }
                  
                  </div>
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3 file-field">
                  <InputField
                    type="file"
                    name="file"
                    onChange={(e)=>handleChangeImage(e)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={saveData}>submit</Button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InfoForm;
