import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  get_success: false,
  add_success: false,
  menu: null,
  web_data: null,
};

const persistentMenuReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_MENU_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.ADD_MENU_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        menu: action?.data?.filter((item) => item.question !== null),
        web_data: action?.data?.find((item) => item.question === null),
        add_success: true,
      };

    case ActionTypes.ADD_MENU_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    case ActionTypes.GET_MENU_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.GET_MENU_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        menu: action?.data?.filter((item) => item.question !== null),
        web_data: action?.data?.find((item) => item.question === null),
        get_success: true,
      };

    case ActionTypes.GET_MENU_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    default:
      return state;
  }
};

export default persistentMenuReducer;
