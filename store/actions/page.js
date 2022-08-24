import { toast } from "react-toastify";
import instance from "../../axios";
import { ADD_PAGE } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const addPage = (
  access_token,
  data_access_expiration_time,
  expires_in,
  long_lived_token
) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.ADD_PAGE_REQUEST });
    try {
      const response = await instance.post(ADD_PAGE, {
        access_token,
        data_access_expiration_time,
        expires_in,
        long_lived_token,
      });
      dispatch({
        type: ActionTypes.ADD_PAGE_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      toast.error(e.response?.data?.message ?? "There was an error");
      dispatch({
        type: ActionTypes.ADD_PAGE_FAILED,
        errmess: e.response?.data?.message ?? e,
      });
    }
  };
};
