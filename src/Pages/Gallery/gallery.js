import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../../Components/header";


const Gallery = () =>{
    const resp = useSelector((state)=>state?.authReducer?.addImage)
    console.log(123456,resp)
    return(
        <>
        <Header/>
        <div className="gl-heading">
            <h2>Photo Gallery</h2>
        </div>
        <div className="my-image">
            {
                resp ? 
                <>
                <img src={resp} alt="blog image"/>
                </> 
                : "Please add image"
            }
        </div>
        </>
    )
}

export default Gallery;