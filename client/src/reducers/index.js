import { combineReducers } from "redux";
import authReducer from "./authReducer";
import lessonsReducer from "./lessonsReducer";

export default combineReducers({
  auth: authReducer,
  lessons: lessonsReducer
});
