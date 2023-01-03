import { GET_ALL_DATA } from "../actionType";
const initialState = {
  data: [],
};
const authReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case GET_ALL_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
