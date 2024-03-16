import upDown  from "./upDown";
import {combineReducers} from "redux"
import user from "./user";
import dropdownfruitreducer  from "./Dropdown"

const rootReducer = combineReducers ({
    upDown,user,dropdownfruitreducer 
})

export default rootReducer