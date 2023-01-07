import React from "react";

const InputField = ({ value, name, label, placeholder, type, onChange }) =>{

    return(
        <input 
            type={type}
            name={name}
            placeholder = {placeholder}
            value={value}
            onChange={(e)=>onChange(e)}
         />
    )
}

export default InputField;