import instance from "../../axios";
import { GET_PLANS } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const getPlans = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_PLANS_REQUEST });
    try {
      const response = await instance.get(GET_PLANS);
      dispatch({
        type: ActionTypes.GET_PLANS_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.GET_PLANS_FAILED,
        errmess: e.response?.data?.error ?? e,
      });
    }
  };
};
