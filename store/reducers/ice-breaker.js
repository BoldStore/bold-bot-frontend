import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  get_success: false,
  add_success: false,
  iceBreakers: null,
};

const iceBreakerReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ICE_BREAKER_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.ADD_ICE_BREAKER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        iceBreakers: action.data,
        add_success: true,
      };

    case ActionTypes.ADD_ICE_BREAKER_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    case ActionTypes.GET_ICE_BREAKER_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.GET_ICE_BREAKER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        iceBreakers: action.data,
        get_success: true,
      };

    case ActionTypes.GET_ICE_BREAKER_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    default:
      return state;
  }
};

export default iceBreakerReducer;
