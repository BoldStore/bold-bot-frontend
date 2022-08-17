import instance from "../../axios";
import { CONTACT_US } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.CONTACT_US_REQUEST });
    try {
      const response = await instance.get(CONTACT_US);
      dispatch({
        type: ActionTypes.CONTACT_US_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.CONTACT_US_FAILED,
        errmess: e.response?.data?.error ?? e,
      });
    }
  };
};
