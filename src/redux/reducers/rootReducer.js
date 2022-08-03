import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { postReducer } from "./postReducer";
import { showPostCreationReducer } from "./showPostCreationReducer"
import { showPost } from "./showReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    post: postReducer,
    show : showPostCreationReducer,
    showModel : showPost
})