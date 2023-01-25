import { combineReducers } from "redux";
import mealsReducer from "./MealsReducer";
const allReducers = combineReducers({
    mealsReducer
});
export default allReducers;