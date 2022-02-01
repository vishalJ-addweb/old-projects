import searchReducers from "./searchReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    search:searchReducers
});
export default allReducers