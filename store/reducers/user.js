import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  success: false,
  user: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        user: action.data,
      };

    case ActionTypes.GET_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    case ActionTypes.CREATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        success: true,
        user: action.user,
      };

    case ActionTypes.CREATE_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    default:
      return state;
  }
};

export default userReducer;
