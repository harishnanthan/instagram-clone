import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { postReducer } from "./postReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    post: postReducer
})