import instance from "../../axios";
import { GREETING } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const addGreeting = (pageId, texts) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.ADD_GREETING_REQUEST });
    try {
      const response = await instance.post(GREETING, {
        pageId,
        texts,
      });
      dispatch({
        type: ActionTypes.ADD_GREETING_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.ADD_GREETING_FAILED,
        errmess: e.response?.data?.err?.message ?? e,
      });
    }
  };
};

export const getGreeting = (pageId) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_GREETING_REQUEST });
    try {
      const response = await instance.get(GREETING + "?page=" + pageId);
      dispatch({
        type: ActionTypes.GET_GREETING_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.GET_GREETING_FAILED,
        errmess: e.response?.data?.err?.message ?? e,
      });
    }
  };
};
