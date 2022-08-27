import instance from "../../axios";
import { STORY_MENTION } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const addStoryMention = (pageId, texts) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.ADD_STORY_MENTION_REQUEST });
    try {
      const response = await instance.post(STORY_MENTION, {
        pageId,
        texts,
      });
      dispatch({
        type: ActionTypes.ADD_STORY_MENTION_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.ADD_STORY_MENTION_FAILED,
        errmess:
          e?.response?.data?.error?.message ??
          e?.response?.data?.message ??
          e?.response?.message ??
          e,
      });
    }
  };
};

export const getStoryMentions = (pageId) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.GET_STORY_MENTION_REQUEST });
    try {
      const response = await instance.get(STORY_MENTION + "?page=" + pageId);
      dispatch({
        type: ActionTypes.GET_STORY_MENTION_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.GET_STORY_MENTION_FAILED,
        errmess:
          e?.response?.data?.error?.message ??
          e?.response?.data?.message ??
          e?.response?.message ??
          e,
      });
    }
  };
};
