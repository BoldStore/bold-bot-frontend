import instance from "../../axios";
import { STORY_REPLY } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const addStoryReplies = (pageId, replies) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.ADD_STORY_REPLY_REQUEST });
    try {
      const response = await instance.post(STORY_REPLY, {
        pageId,
        replies,
      });
      dispatch({
        type: ActionTypes.ADD_STORY_REPLY_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.ADD_STORY_REPLY_FAILED,
        errmess:
          e?.response?.data?.error?.message ??
          e?.response?.data?.message ??
          e?.response?.message ??
          e,
      });
    }
  };
};

export const getStoryReplies = (pageId) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_STORY_REPLY_REQUEST });
    try {
      const response = await instance.get(STORY_REPLY + "?page=" + pageId);
      dispatch({
        type: ActionTypes.GET_STORY_REPLY_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.GET_STORY_REPLY_FAILED,
        errmess:
          e?.response?.data?.error?.message ??
          e?.response?.data?.message ??
          e?.response?.message ??
          e,
      });
    }
  };
};
