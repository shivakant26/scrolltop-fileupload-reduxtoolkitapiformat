import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../../Components/header";


const Gallery = () =>{
    const resp = useSelector((state)=>state?.authReducer?.addImage)
    console.log(123456,resp)
    return(
        <>
        <Header/>
        <p>hellow</p>
        <div className="my-image">
            <img src={resp} alt="blog image"/>
        </div>
        </>
    )
}

export default Gallery;