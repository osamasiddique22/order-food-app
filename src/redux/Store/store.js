import { createStore } from "redux";
import allReducers from "../Reducers/index";
const store = createStore(
    allReducers,
);
export default store;