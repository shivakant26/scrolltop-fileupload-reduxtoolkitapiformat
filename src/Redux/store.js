// import { applyMiddleware, legacy_createStore } from "redux";
// import rootReducer from "./Reducers";
// import thunk from "redux-thunk";
// const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./Reducers/crudReducer";

const store = configureStore({
    reducer:{
        crudReducer:crudReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
    }),
})

export default store;