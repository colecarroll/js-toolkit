import axios from "axios";
import { FETCH_USER, FETCH_LESSONS, USER_COMPLETED_LESSON } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const changeEmailSub = user => async dispatch => {
  const res = await axios.put("/api/email_sub");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchLessons = () => async dispatch => {
  const res = await axios.get("/api/lessons");

  dispatch({ type: FETCH_LESSONS, payload: res.data });
};

export const lessonComplete = lessonData => async dispatch => {
  const res = await axios.put("/api/lessonComplete", lessonData);

  dispatch({ type: USER_COMPLETED_LESSON, payload: res.data });
};
