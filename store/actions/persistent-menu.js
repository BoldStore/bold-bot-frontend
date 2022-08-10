import instance from "../../axios";
import { MENU } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const addMenu = (pageId, menu, web_data) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.ADD_MENU_REQUEST });
    try {
      const response = await instance.post(MENU, {
        pageId,
        menu,
        web_data,
      });
      dispatch({
        type: ActionTypes.ADD_MENU_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.ADD_MENU_FAILED,
        errmess: e.response?.data?.err?.message ?? e,
      });
    }
  };
};

export const getMenu = (pageId) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_MENU_REQUEST });
    try {
      const response = await instance.get(MENU + "?page=" + pageId);
      dispatch({
        type: ActionTypes.GET_MENU_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.GET_MENU_FAILED,
        errmess: e.response?.data?.err?.message ?? e,
      });
    }
  };
};
