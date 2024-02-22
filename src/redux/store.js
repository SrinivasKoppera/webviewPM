import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/user-reducer";

const rootReducer = combineReducers({ userReducer: userReducer });

const store = createStore(rootReducer);

export default store;
