import instance from "../../axios";
import { ICE_BREAKER } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const addIceBreaker = (pageId, ice_breakers) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.ADD_ICE_BREAKER_REQUEST });
    try {
      const response = await instance.post(ICE_BREAKER, {
        pageId,
        ice_breakers,
      });
      dispatch({
        type: ActionTypes.ADD_ICE_BREAKER_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.ADD_ICE_BREAKER_FAILED,
        errmess: e.response?.data?.err?.message ?? e,
      });
    }
  };
};

export const getIceBreaker = (pageId) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_ICE_BREAKER_REQUEST });
    try {
      const response = await instance.get(ICE_BREAKER + "?page=" + pageId);
      dispatch({
        type: ActionTypes.GET_ICE_BREAKER_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.GET_ICE_BREAKER_FAILED,
        errmess: e.response?.data?.err?.message ?? e,
      });
    }
  };
};
