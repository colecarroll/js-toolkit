import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const changeEmailSub = user => async dispatch => {
  console.log("test");
  const res = await axios.put("/api/email_sub");

  dispatch({ type: FETCH_USER, payload: res.data });
};
