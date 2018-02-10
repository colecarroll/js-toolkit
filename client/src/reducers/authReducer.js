import { FETCH_USER, USER_COMPLETED_LESSON } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case USER_COMPLETED_LESSON:
      return action.payload || false;
    default:
      return state;
  }
}
