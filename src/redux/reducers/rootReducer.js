import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { postReducer } from "./postReducer";
import { showPostCreationReducer } from "./showPostCreationReducer"

export const rootReducer = combineReducers({
    login: loginReducer,
    post: postReducer,
    show : showPostCreationReducer
})