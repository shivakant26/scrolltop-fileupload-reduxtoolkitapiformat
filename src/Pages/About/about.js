import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../Components/header";
import { addImage } from "../../Redux/Action/authAction";

const About = () =>{
    const dispatch = useDispatch();
    const [state , setState] = useState()
    const resp = useSelector((state)=>state.authReducer.addImage)
    console.log(1234545,resp)

    const handleChange = (e) =>{
        setState(URL.createObjectURL(e.target.files[0]));
    }
    const upload = () =>{
        dispatch(addImage(state))
        console.log(123,state)
    }
    return(
        <div>
            <Header />
            <h1>this is about page</h1>
            <input type="file" 
            onChange={handleChange}
            multiple
            accept="image/*"
            />
            <Button onClick={upload}>upload image</Button>
            <div className="show-image">
                <img src={state} alt="myimage" />
            </div>
        </div>
    )
}

export default About;