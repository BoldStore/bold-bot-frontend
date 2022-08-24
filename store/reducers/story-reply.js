import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  get_success: false,
  add_success: false,
  message: null,
};

const replyReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_STORY_REPLY_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.ADD_STORY_REPLY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        message: action.data,
        add_success: true,
      };

    case ActionTypes.ADD_STORY_REPLY_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    case ActionTypes.GET_STORY_REPLY_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.GET_STORY_REPLY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        message: action.data,
        get_success: true,
      };

    case ActionTypes.GET_STORY_REPLY_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    default:
      return state;
  }
};

export default replyReducer;
