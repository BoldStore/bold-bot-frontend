import * as ActionTypes from "../ActionTypes";

const initState = {
  isLoading: false,
  errmess: null,
  success: false,
  page: null,
};

const pageReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    case ActionTypes.ADD_PAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        page: action.page,
      };

    case ActionTypes.ADD_PAGE_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.errmess,
      };

    default:
      return state;
  }
};

export default pageReducer;
