import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  get_success: false,
  add_success: false,
  message: null,
};

const greetingReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_GREETING_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.ADD_GREETING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        page: action.page,
        add_success: true,
      };

    case ActionTypes.ADD_GREETING_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    case ActionTypes.GET_GREETING_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.GET_GREETING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        message: action.message,
        get_success: true,
      };

    case ActionTypes.GET_GREETING_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    default:
      return state;
  }
};

export default greetingReducer;
