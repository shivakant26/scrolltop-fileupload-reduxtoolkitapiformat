import { ADD_IMAGE, GET_ALL_DATA } from "../actionType";
import instance from "../../Services/Config";

export const getAllData = () => {
  return (dispatch) => {
    return instance.get("/posts").then((data) => {
      dispatch({
        type: GET_ALL_DATA,
        payload: data,
      });
    });
  };
}  

export const addImage = (data) =>{
  return{
    type:ADD_IMAGE,
    payload:data
  }
}
