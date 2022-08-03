import instance from "../../axios";
import { CREATE_USER } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const createUser = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.CREATE_USER_REQUEST });
    try {
      const response = await instance.post(CREATE_USER);
      dispatch({
        type: ActionTypes.CREATE_USER_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.CREATE_USER_FAILED,
        errmess: e.response?.data?.err?.message ?? e,
      });
    }
  };
};
