import { combineReducers } from "redux";
import authReducer from "./auth"
import currenUserReducer from "./currentUser"
import questionsReducer from "./questions"

export default combineReducers({
    authReducer,
    currenUserReducer,
    questionsReducer
})